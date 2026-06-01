import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PARTNERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partners — the tools we integrate around",
  description:
    "Jwebly integrates around the calendars, practice management, records, messaging and payment platforms modern operations already trust.",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-page px-6 py-24 sm:px-8">
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              <span aria-hidden className="h-px w-6 bg-faint" />
              {PARTNERS.kicker}
            </p>
            <h1 className="mt-6 max-w-3xl font-semibold tracking-[-0.03em] text-[clamp(32px,4vw,52px)]">
              {PARTNERS.heading}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {PARTNERS.sub}
            </p>

            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius)] border border-border bg-border sm:grid-cols-3">
              {PARTNERS.categories.map((cat) => (
                <div
                  key={cat}
                  className="flex min-h-24 items-center justify-center bg-surface px-4 py-8 text-center text-sm text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  {cat}
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted">
              {PARTNERS.partnerLine.lead}{" "}
              <Link
                href={PARTNERS.partnerLine.cta.href}
                className="font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4"
              >
                {PARTNERS.partnerLine.cta.label}
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
