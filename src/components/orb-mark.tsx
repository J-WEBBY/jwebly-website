import { useId } from "react";

/**
 * The Jwebly orb — the logo mark, rendered as a near-3D glossy sphere (matches
 * the brand kit): layered base gradient, form shadow, bounce light, soft + sharp
 * speculars, and a teal rim. Used by the nav/footer logo and the Joe launcher.
 *
 * `variant`:
 *   "light" (default) — white glossy sphere for dark backgrounds
 *   "dark"            — charcoal sphere for light backgrounds
 * useId keeps gradient ids unique so multiple orbs can render at once (SSR-safe).
 */
export function OrbMark({
  size = 26,
  variant = "light",
}: {
  size?: number;
  variant?: "light" | "dark";
}) {
  const u = useId().replace(/:/g, "");
  const r = 13;
  const cx = 14;
  const cy = 14;

  const sphere = variant === "dark"
    ? [
        { o: "0%", c: "#4a4a4f" },
        { o: "42%", c: "#1f1f23" },
        { o: "100%", c: "#050505" },
      ]
    : [
        { o: "0%", c: "#ffffff" },
        { o: "40%", c: "#f3f4f6" },
        { o: "76%", c: "#d2d6db" },
        { o: "100%", c: "#aeb3ba" },
      ];

  const specOpacity = variant === "dark" ? 0.22 : 0.55;
  const highlightOpacity = variant === "dark" ? 0.5 : 0.95;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <radialGradient id={`${u}s`} cx="36%" cy="28%" r="78%">
          {sphere.map((s) => (
            <stop key={s.o} offset={s.o} stopColor={s.c} />
          ))}
        </radialGradient>
        <radialGradient id={`${u}h`} cx="60%" cy="64%" r="62%">
          <stop offset="55%" stopColor="#1b1d22" stopOpacity="0" />
          <stop offset="100%" stopColor="#1b1d22" stopOpacity={variant === "dark" ? 0 : 0.42} />
        </radialGradient>
        <radialGradient id={`${u}b`} cx="74%" cy="86%" r="44%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity={variant === "dark" ? 0.45 : 0.5} />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <clipPath id={`${u}c`}>
          <circle cx={cx} cy={cy} r={r} />
        </clipPath>
      </defs>

      <circle cx={cx} cy={cy} r={r} fill={`url(#${u}s)`} />
      <g clipPath={`url(#${u}c)`}>
        <circle cx={cx} cy={cy} r={r} fill={`url(#${u}h)`} />
        <ellipse cx={cx + r * 0.34} cy={cy + r * 0.42} rx={r * 0.6} ry={r * 0.5} fill={`url(#${u}b)`} />
        <ellipse cx={cx - r * 0.26} cy={cy - r * 0.32} rx={r * 0.42} ry={r * 0.3} fill="#ffffff" opacity={specOpacity} />
        <ellipse cx={cx - r * 0.3} cy={cy - r * 0.36} rx={r * 0.16} ry={r * 0.11} fill="#ffffff" opacity={highlightOpacity} />
      </g>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#11b5a7" strokeOpacity={variant === "dark" ? 0.3 : 0.45} strokeWidth="0.6" />
    </svg>
  );
}
