import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8">
      <Image
        src="/avatar.jpg"
        alt="Melquiades"
        width={120}
        height={120}
        className="rounded-full"
      />
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">
          Melquiades Farías — Desarrollador Web | Tecnología & Soporte Digital
        </h1>
        <p className="opacity-80">
          14+ años de experiencia técnica. Desarrollo web moderno, soporte,
          documentación y QA con apoyo de IA.
        </p>
        <div className="flex gap-3">
          <Link
            className="rounded-2xl bg-brand px-4 py-2 text-white"
            href="/cv"
          >
            Ver / Descargar CV
          </Link>
          <Link className="rounded-2xl border px-4 py-2" href="/projects">
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
