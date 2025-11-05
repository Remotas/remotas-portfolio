// app/experience/page.tsx
import fs from "fs";
import path from "path";
import YAML from "yaml";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";

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
    <main className="min-h-screen bg-slate-950 pb-12 pt-8">
      <div className="mx-auto max-w-6xl px-4 space-y-6">
        <Section id="experience" title="Experiencia" headingLevel="h1">
          <Timeline items={data} />
        </Section>
      </div>
    </main>
  );
}
