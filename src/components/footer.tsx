import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Logo } from "@/components/logo";
import { FOOTER, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer
      id="company"
      className="scroll-mt-16 border-t border-border bg-surface"
    >
      <div className="mx-auto max-w-page px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Brand + tagline */}
          <div className="max-w-xs">
            <Logo wordmarkClassName="text-[22px]" />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {FOOTER.tagline}
            </p>
            <p className="mt-5 text-sm text-faint">{SITE.location}</p>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jwebly on LinkedIn"
              className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
            >
              <Linkedin size={16} />
            </a>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">{FOOTER.legal}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
