import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { bothLocaleUrls } from "@/lib/locale";
import { services } from "@/lib/services";
import { work } from "@/lib/work";

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

// Generate a sitemap entry for a canonical EN path. Adds the FR URL
// as an hreflang alternate via the `alternates.languages` field so
// Google indexes both versions in parallel.
function entry(
  canonicalPath: string,
  priority: number,
  changeFrequency: ChangeFreq,
): MetadataRoute.Sitemap[number] {
  const urls = bothLocaleUrls(canonicalPath);
  return {
    url: urls.en,
    lastModified: new Date(),
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
    {
      url: localEn,
      lastModified: new Date(),
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

  // Hint: the `url` field is the EN canonical, alternates carry the FR
  // URL with hreflang="fr".  siteConfig.url is used as base.
  void siteConfig;

  return [...staticPaths, ...servicePaths, ...workPaths];
}
