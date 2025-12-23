import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "AI Automation Birmingham | Custom AI for West Midlands Agencies | JWEBLY",
  description: "Custom AI automation for West Midlands recruitment and accounting agencies. Trained on your data, integrated with your systems. Book discovery call.",
  keywords: ["AI automation Birmingham", "custom AI West Midlands", "recruitment AI", "accounting automation", "AI agency Birmingham"],
  alternates: {
    canonical: "https://jwebly.co.uk",
  },
  openGraph: {
    title: "AI Automation Birmingham | Custom AI for West Midlands Agencies",
    description: "Custom AI automation for West Midlands recruitment and accounting agencies. Trained on your data, integrated with your systems.",
    url: "https://jwebly.co.uk",
    siteName: "JWEBLY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Birmingham | Custom AI for West Midlands Agencies",
    description: "Custom AI automation for West Midlands recruitment and accounting agencies. Trained on your data, integrated with your systems.",
  },
};

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

