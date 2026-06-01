import type { Metadata } from "next";
import { PageShell, Block } from "@/components/page-shell";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Jwebly handles the limited personal data this website collects.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell
      kicker="LEGAL"
      title="Privacy"
      intro="This policy covers the jwebly.com marketing site. It is a plain-English summary, not legal advice; we'll expand it as the business grows."
    >
      <Block heading="What we collect">
        <p>
          When you submit the &ldquo;Book a call&rdquo; form, we collect the
          details you provide — your name, email, optional company, the reason
          for getting in touch, and any message. We use these only to respond to
          your enquiry.
        </p>
        <p>
          If you chat with Joe, our assistant, your messages are sent to our AI
          provider to generate a reply. We don&rsquo;t ask Joe to collect
          contact details, and conversations aren&rsquo;t tied to your identity.
        </p>
      </Block>
      <Block heading="What we don't do">
        <p>
          We don&rsquo;t sell your data, and we don&rsquo;t run advertising
          trackers on this site. We keep what you send us only as long as needed
          to handle your enquiry.
        </p>
      </Block>
      <Block heading="Your rights & contact">
        <p>
          You can ask us what we hold about you, or ask us to delete it, at any
          time. Email{" "}
          <a
            href={`mailto:${SITE.email}?subject=Privacy`}
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
