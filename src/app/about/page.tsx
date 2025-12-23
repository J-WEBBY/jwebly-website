import { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutMission } from "@/components/about/about-mission";
import { AboutValues } from "@/components/about/about-values";
import { AboutTeam } from "@/components/about/about-team";
import { AboutJoe } from "@/components/about/about-joe";
import { AboutCTA } from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "AI Agency Birmingham | West Midlands AI Automation Specialists | JWEBLY",
  description: "West Midlands AI automation specialists based in Birmingham. Making enterprise-grade AI accessible to SMEs. Mission, values, and team.",
  keywords: ["AI agency Birmingham", "West Midlands AI", "Birmingham automation", "AI specialists Birmingham", "West Midlands AI agency"],
  alternates: {
    canonical: "https://jwebly.co.uk/about",
  },
  openGraph: {
    title: "AI Agency Birmingham | West Midlands AI Automation Specialists",
    description: "West Midlands AI automation specialists based in Birmingham. Making enterprise-grade AI accessible to SMEs. Mission, values, and team.",
    url: "https://jwebly.co.uk/about",
    siteName: "JWEBLY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agency Birmingham | West Midlands AI Automation Specialists",
    description: "West Midlands AI automation specialists based in Birmingham. Making enterprise-grade AI accessible to SMEs.",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-black">
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <AboutJoe />
      <AboutCTA />
    </main>
  );
}

