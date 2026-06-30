import type { Metadata } from "next";
import { buildAlternates } from "@/lib/locale";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy — Torsolution.",
  alternates: buildAlternates("/privacy"),
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
