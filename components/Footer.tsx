"use client";

import Link from "next/link";
import { BRAND, CONTACT_EMAIL, LEGAL_NAME } from "@/lib/constants";
import { BrandMark } from "@/components/BrandMark";
import { useI18n } from "@/components/LanguageProvider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-navy/10 bg-navy text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 font-display text-xl">
            <BrandMark className="h-9 w-9" />
            {BRAND}
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-mist">{t.footer.blurb}</p>
        </div>
        <div className="text-sm leading-7 text-mist">
          <p>{LEGAL_NAME}</p>
          <p>{t.footer.domain}</p>
          <p>
            <a className="underline decoration-gold/60 underline-offset-4 hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p>
            <Link className="underline decoration-gold/60 underline-offset-4 hover:text-white" href="/privacy">
              {t.footer.privacy}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
