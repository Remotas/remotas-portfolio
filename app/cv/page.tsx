// app/cv/page.tsx
import Section from "@/components/Section";
import { themeTokens } from "@/theme/tokens";
import education from "@/content/education.yml";

const siteUrl = "https://remotas-portfolio.vercel.app";

export const metadata = {
  title: "Currículum · Remotas Work",
  description:
    "Descarga el currículum técnico de Melquiades Farías (Remotas Work). Versión detallada, express y de cursos, junto con educación formal.",
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    title: "Currículum · Remotas Work",
    description:
      "Currículum profesional de Melquiades Farías: experiencia, educación y versiones descargables en PDF.",
    url: `${siteUrl}/cv`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Currículum de Melquiades Farías — Remotas Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Currículum · Remotas Work",
    description:
      "Currículum profesional de Melquiades Farías con versiones descargables y detalle de educación.",
    images: ["/og-image.png"],
  },
};

type EducationItem = {
  degree: string;
  institution: string;
  period?: string;
  notes?: string[];
};

// Nota: el YAML ya viene bilingüe en las cadenas (ES/EN en línea).
// No hacemos split por idioma aquí para mantener el portfolio ligero.

export default function CvPage() {
  const files = [
    {
      name: "CV Remoto Desarrollo Web (PDF)",
      href: "/pdf/Melquiades_Farias_CV_Remoto_DesarrolloWeb.pdf",
    },
    {
      name: "CV Express (PDF)",
      href: "/pdf/Melquiades_Farias_CV_Express.pdf",
    },
    {
      name: "Cursos Venezuela (PDF)",
      href: "/pdf/Cursos_Venezuela_Unificado_Melquiades_Farias.pdf",
    },
  ];

  const educationItems = education as EducationItem[];

  return (
    <main className={`min-h-screen ${themeTokens.backgroundBase} pb-12 pt-8`}>
      <div className="mx-auto max-w-6xl px-4 space-y-6">
        {/* Sección principal de CV / descargas */}
        <Section id="cv" title="Currículum" headingLevel="h1">
          <p className="text-slate-200 mb-4">
            Descarga el CV que mejor se adapte a la vacante o consulta la
            sección de educación más abajo.
          </p>
          <div className="grid gap-4">
            {files.map((f) => (
              <div
                key={f.href}
                className={`flex items-center justify-between ${themeTokens.cardRadius} ${themeTokens.cardBorder} bg-slate-900/40 px-4 py-3`}
              >
                <span className={themeTokens.headingColor}>{f.name}</span>
                <a
                  href={f.href}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-blue-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  Descargar
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* Nueva sección: Educación (tomada de content/education.yml) */}
        {educationItems && educationItems.length > 0 && (
          <Section id="education" title="Educación" headingLevel="h2">
            <div className="space-y-4">
              {educationItems.map((item, idx) => (
                <article
                  key={idx}
                  className={`bg-slate-900/30 ${themeTokens.cardRadius} ${themeTokens.cardBorder} p-4`}
                >
                  <h3 className="text-slate-50 font-semibold tracking-tight">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-slate-200/80">
                    {item.institution}
                  </p>
                  {item.period ? (
                    <p className="text-xs text-slate-400 mt-1">{item.period}</p>
                  ) : null}

                  {item.notes && item.notes.length > 0 ? (
                    <ul className="mt-3 space-y-1 list-disc pl-5 text-sm text-slate-100/90">
                      {item.notes.map((note, nIdx) => (
                        <li key={nIdx}>{note}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </Section>
        )}
      </div>
    </main>
  );
}
