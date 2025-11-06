import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

export async function POST(req: Request) {
  // 1. Validar que tenemos las env en el entorno
  if (!SENDGRID_API_KEY) {
    return NextResponse.json(
      { ok: false, error: "Falta SENDGRID_API_KEY en las variables de entorno." },
      { status: 500 }
    );
  }

  if (!CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return NextResponse.json(
      {
        ok: false,
        error: "Faltan CONTACT_TO_EMAIL o CONTACT_FROM_EMAIL en las variables de entorno.",
      },
      { status: 500 }
    );
  }

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Nombre, correo y mensaje son obligatorios." },
      { status: 400 }
    );
  }

  sgMail.setApiKey(SENDGRID_API_KEY);

  const msg = {
    to: CONTACT_TO_EMAIL,
    from: CONTACT_FROM_EMAIL,
    subject: `Nuevo mensaje desde el portfolio de ${name}`,
    replyTo: email,
    text: `
Nombre: ${name}
Email: ${email}

Mensaje:
${message}
    `.trim(),
    html: `
      <h2>Nuevo mensaje desde el portfolio</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    // Log para que lo veas en Vercel → Logs de ejecución
    console.error("Error enviando correo con SendGrid:", error?.response?.body || error);

    // Si el error es de créditos agotados, respondemos 200 para que el usuario no vea el error feo
    const sgMsg: string | undefined =
      error?.response?.body?.errors?.[0]?.message ?? error?.message;

    if (sgMsg && sgMsg.toLowerCase().includes("maximum credits exceeded")) {
      return NextResponse.json({
        ok: true,
        warning:
          "El formulario se envió, pero SendGrid no lo pudo mandar porque la cuenta no tiene créditos.",
      });
    }

    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el mensaje. Inténtalo más tarde." },
      { status: 500 }
    );
  }
}
