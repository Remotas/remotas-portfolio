// app/cv/page.tsx
import Section from "@/components/Section";

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

  return (
    <main className="min-h-screen bg-slate-950 pb-12 pt-8">
      <div className="mx-auto max-w-6xl px-4 space-y-6">
        <Section id="cv" title="Currículum" headingLevel="h1">
          <p className="text-slate-200 mb-4">
            Descarga el CV que mejor se adapte a la vacante.
          </p>
          <div className="grid gap-4">
            {files.map((f) => (
              <div
                key={f.href}
                className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-3"
              >
                <span className="text-slate-100">{f.name}</span>
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
      </div>
    </main>
  );
}
