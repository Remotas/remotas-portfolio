// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  // 1. Validar que haya API key en el entorno (Vercel ya la tiene)
  if (!process.env.RESEND_API_KEY) {
    console.error("Falta RESEND_API_KEY en las variables de entorno.");
    return NextResponse.json(
      {
        ok: false,
        message:
          "No está configurada la clave de Resend en el servidor. Vuelve a intentarlo más tarde.",
      },
      { status: 500 }
    );
  }

  // 2. Leer el cuerpo que viene del formulario
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        ok: false,
        message: "Faltan datos: nombre, correo o mensaje.",
      },
      { status: 400 }
    );
  }

  // 3. Preparar contenido
  const to = process.env.CONTACT_TO_EMAIL!;
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  const html = `
    <h1>Nuevo mensaje desde el portafolio</h1>
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Correo:</strong> ${email}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${message}</p>
  `;

  try {
    // 4. Enviar con Resend
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `Nuevo mensaje del portafolio de ${name}`,
      html,
      // el tipo de Resend que tienes en Vercel NO acepta `reply_to`,
      // así que lo ponemos en headers:
      headers: {
        "Reply-To": email,
      },
    });

    if (error) {
      console.error("Error enviando email con Resend:", error);
      return NextResponse.json(
        {
          ok: false,
          message: "No se pudo enviar el correo.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Correo enviado correctamente.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Excepción enviando email con Resend:", err);
    return NextResponse.json(
      {
        ok: false,
        message: "Ocurrió un error inesperado.",
      },
      { status: 500 }
    );
  }
}
