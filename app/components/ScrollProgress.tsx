"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[200] h-[2px] w-full bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
        style={{ width: `${pct}%`, transition: "width 60ms linear" }}
      />
    </div>
  );
}
