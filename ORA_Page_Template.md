# ORA Page Template

How every ORA page is built. This is the construction document: it governs anything visual made in
ORA's name, on screen or off it. Everything here was decided in build and verified in a browser, not
proposed.

The reference implementation is `02 ORA - Brand System/03 Brand Identity.html`. When this document
and that page disagree, measure the page and fix whichever is wrong.

**Two documents, two jobs.** Identity holds the system: the sixty-minute grid, the mark, the type
scale, the nine colours, the load ramp and the red curve. This one holds how a page carrying that
system is assembled. A poster, a sign or a post takes its rules from Identity alone. A page with
chapters, tables and a scroll takes them from both.

---

## 1. The ladder

Space is measured in the hour. Three values:

```css
--hour: 60px;   --half: 30px;   --quarter: 15px;
```

**One value sits below them**, `7.5`, half the quarter. It exists because the type scale needs it:
the data floor at 5 leads at 7.5. It is used for one other thing, table row padding, and written as
`calc(var(--quarter)/2)` so it stays visibly derived. Nothing else goes under the quarter.

No rem values in layout, no arbitrary numbers, nothing negative.

| Gap | Value |
|---|---|
| Chapter row to the first block | one hour |
| Between any two blocks in a chapter | one hour |
| Chapter end to the next row | one hour |
| Headline to its text | one half |
| Chapter row padding | one quarter |
| Table row padding | half a quarter |

Written generically so every chapter inherits it:

```css
.toc-body > *{margin:0}
.toc-body > * + *{margin-top:var(--hour)}
.toc-body > *:first-child{margin-top:calc(var(--hour) - var(--quarter))}
```

The first block subtracts a quarter because the chapter row already contributes that. The two make
the hour.

**The chapter row carries `line-height:1`.** Without it the flex line runs about 4px deeper than the
title, and the gap under a headline stops matching the gap above the text although the CSS says they
are equal. Set the row rather than compensating below it.

---

## 2. The page

```
header          the mark, and the document's name at the right margin
opener table    what this is, who it's for
chapters        an accordion, one <details> each
```

The mark in the header is a link home. The document's name sits on the mark's own line, flush right,
in PT Mono at 10 in the ink colour, bottom-aligned to the mark.

**The opener is a table**, on the table setting below, with the label column taking the first half of
the measure so every value begins on the centre line.

**A page may group its rows** where the grouping carries an argument. Strategy runs seventeen rows
under five group labels because it is a case in five movements; Identity runs five chapters flat
because each is one specification. The group label is PT Mono at 10 in red, ruled underneath, an
hour above and a quarter below.

---

## 3. Chapter layout

**The visual comes first and the writing answers it.**

```
chapter row  (number, title, downloads, sign)
   one hour
visual
   one hour
CAPITALISED HEADLINE          43% of the measure
   one half
body text                     full measure
   one hour
next chapter row
```

The row already carries the number and the title, so neither repeats inside the open body.

**Two exceptions, both named rather than general.**

`05 Art Direction` in Identity puts its writing above each visual. It shows five parallel things
where every other chapter shows one constructed thing, so a reader needs to know what varies between
them before looking.

`01 Brand Strategy` interleaves. Its rows are arguments and its visuals are evidence, so a chart
arrives at the point the argument calls for it, with the prose that sets it up above and the prose
that reads it below. A page whose visuals are evidence rather than construction may follow it.

No page reverses the order for rhythm.

---

## 4. Type in a chapter

Two scales are at work. **The brand scale is 40 / 20 / 10**, leading 60 / 30 / 15, and it governs
every designed surface, the diagrams on this page included. **A page's own prose runs at 14
throughout**, because a document is read rather than looked at and its measure comes from the
column.

**Everything in a chapter is that 14.** The headline earns no size, weight or colour of its own.
Capitals and the width it runs to set it apart, and nothing else.

| | Value |
|---|---|
| Size | `14px`, headline and body alike |
| Weight | `400` |
| Alignment | `justify` |
| Letter-spacing | `normal` |
| Line-height | `normal` |
| Headline column | 43% of the measure |
| Body column | full measure |

**Justification is structural.** A justified column is flush on both edges, so both edges land on the
grid. Ragged right puts the left edge on the grid and lets the right fall wherever.

**Neutral means unadjusted.** Letter-spacing and line-height stay at the value the typeface sets.

**Body text is one continuous block**, however long it runs. One headline, one block.

### Naming a discipline

Wherever a discipline is named on any surface it is Helvetica, carrying its own weight and tracking:

| | strength | running | cycling | pilates | yoga |
|---|---|---|---|---|---|
| Weight | Black `900` | Bold `700` | Medium `500` | Regular `400` | Light `300` |
| Tracking | `−2%` | `−1%` | `0` | `+4%` | `+12%` |

