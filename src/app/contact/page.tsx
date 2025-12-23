import { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactMethods } from "@/components/contact/contact-methods";
import { ContactFAQ } from "@/components/contact/contact-faq";

export const metadata: Metadata = {
  title: "Contact Us | JWEBLY",
  description: "Get in touch with Jwebly. Book a discovery call, ask questions, or request a custom proposal. Multiple ways to reach us.",
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

