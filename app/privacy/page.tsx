"use client";

import { useI18n } from "@/components/LanguageProvider";

export default function PrivacyPage() {
  const { t } = useI18n();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
        {t.nav.privacy}
      </p>
      <h1 className="mt-3 font-display text-4xl text-navy">{t.privacy.title}</h1>
      <p className="mt-3 text-sm text-ink/60">{t.privacy.updated}</p>
      <div className="mt-10 space-y-8">
        {t.privacy.sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-2xl text-navy">{section.title}</h2>
            <p className="mt-3 leading-7 text-ink/80">{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
