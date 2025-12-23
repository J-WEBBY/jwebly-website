"use client";

import { HeroSection } from "@/components/pilot/hero-section";
import { ProblemSection } from "@/components/pilot/problem-section";
import { WorkflowCards } from "@/components/pilot/workflow-cards";
import { TimelineSection } from "@/components/pilot/timeline-section";
import { ComparisonSection } from "@/components/pilot/comparison-section";
import { TechStackSection } from "@/components/pilot/tech-stack";
import { StatsCounter } from "@/components/pilot/stats-counter";
import { PricingSection } from "@/components/pilot/pricing-section";
import { PilotFAQ } from "@/components/pilot/pilot-faq";
import { PilotCTA } from "@/components/pilot/pilot-cta";

export function PilotPageClient() {
  return (
    <main className="bg-black">
      <HeroSection />
      <ProblemSection />
      <WorkflowCards />
      <TimelineSection />
      <ComparisonSection />
      <TechStackSection />
      <StatsCounter />
      <PricingSection />
      <PilotFAQ />
      <PilotCTA />
    </main>
  );
}