Set it on a span carrying the weight class, never on the cell. A table cell declares its own
letter-spacing and will beat an inherited value, so the ramp has to sit on the element itself.

Tracking is written in `em` so it holds at every size. The same class works in SVG text.

---

## 5. Tables

One setting, everywhere. **Ruled rather than boxed:**

```css
.tbl{width:100%;border-collapse:collapse;border-top:1px solid var(--line)}
.tbl th,.tbl td{padding:calc(var(--quarter)/2) 1.1rem;border-bottom:1px solid var(--line)}
.tbl th:first-child,.tbl td:first-child{padding-left:0}
.tbl th:last-child,.tbl td:last-child{padding-right:0;text-align:right}
```

A rule over the head and under every row, the last one included. No outline around the whole thing.

**The ink runs the measure, not the box.** A table at `width:100%` already spans, and it will still
look narrow: cell padding holds the first column in from the left, and the last column is usually
wider than its content so the text stops short of the right margin. Zero the outer padding and pin
the last column right. Measure the ink, not the table.

Head in PT Mono at 10, zero tracking, uppercase. Cells at 14.

**A label column is capitals and nothing else**, the same face and size as the row it labels. Only
the opener differs: its label column is PT Mono at 10 and its values run at 12, because it is a
masthead rather than a table of content.

**A last column of prose keeps both its edges.** Right-aligning a column is for values. Where the
last column runs to sentences, justify it and let the label column hold the left, the way the opener
does.

Charts follow the same setting. A bar row and a spec row are tables that happen to draw something:
same padding, same rules, same label column, no outline around either.

---

## 6. Diagrams

Drawn as inline SVG on a real grid, never as images.

**Fields are centred with equal margins on all four sides.** A field flush to one edge with its
labels in the space on the other reads as misaligned even when the content is inside the box.

**Pick numbers that stay clean.** The ruler field in `01` is 480 inside a 600 box, which puts one
minute at exactly 8px and every measure on a grid line. Rebuild a field at a cleaner size rather than
nudging a bad one into place.

**The half field is thirty the square**, for a surface too small to carry sixty. The margin is still
one square of whichever field is in use.

### PT Mono on the grid

**The advance is 0.6em.** At `font-size:100px` it is exactly 60, so one character fills one square.
This is how type is placed on a grid rather than near one, and it is why the grid demonstrations are
drawn at 100 rather than at a scale size.

**PT Mono holds one weight.** Never set `font-weight:700` on it. The browser synthesises a fake bold
and the mark stops being the typeface.

**A typed slash is data and stays typed.** The countdown's slash sits where PT Mono draws it,
23.89° off vertical. The drawn hand is a different object at 45°, and the two stand 21.11° apart.
Never adjust either to match the other.

### Building a component rather than drawing it

An SVG cannot hold a button and cannot be selected. Where a diagram needs either, build it in HTML
and put the grid behind it as a background:

```css
background:
  repeating-linear-gradient(to right,rgba(212,0,0,.28) 0 1px,transparent 1px 60px),
  repeating-linear-gradient(to bottom,rgba(212,0,0,.28) 0 1px,transparent 1px 60px);
```

The colour palette is built this way, because every swatch carries a copy button.

---

## 7. Motion

**Drive discrete steps with timers, not `requestAnimationFrame`.** Frames stop being served whenever
the page is not compositing, which strands a sequence between two states permanently. Timers keep
firing. Frame interpolation is only for genuinely continuous motion.

**Every sequence rests on its finished state.** A pass cut short lands on the end value. Check this
by interrupting it, not by watching it run.

**A loop that returns to its own start has no seam.** The colour gradient shifts by exactly one
period of a reflected fill, so red meets red at every turn and stopping it anywhere leaves the bar
correct.

**Gate every animation.** It runs only while its chapter is open and it is on screen. Stop on close,
on scroll away, and on `visibilitychange`.

**Honour `prefers-reduced-motion`.** The thing sits statically on its finished state, and any manual
control still works.

**Restart SVG animations through the Web Animations API:**

```js
el.getAnimations({subtree:true}).forEach(a => { a.cancel(); a.play(); });
```

The remove-class, read `offsetWidth`, re-add trick **fails silently on SVG**: `offsetWidth` is an
`HTMLElement` property and is `undefined` on an `<svg>`, so no reflow is forced and the class change
collapses to nothing. A class being present is not evidence that an animation restarted.

**Paired animations restart from one call** so they cannot drift apart across repeats.

### The reference sequence

The meter in `01`, for pacing anything similar. Each clock value appears as its own measure starts
moving, rather than after it lands:

| Clock | at | Ruler starting |
|---|---|---|
| `0 / 01` | 0ms | 1' |
| `0 / 05` | 450ms | 5' |
| `0 / 15` | 900ms | 15' |
| `0 / 30` | 1350ms | 30' |
| `1 / 00` | 1800ms | 60' |

