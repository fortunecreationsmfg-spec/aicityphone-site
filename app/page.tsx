import { Audiences } from "@/components/Audiences";
import { CTA } from "@/components/CTA";
import { EstimateCalculator } from "@/components/EstimateCalculator";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MediaShowcase } from "@/components/MediaShowcase";
import { Pillars } from "@/components/Pillars";
import { Trust911 } from "@/components/Trust911";

export default function Home() {
  return (
    <>
      <Hero />
      <MediaShowcase />
      <Pillars />
      <HowItWorks />
      <Audiences />
      <Trust911 />
      <EstimateCalculator />
      <FAQ />
      <CTA />
    </>
  );
}
