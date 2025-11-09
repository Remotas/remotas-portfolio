// app/projects/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { themeTokens } from "@/theme/tokens";

const siteName = "Remotas Work · Melquiades Farías";
const siteUrl = "https://remotas-portfolio.vercel.app";

export const metadata = {
  title: "Proyectos · Remotas Work",
  description:
    "Proyectos personales y de clientes desarrollados por Melquiades Farías: arquitectura web moderna, e-commerce, monorepos y automatización.",
  keywords: [
    "Melquiades Farías",
    "Remotas Work",
    "Next.js",
    "proyectos",
    "portfolio",
    "React",
    "Node.js",
    "TailwindCSS",
    "e-commerce",
    "monorepo",
  ],
  openGraph: {
    title: "Proyectos · Remotas Work",
    description:
      "Portafolio de proyectos técnicos de Melquiades Farías: desarrollo web, monorepos y sistemas digitales.",
    url: `${siteUrl}/projects`,
    siteName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Proyectos de Melquiades Farías",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos · Remotas Work",
    description:
      "Portafolio de proyectos técnicos de Melquiades Farías: desarrollo web, monorepos y sistemas digitales.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/projects",
    languages: {
      "es-ES": "/projects",
      "en-US": "/projects?lang=en",
    },
  },
};

function getProjects() {
  const dir = path.join(process.cwd(), "content/projects");
  const files = fs.readdirSync(dir);

  const projects = files
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((fileName) => {
      const raw = fs.readFileSync(path.join(dir, fileName), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: fileName.replace(/\.mdx?$/, ""),
        ...data,
        content,
      } as any;
    });

  // ordenar por fecha si existe
  return projects.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return a.title.localeCompare(b.title);
  });
}

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className={`min-h-screen ${themeTokens.backgroundBase} pb-12 pt-8`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6">
        <Section id="projects" title="Proyectos" headingLevel="h1">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p: any) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
