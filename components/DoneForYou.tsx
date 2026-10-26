"use client";

import { CONTACT_EMAIL } from "@/lib/constants";
import { useI18n } from "@/components/LanguageProvider";

export function DoneForYou() {
  const { t } = useI18n();

  return (
    <section id="setup" className="scroll-mt-24 bg-teal text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-bright">
            {t.done.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">{t.done.title}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-paper/90 sm:text-lg">{t.done.body}</p>
        </div>
        <div className="shrink-0 lg:max-w-xs">
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn-gold max-w-full whitespace-normal text-center">
            {t.done.cta}
          </a>
          <p className="mt-3 max-w-xs text-sm leading-6 text-paper/85">{t.done.note}</p>
        </div>
      </div>
    </section>
  );
}
