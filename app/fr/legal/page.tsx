import type { Metadata } from "next";
import { buildAlternates } from "@/lib/locale";
import LegalContent from "@/app/legal/LegalContent";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales — Torsolution.",
  alternates: buildAlternates("/legal", "fr"),
};

export default function FrLegalPage() {
  return <LegalContent />;
}
