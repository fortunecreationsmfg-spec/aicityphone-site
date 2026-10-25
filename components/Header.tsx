"use client";

import { useState } from "react";
import Link from "next/link";
import { BRAND, CONTACT_EMAIL } from "@/lib/constants";
import { BrandMark } from "@/components/BrandMark";
import { useI18n } from "@/components/LanguageProvider";

const NAV = [
  { href: "/#see-it", key: "media" },
  { href: "/#home-services", key: "homeServices" },
  { href: "/#cities-and-schools", key: "audiences" },
  { href: "/#how", key: "how" },
  { href: "/#trust", key: "trust" },
  { href: "/#pricing", key: "pricing" },
  { href: "/#faq", key: "faq" },
] as const;

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const questionMail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.pricing.questionSubject)}`;

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg tracking-tight text-navy">
          <BrandMark className="h-9 w-9 shrink-0" />
          <span>{BRAND}</span>
        </Link>

        <nav className="hidden items-center gap-x-3 text-sm text-ink/80 xl:flex" aria-label={BRAND}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-navy">
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="inline-flex rounded-full border border-navy/15 bg-white p-0.5 text-xs font-semibold"
            role="group"
            aria-label={t.langLabel}
          >
            <button
              type="button"
              className={`rounded-full px-2.5 py-1 ${locale === "en" ? "bg-navy text-paper" : "text-ink/70"}`}
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
            >
              {t.en}
            </button>
            <button
              type="button"
              className={`rounded-full px-2.5 py-1 ${locale === "es" ? "bg-navy text-paper" : "text-ink/70"}`}
              onClick={() => setLocale("es")}
              aria-pressed={locale === "es"}
            >
              {t.es}
            </button>
          </div>

          <Link
            href="/#pricing"
            className="hidden rounded-full bg-navy px-3.5 py-2 text-sm font-semibold text-paper hover:bg-navy-deep sm:inline-flex"
          >
            {t.headerCta}
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-navy/10 bg-paper px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-3 text-base text-navy">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {t.nav[item.key]}
              </Link>
            ))}
            <Link href="/#pricing" className="font-semibold" onClick={() => setOpen(false)}>
              {t.headerCta}
            </Link>
            <a href={questionMail} onClick={() => setOpen(false)}>
              {t.pricing.contact}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