Line draw 620ms, end label at its own start plus 500ms, full cycle 4000ms.

---

## 8. Interaction

**One gesture for showing detail.** A thing that has more behind it opens a sheet: centred, over a
blurred ground, closing on Escape, on the backdrop and on a Close control, returning focus to what
opened it.

```css
background:rgba(13,12,12,.3);backdrop-filter:blur(26px) saturate(.85);
scrollbar-gutter:stable both-edges;
```

The gutter keeps the panel centred rather than pushed off by its own scrollbar.

**Anything clickable is a real button**, so it takes focus and answers the keyboard. Focus shows the
same state hover does.

**A grid needs `minmax(0,1fr)`, not `1fr`.** A `1fr` track will not shrink below its content's
minimum, so it pushes a panel wider than the viewport and there is nothing left to centre it in.

---

## 9. Assets

**Carry a small set, link a large one.** The question is whether the page can still be sent as one
file and work.

| | Where | Why |
|---|---|---|
| Logo files, 12 at 207KB | carried, as data URIs | a fabricator gets them from the page alone |
| Photographs, 5 at 4.9MB | linked from `art-direction/` | carrying them puts the page past 7MB |
| Fonts, 3 at 3MB | linked from `fonts-ora/` | the same, and PT Mono is already carried once for typesetting |

A download is an `<a download>` with a real filename. Generate a raster from a vector at click time
rather than shipping both, so the two can never disagree.

**Ship the master and generate the variants.** The page carries four logo SVGs and builds all
thirty-six colourways from them by recolouring at load, so a file taken from the page and the same
file on disk in `logo-ora/colourways/` are the same file. Nothing derived is carried twice.

---

## 10. Naming, and the cascade

**Check every class name against the stylesheet before using it.** This has caused two real bugs:

- `.sheet` was already defined with `width:max-content`. A new rule set `position` and `padding` but
  never mentioned width, so the old declaration came through untouched and the panel would not fill
  the viewport.
- `.adrow` and `.adcell` survived in a stylesheet block left behind by an earlier version. They kept
  supplying padding and a background that the newer rules never mentioned, so white cards kept
  reappearing around pictures that were meant to sit edge to edge.

Both have the same shape: **an older rule quietly supplies what a newer one omits.** Grep for the
name first. When a component is replaced, delete its old block rather than writing over it.

Prefix a component's classes so they cannot collide: `ty` for type, `co` for colour, `ad` for art
direction.

---

## 11. Verify by measuring

The rendered page is the source of truth, not the stylesheet. Read geometry back out of the document
rather than trusting the CSS to have applied.

Worth measuring after any change: computed size, alignment, letter-spacing and line-height; the gaps
either side of a visual; a field's centre against its box's centre; the ink's left and right against
the measure; and that no element carries an unintended weight or tracking.

**Measure the ink, not the box.** A table, a caption or a figure can span the measure while its text
stops well short of it.

**A component with a claim in it must prove the claim.** Where a drawing states an advance, an angle
or a ratio, measure it at render time and draw from the measurement. The mono panel in `03` reads
each character's advance off the rendered text, which is how a fallback typeface was caught giving 55
where PT Mono gives 60.

**The preview pane refuses files over about 512KB.** The page is past that, so verify a chapter at a
time: extract it with its `<style>` blocks into a harness and check the div balance before trusting
anything it reports.

---

## 12. Writing

Run the `avoid-ai-writing` skill on prose before it is written to a file. Where it and these rules
disagree, these win.

- **No em dashes.** Colons, commas, full stops.
- **One negation-reveal per document.** "Not X, but Y" is the tell, including the split form across
  two sentences. Spec-register negations are fine and are not the same thing.
- **No aphorism formulas.** The shape persuades instead of the claim.
- **Prefer `is` to `represents`, `serves as`, `becomes`.**
- **No meaning-telling closers.**
- **Bold sparingly**, roughly one phrase per section plus table labels.
- **No invented specifics.** Every number traces to Angela's workbook, a measured file, or a decision
  recorded here.
- **Vary sentence length.**

**Read before rewriting. Never regenerate a file from memory.**

---

## Still open

- **The left field in `01` draws ten squares.** The text says sixty and twelve columns. Decide
  whether that field should be twelve.
- **"Halving to 30".** Under a 30 field one square is two minutes, which contradicts one square being
  one minute. Either 30 is a coarser field where the square is worth two, or the count goes to 120.
- **The 43% headline column** was measured off a Figma frame, not derived. Half the measure is the
  nearest value that means something.
- **The opener's rules are Charcoal** where every other table uses `--line`. It is the loudest table
  on the page by some way.
