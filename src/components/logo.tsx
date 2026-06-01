import Link from "next/link";

/**
 * Jwebly logo = the black version of the Jwebly Health orb + the wordmark
 * "Jwebly" in Geist Sans (weight 600, tight tracking).
 *
 * The site is dark-dominant (CLAUDE.md §3/§4): the orb is a white sphere with a
 * soft highlight and a faint teal rim-glow so it reads on near-black.
 * Replace with the real Health orb path when available.
 */
export function Logo({
  wordmarkClassName = "text-[21px]",
}: {
  wordmarkClassName?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Jwebly home"
      className="group inline-flex items-center gap-[9px] focus:outline-none"
    >
      <Orb />
      <span
        className={`font-sans font-semibold tracking-[-0.04em] leading-none text-foreground ${wordmarkClassName}`}
      >
        Jwebly
      </span>
    </Link>
  );
}

function Orb() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <radialGradient id="orb-mark" cx="38%" cy="32%" r="80%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F2F2F2" />
          <stop offset="100%" stopColor="#C8C8C8" />
        </radialGradient>
      </defs>
      <circle
        cx="14"
        cy="14"
        r="13"
        fill="url(#orb-mark)"
        stroke="rgba(17,181,167,0.35)"
        strokeWidth="0.6"
      />
      <ellipse cx="10.5" cy="9.5" rx="4.5" ry="3" fill="#FFFFFF" opacity={0.45} />
    </svg>
  );
}
