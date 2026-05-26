import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'JweblyHealth — AI Agents for Private Healthcare',
    template: '%s | JweblyHealth',
  },
  description: 'A team of specialist AI employees for private clinics: reception, patient engagement, clinical scribing, CQC compliance, and more. Built for UK healthcare.',
  keywords: ['healthcare AI', 'AI receptionist', 'private clinic software', 'CQC compliance', 'patient engagement', 'HealthOS', 'JweblyHealth'],
  authors: [{ name: 'JweblyHealth' }],
  creator: 'JweblyHealth',
  publisher: 'JweblyHealth',
  metadataBase: new URL('https://jweblyhealth.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://jweblyhealth.com',
    siteName: 'JweblyHealth',
    title: 'JweblyHealth — AI Agents for Private Healthcare',
    description: 'Reception, patient engagement, clinical scribing, CQC compliance — all powered by AI. Built for UK private clinics.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JweblyHealth — AI Agents for Private Healthcare',
    description: 'AI-powered operational intelligence for UK private clinics.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="antialiased">{children}</body>
    </html>
  );
}
