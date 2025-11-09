// app/contact/page.tsx
import ContactForm from "./ContactForm";
import { themeTokens } from "@/theme/tokens";

export const metadata = {
  title: "Contacto",
  description:
    "Formulario de contacto y datos directos de Melquiades Farías: correo, LinkedIn y ubicación.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main
      className={`min-h-screen ${themeTokens.backgroundBase} text-slate-50`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Panel de datos */}
          <section className="rounded-2xl bg-slate-900/60 p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Contacto
            </h1>
            <p className="text-slate-300 mb-8">
              Puedes escribirme por correo o por las redes técnicas.
            </p>

            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-slate-400">Email</dt>
                <dd>
                  <a
                    href="mailto:remotas.work@gmail.com"
                    className="text-sky-300 hover:underline"
                  >
                    remotas.work@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate-400">LinkedIn</dt>
                <dd>
                  <a
                    href="https://www.linkedin.com/in/remotas-work/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-300 hover:underline"
                  >
                    Perfil
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate-400">Ubicación</dt>
                <dd>España · Remoto / Movilidad UE</dd>
              </div>
            </dl>
          </section>

          {/* Formulario */}
          <section className="rounded-2xl bg-slate-900/60 p-6 md:p-8">
            <ContactForm />
          </section>
        </div>
      </div>
    </main>
  );
}
