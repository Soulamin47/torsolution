"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";

const COOKIE_KEY = "torsolution-cookie-consent";

export default function CookieBanner() {
  const { lang } = useLang();
  const t = translations[lang];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisible(!localStorage.getItem(COOKIE_KEY));
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 z-[300] w-[calc(100%-3rem)] max-w-xl -translate-x-1/2"
        >
          <div className="flex flex-col gap-4 rounded-[8px] border border-white/[0.08] bg-[#0C0B12]/95 px-5 py-4 shadow-2xl shadow-black/40 backdrop-blur-md sm:flex-row sm:items-center">
            <p className="flex-1 text-[13px] leading-relaxed text-[#F0EEE8]/55">{t.cookieText}</p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={decline}
                className="rounded-[4px] border border-white/[0.12] bg-white/[0.03] px-4 py-2 text-[12px] text-[#F0EEE8]/55 transition hover:bg-white/[0.06] hover:text-[#F0EEE8]/80"
              >
                {t.cookieDecline}
              </button>
              <button
                onClick={accept}
                className="rounded-[4px] bg-[#AFA9EC] px-4 py-2 text-[12px] font-medium text-[#09080F] transition-opacity hover:opacity-90"
              >
                {t.cookieAccept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
