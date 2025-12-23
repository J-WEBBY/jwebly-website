import { Metadata } from "next";
import { HeroSection } from "@/components/services/hero-section";
import { ServiceCards } from "@/components/services/service-cards";
import { ComparisonTable } from "@/components/services/comparison-table";
import { UseCaseSelector } from "@/components/services/use-case-selector";
import { PricingDetail } from "@/components/services/pricing-detail";
import { ServicesFAQ } from "@/components/services/services-faq";
import { ServicesCTA } from "@/components/services/services-cta";

export const metadata: Metadata = {
  title: "AI Automation Services | Pilot, System & Agent Solutions for UK Agencies | JWEBLY",
  description: "AI automation services for UK agencies: £1,500 pilots, £3,000-5,000 systems, £7,000-12,000 agents. Birmingham AI automation specialists.",
  keywords: ["AI automation services", "automation services UK", "AI services Birmingham", "automation solutions", "AI agency services"],
  alternates: {
    canonical: "https://jwebly.co.uk/services",
  },
  openGraph: {
    title: "AI Automation Services | Pilot, System & Agent Solutions for UK Agencies",
    description: "AI automation services for UK agencies: £1,500 pilots, £3,000-5,000 systems, £7,000-12,000 agents. Birmingham specialists.",
    url: "https://jwebly.co.uk/services",
    siteName: "JWEBLY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services | Pilot, System & Agent Solutions for UK Agencies",
    description: "AI automation services for UK agencies: £1,500 pilots, £3,000-5,000 systems, £7,000-12,000 agents.",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-black">
      <HeroSection />
      <ServiceCards />
      <ComparisonTable />
      <UseCaseSelector />
      <PricingDetail />
      <ServicesFAQ />
      <ServicesCTA />
    </main>
  );
}


