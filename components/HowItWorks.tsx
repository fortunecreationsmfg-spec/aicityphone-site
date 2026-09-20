"use client";

import { useI18n } from "@/components/LanguageProvider";

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="how" className="scroll-mt-24 bg-mist/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl text-navy sm:text-4xl">{t.how.title}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">{t.how.lead}</p>
        <ol className="mt-10 grid gap-4 lg:grid-cols-5">
          {t.how.steps.map((step) => (
            <li key={step.n} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy/8">
              <p className="font-display text-sm tracking-[0.18em] text-teal">{step.n}</p>
              <h3 className="mt-2 font-display text-lg text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
