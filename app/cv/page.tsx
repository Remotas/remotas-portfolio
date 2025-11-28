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
      name: "Otros Cursos (PDF)",
      href: "/pdf/Otros_Cursos_Unificado_Melquiades_Farias.pdf",
    },
  ];

  const educationItems = education as EducationItem[];

  return (
    <main className={`min-h-screen ${themeTokens.backgroundBase} pb-12 pt-8`}>
      <div className="mx-auto max-w-6xl px-4 space-y-6">
        <Section id="cv" title="Currículum" headingLevel="h1">
          <p className="text-[var(--foreground)]/75 mb-4">
            Descarga el CV que mejor se adapte a la vacante o consulta la
            sección de educación más abajo.
          </p>
          <div className="grid gap-4">
            {files.map((f) => (
              <div
                key={f.href}
                className={`flex items-center justify-between ${themeTokens.cardRadius} ${themeTokens.cardBorder} ${themeTokens.cardBg} px-4 py-3 transition-colors`}
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

        {educationItems && educationItems.length > 0 && (
          <Section id="education" title="Educación" headingLevel="h2">
            <div className="space-y-4">
              {educationItems.map((item, idx) => (
                <article
                  key={idx}
                  className={`${themeTokens.cardBg} ${themeTokens.cardRadius} ${themeTokens.cardBorder} p-4 transition-colors`}
                >
                  <h3 className="text-[var(--foreground)] font-semibold tracking-tight">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-[var(--foreground)]/70">
                    {item.institution}
                  </p>
                  {item.period ? (
                    <p className="text-xs text-[var(--muted)] mt-1">
                      {item.period}
                    </p>
                  ) : null}

                  {item.notes && item.notes.length > 0 ? (
                    <ul className="mt-3 space-y-1 list-disc pl-5 text-sm text-[var(--foreground)]/85">
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
