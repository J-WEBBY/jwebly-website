import { Metadata } from "next";
import { ResearchHero } from "@/components/resources/research-hero";
import { ResearchGrid } from "@/components/resources/research-grid";
import { ResearchFilters } from "@/components/resources/research-filters";
import { ResearchNewsletter } from "@/components/resources/research-newsletter";

export const metadata: Metadata = {
  title: "Research & Insights | JWEBLY",
  description: "Latest research on AI automation, intelligent systems, and autonomous agents. Deep dives into implementation strategies and ROI analysis.",
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

