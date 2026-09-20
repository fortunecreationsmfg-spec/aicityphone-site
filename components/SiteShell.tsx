"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider, useI18n } from "@/components/LanguageProvider";

function SkipLink() {
  const { t } = useI18n();
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
    >
      {t.skip}
    </a>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SkipLink />
      <Header />
      <main id="content" className="flex-1">
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
}
