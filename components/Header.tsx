"use client";

import { useState } from "react";
import Link from "next/link";
import { BOOTCAMP_URL, BRAND, CONTACT_EMAIL } from "@/lib/constants";
import { BrandMark } from "@/components/BrandMark";
import { useI18n } from "@/components/LanguageProvider";

const NAV = [
  { href: "/#see-it", key: "media" },
  { href: "/#how", key: "how" },
  { href: "/#audiences", key: "audiences" },
  { href: "/#trust", key: "trust" },
  { href: "/#pricing", key: "pricing" },
  { href: "/#faq", key: "faq" },
] as const;

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const mail = `mailto:${CONTACT_EMAIL}`;

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg tracking-tight text-navy">
          <BrandMark className="h-9 w-9" />
          <span>{BRAND}</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-ink/80 lg:flex" aria-label={BRAND}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-navy">
              {t.nav[item.key]}
            </a>
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

          <a
            href={mail}
            className="hidden rounded-full bg-navy px-3.5 py-2 text-sm font-semibold text-paper hover:bg-navy-deep sm:inline-flex"
          >
            {t.headerCta}
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy lg:hidden"
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
        <div id="mobile-nav" className="border-t border-navy/10 bg-paper px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-base text-navy">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {t.nav[item.key]}
              </a>
            ))}
            <a href={mail} className="font-semibold" onClick={() => setOpen(false)}>
              {t.headerCta}
            </a>
            <a
              href={BOOTCAMP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
              onClick={() => setOpen(false)}
            >
              {t.hero.trial}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
