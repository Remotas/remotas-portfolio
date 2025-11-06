import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto – Melquiades Farías",
  description: "Ponte en contacto para proyectos o soporte técnico.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 pb-16 pt-28">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Contacto
          </h1>
          <p className="text-slate-300">
            Puedes escribirme por correo o por las redes técnicas.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-2xl bg-slate-900/60 p-6 shadow-lg ring-1 ring-slate-800/60">
            <h2 className="mb-4 text-lg font-semibold text-white">
              Envíame un mensaje
            </h2>
            <ContactForm />
          </div>

          <div className="space-y-4 rounded-2xl bg-slate-900/40 p-6 ring-1 ring-slate-800/40">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Email
              </p>
              <a
                href="mailto:remotas.work@gmail.com"
                className="text-sm text-sky-300 hover:underline"
              >
                remotas.work@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/melquiades-farias/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-sky-300 hover:underline"
              >
                Perfil
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Ubicación
              </p>
              <p className="text-sm text-slate-200">
                España · Remoto / Movilidad UE
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
