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

After editing `.env.local`, restart the Next.js server.
