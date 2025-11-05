import YAML from "yaml";
import { readFileSync } from "fs";
import path from "path";
import Link from "next/link";
import Section from "@/components/Section";

export default function Contact() {
  const c = YAML.parse(
    readFileSync(path.join(process.cwd(), "content/contact.yml"), "utf8")
  );
  return (
    <main className="min-h-screen bg-slate-950 pb-12 pt-8">
      <div className="mx-auto max-w-6xl px-4">
        <Section title="Contacto" headingLevel="h1" className="mt-0">
          <div className="space-y-3 text-slate-100">
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <span>📧</span>
              <a
                className="text-blue-400 underline hover:text-blue-300"
                href={`mailto:${c.email}`}
              >
                {c.email}
              </a>
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <span>📍</span>
              <span>{c.location}</span>
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <span>💼</span>
              <Link
                className="text-blue-400 underline hover:text-blue-300"
                href={c.linkedin}
              >
                LinkedIn
              </Link>
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <span>🧑‍💻</span>
              <Link
                className="text-blue-400 underline hover:text-blue-300"
                href={c.github}
              >
                GitHub
              </Link>
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
