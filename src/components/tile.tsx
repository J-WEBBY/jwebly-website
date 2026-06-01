import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

/**
 * Vercel-style tile (CLAUDE.md §6): faint dotted-grid texture, a folded
 * top-right corner, and a centered icon with a soft teal radial glow behind it.
 * Hover lifts the glow and brightens the border. Used for the two "What we
 * build" tiles and (optionally) resource/partner cards.
 *
 * `as` controls the rendered element — a Link when `href` is given, else a div.
 */
export function Tile({
  icon: Icon,
  title,
  body,
  href,
  cta,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  href?: string;
  cta?: string;
  className?: string;
}) {
  const inner = (
    <>
      {/* Centered glowing icon */}
      <div className="icon-glow mx-auto flex h-14 w-14 items-center justify-center rounded-[var(--radius)] border border-border bg-surface-2">
        <Icon size={22} className="relative text-accent" aria-hidden />
      </div>

      <h3 className="mt-7 text-xl font-medium tracking-[-0.02em] text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>

      {cta && (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
          <span className="border-b-2 border-accent pb-0.5">{cta}</span>
          <ArrowRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </span>
      )}
    </>
  );

  const base =
    "group dotted-grid fold-corner relative flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-surface p-7 transition-all duration-200 hover:border-border-strong hover:-translate-y-0.5";

  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {inner}
      </Link>
    );
  }
  return <div className={`${base} ${className}`}>{inner}</div>;
}
