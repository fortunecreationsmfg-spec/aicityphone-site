"use client";

import { CheckoutActions } from "@/components/CheckoutActions";
import { useI18n } from "@/components/LanguageProvider";

const ACCENT: Record<string, string> = {
  "#home-services": "border-t-navy",
  "#cities": "border-t-teal",
  "#schools": "border-t-gold",
};

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative">
      <div className="border-b border-navy/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            {t.hero.switcherLabel}
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-navy sm:text-base sm:leading-7">
            {t.hero.civicBanner}
          </p>
          <nav
            aria-label={t.hero.switcherLabel}
            className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3"
          >
            {t.hero.switcher.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-2xl border border-navy/10 border-t-4 bg-paper px-2 py-3 text-center shadow-sm hover:border-teal sm:px-4 sm:py-5 sm:text-left ${ACCENT[item.href] ?? "border-t-navy"}`}
              >
                <span className="block font-display text-sm leading-5 text-navy sm:text-xl">
                  {item.title}
                </span>
                <span className="mt-2 hidden text-sm leading-6 text-ink/75 sm:block">{item.body}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(28,107,114,0.14),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(201,162,39,0.16),transparent_36%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">{t.hero.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.12] text-navy sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/80">{t.hero.body}</p>
          <div className="mt-6">
            <CheckoutActions />
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {t.hero.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-navy/10 bg-white/70 px-3 py-1 text-sm text-navy"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
