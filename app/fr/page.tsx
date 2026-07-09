import type { Metadata } from "next";
import HomeClient from "@/app/components/HomeClient";
import JsonLd from "@/app/components/JsonLd";
import { homeSchemas } from "@/lib/schemas";
import { buildAlternates } from "@/lib/locale";
import { siteConfig } from "@/lib/site";

const description =
  "Développeur freelance basé à Bruxelles. Je conçois et développe des applications web, mobile, des plateformes métier et des outils IA fiables et performants.";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Développeur Freelance — Web, Mobile & IA`,
  description,
  alternates: buildAlternates("/", "fr"),
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/fr`,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Développeur Freelance — Web, Mobile & IA`,
    description,
    locale: "fr_BE",
    alternateLocale: ["en_US"],
    images: ["/og"],
  },
};

export default function FrHome() {
  return (
    <>
      <JsonLd schemas={homeSchemas("fr")} />
      <HomeClient />
    </>
  );
}
