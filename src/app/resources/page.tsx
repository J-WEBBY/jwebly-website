import { Metadata } from "next";
import { ResourcesHero } from "@/components/resources/resources-hero";
import { ResourcesGrid } from "@/components/resources/resources-grid";
import { DownloadResources } from "@/components/resources/download-resources";
import { ResourcesCTA } from "@/components/resources/resources-cta";

export const metadata: Metadata = {
  title: "Resources | JWEBLY",
  description: "Research insights, case studies, and client reviews. Everything you need to make an informed decision about AI automation.",
};

export default function ResourcesPage() {
  return (
    <main className="bg-black">
      <ResourcesHero />
      <ResourcesGrid />
      <DownloadResources />
      <ResourcesCTA />
    </main>
  );
}

