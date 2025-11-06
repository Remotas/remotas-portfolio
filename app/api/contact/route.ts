// C:\Users\melqu\remotas-portfolio\app\api\contact\route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validaciones básicas
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          ok: false,
          message: "Faltan datos. Nombre, correo y mensaje son obligatorios.",
        },
        { status: 400 }
      );
    }

    // Leemos las variables de entorno en el momento de la petición
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "remotas.work@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    // Si en producción te olvidas de poner la key, no rompemos el endpoint
    if (!apiKey) {
      console.error("Falta RESEND_API_KEY en las variables de entorno.");
      return NextResponse.json(
        {
          ok: true,
          message:
            "Mensaje recibido, pero el servidor no tiene configurado el envío de correo todavía.",
        },
        { status: 200 }
      );
    }

    // Creamos el cliente aquí dentro (esto es lo que evita que Vercel falle al compilar)
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      reply_to: email,
      subject: "Nuevo mensaje del portafolio de Mel Farias",
      // Texto plano por si el cliente no muestra HTML
      text: [
        "Nuevo mensaje desde el portafolio",
        `Nombre: ${name}`,
        `Correo: ${email}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
      // HTML bonito
      html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.5;">
          <h2>Nuevo mensaje desde el portafolio</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Error enviando email con Resend:", error);
      // No tiramos el 500 para que el usuario vea “enviado”
      return NextResponse.json(
        {
          ok: true,
          message:
            "Mensaje recibido, pero hubo un problema enviando el correo. Revisa los logs.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Mensaje enviado correctamente.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error en /api/contact:", err);
    return NextResponse.json(
      {
        ok: false,
        message: "No se pudo procesar el mensaje.",
      },
      { status: 500 }
    );
  }
}
