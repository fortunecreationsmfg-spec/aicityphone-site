"use client";

import { useI18n } from "@/components/LanguageProvider";

export function Trust911() {
  const { t } = useI18n();

  return (
    <section id="trust" className="scroll-mt-24 bg-navy text-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="max-w-3xl font-display text-3xl sm:text-4xl">{t.trust.title}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-mist">{t.trust.lead}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {t.trust.items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-xl text-gold-bright">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-mist">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
