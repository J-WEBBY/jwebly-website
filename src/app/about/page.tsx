import { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutMission } from "@/components/about/about-mission";
import { AboutValues } from "@/components/about/about-values";
import { AboutTeam } from "@/components/about/about-team";
import { AboutJoe } from "@/components/about/about-joe";
import { AboutCTA } from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "About Us | JWEBLY",
  description: "Founded to make enterprise-grade AI automation accessible to SMEs. Our mission, values, and the team behind Jwebly.",
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

