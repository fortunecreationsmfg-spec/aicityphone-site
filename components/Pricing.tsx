"use client";

import { PLAN_PRICE_LABEL } from "@/lib/constants";
import { CheckoutActions } from "@/components/CheckoutActions";
import { useI18n } from "@/components/LanguageProvider";

export function Pricing() {
  const { t } = useI18n();

  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
      <h2 className="font-display text-3xl text-navy sm:text-4xl">{t.pricing.title}</h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">{t.pricing.lead}</p>

      <div className="mt-8 max-w-3xl rounded-3xl border border-navy/10 bg-white p-7 shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">{t.pricing.billed}</p>
        <p className="mt-3 font-display text-5xl tracking-tight text-navy sm:text-6xl">
          {PLAN_PRICE_LABEL}
          <span className="ml-2 align-middle font-sans text-lg font-semibold text-ink/60">
            {t.pricing.perMonth}
          </span>
        </p>
        <p className="mt-4 max-w-xl text-base leading-7 text-ink/75">{t.pricing.coverage}</p>

        <h3 className="mt-8 font-display text-xl text-navy">{t.pricing.includedTitle}</h3>
        <ul className="mt-4 space-y-2.5">
          {t.pricing.included.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-ink/85">
              <svg
                viewBox="0 0 20 20"
                className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                aria-hidden="true"
              >
                <path
                  d="M4.5 10.5 8 14l7.5-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CheckoutActions />
        </div>
      </div>
    </section>
  );
}
