import type { Metadata } from 'next';
import { MarketingNav } from '@/components/marketing/MarketingNav';
import { Hero } from '@/components/marketing/Hero';
import { AgentsSection } from '@/components/marketing/AgentsSection';
import { Features } from '@/components/marketing/Features';
import { StatsStrip, ComplianceBadges, FoundingProgramme, Industries, Integrations, AboutJwebly, DiscoveryPresentation, MarketingFooter } from '@/components/marketing/Sections';
import { inter } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'HealthOS — AI agents for private healthcare',
  description: 'A team of specialist AI employees for private clinics: reception, patient engagement, clinical scribing, CQC compliance, and social media. Live across aesthetic & wellness, dental, private GP, and more.',
};

export default function LandingPage() {
  return (
    <div style={{ fontFamily: inter.style.fontFamily }}>
      <MarketingNav />
      <Hero />
      <StatsStrip />
      <AgentsSection />
      <Features />
      <Industries />
      <ComplianceBadges />
      <FoundingProgramme />
      <Integrations />
      <AboutJwebly />
      <DiscoveryPresentation />
      <MarketingFooter />
    </div>
  );
}
