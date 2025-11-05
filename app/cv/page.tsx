import Section from "@/components/Section";

export default function CV() {
  const files = [
    {
      name: "CV Completo (PDF)",
      href: "/pdf/Melquiades_Farias_CV_Remoto_DesarrolloWeb.pdf",
    },
    { name: "CV Express (PDF)", href: "/pdf/Melquiades_Farias_CV_Express.pdf" },
    {
      name: "Dossier Técnico (VE) — PDF",
      href: "/pdf/Cursos_Venezuela_Unificado_Melquiades_Farias.pdf",
    },
  ];
  return (
    <main className="min-h-screen bg-slate-950 pb-12 pt-8">
      <div className="mx-auto max-w-6xl px-4">
        <Section title="Currículum" headingLevel="h1" className="mt-0">
          <ul className="space-y-4">
            {files.map((f) => (
              <li
                key={f.href}
                className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-slate-100">{f.name}</span>
                <a
                  href={f.href}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  Descargar
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </main>
  );
}
