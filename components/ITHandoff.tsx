"use client";

import { BOOTCAMP_URL } from "@/lib/constants";
import { useI18n } from "@/components/LanguageProvider";

export function ITHandoff() {
  const { t } = useI18n();

  return (
    <section id="it-handoff" className="scroll-mt-24 bg-teal text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-bright">
            {t.itHandoff.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">{t.itHandoff.title}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-paper/90 sm:text-lg">{t.itHandoff.body}</p>
        </div>
        <div className="shrink-0 lg:max-w-xs">
          <a
            href={BOOTCAMP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            {t.itHandoff.cta}
          </a>
          <p className="mt-3 max-w-xs text-sm leading-6 text-paper/85">{t.itHandoff.note}</p>
        </div>
      </div>
    </section>
  );
}
