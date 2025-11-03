import YAML from "yaml";
import { readFileSync } from "fs";
import path from "path";
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
    <>
      <h1 className="text-2xl font-semibold mb-6">Experiencia</h1>
      <Timeline items={data} />
    </>
  );
}
