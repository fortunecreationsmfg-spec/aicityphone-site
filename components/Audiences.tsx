"use client";

import { useAudience } from "@/components/AudienceProvider";
import { useI18n } from "@/components/LanguageProvider";

export function Audiences() {
  const { t } = useI18n();
  const { audience } = useAudience();
  const a = t.audiences;

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6">
      <div
        role="tabpanel"
        id="panel-city"
        aria-labelledby="audience-city"
        hidden={audience !== "city"}
        className="space-y-6"
      >
        <article className="rounded-2xl border border-navy/10 bg-white p-6 sm:p-7">
          <h2 className="font-display text-2xl text-navy sm:text-3xl">{a.cityTitle}</h2>
          <p className="mt-3 leading-7 text-ink/80">{a.cityIntro}</p>
          <p className="mt-3 leading-7 text-ink/80">{a.cityBody}</p>
          <ul className="mt-5 space-y-2 text-sm text-ink/80">
            {a.cityItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-navy/10 bg-white p-6 sm:p-7">
          <h3 className="font-display text-2xl text-navy">{a.schoolTitle}</h3>
          <p className="mt-3 leading-7 text-ink/80">{a.schoolBody}</p>
          <ul className="mt-5 space-y-2 text-sm text-ink/80">
            {a.schoolItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <div>
          <h3 className="font-display text-2xl text-navy">{a.cityStaffTitle}</h3>
          <p className="mt-3 max-w-2xl leading-7 text-ink/75">{a.cityStaffLead}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {a.cityStaff.map((item) => (
              <article key={item.title} className="rounded-2xl border border-navy/10 bg-white p-5">
                <h4 className="font-display text-lg text-navy">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-ink/75">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl text-navy">{a.cityHowTitle}</h3>
          <p className="mt-3 max-w-2xl leading-7 text-ink/75">{a.cityHowLead}</p>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2">
            {a.citySteps.map((step) => (
              <li key={step.n} className="rounded-2xl bg-white p-5 ring-1 ring-navy/8">
                <p className="font-display text-sm tracking-[0.18em] text-teal">{step.n}</p>
                <h4 className="mt-2 font-display text-lg text-navy">{step.title}</h4>
                <p className="mt-2 text-sm leading-6 text-ink/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div
        role="tabpanel"
        id="panel-home"
        aria-labelledby="audience-home"
        hidden={audience !== "home"}
        className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <article className="rounded-2xl border border-navy/10 bg-white p-6 sm:p-7">
          <h2 className="font-display text-2xl text-navy sm:text-3xl">{a.homeTitle}</h2>
          <p className="mt-3 leading-7 text-ink/80">{a.homeBody}</p>
        </article>
        <article className="rounded-2xl border border-navy/10 bg-white p-6 sm:p-7">
          <h3 className="font-display text-xl text-navy">{a.homeListTitle}</h3>
          <ul className="mt-5 space-y-2 text-sm text-ink/80">
            {a.homeItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <aside className="mt-6 rounded-2xl border border-gold/40 bg-gold/10 px-5 py-4 text-sm leading-6 text-navy">
        {a.aside}
      </aside>
    </section>
  );
}
