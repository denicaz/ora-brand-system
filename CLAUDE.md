# CLAUDE.md · ORA delivery

This folder is the **finished brand delivery** for ORA. Everything outside it, in the parent
`ORA Brand System/`, is working material and superseded drafts. Treat this folder as the source of
truth and the parent as scratch.

**ORA** is a hybrid movement studio for women. Strength, running, cycling, pilates and yoga, opening
in central Skopje, October 2026. Owner: **Angela**. Brand built by **Denica** (Studio), a brand
strategist and designer who works as a peer, not a client.

**Match that register.** Opinionated, specific, no hedging, no flattery. Recommend rather than
survey. When she asks whether something works, answer with a position and the reason, not a list of
options.

---

## The spine, and do not drift from it

**ORA means the hour.** In Macedonian **час** means both *hour* and *class*, so `Ова е твој час`
reads two ways at once. Everything resolves into sixty minutes that belong to her.

> **The Room holds it. The Movement fills it. The Woman takes it back.**

| Side | Governs | Pillar |
|---|---|---|
| The Room | Space, material, light, hospitality | **Standard** |
| The Movement | Five disciplines, method, instructors | **Integration** |
| The Woman | Who she is, what she leaves with | **Return** |

Category claim: **Macedonia's first hybrid movement studio for women.**

The five disciplines, always in this order, which is the order of load:
`strength / running / cycling / pilates / yoga`

---

## The structure

```
ORA - HYBRID MOVEMENT STUDIO/
  ora-index.html                  Index page · the front door
  01 ORA - Brand Strategy/        .html + .md
  02 ORA - Brand System/          00 Brand System (cover)
                                  01 Brand Story        .md
                                  02 Brand Character    .md
                                  03 Brand Identity     .html + .md
                                  logo-ora/  fonts-ora/  art-direction/
  03 ORA - Brand Showcase/        ora-brand-showcase.html · in progress
  04 ORA - Brand Assets/          ora-assets.html · production guide, Macedonian
  Materials for use/              LOGO - CORRECTED · LOGO - MOTION · Movement
  ORA_Page_Template.md            How every ORA page is built
```

### What each document is, and what it must not become

| | Holds | Never holds |
|---|---|---|
| **Strategy** | Positioning, market evidence, customer, price logic, risk | Story, personality, visual spec |
| **Story** | Founder story, the name's meaning, Room / Movement / Woman as narrative, the rituals | Rules, specifications |
| **Character** | Personality, tone, lexicon, naming, bilingual policy, credit language, copy bank, staff conduct, refusals | Anything visual |
| **Identity** | Visual system logic, mark, type, colour, art direction | Narrative, tone of voice |
| **Showcase** | The outward page. Atmosphere, sequence, image and motion | New copy. It selects and stages what the four above already say |
| **Assets** | Production spec for physical items, in Macedonian | Brand reasoning |

**The boundary is the point.** Story is fixed narrative meant to be read. Character is generative:
it answers "how do I write or speak as ORA?" If content bleeds between them the set stops working.

**Brand Identity is complete in five chapters:** visual system logic, logo, type, colour, art
direction. It is the reference implementation of `ORA_Page_Template.md` and the source of truth for
anything visual.

---

## Locked decisions

Do not reopen these without being asked. Each was argued through.

### The mark

**`o / ra`, lowercase, always drawn, never typed.** The brand name written in any text is **ORA**,
in headlines, body, signage names, captions and legal alike.

**The mark is a clock.** The `o` is the face, the diagonal is the hand. That is why it reclines at
45° where PT Mono draws its slash at 23.89° off vertical. Both are measured, the hand off the drawn
path and the slash off the rendered glyph.

**Four variations, one job each:**

| File | Variation | Job |
|---|---|---|
| `ORA_LOGO_CLOCK` | The Clock | The hour whole. Used only as it is, never given content |
| `ORA_LOGO_FRAME` | The Frame | Corners pinned, principles inside. Nothing for sale in it |
| `ORA_LOGO_SIGNATURE` | The Signature | **The default.** One companion or none |
| `ORA_LOGO_WORD` | The Wordmark | No hand, paired with typed text. Never appears bare |

