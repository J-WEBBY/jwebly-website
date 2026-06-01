# Jwebly — Brand Kit

The brand for **Jwebly** (jwebly.co.uk): a premium **boutique** building advanced
**custom AI agents & automation** for high-stakes, regulated industries. Every
system is bespoke and fitted to the client's stack.

**HealthOS by Jwebly** is the flagship *product* — our AI system for private
clinics — but it's presented as **one example industry we build for**, never as
the whole story. The brand leads with the boutique/custom capability; HealthOS
is proof, not the headline.

> **Accent:** the website **teal `#11B5A7`** (per direction — not the brand-doc
> blue). **Domain:** jwebly.co.uk. **Location:** Birmingham, UK.

All assets are generated from one script (`generate.mjs` + `lib.mjs`) → live SVG
**and** crisp 2× PNG rendered in true Geist via `@resvg/resvg-js`. No raster
photography or AI imagery — type, hairlines, the orb, one teal accent on near-black.

---

## The orb (the logo)
The orb **is** the mark, and it's rendered as a near-**3D glossy sphere**: layered
base gradient, form shadow, bounce light, soft + sharp speculars, and a teal rim.
- **Dark backgrounds:** white glossy sphere + teal rim (default).
- **Light backgrounds:** charcoal-to-black glossy sphere.
- **Reversed/mono:** flat white or flat black for overlays.
- Defined once in `lib.mjs` (`orb()`), reused identically everywhere.
- **Clearspace:** orb height on all sides. **Min size:** lockup width 96px.

---

## Palette

| Token | Hex | Use |
|-------|-----|-----|
| `--bg` | `#0A0A0A` | near-black background |
| `--bg-2` | `#111111` | raised surface |
| `--paper` | `#F4F4F2` | light-variant background |
| `--ink` | `#FAFAFA` | text on dark |
| `--ink-light` | `#0A0A0A` | text on light |
| `--muted` | `#A1A1A1` | secondary text |
| `--faint` | `#6B6B6B` | kickers / labels |
| **`--accent`** | **`#11B5A7`** | **teal — the scalpel** |
| `--accent-dim` | `#0E9C90` | accent hover/pressed |

Accent discipline: teal is a scalpel — rim, one keyword, a hairline tick, the orb
glow. ~95% of every asset is monochrome.

---

## Type — Geist
Geist Sans for everything; Geist Mono for kickers, labels, technical tags.
Headlines weight 600, tracking `-0.03em`. Mono kickers uppercase, `.16em`, muted.
PNGs embed the real Geist font buffers, so exported text is true Geist (not a fallback).

---

## Voice (positioning)
- Lead line: **"Advanced AI agents & automation for high-stakes industries."**
- Craft framing: *bespoke · integrated · operated*; *fitted to your stack, never off-the-shelf*.
- HealthOS line: *"HealthOS by Jwebly — our AI system for private clinics, one industry we build for. Yours is next."*
- Never imply Jwebly is healthcare-only or a generic agency.

---

## Asset index
```
brand/
  lib.mjs            orb (3D) + palette + fonts + motif helpers
  generate.mjs       emits every SVG + PNG (run: node brand/generate.mjs)
  tokens.css         palette/type for the contact sheet
  BRAND.md           this file
  index.html         contact sheet (open in a browser)
  logo/   *.svg      orb-dark/light, lockup-primary-dark/light,
                     lockup-mono-white/black, lockup-stacked-dark, favicon
  social/ *.svg      linkedin-banner-dark/light (1128×191), linkedin-avatar (400²),
                     post-square-statement / -stat / -announcement / -statement-light (1200²),
                     post-portrait-statement (1080×1350), link-cover (1200×627)
  posters/*.svg      poster-type-hero (1080×1350), poster-orb-centric (1080×1350),
                     poster-split-landscape (1920×1080)
  png/    *.png      every asset above, rendered at 2× in true Geist
```

---

## Regenerate / export
```bash
node brand/generate.mjs      # rewrites all SVG + PNG (2× density)
```
Edit copy/layout in `generate.mjs`; edit the orb or palette in `lib.mjs`. To
change PNG resolution, bump `SCALE` in `generate.mjs`.

---

## Do / Don't
**Do** keep the orb glossy-white on dark / charcoal on light · use teal sparingly ·
use Geist · lead with the boutique/custom story · keep generous black space.

**Don't** flatten the orb (it's the 3D logo) · use blue as the accent (this kit is
teal) · make the brand read healthcare-only · fill areas with teal · stretch lockups ·
use photos or AI imagery · use jwebly.com (it's **.co.uk**).

---

## For the human
- Drop the **real orb** into `lib.mjs` `orb()` if the final mark differs.
- Accent is teal `#11B5A7` by decision — change in `lib.mjs` `C.accent` if retuned.
- The **HealthOS product kit** (its own LinkedIn + Instagram + X sizes) is a separate build.
