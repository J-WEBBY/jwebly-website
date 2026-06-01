// Shared brand primitives — the 3D orb, palette, fonts, and motif helpers.
// Used by generate.mjs to emit every SVG + PNG. Keeping it all here means the
// orb (the logo) is defined once and reused identically everywhere.

import fs from "node:fs";

export const C = {
  bg: "#0A0A0A",
  bg2: "#111111",
  paper: "#F4F4F2",
  ink: "#FAFAFA",
  inkDark: "#0A0A0A",
  muted: "#A1A1A1",
  mutedLight: "#52525B",
  faint: "#6B6B6B",
  faintLight: "#8A8A87",
  hair: "rgba(255,255,255,0.12)",
  hairLight: "rgba(10,10,10,0.12)",
  accent: "#11B5A7",
  accentDim: "#0E9C90",
};

// Geist font buffers for resvg (true-Geist PNG rendering).
const F = "node_modules/geist/dist/fonts";
export const FONT_BUFFERS = [
  `${F}/geist-sans/Geist-Regular.ttf`,
  `${F}/geist-sans/Geist-Medium.ttf`,
  `${F}/geist-sans/Geist-SemiBold.ttf`,
  `${F}/geist-sans/Geist-Bold.ttf`,
  `${F}/geist-sans/Geist-SemiBoldItalic.ttf`,
  `${F}/geist-sans/Geist-Italic.ttf`,
  `${F}/geist-mono/GeistMono-Regular.ttf`,
  `${F}/geist-mono/GeistMono-Medium.ttf`,
].map((p) => fs.readFileSync(p));

export const SANS = "Geist, Inter, system-ui, sans-serif";
export const MONO = "Geist Mono, ui-monospace, monospace";

let _uid = 0;
const uid = () => `g${(_uid++).toString(36)}`;

/**
 * The premium, near-3D orb. `mode`:
 *   "dark"  — glossy WHITE sphere with teal rim (for near-black backgrounds)
 *   "light" — charcoal/black sphere (for paper backgrounds)
 *   "flat-white" / "flat-black" — solid mono mark for reversed lockups
 * Renders inline (no <defs> collision) — unique ids per call.
 */
export function orb(cx, cy, r, mode = "dark") {
  const id = uid();
  if (mode === "flat-white") {
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFFFFF"/>
      <ellipse cx="${cx - r * 0.28}" cy="${cy - r * 0.34}" rx="${r * 0.3}" ry="${r * 0.2}" fill="#0A0A0A" opacity="0.10"/>`;
  }
  if (mode === "flat-black") {
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#0A0A0A"/>
      <ellipse cx="${cx - r * 0.28}" cy="${cy - r * 0.34}" rx="${r * 0.3}" ry="${r * 0.2}" fill="#FFFFFF" opacity="0.14"/>`;
  }

  if (mode === "light") {
    // charcoal sphere on paper
    return `
    <defs>
      <radialGradient id="${id}s" cx="36%" cy="28%" r="78%">
        <stop offset="0%" stop-color="#4a4a4f"/>
        <stop offset="42%" stop-color="#1f1f23"/>
        <stop offset="100%" stop-color="#050505"/>
      </radialGradient>
      <radialGradient id="${id}b" cx="72%" cy="84%" r="46%">
        <stop offset="0%" stop-color="#8a8a90" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="#8a8a90" stop-opacity="0"/>
      </radialGradient>
      <clipPath id="${id}c"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath>
    </defs>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id}s)"/>
    <g clip-path="url(#${id}c)">
      <ellipse cx="${cx + r * 0.32}" cy="${cy + r * 0.4}" rx="${r * 0.62}" ry="${r * 0.52}" fill="url(#${id}b)"/>
      <ellipse cx="${cx - r * 0.26}" cy="${cy - r * 0.32}" rx="${r * 0.4}" ry="${r * 0.28}" fill="#ffffff" opacity="0.22"/>
      <ellipse cx="${cx - r * 0.3}" cy="${cy - r * 0.36}" rx="${r * 0.15}" ry="${r * 0.1}" fill="#ffffff" opacity="0.5"/>
    </g>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${C.accent}" stroke-opacity="0.3" stroke-width="${Math.max(0.6, r * 0.018)}"/>`;
  }

  // dark (default): glossy white sphere + teal rim
  return `
    <defs>
      <radialGradient id="${id}s" cx="36%" cy="28%" r="75%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="40%" stop-color="#f3f4f6"/>
        <stop offset="76%" stop-color="#d2d6db"/>
        <stop offset="100%" stop-color="#aeb3ba"/>
      </radialGradient>
      <radialGradient id="${id}h" cx="60%" cy="64%" r="62%">
        <stop offset="55%" stop-color="#1b1d22" stop-opacity="0"/>
        <stop offset="100%" stop-color="#1b1d22" stop-opacity="0.45"/>
      </radialGradient>
      <radialGradient id="${id}b" cx="74%" cy="86%" r="42%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </radialGradient>
      <clipPath id="${id}c"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath>
    </defs>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id}s)"/>
    <g clip-path="url(#${id}c)">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id}h)"/>
      <ellipse cx="${cx + r * 0.34}" cy="${cy + r * 0.42}" rx="${r * 0.6}" ry="${r * 0.5}" fill="url(#${id}b)"/>
      <ellipse cx="${cx - r * 0.26}" cy="${cy - r * 0.32}" rx="${r * 0.42}" ry="${r * 0.3}" fill="#ffffff" opacity="0.55"/>
      <ellipse cx="${cx - r * 0.3}" cy="${cy - r * 0.36}" rx="${r * 0.16}" ry="${r * 0.11}" fill="#ffffff" opacity="0.95"/>
    </g>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${C.accent}" stroke-opacity="0.45" stroke-width="${Math.max(0.6, r * 0.028)}"/>`;
}

