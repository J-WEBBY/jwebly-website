import { Metadata } from "next";
import { HeroNeuralNetwork } from "@/components/agent/hero-neural-network";
import { ProblemStrategic } from "@/components/agent/problem-strategic";
import { AgentBuilder } from "@/components/agent/agent-builder";
import { AgentVsComparison } from "@/components/agent/agent-vs-comparison";
import { LearningVisualization } from "@/components/agent/learning-visualization";
import { CapabilitiesMatrix } from "@/components/agent/capabilities-matrix";
import { IndustryExamples } from "@/components/agent/industry-examples";
import { AutonomySimulator } from "@/components/agent/autonomy-simulator";
import { JoeAgentDesigner } from "@/components/agent/joe-agent-designer";
import { LearningCurve } from "@/components/agent/learning-curve";
import { AgentArchitecture } from "@/components/agent/agent-architecture";
import { AgentTimeline } from "@/components/agent/agent-timeline";
import { AgentPricing } from "@/components/agent/agent-pricing";
import { AgentFAQ } from "@/components/agent/agent-faq";
import { AgentCTA } from "@/components/agent/agent-cta";

export const metadata: Metadata = {
  title: "Custom AI Agent UK | Autonomous AI with Decision-Making for Agencies | JWEBLY",
  description: "Custom AI agent with autonomous decision-making for UK agencies. Trained on your data, continuous learning, £7,000-12,000, 8-12 weeks.",
  keywords: ["custom AI agent", "autonomous AI agent", "AI decision-making", "custom AI UK", "AI agent agencies"],
  alternates: {
    canonical: "https://jwebly.co.uk/services/custom-ai-agent",
  },
  openGraph: {
    title: "Custom AI Agent UK | Autonomous AI with Decision-Making for Agencies",
    description: "Custom AI agent with autonomous decision-making for UK agencies. Trained on your data, continuous learning, £7,000-12,000.",
    url: "https://jwebly.co.uk/services/custom-ai-agent",
    siteName: "JWEBLY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI Agent UK | Autonomous AI with Decision-Making for Agencies",
    description: "Custom AI agent with autonomous decision-making for UK agencies. Trained on your data, continuous learning.",
  },
};

export default function CustomAIAgentPage() {
  return (
    <main className="bg-black">
      <HeroNeuralNetwork />
      <ProblemStrategic />
      <AgentBuilder />
      <AgentVsComparison />
      <LearningVisualization />
      <CapabilitiesMatrix />
      <IndustryExamples />
      <AutonomySimulator />
      <JoeAgentDesigner />
      <LearningCurve />
      <AgentArchitecture />
      <AgentTimeline />
      <AgentPricing />
      <AgentFAQ />
      <AgentCTA />
    </main>
  );
}

