import { Metadata } from "next";
import { JoePageHero } from "@/components/joe/joe-page-hero";
import { JoeCapabilities } from "@/components/joe/joe-capabilities";
import { JoeChat } from "@/components/joe/joe-chat";

export const metadata: Metadata = {
  title: "Meet Joe | JWEBLY",
  description: "Joe is your AI implementation partner. Available 24/7 to guide you through discovery, design, deployment, and optimization.",
};

export default function JoePage() {
  return (
    <main className="bg-black">
      <JoePageHero />
      <JoeCapabilities />
      <div className="border-t border-gray-900">
        <JoeChat />
      </div>
    </main>
  );
}

