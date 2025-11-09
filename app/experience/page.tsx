// app/experience/page.tsx
import fs from "fs";
import path from "path";
import YAML from "yaml";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import { themeTokens } from "@/theme/tokens";

const siteUrl = "https://remotas-portfolio.vercel.app";

export const metadata = {
  title: "Experiencia",
  description:
    "Trayectoria profesional, roles técnicos y trabajos relevantes de Melquiades Farías (Remotas Work).",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Experiencia — Melquiades Farías",
    description:
      "Experiencia en desarrollo web, soporte digital y base técnica en telecomunicaciones.",
    url: `${siteUrl}/experience`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Experiencia — Melquiades Farías",
    description:
      "Experiencia en desarrollo web, soporte digital y base técnica en telecomunicaciones.",
  },
};

function getExperience() {
  const file = fs.readFileSync(
    path.join(process.cwd(), "content/experience.yml"),
    "utf8"
  );
  return YAML.parse(file);
}

export default function ExperiencePage() {
  const data = getExperience();

  return (
    <main className={`min-h-screen ${themeTokens.backgroundBase} pb-12 pt-8`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6">
        <Section id="experience" title="Experiencia" headingLevel="h1">
          <p className="text-slate-200/80 mb-4">
            Roles técnicos, trabajo de campo en telecom y proyectos digitales
            recientes. ES/EN en línea, como en el resto del portfolio.
          </p>
          <Timeline items={data} />
        </Section>
      </div>
    </main>
  );
}
