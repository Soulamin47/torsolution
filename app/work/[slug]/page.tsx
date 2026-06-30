import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { work, getWork } from "@/lib/work";
import { siteConfig } from "@/lib/site";
import { buildAlternates } from "@/lib/locale";
import { workSchemas } from "@/lib/schemas";
import PageShell from "@/app/components/PageShell";
import JsonLd from "@/app/components/JsonLd";
import WorkDetail from "./WorkDetail";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getWork(slug);
  if (!project) return {};

  const title = `${project.en.title} — Case study`;
  const description = project.en.tagline + " " + project.en.intro.slice(0, 140);
  const canonicalPath = `/work/${project.slug}`;

  return {
    title,
    description,
    keywords: project.metaKeywords,
    alternates: buildAlternates(canonicalPath),
    openGraph: {
      type: "article",
      url: `${siteConfig.url}${canonicalPath}`,
      title,
      description,
      siteName: siteConfig.name,
      locale: "en_US",
      alternateLocale: ["fr_BE"],
      images: ["/og"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og"],
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getWork(slug);
  if (!project) notFound();

  return (
    <PageShell>
      <JsonLd schemas={workSchemas(project, "en")} />
      <WorkDetail project={project} />
    </PageShell>
  );
}
