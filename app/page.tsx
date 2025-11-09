// app/page.tsx
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import Hero from "@/components/Hero";
import SkillGrid from "@/components/SkillGrid";
import RotatingInfo from "@/components/RotatingInfo";
import HomeAccordion from "@/components/HomeAccordion";
import { themeTokens } from "@/theme/tokens";

export const metadata = {
  title: "Inicio",
  description:
    "Presentación de Melquiades Farías (Remotas Work): hero, accesos rápidos y contenido en acordeones. Portfolio bilingüe.",
  alternates: {
    canonical: "/",
  },
};

// helpers markdown
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

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const lang: "es" | "en" = params?.lang === "en" ? "en" : "es";

  // leer contenido
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

  const aboutMd = getMdByLang(aboutRaw, lang);
  const philosophyMd = getMdByLang(philosophyRaw, lang);

  // textos UI
  const ui = {
    es: {
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
      aboutTitle: "Sobre mí",
      philosophyTitle: "Filosofía de trabajo",
      skillsTitle: "Habilidades",
      notesTitle: "Notas rápidas",
    },
    en: {
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
      aboutTitle: "About me",
      philosophyTitle: "Work philosophy",
      skillsTitle: "Skills",
      notesTitle: "Quick notes",
    },
  }[lang];

  const withLang = (p: string) => (lang === "en" ? `${p}?lang=en` : p);

  const card = [
    themeTokens.cardRadius,
    themeTokens.cardBorder,
    themeTokens.cardBg,
    themeTokens.cardPadding,
  ].join(" ");

  return (
    <main className={`min-h-screen ${themeTokens.backgroundBase} pb-12`}>
      <div className="mx-auto max-w-6xl px-4 pt-8 space-y-8">
        {/* HERO (ya está con tu foto y textos nuevos) */}
        <Hero lang={lang} />

        {/* fila de tarjetas */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {/* idioma */}
          <div className={card}>
            <h2 className="text-sm font-semibold text-slate-100">
              {ui.langTitle}
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
          <div className={card}>
            <h2 className="text-sm font-semibold text-slate-100">
              {ui.quickTitle}
            </h2>
            <ul className="mt-2 space-y-1 text-sm text-slate-200">
              <li>
                <a href={withLang("/cv")} className="hover:text-white">
                  {ui.quickCv}
                </a>
              </li>
              <li>
                <a href={withLang("/projects")} className="hover:text-white">
                  {ui.quickProjects}
                </a>
              </li>
              <li>
                <a href={withLang("/contact")} className="hover:text-white">
                  {ui.quickContact}
                </a>
              </li>
            </ul>
          </div>

          {/* disponibilidad */}
          <div className={card}>
            <h2 className="text-sm font-semibold text-slate-100">
              {ui.availabilityTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              {ui.availabilityText}
            </p>
          </div>

          {/* stack principal */}
          <div className={card}>
            <h2 className="text-sm font-semibold text-slate-100">
              {ui.stackTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-200">{ui.stackDesc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Next.js", "React", "Node.js", "Tailwind", "MongoDB", "Express"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-100"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* acordeón con todo el contenido largo */}
        <HomeAccordion
          defaultId="about"
          items={[
            {
              id: "about",
              title: ui.aboutTitle,
              content: (
                <>
                  {renderParagraphs(aboutMd)}
                  <a
                    href={withLang("/cv")}
                    className="inline-flex text-sm text-blue-300 hover:text-blue-100"
                  >
                    {lang === "en" ? "View full profile →" : "Ver perfil completo →"}
                  </a>
                </>
              ),
            },
            {
              id: "philosophy",
              title: ui.philosophyTitle,
              content: (
                <>
                  {renderParagraphs(philosophyMd)}
                  <a
                    href={withLang("/cv")}
                    className="inline-flex text-sm text-blue-300 hover:text-blue-100"
                  >
                    {lang === "en"
                      ? "See full philosophy →"
                      : "Ver filosofía completa →"}
                  </a>
                </>
              ),
            },
            {
              id: "skills",
              title: ui.skillsTitle,
              content: (
                <>
                  <SkillGrid skills={skills} />
                  <a
                    href={withLang("/cv")}
                    className="inline-flex mt-3 text-sm text-blue-300 hover:text-blue-100"
                  >
                    {lang === "en"
                      ? "View full skillset →"
                      : "Ver todas las habilidades →"}
                  </a>
                </>
              ),
            },
            {
              id: "notes",
              title: ui.notesTitle,
              content: <RotatingInfo lang={lang} />,
            },
          ]}
        />
      </div>
    </main>
  );
}
