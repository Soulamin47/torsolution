import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";
import FloatingWhatsApp from "./FloatingWhatsApp";
import NowWidget from "./NowWidget";
import GrainOverlay from "./GrainOverlay";

// Shared chrome for non-home pages (services, work).
// Keeps the same backdrop, navbar, footer and floating CTAs as the
// landing page so the experience stays consistent.
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f0e8] pt-20 text-[#15141a]">
      <GrainOverlay />
      <div className="relative z-10">
        <Navbar theme="light" />
        <div className="editorial-page">{children}</div>
        <Footer />
        <CookieBanner />
        <FloatingWhatsApp />
        <NowWidget />
      </div>
    </main>
  );
}
