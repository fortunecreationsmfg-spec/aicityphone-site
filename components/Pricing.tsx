"use client";

import { BOOTCAMP_URL, CONTACT_EMAIL } from "@/lib/constants";
import { useI18n } from "@/components/LanguageProvider";

export function Pricing() {
  const { t } = useI18n();

  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
      <h2 className="font-display text-3xl text-navy sm:text-4xl">{t.pricing.title}</h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="flex items-center rounded-3xl bg-navy p-8 text-paper sm:p-10">
          <p className="font-display text-3xl leading-tight tracking-tight text-gold-bright sm:text-4xl">
            {t.pricing.statement}
          </p>
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
