import Hero from "@/app/components/Hero";
import Systems from "@/app/components/Systems";
import Capabilities from "@/app/components/Capabilities";
import Process from "@/app/components/Process";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
    <main>
      <div id="top" />
      <Hero />
      <Systems />
      <Capabilities />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}