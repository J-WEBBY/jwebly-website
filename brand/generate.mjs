// Jwebly parent brand generator — emits every SVG (brand/{logo,social,posters})
// and a crisp true-Geist PNG (brand/png) via resvg-js.
//
//   node brand/generate.mjs
//
// POSITIONING (per direction): premium boutique building advanced CUSTOM AI
// agents & automations for high-stakes / regulated industries. HealthOS is the
// FLAGSHIP PRODUCT but presented as ONE example vertical, not the headline.
// Domain is jwebly.co.uk.

import fs from "node:fs";
import path from "node:path";
import { Resvg } from "@resvg/resvg-js";
import {
  C, SANS, MONO, FONT_BUFFERS, orb, glow, dots, lockup, kicker, esc, doc,
} from "./lib.mjs";

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const DOM = "jwebly.co.uk";

// ---- output helpers --------------------------------------------------------
const outputs = []; // {dir, name, svg, w, h}
const add = (dir, name, w, h, inner) => outputs.push({ dir, name, w, h, svg: doc(w, h, inner) });

// ============================================================================
// LOGO SYSTEM
// ============================================================================
add("logo", "orb-dark", 240, 240, `<rect width="240" height="240" fill="${C.bg}"/>${glow(120,120,120,0.18)}${orb(120,120,96,"dark")}`);
add("logo", "orb-light", 240, 240, `<rect width="240" height="240" fill="${C.paper}"/>${orb(120,120,96,"light")}`);

add("logo", "lockup-primary-dark", 380, 110, `<rect width="380" height="110" fill="${C.bg}"/>${lockup(20,31,24,40,"dark")}`);
add("logo", "lockup-primary-light", 380, 110, `<rect width="380" height="110" fill="${C.paper}"/>${lockup(20,31,24,40,"light")}`);

add("logo", "lockup-mono-white", 380, 110, `<rect width="380" height="110" fill="${C.bg}"/>${lockup(20,31,24,40,"flat-white")}`);
add("logo", "lockup-mono-black", 380, 110, `<rect width="380" height="110" fill="${C.paper}"/>${lockup(20,31,24,40,"flat-black")}`);

// stacked
add("logo", "lockup-stacked-dark", 360, 320, `<rect width="360" height="320" fill="${C.bg}"/>${glow(180,150,150,0.2)}${orb(180,140,84,"dark")}
  <text x="180" y="290" text-anchor="middle" font-family="${SANS}" font-size="58" font-weight="600" letter-spacing="-2.4" fill="${C.ink}">Jwebly</text>`);

// favicon 512
add("logo", "favicon", 512, 512, `<rect width="512" height="512" rx="112" fill="${C.bg}"/>
  <rect x="1" y="1" width="510" height="510" rx="111" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="2"/>
  ${glow(256,250,210,0.22)}${orb(256,250,150,"dark")}`);

// ============================================================================
// LINKEDIN
// ============================================================================

// Company banner 1128×191 — tagline-led, content clear of bottom-left avatar overlap.
function banner(mode) {
  const dark = mode === "dark";
  const bg = dark ? C.bg : C.paper;
  const ink = dark ? C.ink : C.inkDark;
  const faint = dark ? C.faint : C.faintLight;
  return `<rect width="1128" height="191" fill="${bg}"/>${dots(1128,191,dark)}
    ${dark ? glow(960,30,420,0.18) : ""}
    <g>${orb(316,66,15,mode)}
      <text x="346" y="74" font-family="${SANS}" font-size="27" font-weight="600" letter-spacing="-1" fill="${ink}">Jwebly</text></g>
    <text x="300" y="126" font-family="${SANS}" font-size="29" font-weight="600" letter-spacing="-0.8" fill="${ink}">Advanced AI agents &amp; automation for high-stakes industries.</text>
    <rect x="300" y="140" width="150" height="3" rx="1.5" fill="${C.accent}"/>
    <text x="456" y="151" font-family="${MONO}" font-size="13" letter-spacing="2.5" fill="${faint}">BESPOKE · INTEGRATED · OPERATED</text>
    <text x="300" y="172" font-family="${MONO}" font-size="12" letter-spacing="2.5" fill="${faint}">${DOM} · BIRMINGHAM, UK</text>`;
}
add("social", "linkedin-banner-dark", 1128, 191, banner("dark"));
add("social", "linkedin-banner-light", 1128, 191, banner("light"));

