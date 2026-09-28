"use client";
import Navbar from "./Navbar";
import Link from "next/link";
import { useLang } from "@/app/providers/LangProvider";
import { localizedHref } from "@/lib/locale";
import Footer from "./Footer";
import CampaignHome from "./CampaignHome";
export default function HomeClient() {
  const { lang } = useLang();
  return <div className="premium-shell"><Navbar theme="dark" /><main id="main-content"><CampaignHome /><section id="contact" className="premium-container info-next"><h2>{lang === "fr" ? "Un projet en tête ?" : "Have a project in mind?"}</h2><Link className="premium-button" href={localizedHref("/contact", lang)}>{lang === "fr" ? "Parlons de votre projet" : "Let’s discuss your project"} ↗</Link></section></main><Footer /></div>;
}
