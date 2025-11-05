// app/contact/page.tsx
import fs from "fs";
import path from "path";
import YAML from "yaml";
import Section from "@/components/Section";
import { themeTokens } from "@/theme/tokens";
import ContactForm from "./ContactForm";

function getContact() {
  const file = fs.readFileSync(
    path.join(process.cwd(), "content/contact.yml"),
    "utf8"
  );
  return YAML.parse(file) as {
    email?: string;
    linkedin?: string;
    github?: string;
    location?: string;
  };
}

export default function ContactPage() {
  const c = getContact();

  return (
    <main
      className={`min-h-screen ${themeTokens.backgroundBase} pb-12 pt-8`}
    >
      <div className="mx-auto max-w-6xl px-4 space-y-6">
        <Section id="contact" title="Contacto" headingLevel="h1">
          <p className="text-slate-200 mb-4">
            Puedes escribirme por correo o por las redes técnicas.
          </p>
          <div className={`space-y-3 text-sm ${themeTokens.headingColor}`}>
            {c.email ? (
              <div className="flex items-center gap-2">
                <span className={`${themeTokens.mutedColor} w-24`}>Email</span>
                <a
                  href={`mailto:${c.email}`}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  {c.email}
                </a>
              </div>
            ) : null}
            {c.linkedin ? (
              <div className="flex items-center gap-2">
                <span className={`${themeTokens.mutedColor} w-24`}>LinkedIn</span>
                <a
                  href={c.linkedin}
                  className="text-blue-400 hover:text-blue-300 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Perfil
                </a>
              </div>
            ) : null}
            {c.github ? (
              <div className="flex items-center gap-2">
                <span className={`${themeTokens.mutedColor} w-24`}>GitHub</span>
                <a
                  href={c.github}
                  className="text-blue-400 hover:text-blue-300 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repos
                </a>
              </div>
            ) : null}
            {c.location ? (
              <div className="flex items-center gap-2">
                <span className={`${themeTokens.mutedColor} w-24`}>Ubicación</span>
                <span>{c.location}</span>
              </div>
            ) : null}
          </div>
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-lg font-semibold text-slate-100 mb-4">
              Envíame un mensaje
            </h2>
            <ContactForm />
          </div>
        </Section>
      </div>
    </main>
  );
}
