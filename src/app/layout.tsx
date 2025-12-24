import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { JoeFloatingButton } from "@/components/joe/joe-floating-button";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI Automation Birmingham | Custom AI for West Midlands Agencies | JWEBLY",
    template: "%s | JWEBLY",
  },
  description: "Custom AI automation for West Midlands recruitment and accounting agencies. Trained on your data, integrated with your systems. Birmingham AI specialists.",
  keywords: ["AI automation Birmingham", "custom AI West Midlands", "recruitment AI", "accounting automation", "AI agency Birmingham", "West Midlands AI"],
  authors: [{ name: "JWEBLY" }],
  creator: "JWEBLY",
  publisher: "JWEBLY",
  metadataBase: new URL("https://jwebly.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://jwebly.co.uk",
    siteName: "JWEBLY",
    title: "AI Automation Birmingham | Custom AI for West Midlands Agencies",
    description: "Custom AI automation for West Midlands recruitment and accounting agencies. Trained on your data, integrated with your systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Birmingham | Custom AI for West Midlands Agencies",
    description: "Custom AI automation for West Midlands recruitment and accounting agencies. Trained on your data, integrated with your systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Schema.org JSON-LD structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JWEBLY",
  "url": "https://jwebly.co.uk",
  "logo": "https://jwebly.co.uk/logo.svg",
  "description": "AI automation specialists based in Birmingham, West Midlands. Custom AI solutions for recruitment and accounting agencies.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Birmingham",
    "addressRegion": "West Midlands",
    "addressCountry": "GB",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@jwebly.co.uk",
    "contactType": "Customer Service",
    "areaServed": "GB",
  },
  "sameAs": [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://jwebly.co.uk/#organization",
  "name": "JWEBLY",
  "image": "https://jwebly.co.uk/logo.svg",
  "description": "AI automation specialists serving Birmingham and West Midlands. Custom AI solutions for recruitment and accounting agencies.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Birmingham",
    "addressRegion": "West Midlands",
    "postalCode": "",
    "addressCountry": "GB",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.4862",
    "longitude": "-1.8904",
  },
  "url": "https://jwebly.co.uk",
  "telephone": "",
  "email": "contact@jwebly.co.uk",
  "priceRange": "£1,500 - £12,000",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "52.4862",
      "longitude": "-1.8904",
    },
    "geoRadius": {
      "@type": "Distance",
      "value": "50",
      "unitCode": "KMT",
    },
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "52.4862",
      "longitude": "-1.8904",
    },
    "geoRadius": {
      "@type": "Distance",
      "value": "50",
      "unitCode": "KMT",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "JWEBLY",
  "url": "https://jwebly.co.uk",
  "description": "AI automation specialists for Birmingham and West Midlands agencies",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://jwebly.co.uk/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Automation Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "JWEBLY",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "addressCountry": "GB",
    },
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "52.4862",
      "longitude": "-1.8904",
    },
    "geoRadius": {
      "@type": "Distance",
      "value": "50",
      "unitCode": "KMT",
    },
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Automation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Implementation Pilot",
          "description": "Low-risk AI automation pilot with 2-3 workflows automated in 2-3 weeks",
        },
        "price": "1500-2000",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock",
        "url": "https://jwebly.co.uk/services/pilot",
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Intelligent Automation System",
          "description": "Complete operational upgrade with 5-7 interconnected workflows working as a unified system",
        },
        "price": "3000-5000",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock",
        "url": "https://jwebly.co.uk/services/intelligent-automation-system",
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Autonomous AI Agent",
          "description": "An AI that thinks for itself. Autonomous decision-making with continuous learning",
        },
        "price": "7000-12000",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock",
        "url": "https://jwebly.co.uk/services/autonomous-ai-agent",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        {/* Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-9JCNJBB0SM"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9JCNJBB0SM', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Navbar />
        {children}
        <Footer />
        <JoeFloatingButton />
      </body>
    </html>
  );
}