// Avatar 400×400
add("social", "linkedin-avatar", 400, 400, `<rect width="400" height="400" fill="${C.bg}"/>${glow(200,180,180,0.28)}${orb(200,168,104,"dark")}
  <text x="200" y="320" text-anchor="middle" font-family="${SANS}" font-size="54" font-weight="600" letter-spacing="-2.2" fill="${C.ink}">Jwebly</text>`);

// ---- Square post template 1200×1200 ----
function squarePost({ mode = "dark", kick, lines, accentWord, support, tag = DOM }) {
  const dark = mode === "dark";
  const bg = dark ? C.bg : C.paper;
  const ink = dark ? C.ink : C.inkDark;
  const muted = dark ? C.muted : C.mutedLight;
  const faint = dark ? C.faint : C.faintLight;
  const fs = 90;
  const lh = 104;
  const top = 560 - (lines.length - 1) * lh;
  let body = "";
  lines.forEach((ln, i) => {
    const y = top + i * lh;
    if (Array.isArray(ln)) {
      // [plain, italicAccent]
      body += `<text x="96" y="${y}" font-family="${SANS}" font-weight="600" letter-spacing="-3" fill="${ink}" font-size="${fs}">${esc(ln[0])}<tspan font-style="italic" dx="26" fill="${ink}">${esc(ln[1])}</tspan></text>`;
    } else {
      body += `<text x="96" y="${y}" font-family="${SANS}" font-weight="600" letter-spacing="-3" fill="${ink}" font-size="${fs}">${esc(ln)}</text>`;
    }
  });
  const tickY = top + (lines.length - 1) * lh + 56;
  // Kicker sits clear above the first headline line (which has baseline `top`).
  const kickY = top - fs * 0.78 - 24;
  return `<rect width="1200" height="1200" fill="${bg}"/>${dots(1200,1200,dark)}
    ${dark ? glow(980,250,520,0.16) : ""}
    ${lockup(96,96,18,34,mode)}
    ${kicker(96, kickY, kick, faint)}
    ${body}
    <rect x="100" y="${tickY}" width="300" height="5" rx="2.5" fill="${C.accent}"/>
    <text x="96" y="${tickY + 84}" font-family="${SANS}" font-size="32" fill="${muted}">${esc(support)}</text>
    <text x="96" y="1112" font-family="${MONO}" font-size="20" letter-spacing="2" fill="${faint}">${esc(tag)}</text>`;
}

// Statement — boutique/custom positioning
add("social", "post-square-statement", 1200, 1200, squarePost({
  kick: "APPLIED AI",
  lines: ["Advanced AI, built", ["for work that can't", "go wrong."]],
  support: "Custom agents & automation for high-stakes industries.",
}));

// Stat / insight
add("social", "post-square-stat", 1200, 1200, (() => {
  const dark = true;
  return `<rect width="1200" height="1200" fill="${C.bg}"/>${glow(600,520,560,0.18)}
    ${lockup(96,96,18,34,"dark")}
    <g><text x="96" y="430" font-family="${MONO}" font-size="20" letter-spacing="4" fill="${C.faint}">BUILT AROUND YOU</text>
      <rect x="430" y="423" width="674" height="1" fill="${C.hair}"/></g>
    <text x="92" y="690" font-family="${SANS}" font-weight="600" letter-spacing="-8" fill="${C.ink}" font-size="280">100%</text>
    <text x="100" y="762" font-family="${MONO}" font-size="24" letter-spacing="2" fill="${C.accent}">FITTED TO YOUR STACK — NEVER OFF-THE-SHELF</text>
    <text x="96" y="876" font-family="${SANS}" font-size="34" fill="${C.muted}">Every system shaped around how your team actually works.</text>
    <text x="96" y="1112" font-family="${MONO}" font-size="20" letter-spacing="2" fill="${C.faint}">${DOM}</text>`;
})());

// Announcement — HealthOS as ONE example, framed under the parent
add("social", "post-square-announcement", 1200, 1200, (() => {
  return `<rect width="1200" height="1200" fill="${C.bg}"/>${dots(1200,1200,true)}
    ${glow(600,360,330,0.22)}${orb(600,360,96,"dark")}
    <g><rect x="508" y="540" width="184" height="44" rx="22" fill="none" stroke="rgba(255,255,255,0.18)"/>
      <circle cx="542" cy="562" r="5" fill="${C.accent}"/>
      <text x="560" y="569" font-family="${MONO}" font-size="15" letter-spacing="3" fill="${C.ink}">FLAGSHIP</text></g>
    <text x="600" y="694" text-anchor="middle" font-family="${SANS}" font-weight="600" letter-spacing="-2.4" fill="${C.ink}" font-size="74">HealthOS by Jwebly</text>
    <text x="600" y="754" text-anchor="middle" font-family="${SANS}" font-size="32" fill="${C.muted}">Our AI system for private clinics — one industry we build for.</text>
    <text x="600" y="858" text-anchor="middle" font-family="${SANS}" font-size="29" font-weight="500" fill="${C.ink}">Yours is next.</text>
    <rect x="516" y="872" width="168" height="3" rx="1.5" fill="${C.accent}"/>
    <text x="600" y="1112" text-anchor="middle" font-family="${MONO}" font-size="20" letter-spacing="2" fill="${C.faint}">${DOM}</text>`;
})());

