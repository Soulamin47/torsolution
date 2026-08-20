import type { Metadata } from "next";
import { buildAlternates } from "@/lib/locale";
import LegalContent from "./LegalContent";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Legal notices",
  description: "Legal notices — Torsolution.",
  alternates: buildAlternates("/legal"),
};

export default function LegalPage() {
  return <PageShell><LegalContent /></PageShell>;
}
