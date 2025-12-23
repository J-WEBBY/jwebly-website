import { Metadata } from "next";
import { PilotPageClient } from "./pilot-page-client";

export const metadata: Metadata = {
  title: "Implementation Pilot - Try Before You Buy | JWEBLY",
  description: "Try our Intelligent Automation System or Custom AI Agent with a low-risk pilot. Get 2-3 workflows automated in 2-3 weeks. Upgrade within 60 days and your pilot fee is credited.",
};

export default function PilotPage() {
  return <PilotPageClient />;
}

