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
    if (!localStorage.getItem(COOKIE_KEY)) setVisible(true);
  }, []);

  const accept = () => { localStorage.setItem(COOKIE_KEY, "accepted"); setVisible(false); };
  const decline = () => { localStorage.setItem(COOKIE_KEY, "declined"); setVisible(false); };

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
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#0f0f13]/95 px-5 py-4 shadow-2xl backdrop-blur-md sm:flex-row sm:items-center">
            <p className="flex-1 text-sm text-gray-300">{t.cookieText}</p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={decline}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-400 transition hover:bg-white/10"
              >
                {t.cookieDecline}
              </button>
              <button
                onClick={accept}
                className="rounded-xl bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-white/90"
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
