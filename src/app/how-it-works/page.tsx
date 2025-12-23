import { Metadata } from "next";
import { HowItWorksHero } from "@/components/how-it-works/hero";
import { ProcessTimeline } from "@/components/how-it-works/process-timeline";
import { JoeJourney } from "@/components/how-it-works/joe-journey";
import { InteractiveProcess } from "@/components/how-it-works/interactive-process";
import { DeliveryPhases } from "@/components/how-it-works/delivery-phases";
import { MaintenanceSupport } from "@/components/how-it-works/maintenance-support";
import { ProcessCTA } from "@/components/how-it-works/process-cta";

export const metadata: Metadata = {
  title: "How It Works | JWEBLY",
  description: "Our complete process from discovery call to delivery, retention, and ongoing support. Interactive journey with Joe AI guidance.",
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

