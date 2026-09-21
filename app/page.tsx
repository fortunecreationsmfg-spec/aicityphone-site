import { Audiences } from "@/components/Audiences";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ITHandoff } from "@/components/ITHandoff";
import { MediaShowcase } from "@/components/MediaShowcase";
import { Pillars } from "@/components/Pillars";
import { Pricing } from "@/components/Pricing";
import { Trust911 } from "@/components/Trust911";

export default function Home() {
  return (
    <>
      <Hero />
      <MediaShowcase />
      <ITHandoff />
      <Pillars />
      <HowItWorks />
      <Audiences />
      <Trust911 />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
