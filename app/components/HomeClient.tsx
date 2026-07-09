"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ProjectLauncher from "./ProjectLauncher";
import TechStack from "./TechStack";
import Capabilities from "./Capabilities";
import Systems from "./Systems";
import Process from "./Process";
import Manifesto from "./Manifesto";
import AboutMe from "./AboutMe";
import CTA from "./CTA";
import Footer from "./Footer";
import CursorSpotlight from "./CursorSpotlight";
import BackgroundOrbs from "./BackgroundOrbs";
import CookieBanner from "./CookieBanner";
import FloatingWhatsApp from "./FloatingWhatsApp";
import NowWidget from "./NowWidget";
import GrainOverlay from "./GrainOverlay";
import ShowcaseCarousel from "./ShowcaseCarousel";

const IntroOverlay = dynamic(() => import("./IntroOverlay"), { ssr: false });

export default function HomeClient() {
  const alreadySeen = typeof window !== "undefined" && sessionStorage.getItem("intro_seen") === "1";
  const [introDone, setIntroDone] = useState(alreadySeen);

  const handleIntroDone = () => {
    sessionStorage.setItem("intro_seen", "1");
    setIntroDone(true);
  };

  return (
    <main className="min-h-screen bg-[#09080F] text-[#F0EEE8] pt-20 overflow-x-hidden">
      {!alreadySeen && <IntroOverlay onDone={handleIntroDone} />}

      <BackgroundOrbs />
      <CursorSpotlight />
      <GrainOverlay />
      <div
        className="relative z-10 transition-opacity duration-700"
        style={{ opacity: introDone ? 1 : 0 }}
      >
        <Navbar />
        <Hero />
        <ProjectLauncher />
        <TechStack />
        <ShowcaseCarousel />
        <Capabilities />
        <Systems />
        <Process />
        <Manifesto />
        <AboutMe />
        <CTA />
        <Footer />
        <CookieBanner />
        <FloatingWhatsApp />
        <NowWidget />
      </div>
    </main>
  );
}
