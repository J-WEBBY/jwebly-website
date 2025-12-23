import { Metadata } from "next";
import { GetStartedHero } from "@/components/get-started/hero";
import { CallPreparation } from "@/components/get-started/call-preparation";
import { CalendarEmbed } from "@/components/get-started/calendar-embed";
import { WhatsNext } from "@/components/get-started/whats-next";

export const metadata: Metadata = {
  title: "Get Started | JWEBLY",
  description: "Book your discovery call. 1-hour deep dive into your business and automation opportunities. No pressure, no commitment.",
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

