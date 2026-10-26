"use client";

import { useI18n } from "@/components/LanguageProvider";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 pb-2 pt-12 sm:px-6 sm:pt-16 lg:pt-20">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">{t.hero.eyebrow}</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.12] text-navy sm:text-5xl lg:text-[3.35rem]">
        {t.hero.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/80">{t.hero.body}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#audiences" className="btn-primary">
          {t.hero.primary}
        </a>
        <a href="#pricing" className="btn-secondary">
          {t.hero.secondary}
        </a>
      </div>
      <ul className="mt-8 flex flex-wrap gap-2">
        {t.hero.chips.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-navy/10 bg-white/70 px-3 py-1 text-sm text-navy"
          >
            {chip}
          </li>
        ))}
      </ul>
    </section>
  );
}
