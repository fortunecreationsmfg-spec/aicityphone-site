"use client";

import { useI18n } from "@/components/LanguageProvider";

export function Audiences() {
  const { t } = useI18n();

  return (
    <section id="audiences" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
      <h2 className="font-display text-3xl text-navy sm:text-4xl">{t.audiences.title}</h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">{t.audiences.lead}</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-navy/10 bg-white p-7">
          <h3 className="font-display text-2xl text-navy">{t.audiences.cityTitle}</h3>
          <p className="mt-3 leading-7 text-ink/80">{t.audiences.cityBody}</p>
          <ul className="mt-5 space-y-2 text-sm text-ink/80">
            {t.audiences.cityItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-navy/10 bg-white p-7">
          <h3 className="font-display text-2xl text-navy">{t.audiences.schoolTitle}</h3>
          <p className="mt-3 leading-7 text-ink/80">{t.audiences.schoolBody}</p>
          <ul className="mt-5 space-y-2 text-sm text-ink/80">
            {t.audiences.schoolItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
      <aside className="mt-6 rounded-2xl border border-gold/40 bg-gold/10 px-5 py-4 text-sm leading-6 text-navy">
        {t.audiences.aside}
      </aside>
    </section>
  );
}
