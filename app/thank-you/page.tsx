"use client";

import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";
import { useI18n } from "@/components/LanguageProvider";

export default function ThankYouPage() {
  const { t } = useI18n();
  const questionMail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.pricing.questionSubject)}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{t.thanks.kicker}</p>
      <h1 className="mt-3 font-display text-4xl text-navy sm:text-5xl">{t.thanks.title}</h1>
      <p className="mt-5 text-lg leading-8 text-ink/80">{t.thanks.body}</p>
      <p className="mt-4 leading-7 text-ink/75">{t.thanks.note}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={questionMail} className="btn-primary w-full sm:w-auto">
          {t.pricing.contact}
        </a>
        <Link href="/" className="btn-secondary w-full sm:w-auto">
          {t.thanks.home}
        </Link>
      </div>
    </article>
  );
}
