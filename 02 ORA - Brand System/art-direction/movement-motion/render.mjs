// Deterministic frame renderer for the ORA movement film.
// Drives headless Chrome over CDP with no npm dependencies.
// usage: node render.mjs <htmlPath> <outDir> <W> <H> [fps] [extraQuery e.g. &loop]

import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { setTimeout as sleep } from 'node:timers/promises';

const [htmlPath, outDir, wArg, hArg, fpsArg, extra] = process.argv.slice(2);
const W = parseInt(wArg, 10), H = parseInt(hArg, 10), FPS = parseInt(fpsArg || '30', 10);

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 9333 + (parseInt(process.env.PORT_OFFSET || '0', 10));
const PROFILE = `${process.env.TEMP}\\ora-render-profile-${PORT}`;

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const url = `${pathToFileURL(htmlPath).href}?t=0&w=${W}&h=${H}${extra || ''}`;

const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${PROFILE}`,
  '--allow-file-access-from-files',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--force-color-profile=srgb',
  '--disable-lcd-text',
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-extensions',
  '--disable-background-timer-throttling',
  `--window-size=${W},${H}`,
  url,
], { stdio: 'ignore' });

process.on('exit', () => { try { chrome.kill(); } catch {} });

// wait for the debugger, then find the page target
let wsUrl = null;
for (let i = 0; i < 120 && !wsUrl; i++) {
  try {
    const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
    const page = list.find(t => t.type === 'page' && t.webSocketDebuggerUrl);
    if (page) wsUrl = page.webSocketDebuggerUrl;
  } catch {}
  if (!wsUrl) await sleep(250);
}
if (!wsUrl) { console.error('chrome never came up'); process.exit(1); }

const ws = new WebSocket(wsUrl);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

let msgId = 0;
const pending = new Map();
ws.onmessage = e => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) {
    const { res, rej } = pending.get(m.id);
    pending.delete(m.id);
    m.error ? rej(new Error(JSON.stringify(m.error))) : res(m.result);
  }
};
const send = (method, params = {}) => new Promise((res, rej) => {
  const id = ++msgId;
  pending.set(id, { res, rej });
  ws.send(JSON.stringify({ id, method, params }));
});

const evaluate = (expression, awaitPromise = false) =>
  send('Runtime.evaluate', { expression, awaitPromise, returnByValue: true });

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', {
  width: W, height: H, deviceScaleFactor: 1, mobile: false,
});

// wait for fonts and posters
let ready = false;
for (let i = 0; i < 240 && !ready; i++) {
  try {
    const r = await evaluate('!!window.__ready');
    ready = r.result.value === true;
  } catch {}
  if (!ready) await sleep(250);
}
if (!ready) { console.error('page never signalled ready'); process.exit(1); }

const meta = (await evaluate('JSON.stringify(window.__meta)')).result.value;
const { dur } = JSON.parse(meta);
const frames = Math.round(dur * FPS);
console.log(`stage ${W}x${H}  ${dur}s  ${frames} frames @ ${FPS}fps`);

// a stepper that resolves only after the browser has painted
await evaluate(`window.__step = t => new Promise(r => {
  window.__seek(t);
  requestAnimationFrame(() => requestAnimationFrame(() => r(1)));
});`);

const t0 = Date.now();
for (let n = 0; n < frames; n++) {
  const t = n / FPS;
  await evaluate(`window.__step(${t})`, true);
  const shot = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false,
    fromSurface: true,
  });
  writeFileSync(`${outDir}\\f${String(n).padStart(4, '0')}.png`, Buffer.from(shot.data, 'base64'));
  if (n % 60 === 0 || n === frames - 1) {
    const el = (Date.now() - t0) / 1000;
    console.log(`  ${n + 1}/${frames}  ${el.toFixed(1)}s`);
  }
}

ws.close();
chrome.kill();
console.log(`done in ${((Date.now() - t0) / 1000).toFixed(1)}s -> ${outDir}`);
process.exit(0);
