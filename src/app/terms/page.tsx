import type { Metadata } from "next";
import { PageShell, Block } from "@/components/page-shell";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Jwebly website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageShell
      kicker="LEGAL"
      title="Terms of use"
      intro="These terms cover your use of the jwebly.com website. They are a plain-English summary, not a contract for any engagement — project terms are agreed separately in writing."
    >
      <Block heading="Using this site">
        <p>
          This site is provided for information. The content, branding and
          examples on it are owned by Jwebly and may not be copied or reused
          without permission.
        </p>
      </Block>
      <Block heading="No warranty">
        <p>
          We work to keep the site accurate and available, but we provide it
          &ldquo;as is&rdquo; without warranties. Nothing on this site is an
          offer, a price, or a commitment — any engagement is scoped and agreed
          on a call and in a written agreement.
        </p>
      </Block>
      <Block heading="Joe, our assistant">
        <p>
          Joe is an AI assistant for general questions about Jwebly. His replies
          are informational and may be imperfect; they aren&rsquo;t professional
          advice and don&rsquo;t bind Jwebly to anything.
        </p>
      </Block>
      <Block heading="Contact">
        <p>
          Questions about these terms? Email{" "}
          <a
            href={`mailto:${SITE.email}?subject=Terms`}
            className="text-foreground underline decoration-accent decoration-2 underline-offset-4"
          >
            {SITE.email}
          </a>
          .
        </p>
      </Block>
    </PageShell>
  );
}
