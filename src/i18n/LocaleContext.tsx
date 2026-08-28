import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Locale, LocalizedText } from '../types';
import { UI, PAGE_META } from './dictionary';

function readInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem('locale');
    if (stored === 'en' || stored === 'pt') return stored;
  } catch {
    /* localStorage unavailable */
  }
  return 'en';
}

/** T() — resolve a LocalizedText (or raw string) against a given locale. */
export function resolve(value: LocalizedText | undefined, locale: Locale): string {
  if (value == null) return '';
  if (typeof value === 'object') return value[locale] ?? value.en ?? value.pt ?? '';
  return value;
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  toggleLocale: () => void;
  /** T(value) — resolve any LocalizedText against the current locale. */
  t: (value: LocalizedText | undefined) => string;
  /** ui(key) — resolve a UI dictionary key against the current locale. */
  ui: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    const meta = PAGE_META[locale];
    document.title = meta.title;
    const setAttr = (id: string, attr: string, val: string) => {
      document.getElementById(id)?.setAttribute(attr, val);
    };
    const pt = document.getElementById('pageTitle');
    if (pt) pt.textContent = meta.title;
    setAttr('metaDesc', 'content', meta.desc);
    setAttr('ogTitle', 'content', meta.title);
    setAttr('ogDesc', 'content', meta.desc);
    setAttr('ogLocale', 'content', meta.locale);
  }, [locale]);

  const setLocale = useCallback((loc: Locale) => {
    setLocaleState(loc);
    try {
      localStorage.setItem('locale', loc);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'pt' : 'en');
  }, [locale, setLocale]);

  const t = useCallback((value: LocalizedText | undefined) => resolve(value, locale), [locale]);
  const ui = useCallback((key: string) => resolve(UI[key], locale), [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, toggleLocale, t, ui }),
    [locale, setLocale, toggleLocale, t, ui],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}
