import type { Metadata } from "next";
import HomeClient from "./components/HomeClient";
import JsonLd from "./components/JsonLd";
import { homeSchemas } from "@/lib/schemas";
import { buildAlternates } from "@/lib/locale";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Freelance Developer — Web, Mobile & AI`,
  description: siteConfig.description,
  alternates: buildAlternates("/"),
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/`,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Freelance Developer — Web, Mobile & AI`,
    description: siteConfig.description,
    locale: "en_US",
    alternateLocale: ["fr_BE"],
    images: ["/og"],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd schemas={homeSchemas("en")} />
      <HomeClient />
    </>
  );
}
