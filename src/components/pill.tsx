import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * The site's CTA buttons (CLAUDE.md §3):
 *  - primary   = white pill, dark text (Vercel "Start Deploying" style)
 *  - secondary = dark pill, hairline border, white text
 * `arrowCircle` renders the arrow inside a circle for the large hero/CTA pills.
 */
export function Pill({
  href,
  label,
  variant = "primary",
  size = "md",
  arrow = true,
  arrowCircle = false,
  external = false,
  onClick,
  className = "",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  arrow?: boolean;
  arrowCircle?: boolean;
  external?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const sizing =
    size === "lg" ? "h-12 px-6 text-[15px]" : "h-10 px-5 text-sm";
  const look =
    variant === "primary"
      ? "bg-foreground text-background hover:opacity-90"
      : "border border-border bg-surface text-foreground hover:border-border-strong";

  return (
    <Link
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-2 rounded-[var(--pill)] font-medium transition-all duration-200 hover:-translate-y-px ${sizing} ${look} ${className}`}
    >
      {label}
      {arrow &&
        (arrowCircle ? (
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full ${
              variant === "primary" ? "bg-background/10" : "bg-foreground/10"
            }`}
          >
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        ) : (
          <ArrowRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        ))}
    </Link>
  );
}
