// ─── JSON-LD schema generators ────────────────────────────────────────────────
// Each function returns one or more schema.org objects ready to be serialized
// into <script type="application/ld+json"> by the JsonLd component.

import { siteConfig } from "./site";
import { localizedHref, type Locale } from "./locale";
import type { ServiceEntry } from "./services";
import type { WorkEntry } from "./work";

const PERSON = {
  "@type": "Person",
  name: "Torsolution",
  jobTitle: "Freelance Developer",
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brussels",
    addressCountry: "BE",
  },
  sameAs: [siteConfig.whatsapp],
};

function urlFor(path: string, locale: Locale): string {
  return `${siteConfig.url}${localizedHref(path, locale)}`;
}

// ─── Home ──────────────────────────────────────────────────────────────────────

export function homeSchemas(locale: Locale): object[] {
  const homeUrl = urlFor("/", locale);

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: locale === "fr" ? "fr-BE" : "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const person = {
    "@context": "https://schema.org",
    ...PERSON,
    knowsAbout: [
      "Web Development",
      "Mobile Development",
      "AI Automation",
      "Web3",
      "Product Engineering",
    ],
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: homeUrl,
    image: `${siteConfig.url}/og`,
    priceRange: "€€",
    areaServed: ["BE", "EU"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brussels",
      addressCountry: "BE",
    },
    founder: PERSON,
    sameAs: [siteConfig.whatsapp],
  };

  return [website, person, professionalService];
}

// ─── Service detail ────────────────────────────────────────────────────────────

export function serviceSchemas(service: ServiceEntry, locale: Locale): object[] {
  const copy = service[locale];
  const url = urlFor(`/services/${service.slug}`, locale);

  const offer = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: copy.title,
    description: copy.tagline,
    url,
    provider: PERSON,
    areaServed: ["BE", "EU"],
    serviceType: copy.tag,
    inLanguage: locale === "fr" ? "fr-BE" : "en",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: copy.title,
      itemListElement: copy.whatYouGet.map((item, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.desc,
        },
      })),
    },
  };

  const faqPage =
    copy.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: copy.faq.map((entry) => ({
            "@type": "Question",
            name: entry.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: entry.a,
            },
          })),
        }
      : null;

  return faqPage ? [offer, faqPage] : [offer];
}

// ─── Services index ────────────────────────────────────────────────────────────

export function servicesIndexSchema(
  entries: ServiceEntry[],
  locale: Locale,
): object[] {
  const url = urlFor("/services", locale);

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: locale === "fr" ? "Services Torsolution" : "Torsolution services",
      url,
      inLanguage: locale === "fr" ? "fr-BE" : "en",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: entries.map((entry, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: urlFor(`/services/${entry.slug}`, locale),
          name: entry[locale].title,
        })),
      },
    },
  ];
}

// ─── Work detail ───────────────────────────────────────────────────────────────

export function workSchemas(project: WorkEntry, locale: Locale): object[] {
  const copy = project[locale];
  const url = urlFor(`/work/${project.slug}`, locale);

  return [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: copy.title,
      headline: copy.tagline,
      description: copy.intro,
      url,
      image: `${siteConfig.url}/og`,
      inLanguage: locale === "fr" ? "fr-BE" : "en",
      author: PERSON,
      creator: PERSON,
      keywords: copy.tags.join(", "),
      about: copy.tag,
    },
  ];
}

// ─── Work index ────────────────────────────────────────────────────────────────

export function workIndexSchema(
  entries: WorkEntry[],
  locale: Locale,
): object[] {
  const url = urlFor("/work", locale);

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: locale === "fr" ? "Projets Torsolution" : "Torsolution work",
      url,
      inLanguage: locale === "fr" ? "fr-BE" : "en",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: entries.map((entry, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: urlFor(`/work/${entry.slug}`, locale),
          name: entry[locale].title,
        })),
      },
    },
  ];
}
