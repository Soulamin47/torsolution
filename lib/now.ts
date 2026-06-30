// ─── "Now" widget content — edit this any time, it's the heartbeat of the site ─
// Single source of truth for what's displayed in the bottom-left corner.
// Keep it short, real, current. Update it weekly and the site stays alive.

export type NowCopy = {
  building: string;
  reading: string;
  lastShipped: { name: string; label: string };
};

export const NOW: { en: NowCopy; fr: NowCopy } = {
  en: {
    building: "TorStock v2 — IT asset tracking",
    reading: "Working in Public — Nadia Eghbal",
    lastShipped: { name: "Onstage v1.4", label: "6 days ago" },
  },
  fr: {
    building: "TorStock v2 — gestion parc IT",
    reading: "Working in Public — Nadia Eghbal",
    lastShipped: { name: "Onstage v1.4", label: "il y a 6 jours" },
  },
};