**The angle is 45°**, corner to centre inside a square, so the run equals the rise and the hand
reads the same off horizontal and off vertical. Measured down the centreline of the drawn quad in
`ORA_LOGO_CLOCK.svg`, `(408, 48)` to `(228, 228)`, and every hand-bearing file agrees. Figma remains
the master; nudge the source before any re-export.

**The hand and the slash are two objects.** The hand is drawn at 45° and inherits to every drawn
diagonal. The slash is typed and sits at whatever the typeface draws. They stand 21.11° apart, and
the logo film is the only place in the system where one is allowed to turn into the other. Never
adjust either to match the other.

**Motion.** `1 / 00` counts down and resolves into `o / ra`. A clock, not a stopwatch. End-frame,
app splash and site landing only.

### Colour

Nine colours in two tiers. **ORA Red is the only one holding two jobs**, the Movement's colour and
cycling's ground, and that is the whole argument of the palette: the hour with the most continuous
motion in it is the hour that already is the Movement's colour.

| Side | | | Discipline | | |
|---|---|---|---|---|---|
| The Room | Concrete | `#A5A5A5` | Strength | Near-Black | `#0D0C0C` |
| The Movement | ORA Red | `#D40000` | Running | Charcoal | `#2E2C2B` |
| The Woman | Blood Red | `#660000` | Cycling | ORA Red | `#D40000` |
| | | | Pilates | Steel | `#C6C6C6` |
| | | | Yoga | White | `#FFFFFF` |

Oxblood `#2D0000` is the ninth, and it answers to neither tier. It is the brand itself.

**Red measures how continuous the movement is, not how much it costs.** It gathers at cycling and
falls away on both sides, and it leaves by a different route at each end: out of the frame going
down towards strength, into the type going up towards yoga. Cycling is the one hour whose ground is
red already, because its motion is the most mechanically repetitive in the building.

So the five hours carry two measurements, shaped differently on purpose. **Weight carries the load
and only ever falls. Red carries the continuity and peaks in the middle.** Strength therefore holds
the heaviest weight in the system and no red at all.

**Nine colourways**, one for every ground the palette permits, in
`02 ORA - Brand System/logo-ora/colourways/`: the master, the five disciplines, the Room, the Movement and the Brand. Yoga uses the
master, its ground being white.

**One gradient exists:** `#D40000 → #660000`, the Movement handing off to the Woman. Ground only,
never behind or on type.

**The guardrail:** *the atmosphere is behind and around, never on the words.* Type always sharp.
The hand never blurs.

### Type

**Helvetica Neue is the voice. PT Mono is the data.** Mono is a monospace because every character
gets the same allotment of space, which is the hour drawn as type.

**The meter.** A field of squares: **60, the hour**, halving to **30**. **The margin is one square**,
whichever field is in use.

| Scale | 40 / 20 / 10 | The hour, the half, the quarter |
|---|---|---|
| **Leading** | 60 / 30 / 15 | 1.5× throughout, so every baseline lands on the ladder |

Three sizes, and they are the only ones whose line height lands on the ladder. Both faces use them.
Data is barred from the top one, which is all the old rule about data never displaying ever meant:
it starts at the half.

Three values sit off the ladder and are named rather than hidden. **30** is the in-between, its line
three quarters of a square. **5** is the voice floor, for legal lines and credits. **15** exists only
as the optical correction for mono standing beside a 20 headline.

**Weight is the load, and tracking follows weight.** One ramp, both moving together:

| | strength | running | cycling | pilates | yoga |
|---|---|---|---|---|---|
| **Weight** | Black | Bold | Medium | Regular | Light |
| **Tracking** | `−2%` | `−1%` | `0` | `+4%` | `+12%` |

This ramp only ever falls. Red is the other measurement of the same five hours and it peaks in the
middle, which is why strength holds the heaviest weight in the system and none of the colour.

**A discipline in a set is mono** (`strength / running / cycling / pilates / yoga`, equals,
slash-joined). **A discipline as the subject of a surface is Helvetica**, carrying its own weight
and tracking. The ramp can only exist in Helvetica, because PT Mono holds one weight.

