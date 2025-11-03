import fs from "fs";
import path from "path";
import matter from "gray-matter";
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
    <>
      <h1 className="text-2xl font-semibold mb-6">Proyectos</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    </>
  );
}
