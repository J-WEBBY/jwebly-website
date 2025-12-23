import { Metadata } from "next";
import { CaseStudiesHero } from "@/components/resources/case-studies-hero";
import { CaseStudiesGrid } from "@/components/resources/case-studies-grid";
import { CaseStudiesFilters } from "@/components/resources/case-studies-filters";

export const metadata: Metadata = {
  title: "Case Studies | JWEBLY",
  description: "Real client success stories, project portfolios, demos, and implementation case studies. See autonomous AI in action.",
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

