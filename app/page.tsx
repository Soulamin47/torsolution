import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Systems from "./components/Systems";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import SeoSync from "./components/SeoSync";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070A] text-white pt-28">
      <CursorGlow />
      <ScrollProgress />
      <SeoSync />
      <Navbar />
      <Hero />
      <Capabilities />
      <Systems />
      <Process />
      <CTA />
      <Footer />
      <CookieBanner />
    </main>
  );
}