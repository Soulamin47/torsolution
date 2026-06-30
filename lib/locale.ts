// ─── Locale helpers — single source of truth for URL ↔ lang ──────────────────

import type { Metadata } from "next";
import { siteConfig } from "./site";

export const LOCALES = ["en", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

const FR_PREFIX = "/fr";

/**
 * Detect the locale of any pathname.
 *  - /          → en
 *  - /services  → en
 *  - /fr        → fr
 *  - /fr/work   → fr
 */
export function detectLocale(pathname: string | null | undefined): Locale {
  if (!pathname) return DEFAULT_LOCALE;
  if (pathname === FR_PREFIX || pathname.startsWith(`${FR_PREFIX}/`)) return "fr";
  return "en";
}

/**
 * Strip the FR prefix from a pathname.
 *  - /          → /
 *  - /fr        → /
 *  - /fr/work   → /work
 *  - /work      → /work
 */
export function stripLocale(pathname: string): string {
  if (pathname === FR_PREFIX) return "/";
  if (pathname.startsWith(`${FR_PREFIX}/`)) return pathname.slice(FR_PREFIX.length);
  return pathname;
}

/**
 * Render a locale-aware href for a path. The path argument should be the
 * canonical EN path (e.g. /work or /services/web). Anchors and external URLs
 * pass through untouched.
 */
export function localizedHref(path: string, locale: Locale): string {
  // Anchors stay as-is — they target the current page
  if (path.startsWith("#")) return path;

  // External / protocol-relative URLs pass through
  if (/^[a-z]+:\/\//i.test(path) || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }

  // Normalize a leading slash
  const clean = path.startsWith("/") ? path : `/${path}`;

  if (locale === "fr") {
    if (clean === "/") return FR_PREFIX;
    return `${FR_PREFIX}${clean}`;
  }
  return clean;
}

/**
 * Swap the locale of any pathname while preserving the rest of the URL.
 *  - swapLocale('/services', 'fr')      → '/fr/services'
 *  - swapLocale('/fr/services', 'en')   → '/services'
 *  - swapLocale('/fr', 'en')            → '/'
 */
export function swapLocale(pathname: string, target: Locale): string {
  const canonical = stripLocale(pathname);
  return localizedHref(canonical, target);
}

/**
 * Build the metadata `alternates` block for a canonical EN path.
 *
 * `locale` is the locale of the *current* page — its `canonical` must
 * point at itself (not at the other locale), otherwise Google treats
 * the page as a duplicate and drops it from the index. The hreflang
 * `languages` map is the same regardless of which page emits it.
 */
export function buildAlternates(
  canonicalPath: string,
  locale: Locale = "en",
): Metadata["alternates"] {
  const cleanPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  const enUrl = `${siteConfig.url}${cleanPath}`;
  const frUrl = `${siteConfig.url}${localizedHref(cleanPath, "fr")}`;
  return {
    canonical: locale === "fr" ? frUrl : enUrl,
    languages: {
      en: enUrl,
      fr: frUrl,
      "x-default": enUrl,
    },
  };
}

/**
 * Convenience: full absolute URLs for both locales for a given canonical path.
 * Useful for sitemap generation.
 */
export function bothLocaleUrls(canonicalPath: string) {
  const cleanPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  return {
    en: `${siteConfig.url}${cleanPath}`,
    fr: `${siteConfig.url}${localizedHref(cleanPath, "fr")}`,
  };
}
