import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProductFeature } from "@/components/product-feature";
import { WhatWeBuild } from "@/components/what-we-build";
import { HowItWorks } from "@/components/how-it-works";
import { PartnersStrip } from "@/components/partners-strip";
import { ResourcesTeaser } from "@/components/resources-teaser";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProductFeature />
        <WhatWeBuild />
        <HowItWorks />
        <PartnersStrip />
        <ResourcesTeaser />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
