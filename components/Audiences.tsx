"use client";

import { useI18n } from "@/components/LanguageProvider";

function ItemList({ items, dot }: { items: readonly string[]; dot: string }) {
  return (
    <ul className="mt-5 space-y-2 text-sm text-ink/80">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Audiences() {
  const { t } = useI18n();
  const a = t.audiences;

  return (
    <section id="audiences" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
      <h2 className="font-display text-3xl text-navy sm:text-4xl">{a.title}</h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">{a.lead}</p>

      <article
        id="home-services"
        className="mt-10 scroll-mt-28 rounded-3xl border border-navy/10 bg-white p-7 sm:p-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">{a.homeKicker}</p>
        <h3 className="mt-2 font-display text-3xl text-navy">{a.homeTitle}</h3>
        <p className="mt-4 max-w-3xl text-base leading-8 text-ink/80">{a.homeBody}</p>
        <ItemList items={a.homeItems} dot="bg-navy" />
      </article>

      <div id="cities-and-schools" className="mt-10 scroll-mt-28">
        <h3 className="font-display text-2xl text-navy sm:text-3xl">{a.civicTitle}</h3>
        <p className="mt-3 max-w-3xl leading-7 text-ink/75">{a.civicLead}</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article id="cities" className="scroll-mt-28 rounded-2xl border border-navy/10 bg-white p-7">
            <h3 className="font-display text-2xl text-navy">{a.cityTitle}</h3>
            <p className="mt-3 leading-7 text-ink/80">{a.cityBody}</p>
            <ItemList items={a.cityItems} dot="bg-teal" />
          </article>
          <article id="schools" className="scroll-mt-28 rounded-2xl border border-navy/10 bg-white p-7">
            <h3 className="font-display text-2xl text-navy">{a.schoolTitle}</h3>
            <p className="mt-3 leading-7 text-ink/80">{a.schoolBody}</p>
            <ItemList items={a.schoolItems} dot="bg-gold" />
          </article>
        </div>
      </div>

      <aside className="mt-6 rounded-2xl border border-gold/40 bg-gold/10 px-5 py-4 text-sm leading-6 text-navy">
        {a.aside}
      </aside>
    </section>
  );
}
