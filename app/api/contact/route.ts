import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function buildHtml(name: string, email: string, subject: string | undefined, message: string) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#07070A;color:#fff;padding:32px;border-radius:12px;border:1px solid rgba(255,255,255,0.1)">
      <h2 style="color:#60a5fa;margin:0 0 24px">New contact — Torsolution</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="color:#9ca3af;padding:6px 0;width:80px">Name</td><td style="color:#fff">${name}</td></tr>
        <tr><td style="color:#9ca3af;padding:6px 0">Email</td><td style="color:#60a5fa"><a href="mailto:${email}" style="color:#60a5fa">${email}</a></td></tr>
        ${subject ? `<tr><td style="color:#9ca3af;padding:6px 0">Subject</td><td style="color:#fff">${subject}</td></tr>` : ""}
      </table>
      <div style="margin-top:24px;padding:16px;background:rgba(255,255,255,0.05);border-radius:8px;font-size:14px;line-height:1.7;white-space:pre-wrap;color:#e5e7eb">${message}</div>
    </div>
  `;
}

async function sendWithResend({
  apiKey,
  from,
  to,
  replyTo,
  subject,
  text,
  html,
}: {
  apiKey: string;
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: replyTo,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend send failed (${response.status}): ${detail}`);
  }
}

async function sendWithSmtp({
  host,
  port,
  secure,
  user,
  pass,
  from,
  to,
  replyTo,
  subject,
  text,
  html,
}: {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo,
    subject,
    text,
    html,
  });
}

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = (await req.json()) as ContactPayload;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO ?? "info@torsolution.be";
  const emailSubject = subject || `New message from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const html = buildHtml(name, email, subject, message);

  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.CONTACT_FROM ?? "Torsolution <onboarding@resend.dev>";

  try {
    if (resendApiKey) {
      await sendWithResend({
        apiKey: resendApiKey,
        from: resendFrom,
        to: toEmail,
        replyTo: email,
        subject: emailSubject,
        text,
        html,
      });

      return NextResponse.json({ ok: true, provider: "resend" });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 587);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error("Contact form is missing SMTP env vars and RESEND_API_KEY is not set.");
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }

    await sendWithSmtp({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      user: smtpUser,
      pass: smtpPass,
      from: `"Torsolution Contact" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: emailSubject,
      text,
      html,
    });

    return NextResponse.json({ ok: true, provider: "smtp" });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json({ error: "Unable to send message." }, { status: 500 });
  }
}