// Light statement variant
add("social", "post-square-statement-light", 1200, 1200, squarePost({
  mode: "light",
  kick: "APPLIED AI",
  lines: ["Production-grade AI,", ["owned end to", "end."]],
  support: "A boutique for regulated, high-stakes work.",
}));

// Portrait 1080×1350
add("social", "post-portrait-statement", 1080, 1350, (() => {
  const fs = 92, lh = 106;
  const lines = ["AI systems for", "industries that", ["can't get it", "wrong."]];
  const top = 690 - (lines.length - 1) * lh;
  let body = "";
  lines.forEach((ln, i) => {
    const y = top + i * lh;
    body += Array.isArray(ln)
      ? `<text x="84" y="${y}" font-family="${SANS}" font-weight="600" letter-spacing="-3" fill="${C.ink}" font-size="${fs}">${esc(ln[0])}<tspan font-style="italic" dx="26">${esc(ln[1])}</tspan></text>`
      : `<text x="84" y="${y}" font-family="${SANS}" font-weight="600" letter-spacing="-3" fill="${C.ink}" font-size="${fs}">${esc(ln)}</text>`;
  });
  const tickY = top + (lines.length - 1) * lh + 58;
  return `<rect width="1080" height="1350" fill="${C.bg}"/>${dots(1080,1350,true)}${glow(860,220,460,0.16)}
    ${lockup(84,90,18,34,"dark")}
    ${kicker(84, 560, "BESPOKE · INTEGRATED · OPERATED", C.faint)}
    ${body}
    <rect x="88" y="${tickY}" width="300" height="5" rx="2.5" fill="${C.accent}"/>
    <text x="84" y="${tickY + 86}" font-family="${SANS}" font-size="34" fill="${C.muted}">Custom AI agents &amp; automation, fitted to your stack.</text>
    <text x="84" y="1270" font-family="${MONO}" font-size="20" letter-spacing="2" fill="${C.faint}">${DOM} · BIRMINGHAM, UK</text>`;
})());

// Link cover 1200×627
add("social", "link-cover", 1200, 627, `<rect width="1200" height="627" fill="${C.bg}"/>${dots(1200,627,true)}${glow(1000,120,420,0.16)}
  ${lockup(80,68,16,30,"dark")}
  <text x="80" y="300" font-family="${MONO}" font-size="18" letter-spacing="4" fill="${C.faint}">RESOURCES · FIELD NOTES</text>
  <text x="80" y="378" font-family="${SANS}" font-weight="600" letter-spacing="-2" fill="${C.ink}" font-size="62">Why off-the-shelf AI</text>
  <text x="80" y="448" font-family="${SANS}" font-weight="600" letter-spacing="-2" fill="${C.ink}" font-size="62">stalls in regulated work.</text>
  <rect x="84" y="500" width="220" height="4" rx="2" fill="${C.accent}"/>
  <text x="80" y="566" font-family="${SANS}" font-size="26" fill="${C.muted}">The integration gap — and how we close it.</text>`);

// ============================================================================
// POSTERS
// ============================================================================

// Type hero 1080×1350
add("posters", "poster-type-hero", 1080, 1350, `<rect width="1080" height="1350" fill="${C.bg}"/>${glow(540,1180,620,0.14)}
  ${lockup(84,90,16,30,"dark")}
  <text x="84" y="600" font-family="${SANS}" font-weight="600" letter-spacing="-4" fill="${C.ink}" font-size="150">Bespoke.</text>
  <text x="84" y="768" font-family="${SANS}" font-weight="600" letter-spacing="-4" fill="${C.ink}" font-size="150">Integrated.</text>
  <text x="84" y="936" font-family="${SANS}" font-weight="600" letter-spacing="-4" fill="${C.ink}" font-size="150">Operated.</text>
  <rect x="88" y="996" width="360" height="6" rx="3" fill="${C.accent}"/>
  <text x="84" y="1100" font-family="${SANS}" font-size="36" fill="${C.muted}">Advanced AI for industries that can't get it wrong.</text>
  <text x="84" y="1280" font-family="${MONO}" font-size="22" letter-spacing="2" fill="${C.faint}">${DOM}</text>`);

