import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { JoeLauncher } from "@/components/joe/launcher";

const SITE_URL = "https://jwebly.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jwebly — AI systems for industries that can't get it wrong",
    template: "%s · Jwebly",
  },
  description:
    "Jwebly builds production-grade AI systems for high-stakes industries — clinics first, via HealthOS. Plus bespoke AI agents and workflow automation for any field. Built around your tools, run like infrastructure.",
  keywords: [
    "AI receptionist",
    "AI front desk for private clinics",
    "after-hours enquiry",
    "patient booking automation",
    "custom AI agent",
    "workflow automation",
    "applied AI",
    "HealthOS",
    "Jwebly",
  ],
  authors: [{ name: "Jwebly" }],
  creator: "Jwebly",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Jwebly",
    title: "Jwebly — AI systems for industries that can't get it wrong",
    description:
      "Production-grade AI built, integrated and operated for high-stakes industries. HealthOS is the flagship; bespoke builds for any field.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jwebly — AI systems for industries that can't get it wrong",
    description:
      "Production-grade AI built, integrated and operated for high-stakes industries. HealthOS is the flagship.",
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jwebly",
  url: SITE_URL,
  description:
    "Jwebly builds, integrates and operates production-grade AI systems for industries that can't afford to get it wrong. HealthOS is the flagship; bespoke AI agents and workflow automation for any field.",
  email: "hello@jwebly.co.uk",
  foundingLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressCountry: "GB" },
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "SoftwareApplication",
      name: "HealthOS",
      applicationCategory: "BusinessApplication",
      description:
        "An AI front desk for private clinics — answers every enquiry the moment it lands, qualifies the patient, and books them straight into your calendar.",
      url: "https://jweblyhealth.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
        <JoeLauncher />
      </body>
    </html>
  );
}
