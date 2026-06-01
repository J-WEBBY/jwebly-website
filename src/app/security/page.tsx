import type { Metadata } from "next";
import { PageShell, Block } from "@/components/page-shell";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How Jwebly approaches security — for this website and for the systems we build and operate.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return (
    <PageShell
      kicker="TRUST"
      title="Security"
      intro="We build for high-stakes industries, so security isn't a bolt-on. Here's how we think about it."
    >
      <Block heading="The systems we build">
        <p>
          Every deployment is integrated into the tools you already run, with
          access scoped to what the system needs and no more. Your data stays in
          your systems; we build around them rather than copying everything out.
        </p>
      </Block>
      <Block heading="This website">
        <p>
          The site collects only what you submit through the contact form, and
          API keys for our assistant and email never reach the browser — all
          model and email calls run server-side.
        </p>
      </Block>
      <Block heading="Reporting an issue">
        <p>
          If you believe you&rsquo;ve found a security issue, please tell us at{" "}
          <a
            href={`mailto:${SITE.email}?subject=Security`}
            className="text-foreground underline decoration-accent decoration-2 underline-offset-4"
          >
            {SITE.email}
          </a>{" "}
          and we&rsquo;ll respond quickly.
        </p>
      </Block>
    </PageShell>
  );
}
