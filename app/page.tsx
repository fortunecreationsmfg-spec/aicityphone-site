import { AudienceProvider } from "@/components/AudienceProvider";
import { Audiences } from "@/components/Audiences";
import { CTA } from "@/components/CTA";
import { DoneForYou } from "@/components/DoneForYou";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MediaShowcase } from "@/components/MediaShowcase";
import { Pillars } from "@/components/Pillars";
import { Pricing } from "@/components/Pricing";
import { Trust911 } from "@/components/Trust911";

export default function Home() {
  return (
    <>
      <AudienceProvider>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(28,107,114,0.14),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(201,162,39,0.16),transparent_36%)]" />
          <Hero />
          <Audiences />
        </div>
      </AudienceProvider>
      <MediaShowcase />
      <DoneForYou />
      <Pillars />
      <HowItWorks />
      <Trust911 />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
