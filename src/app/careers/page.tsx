import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Block } from "@/components/page-shell";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work at Jwebly — a small, founder-led team building production-grade AI for high-stakes industries.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <PageShell
      kicker="CAREERS"
      title="Build AI that has to work."
      intro="We're a small, founder-led team shipping production AI into businesses that can't afford guesswork. We hire rarely and deliberately."
    >
      <Block heading="Who does well here">
        <p>
          People who own outcomes end to end, sweat the details, and prefer a
          high bar over a big team. Engineers who can design, build, integrate
          and operate — not just one slice of it.
        </p>
      </Block>
      <Block heading="Open roles">
        <p>
          No specific openings posted right now — but we always want to hear
          from exceptional people. If that's you, tell us what you'd want to
          build.
        </p>
      </Block>
      <Block heading="Get in touch">
        <p>
          Email{" "}
          <a
            href={`mailto:${SITE.email}?subject=Careers`}
            className="text-foreground underline decoration-accent decoration-2 underline-offset-4"
          >
            {SITE.email}
          </a>{" "}
          or{" "}
          <Link
            href="/book-a-call"
            className="text-foreground underline decoration-accent decoration-2 underline-offset-4"
          >
            send us a note
          </Link>{" "}
          and pick &ldquo;Careers&rdquo;.
        </p>
      </Block>
    </PageShell>
  );
}
