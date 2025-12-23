import { Metadata } from "next";
import { GetStartedHero } from "@/components/get-started/hero";
import { CallPreparation } from "@/components/get-started/call-preparation";
import { CalendarEmbed } from "@/components/get-started/calendar-embed";
import { WhatsNext } from "@/components/get-started/whats-next";

export const metadata: Metadata = {
  title: "Get Started | Book AI Automation Discovery Call | JWEBLY",
  description: "Book your AI automation discovery call. 1-hour deep dive into your business and automation opportunities. No pressure, no commitment. Birmingham.",
  keywords: ["AI automation discovery call", "automation consultation", "book discovery call", "AI consultation", "automation call"],
  alternates: {
    canonical: "https://jwebly.co.uk/get-started",
  },
  openGraph: {
    title: "Get Started | Book AI Automation Discovery Call",
    description: "Book your AI automation discovery call. 1-hour deep dive into your business and automation opportunities. No pressure, no commitment.",
    url: "https://jwebly.co.uk/get-started",
    siteName: "JWEBLY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Started | Book AI Automation Discovery Call",
    description: "Book your AI automation discovery call. 1-hour deep dive into your business and automation opportunities.",
  },
};

export default function GetStartedPage() {
  return (
    <main className="bg-black">
      <GetStartedHero />
      <CallPreparation />
      <CalendarEmbed />
      <WhatsNext />
    </main>
  );
}

