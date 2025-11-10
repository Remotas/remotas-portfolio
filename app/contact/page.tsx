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
    <main className={`min-h-screen ${themeTokens.backgroundBase}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <section
            className={`${themeTokens.cardBg} ${themeTokens.cardBorder} ${themeTokens.cardRadius} p-6 md:p-8 transition-colors`}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-[var(--foreground)]">
              Contacto
            </h1>
            <p className="text-[var(--foreground)]/75 mb-8">
              Puedes escribirme por correo o por las redes técnicas.
            </p>

            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-[var(--muted)]">Email</dt>
                <dd>
                  <a
                    href="mailto:remotas.work@gmail.com"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    remotas.work@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[var(--muted)]">LinkedIn</dt>
                <dd>
                  <a
                    href="https://www.linkedin.com/in/remotas-work/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    Perfil
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[var(--muted)]">Ubicación</dt>
                <dd className="text-[var(--foreground)]">
                  España · Remoto / Movilidad UE
                </dd>
              </div>
            </dl>
          </section>

          <section
            className={`${themeTokens.cardBg} ${themeTokens.cardBorder} ${themeTokens.cardRadius} p-6 md:p-8 transition-colors`}
          >
            <ContactForm />
          </section>
        </div>
      </div>
    </main>
  );
}
