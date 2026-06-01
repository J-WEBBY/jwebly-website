import Link from "next/link";
import { OrbMark } from "@/components/orb-mark";

/**
 * Jwebly logo = the 3D orb mark + the wordmark "Jwebly" in Geist Sans
 * (weight 600, tight tracking). The orb is a glossy white sphere with a teal
 * rim so it reads on the near-black site (CLAUDE.md §3/§4).
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
      <OrbMark size={26} />
      <span
        className={`font-sans font-semibold tracking-[-0.04em] leading-none text-foreground ${wordmarkClassName}`}
      >
        Jwebly
      </span>
    </Link>
  );
}
