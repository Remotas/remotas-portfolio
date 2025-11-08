// components/Hero.tsx
import Image from "next/image";

type HeroProps = {
  lang: "es" | "en";
};

export default function Hero({ lang }: HeroProps) {
  // ajusta este nombre según el archivo real que tengas en /public
  const photoSrc = "/profile.jpg";

  const heroContent =
    lang === "es"
      ? {
          name: "Melquiades Farías",
          headline: "Desarrollador web · soporte digital y sistemas",
          line1:
            "14+ años de base técnica (telecom) + stack actual: HTML, CSS, JS, WordPress, Next.js.",
          line2:
            "Trabajo remoto y documentado: entregables claros, código limpio y seguimiento.",
          primaryBtn: "Ver / descargar CV",
          secondaryBtn: "Ver proyectos",
          cvHref: "/cv",
          projectsHref: "/projects",
        }
      : {
          name: "Melquiades Farías",
          headline: "Web developer · digital & systems support",
          line1:
            "14+ years of technical background (telecom) + modern web stack: HTML, CSS, JS, WordPress, Next.js.",
          line2: "Remote-ready, documented and maintainable work.",
          primaryBtn: "View / download CV",
          secondaryBtn: "View projects",
          cvHref: "/cv?lang=en",
          projectsHref: "/projects?lang=en",
        };

  return (
    <header className="bg-slate-900/70 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-stretch">
      {/* Foto / avatar */}
      <div className="w-28 h-28 md:w-32 md:h-auto md:min-h-56 rounded-3xl overflow-hidden bg-slate-800 flex-shrink-0 relative">
        <Image
          src={photoSrc}
          alt={
            lang === "es"
              ? "Foto de Melquiades Farías"
              : "Photo of Melquiades Farías"
          }
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Texto principal */}
      <div className="flex-1 space-y-4 text-left">
        {/* Nombre como pequeño label arriba */}
        <p className="text-sm uppercase tracking-wide text-slate-200/80">
          {heroContent.name}
        </p>

        {/* Headline principal */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">
          {heroContent.headline}
        </h1>

        {/* Líneas descriptivas */}
        <div className="space-y-1 text-slate-100/90">
          <p className="max-w-2xl">{heroContent.line1}</p>
          <p className="max-w-2xl">{heroContent.line2}</p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={heroContent.cvHref}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            {heroContent.primaryBtn}
          </a>
          <a
            href={heroContent.projectsHref}
            className="border border-slate-500 hover:border-slate-300 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            {heroContent.secondaryBtn}
          </a>
        </div>
      </div>
    </header>
  );
}
