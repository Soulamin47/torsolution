# Torsolution

Site of Torsolution, freelance developer in Brussels — Next.js (App Router), bilingual EN / FR (`/` and `/fr`).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Contact form

The contact form posts to `/api/contact`. Copy `.env.local.example` to `.env.local` and fill in one of the two providers, then restart the server:

1. **Resend API (recommended on Vercel)** — `RESEND_API_KEY`, `CONTACT_FROM`, `CONTACT_TO`.
   `CONTACT_FROM` must use a domain verified in Resend.
2. **SMTP fallback** — `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`.

When `RESEND_API_KEY` is set, Resend is used; otherwise the SMTP settings are.

SMTP provider notes:

- Gmail: use an App Password, not your normal Google password.
- OVH mailbox: `SMTP_HOST=ssl0.ovh.net`, `SMTP_PORT=587`, `SMTP_SECURE=false`.
- Brevo: `SMTP_HOST=smtp-relay.brevo.com`, `SMTP_PORT=587`, `SMTP_SECURE=false`, Brevo SMTP key as `SMTP_PASS`.
