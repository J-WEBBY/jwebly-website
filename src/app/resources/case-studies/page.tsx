import { Metadata } from "next";
import { CaseStudiesHero } from "@/components/resources/case-studies-hero";
import { CaseStudiesGrid } from "@/components/resources/case-studies-grid";
import { CaseStudiesFilters } from "@/components/resources/case-studies-filters";

export const metadata: Metadata = {
  title: "AI Automation Case Studies | Client Success Stories for UK Agencies | JWEBLY",
  description: "Real AI automation case studies and client success stories for UK agencies. See autonomous AI in action with measurable results and ROI.",
  keywords: ["AI automation case studies", "automation case studies UK", "AI success stories", "automation ROI", "AI case studies"],
  alternates: {
    canonical: "https://jwebly.co.uk/resources/case-studies",
  },
  openGraph: {
    title: "AI Automation Case Studies | Client Success Stories for UK Agencies",
    description: "Real AI automation case studies and client success stories for UK agencies. See autonomous AI in action with measurable results.",
    url: "https://jwebly.co.uk/resources/case-studies",
    siteName: "JWEBLY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Case Studies | Client Success Stories for UK Agencies",
    description: "Real AI automation case studies and client success stories for UK agencies. See autonomous AI in action.",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-black">
      <CaseStudiesHero />
      <CaseStudiesFilters />
      <CaseStudiesGrid />
    </main>
  );
}

