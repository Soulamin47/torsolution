"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { siteConfig } from "@/lib/site";
import { fadeUp, stagger } from "@/lib/animations";

export default function CTA() {
  const { lang } = useLang();
  const t = translations[lang];
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    setSending(true);
    setSent(false);
    setError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) throw new Error("Contact request failed");

      setSent(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  // Shared input style — focus ring via inline style on focus event
  const baseInput =
    "w-full px-4 py-3 text-[13px] text-[#F0EEE8] outline-none rounded-[4px] transition-all duration-200 " +
    "placeholder:text-[#F0EEE8]/30 " +
    "bg-white/[0.03] border border-white/[0.08] " +
    "focus:border-[rgba(175,169,236,0.5)] focus:shadow-[0_0_0_1px_rgba(175,169,236,0.3)]";

  return (
    <section
      id="contact"
      className="border-t border-b border-white/[0.06]"
      style={{ background: "rgba(175,169,236,0.04)" }}
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10 py-24">
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-[32px] font-light italic text-[#F0EEE8] leading-tight"
            >
              {t.ctaTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-[14px] text-[#F0EEE8]/45 leading-relaxed"
            >
              {t.ctaSubtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("15-min call request")}`}
                className="inline-flex items-center justify-center rounded-[4px] bg-[#AFA9EC] px-6 py-3 text-[13px] font-medium text-[#09080F] transition-opacity hover:opacity-90"
              >
                {t.ctaCall}
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-[4px] border border-white/[0.15] px-6 py-3 text-[13px] font-medium text-[#F0EEE8] transition-colors hover:bg-white/[0.04]"
              >
                {t.ctaBrief}
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-4 font-mono text-[11px] text-[#F0EEE8]/30"
            >
              {t.ctaResponse}
            </motion.p>
          </motion.div>

          {/* Form */}
          <motion.form
            id="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-3"
          >
            {sent && (
              <div className="border border-[#1D9E75]/30 bg-[#1D9E75]/10 px-4 py-3 text-[13px] text-[#5DCAA5] rounded-[4px]">
                {t.contactSuccess}
              </div>
            )}

            {error && (
              <div className="border border-[#F0997B]/30 bg-[#F0997B]/10 px-4 py-3 text-[13px] text-[#F0997B] rounded-[4px]">
                {t.contactError}{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                  {siteConfig.email}
                </a>
              </div>
            )}

            <div className="grid gap-3 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder={t.contactName}
                aria-label={t.contactName}
                className={baseInput}
              />
              <input
                name="email"
                type="email"
                required
                placeholder={t.contactEmail}
                aria-label={t.contactEmail}
                className={baseInput}
              />
            </div>

            <input
              name="subject"
              placeholder={t.contactSubject}
              aria-label={t.contactSubject}
              className={baseInput}
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder={t.contactMessage}
              aria-label={t.contactMessage}
              className={`${baseInput} resize-none`}
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-[4px] bg-[#AFA9EC] px-6 py-3 text-[13px] font-medium text-[#09080F] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? t.contactSending : t.contactSend}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
