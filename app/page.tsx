// app/page.tsx
import Image from "next/image";
import Section from "@/components/Section";
import SkillGrid from "@/components/SkillGrid";
import RotatingInfo from "@/components/RotatingInfo";
import AboutCarousel from "@/components/AboutCarousel";
import { themeTokens } from "@/theme/tokens";
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

export const metadata = {
  title: "Inicio",
  description:
    "Presentación, sobre mí, filosofía de trabajo y habilidades de Melquiades Farías. Portfolio bilingüe con acceso rápido a proyectos, certificaciones y contacto.",
  alternates: {
    canonical: "/",
  },
};

// ────────────────────────────────────────────
// helpers para leer markdown con dos idiomas
// ────────────────────────────────────────────
function removeFrontmatter(md: string) {
  if (md.startsWith("---")) {
    const end = md.indexOf("---", 3);
    if (end !== -1) {
      return md.slice(end + 3).trim();
    }
  }
  return md;
}

function getMdByLang(md: string, lang: "es" | "en") {
  const clean = removeFrontmatter(md);

  // tus .md tenían los marcadores ## ES / ## EN
  const markerEs = "## ES";
  const markerEn = "## EN";

  const startMarker = lang === "es" ? markerEs : markerEn;
  const endMarker = lang === "es" ? markerEn : markerEs;

  const startIdx = clean.indexOf(startMarker);
  if (startIdx === -1) return clean.trim();

  const sliced = clean.slice(startIdx + startMarker.length).trim();
  const endIdx = sliced.indexOf(endMarker);

  const finalText =
    endIdx !== -1 ? sliced.slice(0, endIdx).trim() : sliced.trim();

  return finalText;
}

// para justificar párrafos cuando haga falta
function renderParagraphs(md: string) {
  return md
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map((para, idx) => (
      <p
        key={idx}
        className="text-justify leading-relaxed text-slate-100/90 mb-3"
      >
        {para.trim()}
      </p>
    ));
}

