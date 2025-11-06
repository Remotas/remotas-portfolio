// C:\Users\melqu\remotas-portfolio\app\api\contact\route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

// solo creamos el cliente si hay API key
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // 1) validación básica
  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }

  // 2) si no hay key, no rompemos el front
  if (!resend) {
    console.error("Falta RESEND_API_KEY en las variables de entorno.");
    return NextResponse.json(
      {
        ok: true,
        sent: false,
        error:
          "El servidor recibió el mensaje pero no hay RESEND_API_KEY configurada.",
      },
      { status: 200 }
    );
  }

  // 3) necesitamos saber desde dónde y hacia dónde
  if (!CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error(
      "Faltan CONTACT_TO_EMAIL o CONTACT_FROM_EMAIL en las variables de entorno."
    );
    return NextResponse.json(
      {
        ok: true,
        sent: false,
        error:
          "El servidor recibió el mensaje pero faltan correos de configuración.",
      },
      { status: 200 }
    );
  }

  const html = `
    <h2>Nuevo mensaje desde el portafolio</h2>
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Correo:</strong> ${email}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${message.replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,        // ahora mismo: onboarding@resend.dev
      to: CONTACT_TO_EMAIL,            // tu Gmail
      subject: `Nuevo mensaje del portafolio de ${name}`,
      html,
      reply_to: email,                 // para poder responderle directo al que escribió
    });

    if (error) {
      console.error("Error enviando email con Resend:", error);
      return NextResponse.json(
        {
          ok: true,
          sent: false,
          error: "El servidor recibió el mensaje pero Resend lo rechazó.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { ok: true, sent: true, data },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error inesperado con Resend:", err);
    return NextResponse.json(
      {
        ok: true,
        sent: false,
        error: "El servidor recibió el mensaje pero ocurrió un error interno.",
      },
      { status: 200 }
    );
  }
}
