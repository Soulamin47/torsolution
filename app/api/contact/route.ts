import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Torsolution Contact" <${process.env.SMTP_USER ?? "info@torsolution.be"}>`,
      to: "info@torsolution.be",
      replyTo: email,
      subject: subject || `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#07070A;color:#fff;padding:32px;border-radius:12px;border:1px solid rgba(255,255,255,0.1)">
          <h2 style="color:#60a5fa;margin:0 0 24px">New contact — Torsolution</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="color:#9ca3af;padding:6px 0;width:80px">Name</td><td style="color:#fff">${name}</td></tr>
            <tr><td style="color:#9ca3af;padding:6px 0">Email</td><td style="color:#60a5fa"><a href="mailto:${email}" style="color:#60a5fa">${email}</a></td></tr>
            ${subject ? `<tr><td style="color:#9ca3af;padding:6px 0">Subject</td><td style="color:#fff">${subject}</td></tr>` : ""}
          </table>
          <div style="margin-top:24px;padding:16px;background:rgba(255,255,255,0.05);border-radius:8px;font-size:14px;line-height:1.7;white-space:pre-wrap;color:#e5e7eb">${message}</div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json({ error: "Unable to send message." }, { status: 500 });
  }
}
