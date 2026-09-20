"use client";

import { useI18n } from "@/components/LanguageProvider";

export function Pillars() {
  const { t } = useI18n();

  return (
    <section id="pillars" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
      <h2 className="max-w-3xl font-display text-3xl text-navy sm:text-4xl">{t.pillars.title}</h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">{t.pillars.lead}</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.pillars.items.map((item) => (
          <article key={item.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink/75">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
