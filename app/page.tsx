import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Systems from "./components/Systems";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import SeoSync from "./components/SeoSync";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070A] text-white pt-28">
      <Navbar />
      <SeoSync />
      <Hero />
      <Capabilities />
      <Systems />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}