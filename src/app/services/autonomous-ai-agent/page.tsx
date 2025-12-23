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
  title: "Autonomous AI Agent Agencies | Custom AI Agent with Decision-Making | JWEBLY",
  description: "Autonomous AI agent with decision-making for UK agencies. Custom AI agent trained on your data, £7,000-12,000, 8-12 weeks. Birmingham AI specialists.",
  keywords: ["autonomous AI agent", "custom AI agent", "AI decision-making", "autonomous AI agencies", "AI agent Birmingham"],
  alternates: {
    canonical: "https://jwebly.co.uk/services/autonomous-ai-agent",
  },
  openGraph: {
    title: "Autonomous AI Agent Agencies | Custom AI Agent with Decision-Making",
    description: "Autonomous AI agent with decision-making for UK agencies. Custom AI agent trained on your data, £7,000-12,000, 8-12 weeks.",
    url: "https://jwebly.co.uk/services/autonomous-ai-agent",
    siteName: "JWEBLY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomous AI Agent Agencies | Custom AI Agent with Decision-Making",
    description: "Autonomous AI agent with decision-making for UK agencies. Custom AI agent trained on your data, £7,000-12,000.",
  },
};

export default function AutonomousAIAgentPage() {
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

