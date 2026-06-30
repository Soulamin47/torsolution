"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { detectLocale, swapLocale, type Locale } from "@/lib/locale";

export type Lang = Locale;

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

/**
 * Lang context — derives the active locale from the URL.
 * Calling setLang() or toggleLang() navigates to the equivalent URL in
 * the other locale, preserving the current path.
 *
 * `initialLang` is the locale detected server-side from the request
 * pathname. It hydrates the provider so the first render matches the
 * server output.
 */
export function LangProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Prefer the URL on the client (handles client-side route changes);
  // fall back to the server-derived value during SSR / initial hydration.
  const lang: Lang = pathname ? detectLocale(pathname) : initialLang;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback(
    (target: Lang) => {
      if (!pathname || target === lang) return;
      router.push(swapLocale(pathname, target));
    },
    [pathname, lang, router],
  );

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "fr" : "en");
  }, [lang, setLang]);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang }),
    [lang, setLang, toggleLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
