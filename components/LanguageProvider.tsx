"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { copy, isLocale, type Dictionary, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "acp-locale";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function readLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : "en";
}

function getServerLocale(): Locale {
  return "en";
}

function writeLocale(next: Locale) {
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, readLocale, getServerLocale);

  useEffect(() => {
    document.documentElement.lang = copy[locale].htmlLang;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    writeLocale(next);
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, t: copy[locale] }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return ctx;
}
