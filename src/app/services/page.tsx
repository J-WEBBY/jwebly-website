import { Metadata } from "next";
import { HeroSection } from "@/components/services/hero-section";
import { ServiceCards } from "@/components/services/service-cards";
import { ComparisonTable } from "@/components/services/comparison-table";
import { UseCaseSelector } from "@/components/services/use-case-selector";
import { PricingDetail } from "@/components/services/pricing-detail";
import { ServicesFAQ } from "@/components/services/services-faq";
import { ServicesCTA } from "@/components/services/services-cta";

export const metadata: Metadata = {
  title: "Services | JWEBLY",
  description: "Choose the right AI automation solution for your business. From implementation pilots to custom AI agents.",
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


