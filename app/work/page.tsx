import type { Metadata } from "next";
import { work } from "@/lib/work";
import { siteConfig } from "@/lib/site";
import { buildAlternates } from "@/lib/locale";
import { workIndexSchema } from "@/lib/schemas";
import PageShell from "@/app/components/PageShell";
import JsonLd from "@/app/components/JsonLd";
import WorkIndex from "./WorkIndex";

export const metadata: Metadata = {
  title: "Work — Selected freelance development projects",
  description:
    "A selection of products I've shipped — AI platforms, marketplaces, healthcare IT tools and SME software, from MVP to production.",
  alternates: buildAlternates("/work"),
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/work`,
    title: "Work — Torsolution",
    description:
      "Selected freelance development projects — AI platforms, marketplaces, healthcare IT software, SME tools.",
    siteName: siteConfig.name,
    locale: "en_US",
    alternateLocale: ["fr_BE"],
    images: ["/og"],
  },
};

export default function WorkPageIndex() {
  return (
    <PageShell>
      <JsonLd schemas={workIndexSchema(work, "en")} />
      <WorkIndex work={work} />
    </PageShell>
  );
}
