"use client";

import { BOOTCAMP_URL, CONTACT_EMAIL } from "@/lib/constants";
import { useI18n } from "@/components/LanguageProvider";

export function Pricing() {
  const { t } = useI18n();

  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
      <h2 className="font-display text-3xl text-navy sm:text-4xl">{t.pricing.title}</h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">{t.pricing.lead}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="rounded-3xl bg-navy p-8 text-paper sm:p-10">
          <p className="text-sm uppercase tracking-[0.16em] text-gold-bright">{t.pricing.kicker}</p>
          <p className="mt-4 font-display text-5xl leading-none tracking-tight sm:text-6xl">
            {t.pricing.price}
            <span className="ml-2 align-middle font-sans text-xl font-semibold text-mist sm:text-2xl">
              {t.pricing.period}
            </span>
          </p>
          <p className="mt-6 text-sm leading-6 text-mist">{t.pricing.included}</p>
          <p className="mt-3 text-sm leading-6 text-mist/90">{t.pricing.disclaimer}</p>
        </aside>

        <div className="flex flex-col justify-center rounded-3xl border border-navy/10 bg-white p-8 sm:p-10">
          <p className="text-base leading-7 text-ink/80">{t.pricing.trialNote}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={BOOTCAMP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t.pricing.trial}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-secondary">
              {t.pricing.emailCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
