// app/projects/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

function getProjects() {
  const dir = path.join(process.cwd(), "content/projects");
  const files = fs.readdirSync(dir);

  return files
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
}

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="min-h-screen bg-slate-950 pb-12 pt-8">
      <div className="mx-auto max-w-6xl px-4 space-y-6">
        <Section id="projects" title="Proyectos" headingLevel="h1">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p: any) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