// ────────────────────────────────────────────
// Página (SERVER COMPONENT)
// ────────────────────────────────────────────
export default async function Home({
  searchParams,
}: {
  // Next 15 lo pasa como promesa
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const lang = params?.lang === "en" ? "en" : "es";

  // leemos los .md y el yaml
  const contentDir = path.join(process.cwd(), "content");
  const aboutRaw = fs.readFileSync(path.join(contentDir, "about.md"), "utf8");
  const philosophyRaw = fs.readFileSync(
    path.join(contentDir, "philosophy.md"),
    "utf8"
  );
  const skillsRaw = fs.readFileSync(
    path.join(contentDir, "skills.yml"),
    "utf8"
  );
  const skills = YAML.parse(skillsRaw) as Record<string, string[]>;

  // aunque ahora no los pintemos como secciones separadas,
  // los dejo procesados por si luego quieres usarlos en otro lado
  const aboutMd = getMdByLang(aboutRaw, lang);
  const philosophyMd = getMdByLang(philosophyRaw, lang);

  // textos fijos
  const ui = {
    es: {
      title:
        "Melquiades Farías — Desarrollador Web | Tecnología & Soporte Digital",
      subtitle:
        "14+ años de experiencia técnica. Desarrollo web moderno, soporte, documentación y QA con apoyo de IA.",
      viewCv: "Ver / Descargar CV",
      viewProjects: "Ver proyectos",
      skillsTitle: "Habilidades",
      sidebar: {
        langTitle: "Ver el portfolio en otro idioma.",
        quickTitle: "Accesos rápidos",
        quickCv: "Ver / descargar CV",
        quickProjects: "Ver proyectos",
        quickContact: "Contacto",
        availabilityTitle: "Disponibilidad",
        availabilityText:
          "Remoto / mixto · España / UE · Entregables en PDF · Documentación clara.",
        stackTitle: "Stack principal",
        stackDesc:
          "Tecnologías que uso más en proyectos personales y de clientes.",
      },
    },
    en: {
      title: "Melquiades Farías — Web Developer | Technology & Digital Support",
      subtitle:
        "14+ years of technical experience. Modern web development, support, documentation and AI-assisted QA.",
      viewCv: "View / Download CV",
      viewProjects: "View projects",
      skillsTitle: "Skills",
      sidebar: {
        langTitle: "View this portfolio in another language.",
        quickTitle: "Quick links",
        quickCv: "View / download CV",
        quickProjects: "View projects",
        quickContact: "Contact",
        availabilityTitle: "Availability",
        availabilityText:
          "Remote / hybrid · Spain / EU · PDF deliverables · Clear documentation.",
        stackTitle: "Main stack",
        stackDesc: "Technologies I use most in personal and client projects.",
      },
    },
  }[lang];

  // helper para mantener ?lang=en en los enlaces
  const withLang = (p: string) => (lang === "en" ? `${p}?lang=en` : p);

  // para reutilizar el mismo estilo de tarjeta en la columna derecha
  const cardContainer = [
    themeTokens.cardRadius,
    themeTokens.cardBorder,
    themeTokens.cardBg,
    themeTokens.cardPadding,
  ].join(" ");

  return (
    <main className={`min-h-screen ${themeTokens.backgroundBase} pb-12`}>
      {/* hero */}
      <div className="mx-auto max-w-6xl px-4 pt-8">
        {/* layout de 2 columnas */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* columna izquierda */}
          <div className="space-y-8">
            <header
              className={`${cardContainer} flex flex-col gap-6 lg:flex-row lg:items-center`}
            >
              <div className="relative h-32 w-32 md:h-36 md:w-36 rounded-3xl overflow-hidden bg-slate-800">
                <Image
                  src="/avatar.jpg"
                  alt="Melquiades Farías"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 144px"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-50">
                  {ui.title}
                </h1>
                <p className="text-slate-300 max-w-xl">{ui.subtitle}</p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={withLang("/cv")}
                    className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-500 transition"
                  >
                    {ui.viewCv}
                  </a>
                  <a
                    href={withLang("/projects")}
                    className="rounded-full border border-slate-500 px-5 py-2 text-sm font-medium text-white hover:bg-slate-800 transition"
                  >
                    {ui.viewProjects}
                  </a>
                </div>
              </div>
            </header>

            {/* sobre mí + filosofía en forma de secciones */}
            <Section
              id="about"
              title={lang === "en" ? "About me" : "Sobre mí"}
              headingLevel="h2"
            >
              <div className="space-y-3 leading-relaxed text-slate-200">
                {renderParagraphs(aboutMd)}
              </div>
            </Section>

            <Section
              id="philosophy"
              title={lang === "en" ? "Work philosophy" : "Filosofía de trabajo"}
              headingLevel="h2"
            >
              <div className="space-y-3 leading-relaxed text-slate-200">
                {renderParagraphs(philosophyMd)}
              </div>
            </Section>

            <Section id="skills" title={ui.skillsTitle} headingLevel="h2">
              <SkillGrid skills={skills} />
            </Section>
          </div>

          {/* columna derecha */}
          <aside className="space-y-4">
            {/* selector de idioma */}
            <div className={cardContainer}>
              <h2
                className={`text-sm font-semibold ${themeTokens.headingColor}`}
              >
                {ui.sidebar.langTitle}
              </h2>
              <div className="mt-3 flex gap-2">
                <a
                  href="/"
                  className={`flex-1 rounded-lg py-2 text-center text-sm font-medium ${
                    lang === "es"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-slate-200"
                  }`}
                >
                  ES
                </a>
                <a
                  href="/?lang=en"
                  className={`flex-1 rounded-lg py-2 text-center text-sm font-medium ${
                    lang === "en"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-slate-200"
                  }`}
                >
                  EN
                </a>
              </div>
            </div>

            {/* accesos rápidos */}
            <div className={`${cardContainer} space-y-2`}>
              <h2
                className={`text-sm font-semibold ${themeTokens.headingColor}`}
              >
                {ui.sidebar.quickTitle}
              </h2>
              <ul className="space-y-1 text-sm text-slate-200">
                <li>
                  <a href={withLang("/cv")} className="hover:text-white">
                    {ui.sidebar.quickCv}
                  </a>
                </li>
                <li>
                  <a href={withLang("/projects")} className="hover:text-white">
                    {ui.sidebar.quickProjects}
                  </a>
                </li>
                <li>
                  <a href={withLang("/contact")} className="hover:text-white">
                    {ui.sidebar.quickContact}
                  </a>
                </li>
              </ul>
            </div>

            {/* disponibilidad */}
            <div
              className={`${cardContainer} space-y-1 text-sm text-slate-200`}
            >
              <h2
                className={`text-sm font-semibold ${themeTokens.headingColor}`}
              >
                {ui.sidebar.availabilityTitle}
              </h2>
              <p>{ui.sidebar.availabilityText}</p>
            </div>

            {/* tarjetas que rotan */}
            <RotatingInfo lang={lang} />

            {/* stack principal */}
            <div className={`${cardContainer} space-y-3`}>
              <h2
                className={`text-sm font-semibold ${themeTokens.headingColor}`}
              >
                {ui.sidebar.stackTitle}
              </h2>
              <p className="text-sm text-slate-200">{ui.sidebar.stackDesc}</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "Node.js",
                  "Tailwind",
                  "MongoDB",
                  "Express",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer className="border-t border-slate-900/70 mt-10 py-6 text-center text-sm text-slate-500">
        © 2025 Melquiades Farías · Hecho con Next.js + Tailwind
      </footer>
    </main>
  );
}
