/* ORA index · search index builder
   Reads the delivery's six documents, pulls out every section it can address,
   and writes search-index.json. The index page inlines that JSON, so search
   works from a file:// open as well as from a live host.

   Re-run after editing any document, and after adding anchors:
     node "00 index/build-search-index.js"

   Strategy, Story and Character carry no per-section ids yet, so their sections
   resolve to the top of their document. Give a section an id, add its capture to
   that document's `section` pattern, and it deep-links on the next run. */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

/* The Showcase bands are addressed by id and carry no heading in the markup:
   each one opens on an inline <svg> defs block. These are the band names as
   recorded in CLAUDE.md, so the results read as the page reads. */
const SHOWCASE_BANDS = {
  name: 'The name', hour: 'The hour', mark: 'The mark', assemble: 'The doors',
  sides: 'The three sides', 'room-gear': 'The Room', palette: 'The palette',
  cycling: 'Cycling', movement: 'The Movement', return: 'The Return',
  angela: 'Angela', close: 'Closing',
};

const DOCS = [
  { doc: 'Strategy',
    file: '01 ORA - Brand Strategy/01 ORA - Brand Strategy.html',
    section: /<div class="group"[^>]*>\s*Section\s*\d+\s*·\s*([^<]+)</g,
    title: m => strip(m[1]) },

  /* Story, Character and Identity used to be three files. They are three tabbed panels
     inside one page now, so each config cuts its own panel out of that page with
     `from`/`to`, and carries its tab's hash so a result opens on the right tab. */
  { doc: 'Story',
    file: '02 ORA - Brand System/00 Brand system.html',
    from: 'id="doc-story"', to: 'id="doc-character"', anchor: 'story',
    section: /<span class="name">([^<]+)</g,
    title: m => strip(m[1]) },

  { doc: 'Character',
    file: '02 ORA - Brand System/00 Brand system.html',
    from: 'id="doc-character"', to: 'id="doc-identity"', anchor: 'character',
    section: /<span class="name">([^<]+)</g,
    title: m => strip(m[1]) },

  { doc: 'Identity',
    file: '02 ORA - Brand System/00 Brand system.html',
    from: 'id="doc-identity"', anchor: 'identity',
    section: /<details[^>]*\bid="(ch-\d+)"[\s\S]{0,400}?<span class="tt">([^<]+)</g,
    id: m => m[1],
    title: m => strip(m[2]) },
  { doc: 'Showcase',
    file: '03 ORA - Brand Showcase/ora-brand-showcase.html',
    section: /<section[^>]*\bid="([a-z0-9-]+)"[^>]*>/g,
    id: m => m[1],
    title: m => SHOWCASE_BANDS[m[1]] || titleCase(m[1]) },

  { doc: 'Assets',
    file: '04 ORA - Brand Assets/ora-assets.html',
    section: /<details[^>]*\bid="(a-[a-z0-9-]+)"[\s\S]{0,600}?<span class="num">([^<]*)<\/span>\s*<span class="name">([^<]*)<\/span>/g,
    id: m => m[1],
    title: m => strip(m[2] + ' ' + m[3]) },
];

const strip = s => s
  .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, ' ')
  .replace(/<[^>]*>/g, ' ')
  .replace(/&sup2;/g, '2')
  .replace(/&middot;/g, '·')
  .replace(/&rsquo;/g, '’')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&[a-z]+;/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const titleCase = s => s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

const out = [];

for (const cfg of DOCS) {
  const abs = path.join(ROOT, cfg.file);
  if (!fs.existsSync(abs)) { console.warn('  missing, skipped:', cfg.file); continue; }

  const raw = fs.readFileSync(abs, 'utf8');
  // kill script and style bodies up front so their source never reaches the keyword text
  let body = raw.replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, '');
  /* three of the six live inside one page now, so cut this panel out before scanning */
  if (cfg.from) {
    const a = body.indexOf(cfg.from);
    const b = cfg.to ? body.indexOf(cfg.to, a + 1) : -1;
    if (a >= 0) body = body.slice(a, b > a ? b : body.length);
  }
  const url = '../' + cfg.file;

  // document-level entry, so every document is reachable by its own name
  out.push({ doc: cfg.doc, title: cfg.doc, url, anchor: cfg.anchor ? '#' + cfg.anchor : '', kw: '' });

  const marks = [];
  let m;
  cfg.section.lastIndex = 0;
  while ((m = cfg.section.exec(body)) !== null) {
    const title = cfg.title(m);
    if (title) marks.push({ id: cfg.id ? cfg.id(m) : '', title, at: m.index });
  }

  for (let i = 0; i < marks.length; i++) {
    const from = marks[i].at;
    const to = i + 1 < marks.length ? marks[i + 1].at : Math.min(body.length, from + 12000);
    out.push({
      doc: cfg.doc,
      title: marks[i].title.slice(0, 90),
      url,
      anchor: marks[i].id ? '#' + marks[i].id : (cfg.anchor ? '#' + cfg.anchor : ''),
      kw: strip(body.slice(from, to)).slice(0, 1200),
    });
  }

  console.log(String(marks.length).padStart(3), 'sections ·', cfg.doc);
}

const dest = path.join(__dirname, 'search-index.json');
fs.writeFileSync(dest, JSON.stringify(out));
console.log('\n ', out.length, 'entries ·', (fs.statSync(dest).size / 1024).toFixed(1), 'KB → 00 index/search-index.json');
console.log('  deep-linked:', out.filter(e => e.anchor).length,
            '· document-level:', out.filter(e => !e.anchor).length);

/* The index page inlines the same array so search works from a file:// open as well as from
   a host. Rewrite it here, so the page and the JSON can never drift apart again. */
const page = path.join(__dirname, 'ora-index.html');
if (fs.existsSync(page)) {
  const html = fs.readFileSync(page, 'utf8');
  const re = /(var IDX\s*=\s*)\[.*\];/;
  if (!re.test(html)) {
    console.warn('  could not find "var IDX = [ ... ];" in ora-index.html, page NOT updated');
  } else {
    fs.writeFileSync(page, html.replace(re, (_, lead) => lead + JSON.stringify(out) + ';'));
    console.log('  inlined into 00 index/ora-index.html');
  }
}
