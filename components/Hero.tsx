// components/Hero.tsx
import { themeTokens } from "@/theme/tokens";

type HeroProps = {
  lang: "es" | "en";
};

export default function Hero({ lang }: HeroProps) {
  const heroContent =
    lang === "es"
      ? {
          name: "Remotas Work",
          headline: "Desarrollo Web Full Stack & Sistemas",
          sub: "Soluciones digitales completas: arquitectura, desarrollo, despliegue y soporte. Stack moderno con base sólida en sistemas y operación técnica.",
          primaryBtn: "Ver / descargar CV",
          secondaryBtn: "Ver proyectos",
          servicesBtn: "Servicios →", // nuevo texto botón
          cvHref: "/cv",
          projectsHref: "/projects",
          servicesHref: "/services", // nueva ruta
        }
      : {
          name: "Remotas Work",
          headline: "Full Stack Web Development & Systems",
          sub: "End-to-end digital solutions: architecture, development, deployment, and support. Modern web stack built on a strong systems and operations foundation.",
          primaryBtn: "View / download CV",
          secondaryBtn: "View projects",
          servicesBtn: "Services →", // nuevo texto botón EN
          cvHref: "/cv?lang=en",
          projectsHref: "/projects?lang=en",
          servicesHref: "/services?lang=en", // nueva ruta EN
        };

  return (
    <header
      className={`rounded-3xl ${themeTokens.cardBg} ${themeTokens.cardBorder} p-6 md:p-8 flex flex-col gap-6 transition-colors`}
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--muted)]">
          {heroContent.name}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
          {heroContent.headline}
        </h1>
        <p className="text-[var(--foreground)]/80 w-full text-justify">
          {heroContent.sub}
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={heroContent.cvHref}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            {heroContent.primaryBtn}
          </a>
          <a
            href={heroContent.projectsHref}
            className="border border-[var(--border)] text-[var(--foreground)] px-5 py-2.5 rounded-full text-sm font-medium transition-colors hover:bg-[var(--background)]/5"
          >
            {heroContent.secondaryBtn}
          </a>
          <a
            href={heroContent.servicesHref}
            className="border border-[var(--border)] text-[var(--foreground)] px-5 py-2.5 rounded-full text-sm font-medium transition-colors hover:bg-[var(--background)]/5"
          >
            {heroContent.servicesBtn}
          </a>
        </div>
      </div>
    </header>
  );
}
