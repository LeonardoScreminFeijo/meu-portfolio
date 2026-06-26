import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "leofeijo2001@hotmail.com",
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `De: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Falha ao enviar email." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
