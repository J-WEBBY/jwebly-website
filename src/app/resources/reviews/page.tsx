import { Metadata } from "next";
import { ReviewsHero } from "@/components/resources/reviews-hero";
import { ReviewsStats } from "@/components/resources/reviews-stats";
import { ReviewsGrid } from "@/components/resources/reviews-grid";
import { ReviewsCTA } from "@/components/resources/reviews-cta";

export const metadata: Metadata = {
  title: "Client Reviews | JWEBLY",
  description: "Real client testimonials, satisfaction ratings, and measurable results. See what decision-makers say about working with Jwebly.",
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

