import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { bothLocaleUrls } from "@/lib/locale";
import { services } from "@/lib/services";
import { work } from "@/lib/work";

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

// Generate a sitemap entry for a canonical EN path. Adds the FR URL
// as an hreflang alternate via the `alternates.languages` field so
// Google indexes both versions in parallel. No `lastModified`: a build
// timestamp would claim every page changed on every deploy, so Google
// would learn to ignore it.
function entry(
  canonicalPath: string,
  priority: number,
  changeFrequency: ChangeFreq,
): MetadataRoute.Sitemap[number] {
  const urls = bothLocaleUrls(canonicalPath);
  return {
    url: urls.en,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        en: urls.en,
        fr: urls.fr,
        "x-default": urls.en,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localEn = `${siteConfig.url}/freelance-developer-brussels`;
  const localFr = `${siteConfig.url}/fr/developpeur-freelance-bruxelles`;
  const staticPaths: MetadataRoute.Sitemap = [
    entry("/", 1.0, "monthly"),
    entry("/services", 0.9, "monthly"),
    entry("/work", 0.9, "monthly"),
    entry("/method", 0.7, "monthly"),
    entry("/about", 0.7, "monthly"),
    entry("/contact", 0.7, "yearly"),
    {
      url: localEn,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: localEn, fr: localFr, "x-default": localEn } },
    },
    entry("/privacy", 0.2, "yearly"),
    entry("/legal", 0.2, "yearly"),
  ];

  const servicePaths: MetadataRoute.Sitemap = services.map((s) =>
    entry(`/services/${s.slug}`, 0.8, "monthly"),
  );

  const workPaths: MetadataRoute.Sitemap = work.map((w) =>
    entry(`/work/${w.slug}`, 0.8, "monthly"),
  );

  return [...staticPaths, ...servicePaths, ...workPaths].flatMap((page) => {
    const frenchUrl = page.alternates?.languages?.fr;
    return frenchUrl ? [page, { ...page, url: String(frenchUrl) }] : [page];
  });
}
