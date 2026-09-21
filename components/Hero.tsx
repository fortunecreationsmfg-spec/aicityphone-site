"use client";

import { BOOTCAMP_URL } from "@/lib/constants";
import { useI18n } from "@/components/LanguageProvider";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(28,107,114,0.14),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(201,162,39,0.16),transparent_36%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">{t.hero.eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.12] text-navy sm:text-5xl lg:text-[3.35rem]">
          {t.hero.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/80">{t.hero.body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#see-it" className="btn-primary">
            {t.hero.primary}
          </a>
          <a href="#pricing" className="btn-secondary">
            {t.hero.secondary}
          </a>
          <a
            href={BOOTCAMP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            {t.hero.trial}
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
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink/80">{t.hero.handoff}</p>
      </div>
    </section>
  );
}
