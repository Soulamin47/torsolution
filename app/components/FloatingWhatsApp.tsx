"use client";

import { siteConfig } from "@/lib/site";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
    >
      <path
        d="M5.6 18.5 6.5 15A7.4 7.4 0 1 1 9 17.4l-3.4 1.1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.4.5c.5.9 1.2 1.6 2.2 2.1l.5-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.6v.4c0 .4-.2.7-.5.9-.5.3-1.4.4-2.7-.2-1.4-.6-2.6-1.5-3.6-2.7-1-1.1-1.6-2.5-1.6-3.2 0-.2.1-.4.2-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  return (
    <a
      href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Bonjour, je viens du site Torsolution et j'aimerais discuter d'un projet.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact WhatsApp"
      className="fixed bottom-5 right-5 z-[280] inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#5DCAA5]/40 bg-[#10231E]/90 text-[#5DCAA5] shadow-2xl shadow-black/40 backdrop-blur transition hover:scale-105 hover:bg-[#5DCAA5] hover:text-[#06100D] sm:h-auto sm:w-auto sm:gap-2 sm:rounded-[6px] sm:px-4 sm:py-3"
    >
      <span className="absolute inset-0 rounded-full border border-[#5DCAA5]/25 animate-ping sm:hidden" />
      <WhatsAppIcon className="relative h-5 w-5" />
      <span className="hidden font-mono text-[11px] sm:inline">WhatsApp</span>
    </a>
  );
}
