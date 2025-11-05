// app/api/contact/route.ts
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || process.env.CONTACT_TO_EMAIL || "";

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

export async function POST(request: Request) {
  try {
    // 1. validar que tengamos credenciales
    if (!SENDGRID_API_KEY) {
      return NextResponse.json(
        { error: "Falta SENDGRID_API_KEY en las variables de entorno." },
        { status: 500 }
      );
    }

    if (!CONTACT_TO_EMAIL) {
      return NextResponse.json(
        { error: "Falta CONTACT_TO_EMAIL en las variables de entorno." },
        { status: 500 }
      );
    }

    // 2. leer el body que manda tu <ContactForm />
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos: nombre, correo o mensaje." },
        { status: 400 }
      );
    }

    // 3. armar el correo
    const msg = {
      to: CONTACT_TO_EMAIL,
      from: CONTACT_FROM_EMAIL, // tiene que ser un remitente válido en tu SendGrid
      subject: `Nuevo mensaje del portafolio – ${name}`,
      text: `
Nombre: ${name}
Correo: ${email}

Mensaje:
${message}
      `.trim(),
      html: `
        <h2>Nuevo mensaje desde el portafolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    };

    // 4. enviar
    await sgMail.send(msg);

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("Error enviando correo:", err);

    // SendGrid suele traer info en err.response.body
    const sgError =
      typeof err === "object" &&
      err !== null &&
      "response" in err &&
      // @ts-expect-error
      err.response?.body?.errors?.[0]?.message
        ? // @ts-expect-error
          err.response.body.errors[0].message
        : "No se pudo enviar el mensaje.";

    return NextResponse.json({ error: sgError }, { status: 500 });
  }
}
