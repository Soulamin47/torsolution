import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundOrbs from "./BackgroundOrbs";
import CursorSpotlight from "./CursorSpotlight";
import CookieBanner from "./CookieBanner";
import FloatingWhatsApp from "./FloatingWhatsApp";
import NowWidget from "./NowWidget";

// Shared chrome for non-home pages (services, work).
// Keeps the same backdrop, navbar, footer and floating CTAs as the
// landing page so the experience stays consistent.
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#09080F] text-[#F0EEE8] pt-20 overflow-x-hidden">
      <BackgroundOrbs />
      <CursorSpotlight />
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <FloatingWhatsApp />
        <NowWidget />
      </div>
    </main>
  );
}
