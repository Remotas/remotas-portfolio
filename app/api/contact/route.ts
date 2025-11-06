// app/api/contact/route.ts
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // validaciones básicas
  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }

  if (!SENDGRID_API_KEY) {
    console.error("Falta SENDGRID_API_KEY en las variables de entorno.");
    // devolvemos 200 para que el usuario no vea error en el front
    return NextResponse.json(
      {
        ok: true,
        sent: false,
        error:
          "Falta SENDGRID_API_KEY en las variables de entorno (solo visible en servidor).",
      },
      { status: 200 }
    );
  }

  if (!CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error(
      "Faltan CONTACT_TO_EMAIL o CONTACT_FROM_EMAIL en las variables de entorno."
    );
    return NextResponse.json(
      {
        ok: true,
        sent: false,
        error:
          "Faltan correos de configuración en las variables de entorno (solo visible en servidor).",
      },
      { status: 200 }
    );
  }

  const msg = {
    to: CONTACT_TO_EMAIL,
    from: CONTACT_FROM_EMAIL,
    subject: `Nuevo mensaje del portafolio de ${name}`,
    text: `
Nombre: ${name}
Correo: ${email}

Mensaje:
${message}
    `.trim(),
    html: `
      <h2>Nuevo mensaje del portafolio</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Correo:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  };

  try {
    const resp = await sgMail.send(msg);

    // si SendGrid respondió pero no envía (cuota, plan, etc.)
    if (!Array.isArray(resp) || resp.length === 0) {
      console.error("Respuesta inesperada de SendGrid:", resp);
    }

    return NextResponse.json({ ok: true, sent: true }, { status: 200 });
  } catch (err: any) {
    // aquí vas a ver exactamente qué contesta SendGrid
    console.error("Error enviando email con SendGrid:", err?.response?.body || err);

    // al usuario lo dejamos feliz igualmente
    return NextResponse.json(
      {
        ok: true,
        sent: false,
        error: "El servidor recibió el mensaje pero SendGrid lo rechazó.",
      },
      { status: 200 }
    );
  }
}
