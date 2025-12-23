import { HeroSection } from "@/components/home/hero-section";
import { RotatingInfoBar } from "@/components/home/rotating-info-bar";
import { MeetJoeSection } from "@/components/home/meet-joe-section";
import { IntelligentAutomationSection } from "@/components/home/intelligent-automation-section";
import { AIAgentsSection } from "@/components/home/ai-agents-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { ResearchSection } from "@/components/home/research-section";
import { BuildPilotSection } from "@/components/home/build-pilot-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ResourcesSection } from "@/components/home/resources-section";
import { FinalCTASection } from "@/components/home/final-cta-section";

export default function HomePage() {
  return (
    <main className="bg-black">
      <HeroSection />
      <RotatingInfoBar />
      <MeetJoeSection />
      <IntelligentAutomationSection />
      <AIAgentsSection />
      <HowItWorksSection />
      <ResearchSection />
      <BuildPilotSection />
      <TestimonialsSection />
      <ResourcesSection />
      <FinalCTASection />
    </main>
  );
}