// Orb-centric 1080×1350 — the orb as hero
add("posters", "poster-orb-centric", 1080, 1350, `<rect width="1080" height="1350" fill="${C.bg}"/>${dots(1080,1350,true)}
  <text x="540" y="180" text-anchor="middle" font-family="${MONO}" font-size="22" letter-spacing="6" fill="${C.faint}">APPLIED AI</text>
  ${glow(540,560,440,0.3)}${orb(540,560,210,"dark")}
  <text x="540" y="980" text-anchor="middle" font-family="${SANS}" font-weight="600" letter-spacing="-3.5" fill="${C.ink}" font-size="120">Jwebly</text>
  <text x="540" y="1066" text-anchor="middle" font-family="${SANS}" font-size="36" fill="${C.muted}">AI systems for industries that can't get it <tspan font-style="italic" dx="6" fill="${C.ink}">wrong</tspan>.</text>
  <text x="540" y="1280" text-anchor="middle" font-family="${MONO}" font-size="22" letter-spacing="3" fill="${C.faint}">${DOM} · BIRMINGHAM, UK</text>`);

// Split landscape 1920×1080
add("posters", "poster-split-landscape", 1920, 1080, `<rect width="1920" height="1080" fill="${C.bg}"/>${dots(1920,1080,true)}
  <rect x="1180" y="160" width="1" height="760" fill="${C.hair}"/>
  ${lockup(140,150,16,30,"dark")}
  <text x="140" y="500" font-family="${MONO}" font-size="22" letter-spacing="5" fill="${C.faint}">WHAT WE BUILD</text>
  <text x="140" y="600" font-family="${SANS}" font-weight="600" letter-spacing="-3" fill="${C.ink}" font-size="96">Custom AI agents,</text>
  <text x="140" y="712" font-family="${SANS}" font-weight="600" letter-spacing="-3" fill="${C.ink}" font-size="96">fitted to your stack.</text>
  <rect x="144" y="760" width="300" height="5" rx="2.5" fill="${C.accent}"/>
  <text x="140" y="848" font-family="${SANS}" font-size="34" fill="${C.muted}">For regulated, high-stakes industries.</text>
  ${glow(1560,500,360,0.28)}${orb(1560,470,150,"dark")}
  <text x="1560" y="700" text-anchor="middle" font-family="${SANS}" font-size="34" fill="${C.muted}">HealthOS is one.</text>
  <text x="1560" y="748" text-anchor="middle" font-family="${SANS}" font-size="34" fill="${C.muted}">Yours is next.</text>
  <text x="1560" y="840" text-anchor="middle" font-family="${SANS}" font-size="30" font-weight="500" fill="${C.ink}">${DOM}/build</text>
  <text x="140" y="980" font-family="${MONO}" font-size="22" letter-spacing="2" fill="${C.faint}">${DOM} · BIRMINGHAM, UK</text>`);

// ============================================================================
// WRITE SVG + PNG
// ============================================================================
const SCALE = 3; // 3× pixel density for extra-crisp, high-res PNGs

let n = 0;
for (const o of outputs) {
  const dir = path.join(ROOT, o.dir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${o.name}.svg`), o.svg);

  const pngDir = path.join(ROOT, "png");
  fs.mkdirSync(pngDir, { recursive: true });
  // NOTE: in this resvg-js version, passing `font` makes `fitTo` get ignored,
  // and `fitTo:width` is also ignored when a viewBox is present. So scale the
  // SVG's own width/height attributes (viewBox unchanged) to get high-res output
  // while still supplying the Geist font buffers.
  const scaledSvg = o.svg.replace(
    /<svg([^>]*?)width="(\d+)" height="(\d+)"/,
    (_m, pre, w, h) => `<svg${pre}width="${w * SCALE}" height="${h * SCALE}"`
  );
  const r = new Resvg(scaledSvg, {
    font: { fontBuffers: FONT_BUFFERS, defaultFontFamily: "Geist", loadSystemFonts: false },
  });
  const img = r.render();
  fs.writeFileSync(path.join(pngDir, `${o.name}.png`), img.asPng());
  n++;
  console.log("✓", `${o.dir}/${o.name}`, `${o.w}×${o.h} → ${img.width}×${img.height}px`);
}
console.log(`\nDone — ${n} assets (SVG + PNG @ ${SCALE}×).`);
