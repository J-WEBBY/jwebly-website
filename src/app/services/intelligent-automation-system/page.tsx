import { Metadata } from "next";
import { Hero3D } from "@/components/system/hero-3d";
import { ProblemScale } from "@/components/system/problem-scale";
import { WorkflowBuilder } from "@/components/system/workflow-builder";
import { SystemArchitecture } from "@/components/system/system-architecture";
import { SystemComparison } from "@/components/system/system-comparison";
import { ROICalculator } from "@/components/system/roi-calculator";
import { JoeChat } from "@/components/system/joe-chat";
import { SystemTimeline } from "@/components/system/system-timeline";
import { PricingCalculator } from "@/components/system/pricing-calculator";
import { SystemFAQ } from "@/components/system/system-faq";
import { SystemCTA } from "@/components/system/system-cta";

export const metadata: Metadata = {
  title: "Intelligent Automation System | JWEBLY",
  description: "Complete operational upgrade with 5-7 interconnected workflows working as a unified system. £3,000-5,000, 6-8 weeks deployment.",
};

export default function IntelligentAutomationSystemPage() {
  return (
    <main className="bg-black">
      <Hero3D />
      <ProblemScale />
      <WorkflowBuilder />
      <SystemArchitecture />
      <SystemComparison />
      <ROICalculator />
      <JoeChat />
      <SystemTimeline />
      <PricingCalculator />
      <SystemFAQ />
      <SystemCTA />
    </main>
  );
}

