# Torsolution

## Development

Run the local server:

```bash
npm run dev
```

## Contact Form Email Setup

The contact form posts to `/api/contact` and sends email through SMTP with Nodemailer.

Create `.env.local` from [.env.local.example](/home/tors/Bureau/torsolution/.env.local.example) and set these variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO=info@torsolution.be
```

Provider notes:

- Gmail: use an App Password, not your normal Google password.
- OVH mailbox: usually `SMTP_HOST=ssl0.ovh.net`, `SMTP_PORT=587`, `SMTP_SECURE=false`.
- Brevo: use `SMTP_HOST=smtp-relay.brevo.com`, `SMTP_PORT=587`, `SMTP_SECURE=false`, and your Brevo SMTP key as `SMTP_PASS`.

## Contact email configuration

The contact form supports two providers:

1. **Resend API (recommended on Vercel)**
   - `RESEND_API_KEY`
   - `CONTACT_FROM` (example: `Torsolution <contact@torsolution.be>`)
   - `CONTACT_TO` (example: `info@torsolution.be`)

2. **SMTP fallback (Webador/local servers)**
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_TO`

When `RESEND_API_KEY` is set, the API path uses Resend first.
If it is missing, it falls back to SMTP.

After editing `.env.local`, restart the Next.js server.
