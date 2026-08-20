"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import CTA from "./CTA";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";
import FloatingWhatsApp from "./FloatingWhatsApp";
import NowWidget from "./NowWidget";
import GrainOverlay from "./GrainOverlay";
import ScrollProgress from "./ScrollProgress";
import CampaignHome from "./CampaignHome";

const IntroOverlay = dynamic(() => import("./IntroOverlay"), { ssr: false });

export default function HomeClient() {
  const alreadySeen = typeof window !== "undefined" && sessionStorage.getItem("intro_seen") === "1";
  const [introDone, setIntroDone] = useState(alreadySeen);

  const handleIntroDone = () => {
    sessionStorage.setItem("intro_seen", "1");
    setIntroDone(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden text-[#F0EEE8]">
      {!alreadySeen && <IntroOverlay onDone={handleIntroDone} />}

      <GrainOverlay />
      <div
        className="relative z-10 transition-opacity duration-700"
        style={{ opacity: introDone ? 1 : 0 }}
      >
        <ScrollProgress />
        <Navbar theme="dark" />
        <CampaignHome />
        <CTA />
        <Footer />
        <CookieBanner />
        <FloatingWhatsApp />
        <NowWidget />
      </div>
    </main>
  );
}
