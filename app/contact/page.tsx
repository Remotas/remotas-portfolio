import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contacto – Melquiades Farías",
  description: "Ponte en contacto con Melquiades Farías para oportunidades o soporte técnico.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-16 md:flex-row">
        {/* Columna izquierda: datos de contacto */}
        <section className="w-full rounded-2xl bg-slate-900/40 p-6 md:w-2/5">
          <h1 className="text-2xl font-semibold text-slate-50 mb-4">Contacto</h1>
          <p className="text-sm text-slate-300 mb-6">
            Puedes escribirme por correo o por las redes técnicas.
          </p>

          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-slate-400">Email</dt>
              <dd>
                <a
                  href="mailto:remotas.work@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  remotas.work@gmail.com
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-slate-400">LinkedIn</dt>
              <dd>
                <a
                  href="https://www.linkedin.com/in/remotas"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Perfil
                </a>
              </dd>
            </div>

            {/* GitHub eliminado como me pediste */}

            <div>
              <dt className="text-slate-400">Ubicación</dt>
              <dd className="text-slate-200">
                España · Remoto / Movilidad UE
              </dd>
            </div>
          </dl>
        </section>

        {/* Columna derecha: formulario */}
        <section className="w-full rounded-2xl bg-slate-900/40 p-6 md:w-3/5">
          <h2 className="text-xl font-semibold text-slate-50 mb-4">
            Envíame un mensaje
          </h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