**Helvetica anchors. PT Mono distributes.** Helvetica takes two places on a surface and stays in
them: one line carrying the mark and the name of the hour, one block saying what that hour is. Mono
goes everywhere else, set as a label over its value and placed by the movement rather than by the
layout. The photograph does not move. The data scattered through it is what makes the surface feel
like it does.

**The slash joins equals and never means *or*.** ORA's promise is that she does not have to choose.

### Art direction

**The picture shows what the hour is about**, and often that is not the woman.

| Strength | Running | Cycling | Pilates | Yoga |
|---|---|---|---|---|
| the body | the motion | the room | the detail | the light |

Never retouched skin, never a body positioned to be looked at, never an expression she would not
make. Effort is allowed to show. Performance is not.

**No hour gets a mark of its own**, or a typeface, or a palette. Every one is built from the same
red and the same two faces, and what separates them is dose and placement. **Grain is permitted on
the dark grounds and never on the light ones.**

---

## How to write in this folder

These documents were written against a strict anti-AI-style brief. Hold it.

- **No em dashes.** Use colons, commas, full stops.
- **One negation-reveal per document at most.** "Not X, it's Y" is the tell. Spec-register
  negations ("never below 40 mm") are fine and are not the same thing.
- **Bold sparingly**, roughly one phrase per section, plus table labels.
- **No invented specifics.** Every number traces to Angela's workbook, a measured file, or a
  decision recorded here. If it cannot be sourced, say so rather than inventing it.
- **Vary paragraph and sentence length.** Parallel bolded declaratives in a row are a tell.
- **No narrated candor.** Do not announce that you are being honest; just be it.
- **Keep them tight.** These are short documents on purpose. Do not pad. If a new rule is locked,
  write it tight or replace something weaker.

**Run the `avoid-ai-writing` skill on prose before it is written to a file.** It lives at
`.claude/skills/avoid-ai-writing/` in the parent folder. The rules above are stricter than the
skill and win wherever they disagree.

**`ORA_Page_Template.md` holds how every ORA page is built**: the ladder, the page, chapter layout,
type, tables, diagrams, motion, interaction, assets, naming and how to verify. It governs anything
visual made in ORA's name. Read it before touching a page and follow it rather than re-deriving it.
`02 ORA - Brand System/03 Brand Identity.html` is its reference implementation; where the two
disagree, measure the page.

**Read before rewriting. Never regenerate a file from memory.**

---

## Still open

- **Helvetica Neue Cyrillic is unlicensed.** Needed for signage, app embedding, webfont and print.
  The signage vendor almost certainly needs a seat of their own. Blocks anything Cyrillic reaching a
  fabricator.
- **The lighting rig. Time-critical.** The red curve is meant to be physically true, which needs a
  scene-programmable rig rather than a dimmer: red pendants on their own circuit, ambient dimmable
  on another. Confirm the real scene count, probably three rather than five, before the install
  completes.
- **`#A5A5A5` against the real floor.** Check the palette concrete against the studio's sealed floor
  in daylight. A grey that fights the real room shows in every photograph taken in it.
- **`ORA Circle`** appears in `04 ORA - Brand Assets` but is not defined in Character. It needs a
  definition and a naming rule, or it needs retiring.
- **Brand Showcase is unfinished.** It exists at `03 ORA - Brand Showcase/`, its index door is
  not wired yet, and it has three known gaps. See the Showcase section below.
- **Material, light, sound and scent have no chapter.** Identity closes at art direction. Decide
  whether they belong in Identity at all or in a document of the Room's own.
- **Brand Applications has no document.** `00 Brand System.md` lists it as the fourth component and
  its material sits in `04 ORA - Brand Assets` as a Macedonian production guide.
- **`color` in the Identity opener.** Every other line of prose in the delivery spells it `colour`.
  One word, in the most prominent table on the page.

## The index

`ora-index.html` is the front door. The film runs, then four doors open. **Retarget the hrefs there
and nowhere else**, and keep them relative so the index travels with the folder.

