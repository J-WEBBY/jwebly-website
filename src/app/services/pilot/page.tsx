import { Metadata } from "next";
import { PilotPageClient } from "./pilot-page-client";

export const metadata: Metadata = {
  title: "AI Pilot Birmingham Recruitment | £1,500 Automation Pilot for UK Agencies | JWEBLY",
  description: "£1,500-2,000 AI automation pilot for Birmingham recruitment and accounting agencies. 2-3 workflows in 2-3 weeks. Limited to 4-5 agencies.",
  keywords: ["AI pilot Birmingham", "automation pilot UK", "recruitment AI pilot", "£1500 automation", "AI pilot agencies"],
  alternates: {
    canonical: "https://jwebly.co.uk/services/pilot",
  },
  openGraph: {
    title: "AI Pilot Birmingham Recruitment | £1,500 Automation Pilot for UK Agencies",
    description: "£1,500-2,000 AI automation pilot for Birmingham recruitment and accounting agencies. 2-3 workflows in 2-3 weeks. Limited to 4-5 agencies.",
    url: "https://jwebly.co.uk/services/pilot",
    siteName: "JWEBLY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Pilot Birmingham Recruitment | £1,500 Automation Pilot for UK Agencies",
    description: "£1,500-2,000 AI automation pilot for Birmingham recruitment and accounting agencies. 2-3 workflows in 2-3 weeks.",
  },
};

export default function PilotPage() {
  return <PilotPageClient />;
}

