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
  title: "Intelligent Automation System UK | Multi-Workflow AI System for Agencies | JWEBLY",
  description: "Multi-workflow intelligent automation system for UK agencies. 5-7 interconnected workflows, £3,000-5,000, 6-8 weeks. Birmingham specialists.",
  keywords: ["intelligent automation system UK", "multi-workflow AI", "automation system agencies", "workflow automation Birmingham"],
  alternates: {
    canonical: "https://jwebly.co.uk/services/intelligent-automation-system",
  },
  openGraph: {
    title: "Intelligent Automation System UK | Multi-Workflow AI System for Agencies",
    description: "Multi-workflow intelligent automation system for UK agencies. 5-7 interconnected workflows, £3,000-5,000, 6-8 weeks deployment.",
    url: "https://jwebly.co.uk/services/intelligent-automation-system",
    siteName: "JWEBLY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelligent Automation System UK | Multi-Workflow AI System for Agencies",
    description: "Multi-workflow intelligent automation system for UK agencies. 5-7 interconnected workflows, £3,000-5,000, 6-8 weeks.",
  },
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

