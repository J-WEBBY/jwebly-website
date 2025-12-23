import { Metadata } from "next";
import { ReviewsHero } from "@/components/resources/reviews-hero";
import { ReviewsStats } from "@/components/resources/reviews-stats";
import { ReviewsGrid } from "@/components/resources/reviews-grid";
import { ReviewsCTA } from "@/components/resources/reviews-cta";

export const metadata: Metadata = {
  title: "AI Automation Client Reviews | Testimonials from UK Agencies | JWEBLY",
  description: "Real client reviews and testimonials from UK agencies using AI automation. Satisfaction ratings and measurable results from decision-makers.",
  keywords: ["AI automation reviews", "automation testimonials", "AI agency reviews", "client reviews", "automation reviews UK"],
  alternates: {
    canonical: "https://jwebly.co.uk/resources/reviews",
  },
  openGraph: {
    title: "AI Automation Client Reviews | Testimonials from UK Agencies",
    description: "Real client reviews and testimonials from UK agencies using AI automation. Satisfaction ratings and measurable results.",
    url: "https://jwebly.co.uk/resources/reviews",
    siteName: "JWEBLY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Client Reviews | Testimonials from UK Agencies",
    description: "Real client reviews and testimonials from UK agencies using AI automation. Satisfaction ratings and measurable results.",
  },
};

export default function ReviewsPage() {
  return (
    <main className="bg-black">
      <ReviewsHero />
      <ReviewsStats />
      <ReviewsGrid />
      <ReviewsCTA />
    </main>
  );
}