| Door | Points at |
|---|---|
| **THE BRAND** | `03 ORA - Brand Showcase/ora-brand-showcase.html` **exists but is not yet wired.** The door is held in a dimmed pending state until the Showcase is finished |
| **THEORY** | `01 ORA - Brand Strategy/01 ORA - Brand Strategy.html` |
| **VISUAL SYSTEM** | `02 ORA - Brand System/03 Brand Identity.html` |
| **ASSETS** | `04 ORA - Brand Assets/ora-assets.html` |

To wire the first door: change the `<span class="entry e1 pending" aria-disabled="true">` back to an
`<a class="entry e1" href="03 ORA - Brand Showcase/ora-brand-showcase.html" target="_blank"
rel="noopener">`, and close it with `</a>` instead of `</span>`.

**Story and Character are markdown only**, so they have no door. They become linkable when either
they get HTML versions or the Showcase absorbs them.

---

## Brand Showcase, in progress

`03 ORA - Brand Showcase/ora-brand-showcase.html` is being worked on. About 5 MB, of which roughly
99 KB is markup and the rest six embedded assets. **Denica is editing it directly. Do not rewrite
it wholesale.**

**What it is for.** The one page Angela sends. It runs short and it exists so someone who has never
heard of ORA understands the hour and wants in. Everything on it should already exist in Strategy,
Story, Character or Identity. Showcase selects, sequences and stages: it does not invent new
positioning or new language.

**The bands, in order:**

| | Band | Carries |
|---|---|---|
| 1 | `hero` | `1 / 00` resolving into `o / ra` |
| 2 | `frame` | The etymology. ŌRA (Latin) and ЧАС (Macedonian), one word carrying two meanings |
| 3 | `hour-frame` | The hour minute by minute, `0 / 00`, `0 / 05` and on |
| 4 | `doors-frame` | Image |
| 5 | `cascade-frame` | The three sides with their pillars and clock positions |
| 6 | `gear-frame` | The Room, expanded |
| 7 | `drinks-frame` | Full-bleed image, 16:9 |

**Known to fix:**

- **Band 5 reads "Four disciplines; method; instructors."** It is five. This is the last surviving
  four-discipline reference anywhere in the delivery.
- **The title is a working title:** `ORA — Brand System (framed, flush, title card added)`. It shows
  in the browser tab and in any shared link.
- ~~**No discipline is ever named.**~~ Closed 2026-08-23. The Movement film in `#movement` runs all
  five posters and holds the set in mono under every one, so the roster is now on the page.

---

## Working notes

- **The parent folder is scratch.** `ora-brand-system.html`, the five `ora-brand-system-framed-compare*`
  files, `ora-design-system.html`, `ora-asset-guide.html` and the older `.md` files are superseded.
  Do not treat them as current or copy values out of them.
- **`ORA_Production_Plan.md`** in the parent was a separate request and is not part of this
  delivery.
- **Angela's workbook**, `ORA_Brand_and_Business_Guide.docx`, is the raw source behind Strategy. The
  111-response survey, the pricing, the greeting script and the founder story all come from it.
- **Assets live in two places.** `Materials for use/LOGO - CORRECTED` holds SVG, PNG at 4× and
  single-page PDF for all four variations plus examples, all at 45°, and `Movement` holds one
  reference poster per discipline. The Identity page draws from `02 ORA - Brand System/` instead:
  `logo-ora/` for the four variations, the 36 colourway SVGs and the film, `fonts-ora/` for the two
  typefaces and the OFL, `art-direction/` for the five posters.
- **The Movement film** is `art-direction/movement-motion/`. `ora-movement-film.html` is the source
  and the three MP4s are rendered from it, so re-cut the HTML and render again rather than editing a
  video. It reads `?w=` and `?h=`, which is how one file gives 16:9, 4:5 and 9:16. Its Helvetica is
  unpacked from `fonts-ora/helvetica-neue-5.zip` into `fonts-ora/helvetica-neue/`.
- The folder is under **git**. Commit each document before starting the next so any single one is
  revertable on its own.
