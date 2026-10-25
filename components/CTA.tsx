"use client";

import { CheckoutActions } from "@/components/CheckoutActions";
import { useI18n } from "@/components/LanguageProvider";

export function CTA() {
  const { t } = useI18n();

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="rounded-3xl bg-[linear-gradient(135deg,#0B1C33_0%,#1C6B72_70%,#0B1C33_100%)] px-6 py-12 text-paper sm:px-10">
        <h2 className="max-w-3xl font-display text-3xl sm:text-4xl">{t.cta.title}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-mist">{t.cta.body}</p>
        <p className="mt-3 max-w-2xl text-base leading-7 text-gold-bright">{t.cta.handoff}</p>
        <div className="mt-8">
          <CheckoutActions onDark />
        </div>
      </div>
    </section>
  );
}
