import { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactMethods } from "@/components/contact/contact-methods";
import { ContactFAQ } from "@/components/contact/contact-faq";

export const metadata: Metadata = {
  title: "AI Automation Consultation Birmingham | Book Discovery Call with Birmingham AI Agency | JWEBLY",
  description: "Book AI automation consultation with Birmingham AI agency. Discovery call, questions, or custom proposal. Contact Jwebly for West Midlands automation.",
  keywords: ["AI automation consultation Birmingham", "Birmingham AI agency", "AI consultation", "automation consultation", "discovery call Birmingham"],
  alternates: {
    canonical: "https://jwebly.co.uk/contact",
  },
  openGraph: {
    title: "AI Automation Consultation Birmingham | Book Discovery Call with Birmingham AI Agency",
    description: "Book AI automation consultation with Birmingham AI agency. Discovery call, questions, or custom proposal. Contact Jwebly for West Midlands automation.",
    url: "https://jwebly.co.uk/contact",
    siteName: "JWEBLY",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Consultation Birmingham | Book Discovery Call with Birmingham AI Agency",
    description: "Book AI automation consultation with Birmingham AI agency. Discovery call, questions, or custom proposal.",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-black">
      <ContactHero />
      <ContactForm />
      <ContactMethods />
      <ContactFAQ />
    </main>
  );
}

