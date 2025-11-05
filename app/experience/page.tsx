import YAML from "yaml";
import { readFileSync } from "fs";
import path from "path";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";

export default function Experience() {
  const file = path.join(process.cwd(), "content/experience.yml");
  const raw = readFileSync(file, "utf8");
  let data: any = YAML.parse(raw);

  // Normaliza a array aunque viniera como objeto:
  if (!Array.isArray(data)) {
    data = Object.values(data ?? {})
      .flatMap((v: any) => (Array.isArray(v) ? v : [v]))
      .filter(Boolean);
  }

  return (
    <main className="min-h-screen bg-slate-950 pb-12 pt-8">
      <div className="mx-auto max-w-6xl px-4">
        <Section title="Experiencia" headingLevel="h1" className="mt-0">
          <Timeline items={data} />
        </Section>
      </div>
    </main>
  );
}
