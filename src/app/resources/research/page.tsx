import { Metadata } from "next";
import { ResearchHero } from "@/components/resources/research-hero";
import { ResearchGrid } from "@/components/resources/research-grid";
import { ResearchFilters } from "@/components/resources/research-filters";
import { ResearchNewsletter } from "@/components/resources/research-newsletter";

export const metadata: Metadata = {
  title: "AI Automation Research | Implementation Strategies and ROI Analysis | JWEBLY",
  description: "Latest AI automation research, intelligent systems insights, and autonomous agent studies. Implementation strategies and ROI analysis for UK agencies.",
  keywords: ["AI automation research", "automation research", "AI implementation strategies", "automation ROI", "AI research UK"],
  alternates: {
    canonical: "https://jwebly.co.uk/resources/research",
  },
  openGraph: {
    title: "AI Automation Research | Implementation Strategies and ROI Analysis",
    description: "Latest AI automation research, intelligent systems insights, and autonomous agent studies. Implementation strategies and ROI analysis.",
    url: "https://jwebly.co.uk/resources/research",
    siteName: "JWEBLY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Research | Implementation Strategies and ROI Analysis",
    description: "Latest AI automation research, intelligent systems insights, and autonomous agent studies. Implementation strategies.",
  },
};

export default function ResearchPage() {
  return (
    <main className="bg-black">
      <ResearchHero />
      <ResearchFilters />
      <ResearchGrid />
      <ResearchNewsletter />
    </main>
  );
}

