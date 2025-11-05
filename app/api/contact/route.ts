import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    console.log("Contacto recibido", { name, email, message });

    // Aquí podríamos integrar un servicio de envío de correos, por ejemplo:
    // try {
    //   await sendContactEmail({
    //     apiKey: process.env.SENDGRID_API_KEY!,
    //     from: process.env.CONTACT_FROM_EMAIL!,
    //     to: process.env.CONTACT_TO_EMAIL!,
    //     name,
    //     email,
    //     message,
    //   });
    // } catch (error) {
    //   console.error("Error enviando correo", error);
    //   return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 500 });
    // }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error procesando el formulario de contacto", error);
    return NextResponse.json(
      { error: "No se pudo procesar la solicitud." },
      { status: 500 }
    );
  }
}
