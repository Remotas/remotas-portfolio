// components/Hero.tsx
import Image from "next/image";

type HeroProps = {
  lang: "es" | "en";
};

export default function Hero({ lang }: HeroProps) {
  // pon aquí el nombre del archivo que SÍ tienes en /public
  const photoSrc = "/profile.jpg"; // cambia a /melquiades.jpg o como lo tengas

  const title =
    lang === "es"
      ? "Melquiades Farías — Desarrollador Web | Tecnología & Soporte Digital"
      : "Melquiades Farías — Web Developer | Technology & Digital Support";

  const subtitle =
    lang === "es"
      ? "14+ años de experiencia técnica. Desarrollo web moderno, soporte, documentación y QA con apoyo de IA."
      : "14+ years of technical experience. Modern web development, support, documentation and AI-assisted QA.";

  const primaryBtn =
    lang === "es" ? "Ver / Descargar CV" : "View / Download CV";
  const secondaryBtn = lang === "es" ? "Ver proyectos" : "View projects";

  return (
    <header className="bg-slate-900/70 rounded-3xl p-8 flex gap-6 items-center">
      {/* bloque de la foto */}
      <div className="w-28 h-56 rounded-3xl overflow-hidden bg-slate-800 flex-shrink-0 relative">
        <Image
          src={photoSrc}
          alt="Foto de Melquiades Farías"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* textos */}
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          {title}
        </h1>
        <p className="text-slate-200 max-w-2xl">{subtitle}</p>

        <div className="flex flex-wrap gap-3">
          <a
            href={lang === "es" ? "/cv" : "/cv?lang=en"}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-medium"
          >
            {primaryBtn}
          </a>
          <a
            href={lang === "es" ? "/projects" : "/projects?lang=en"}
            className="border border-slate-500 hover:border-slate-300 text-white px-5 py-2.5 rounded-full text-sm font-medium"
          >
            {secondaryBtn}
          </a>
        </div>
      </div>
    </header>
  );
}
