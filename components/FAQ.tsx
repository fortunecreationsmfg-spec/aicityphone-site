"use client";

import { useI18n } from "@/components/LanguageProvider";

export function FAQ() {
  const { t } = useI18n();

  return (
    <section id="faq" className="scroll-mt-24 bg-mist/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl text-navy sm:text-4xl">{t.faq.title}</h2>
        <div className="mt-8 space-y-3">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy/8">
              <summary className="cursor-pointer list-none font-display text-lg text-navy marker:content-none">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="text-teal group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/80">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
