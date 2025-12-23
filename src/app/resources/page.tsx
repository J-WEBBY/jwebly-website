import { Metadata } from "next";
import { ResourcesHero } from "@/components/resources/resources-hero";
import { ResourcesGrid } from "@/components/resources/resources-grid";
import { DownloadResources } from "@/components/resources/download-resources";
import { ResourcesCTA } from "@/components/resources/resources-cta";

export const metadata: Metadata = {
  title: "AI Automation Guide | Research and Case Studies for UK Agencies | JWEBLY",
  description: "AI automation guides, research insights, and case studies for UK agencies. Client reviews and resources to make informed automation decisions.",
  keywords: ["AI automation guide", "automation case studies", "AI research", "automation resources", "AI case studies UK"],
  alternates: {
    canonical: "https://jwebly.co.uk/resources",
  },
  openGraph: {
    title: "AI Automation Guide | Research and Case Studies for UK Agencies",
    description: "AI automation guides, research insights, and case studies for UK agencies. Client reviews and resources for informed decisions.",
    url: "https://jwebly.co.uk/resources",
    siteName: "JWEBLY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Guide | Research and Case Studies for UK Agencies",
    description: "AI automation guides, research insights, and case studies for UK agencies. Client reviews and resources.",
  },
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

