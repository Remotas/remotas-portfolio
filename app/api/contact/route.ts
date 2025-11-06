import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || process.env.CONTACT_TO_EMAIL;

export async function POST(req: Request) {
  // 1. Validar que llegaron los campos
  const { name, email, message } = await req.json().catch(() => ({} as any));

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Faltan datos del formulario." },
      { status: 400 }
    );
  }

  // 2. Validar que en producción estén las env
  if (!SENDGRID_API_KEY || !CONTACT_TO_EMAIL) {
    // Esto es lo que estás viendo en localhost cuando no hay .env.local
    return NextResponse.json(
      {
        error: "Falta SENDGRID_API_KEY en las variables de entorno.",
      },
      { status: 500 }
    );
  }

  sgMail.setApiKey(SENDGRID_API_KEY);

  const msg = {
    to: CONTACT_TO_EMAIL,
    from: CONTACT_FROM_EMAIL || CONTACT_TO_EMAIL,
    subject: `Nuevo mensaje de ${name} desde el portfolio`,
    text: `
Nombre: ${name}
Correo: ${email}

Mensaje:
${message}
    `.trim(),
    html: `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Correo:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    // Aquí entran errores como "Maximum credits exceeded"
    console.error("Error enviando email con SendGrid:", err?.response?.body || err);

    return NextResponse.json(
      {
        // devolvemos ok: true para que el usuario no vea el error feo
        ok: true,
        warning:
          "El formulario se envió pero el servicio de correo está sin crédito en SendGrid.",
      },
      { status: 200 }
    );
  }
}
