import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Capabilities from "./components/Capabilities";
import Systems from "./components/Systems";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CursorSpotlight from "./components/CursorSpotlight";
import BackgroundOrbs from "./components/BackgroundOrbs";
import SeoSync from "./components/SeoSync";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09080F] text-[#F0EEE8] pt-20 overflow-x-hidden">
      <BackgroundOrbs />
      <CursorSpotlight />
      <div className="relative z-10">
        <SeoSync />
        <Navbar />
        <Hero />
        <TechStack />
        <Capabilities />
        <Systems />
        <Process />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
