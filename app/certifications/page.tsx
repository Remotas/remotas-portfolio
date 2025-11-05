import YAML from "yaml";
import { readFileSync } from "fs";
import path from "path";
import Link from "next/link";
import Section from "@/components/Section";

export default function Certifications() {
  const certs = YAML.parse(
    readFileSync(path.join(process.cwd(), "content/certifications.yml"), "utf8")
  );
  return (
    <main className="min-h-screen bg-slate-950 pb-12 pt-8">
      <div className="mx-auto max-w-6xl px-4">
        <Section title="Certificaciones" headingLevel="h1" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2">
            {certs.map((c: any, i: number) => (
              <article
                key={i}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <h3 className="text-lg font-semibold text-slate-100">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {c.issuer} · {c.date}
                </p>
                {c.link && (
                  <Link
                    href={c.link}
                    className="mt-3 inline-block text-sm text-blue-400 underline hover:text-blue-300"
                  >
                    Ver documento
                  </Link>
                )}
              </article>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