/** Teal radial glow behind the orb / corner ambiance. */
export function glow(cx, cy, r, op = 0.22) {
  const id = uid();
  return `<defs><radialGradient id="${id}" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="rgba(17,181,167,${op})"/>
    <stop offset="100%" stop-color="rgba(17,181,167,0)"/>
  </radialGradient></defs>
  <ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r}" fill="url(#${id})"/>`;
}

/** Low-opacity dotted-grid rectangle. */
export function dots(w, h, dark = true) {
  const id = uid();
  const col = dark ? "rgba(255,255,255,0.06)" : "rgba(10,10,10,0.06)";
  return `<defs><pattern id="${id}" width="32" height="32" patternUnits="userSpaceOnUse">
    <circle cx="1.2" cy="1.2" r="1.2" fill="${col}"/></pattern></defs>
  <rect width="${w}" height="${h}" fill="url(#${id})"/>`;
}

/** Horizontal lockup: 3D orb + "Jwebly" wordmark. Returns a <g>. */
export function lockup(x, y, orbR, fontSize, mode = "dark") {
  const inkColor =
    mode === "light" ? C.inkDark : mode === "flat-black" ? C.inkDark : C.ink;
  const om = mode === "dark" || mode === "light" ? mode : mode === "flat-black" ? "flat-black" : "flat-white";
  const tx = x + orbR * 2 + orbR * 0.7;
  const ty = y + orbR + fontSize * 0.36;
  return `<g>${orb(x + orbR, y + orbR, orbR, om)}
    <text x="${tx}" y="${ty}" font-family="${SANS}" font-size="${fontSize}" font-weight="600" letter-spacing="${fontSize * -0.04}" fill="${inkColor}">Jwebly</text></g>`;
}

/** Mono kicker with leading hairline dash. */
export function kicker(x, y, text, color = C.faint) {
  return `<g><rect x="${x}" y="${y - 6}" width="40" height="2" fill="${color}"/>
    <text x="${x + 56}" y="${y}" font-family="${MONO}" font-size="20" letter-spacing="4" fill="${color}">${esc(text)}</text></g>`;
}

export function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Wrap a full document. */
export function doc(w, h, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
}
