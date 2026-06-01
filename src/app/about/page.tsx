import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Block } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jwebly is a boutique that builds, integrates and operates production-grade AI systems for high-stakes industries. HealthOS is the flagship.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell
      kicker="COMPANY"
      title="A boutique for AI that can't get it wrong."
      intro="Jwebly builds production-grade AI systems for businesses in high-stakes, specialist fields — places where a dropped enquiry or a wrong answer costs real money or trust."
    >
      <Block>
        <p>
          We started in healthcare. HealthOS, our flagship, is an AI front desk
          for private clinics that answers every enquiry the moment it lands,
          qualifies the patient, and books them straight into the calendar —
          day, night, weekend.
        </p>
        <p>
          The same craft goes into bespoke systems for teams in any field:
          custom automations and agents, built around the tools you already run
          and owned end to end. We don't hand you a login and disappear — every
          rollout is led, fitted, and kept running.
        </p>
      </Block>
      <Block heading="How we work">
        <p>
          Understand, build, integrate, operate. We learn how your work flows
          today, shape the system to your reality, wire it into your stack, and
          keep it sharp as you grow. It earns its place from week one.
        </p>
      </Block>
      <Block heading="Talk to us">
        <p>
          The best way to see if we're a fit is a short call.{" "}
          <Link
            href="/book-a-call"
            className="text-foreground underline decoration-accent decoration-2 underline-offset-4"
          >
            Book a call
          </Link>{" "}
          and we'll map it with you.
        </p>
      </Block>
    </PageShell>
  );
}
