// components/Hero.tsx
import Image from "next/image";

type HeroProps = {
  lang: "es" | "en";
};

export default function Hero({ lang }: HeroProps) {
  // usamos la foto que SÍ tienes en /public
  const photoSrc = "/avatar.jpg";

  const heroContent =
    lang === "es"
      ? {
          name: "Melquiades Farías",
          headline: "Desarrollador web · soporte digital y sistemas",
          sub: "14+ años de base técnica (telecom) + stack actual: HTML, CSS, JS, WordPress, Next.js. Trabajo remoto y documentado: entregables claros, código limpio y seguimiento.",
          primaryBtn: "Ver / descargar CV",
          secondaryBtn: "Ver proyectos",
          cvHref: "/cv",
          projectsHref: "/projects",
          badge: "Foto de Melquiades Farías",
        }
      : {
          name: "Melquiades Farías",
          headline: "Web developer · digital & systems support",
          sub: "14+ years of technical background (telecom) + modern web stack: HTML, CSS, JS, WordPress, Next.js. Remote-ready, documented and maintainable work.",
          primaryBtn: "View / download CV",
          secondaryBtn: "View projects",
          cvHref: "/cv?lang=en",
          projectsHref: "/projects?lang=en",
          badge: "Photo of Melquiades Farías",
        };

  return (
    <header className="rounded-3xl bg-slate-900/60 border border-slate-800/40 p-6 md:p-8 flex flex-col gap-6 md:flex-row md:items-center">
      <div className="relative h-32 w-32 md:h-36 md:w-36 rounded-3xl overflow-hidden bg-slate-800 shrink-0">
        <Image
          src={photoSrc}
          alt={heroContent.badge}
          fill
          className="object-cover"
          sizes="144px"
        />
      </div>
      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.3em] text-slate-300 uppercase">
          {heroContent.name}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          {heroContent.headline}
        </h1>
        <p className="text-slate-200/90 max-w-2xl">{heroContent.sub}</p>
        <div className="flex flex-wrap gap-3 pt-1">
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
