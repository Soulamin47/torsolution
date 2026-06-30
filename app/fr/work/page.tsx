import type { Metadata } from "next";
import { work } from "@/lib/work";
import { siteConfig } from "@/lib/site";
import { buildAlternates } from "@/lib/locale";
import { workIndexSchema } from "@/lib/schemas";
import PageShell from "@/app/components/PageShell";
import JsonLd from "@/app/components/JsonLd";
import WorkIndex from "@/app/work/WorkIndex";

export const metadata: Metadata = {
  title: "Projets — Sélection de produits livrés",
  description:
    "Sélection de produits que j'ai livrés — plateformes IA, marketplaces, outils IT santé et logiciels PME, du MVP à la production.",
  alternates: buildAlternates("/work", "fr"),
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/fr/work`,
    title: "Projets — Torsolution",
    description:
      "Sélection de projets de développement freelance — plateformes IA, marketplaces, IT santé, PME.",
    siteName: siteConfig.name,
    locale: "fr_BE",
    alternateLocale: ["en_US"],
    images: ["/og"],
  },
};

export default function FrWorkIndexPage() {
  return (
    <PageShell>
      <JsonLd schemas={workIndexSchema(work, "fr")} />
      <WorkIndex work={work} />
    </PageShell>
  );
}
