import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SkillGrid from "@/components/SkillGrid";
import { readFileSync } from "fs";
import path from "path";
import YAML from "yaml";

export default function Home() {
  const about = readFileSync(
    path.join(process.cwd(), "content/about.md"),
    "utf8"
  );
  const skills = YAML.parse(
    readFileSync(path.join(process.cwd(), "content/skills.yml"), "utf8")
  );
  return (
    <>
      <Hero />
      <Section id="about" title="Sobre mí" markdown={about} />
      <Section id="skills" title="Habilidades">
        <SkillGrid skills={skills} />
      </Section>
    </>
  );
}
