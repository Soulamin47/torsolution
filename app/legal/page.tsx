import type { Metadata } from "next";
import { buildAlternates } from "@/lib/locale";
import LegalContent from "./LegalContent";

export const metadata: Metadata = {
  title: "Legal notices",
  description: "Legal notices — Torsolution.",
  alternates: buildAlternates("/legal"),
};

export default function LegalPage() {
  return <LegalContent />;
}
