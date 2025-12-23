import { Metadata } from "next";
import { HowItWorksHero } from "@/components/how-it-works/hero";
import { ProcessTimeline } from "@/components/how-it-works/process-timeline";
import { JoeJourney } from "@/components/how-it-works/joe-journey";
import { InteractiveProcess } from "@/components/how-it-works/interactive-process";
import { DeliveryPhases } from "@/components/how-it-works/delivery-phases";
import { MaintenanceSupport } from "@/components/how-it-works/maintenance-support";
import { ProcessCTA } from "@/components/how-it-works/process-cta";

export const metadata: Metadata = {
  title: "AI Automation Process | 5-Phase Implementation from Discovery to Optimization | JWEBLY",
  description: "5-phase AI automation implementation process: discovery, design, deployment, optimization, and support. Birmingham AI automation specialists.",
  keywords: ["AI automation process", "AI implementation", "automation process", "AI deployment", "automation implementation"],
  alternates: {
    canonical: "https://jwebly.co.uk/how-it-works",
  },
  openGraph: {
    title: "AI Automation Process | 5-Phase Implementation from Discovery to Optimization",
    description: "5-phase AI automation implementation process: discovery, design, deployment, optimization, and support. Birmingham specialists.",
    url: "https://jwebly.co.uk/how-it-works",
    siteName: "JWEBLY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Process | 5-Phase Implementation from Discovery to Optimization",
    description: "5-phase AI automation implementation process: discovery, design, deployment, optimization, and support.",
  },
};

export default function HowItWorksPage() {
  return (
    <main className="bg-black">
      <HowItWorksHero />
      <JoeJourney />
      <ProcessTimeline />
      <InteractiveProcess />
      <DeliveryPhases />
      <MaintenanceSupport />
      <ProcessCTA />
    </main>
  );
}

