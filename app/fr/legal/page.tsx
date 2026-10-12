import type { Metadata } from "next";
import { buildAlternates } from "@/lib/locale";
import LegalContent from "@/app/legal/LegalContent";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site torsolution.be : éditeur, numéro d’entreprise, hébergeur, propriété intellectuelle et responsabilité.",
  alternates: buildAlternates("/legal", "fr"),
};

export default function FrLegalPage() {
  return <PageShell><LegalContent /></PageShell>;
}
