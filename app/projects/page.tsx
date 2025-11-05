import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const dir = path.join(process.cwd(), "content/projects");
  const posts = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data } = matter(raw);
      return { slug: f.replace(".mdx", ""), ...data } as any;
    });

  return (
    <main className="min-h-screen bg-slate-950 pb-12 pt-8">
      <div className="mx-auto max-w-6xl px-4">
        <Section title="Proyectos" headingLevel="h1" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
