import Link from "next/link";

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
    <>
      <h1 className="text-2xl font-semibold mb-6">Currículum</h1>
      <ul className="space-y-3">
        {files.map((f) => (
          <li
            key={f.href}
            className="border rounded-2xl p-4 flex items-center justify-between"
          >
            <span>{f.name}</span>
            <Link
              href={f.href}
              className="rounded-2xl bg-brand px-3 py-1 text-white"
            >
              Descargar
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
