import { useId } from "react";

/**
 * Joe's orb mark — the white version of the Jwebly orb (matches the logo), with a
 * faint teal rim so it reads on both the dark launcher pill and the panel header.
 * useId gives a stable, SSR-safe gradient id so multiple orbs can render at once.
 */
export function JoeOrb({ size = 22 }: { size?: number }) {
  const id = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <radialGradient id={id} cx="38%" cy="32%" r="80%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F2F2F2" />
          <stop offset="100%" stopColor="#C8C8C8" />
        </radialGradient>
      </defs>
      <circle
        cx="14"
        cy="14"
        r="13"
        fill={`url(#${id})`}
        stroke="rgba(17,181,167,0.45)"
        strokeWidth="0.8"
      />
      <ellipse cx="10.5" cy="9.5" rx="4.5" ry="3" fill="#FFFFFF" opacity={0.55} />
    </svg>
  );
}
