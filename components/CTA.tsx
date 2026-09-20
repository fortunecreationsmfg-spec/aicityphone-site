"use client";

import { BOOTCAMP_URL, CONTACT_EMAIL } from "@/lib/constants";
import { useI18n } from "@/components/LanguageProvider";

export function CTA() {
  const { t } = useI18n();

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="rounded-3xl bg-[linear-gradient(135deg,#0B1C33_0%,#1C6B72_70%,#0B1C33_100%)] px-6 py-12 text-paper sm:px-10">
        <h2 className="max-w-3xl font-display text-3xl sm:text-4xl">{t.cta.title}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-mist">{t.cta.body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn-gold">
            {t.cta.email}
          </a>
          <a
            href={BOOTCAMP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-on-dark"
          >
            {t.cta.trial}
          </a>
        </div>
        <p className="mt-4 text-sm text-mist/90">{t.cta.trialNote}</p>
      </div>
    </section>
  );
}
