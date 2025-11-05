// app/certifications/page.tsx
import fs from "fs";
import path from "path";
import YAML from "yaml";
import Section from "@/components/Section";

function getCertifications() {
  const file = fs.readFileSync(
    path.join(process.cwd(), "content/certifications.yml"),
    "utf8"
  );
  return YAML.parse(file) as Array<{
    title: string;
    issuer?: string;
    date?: string;
    url?: string;
  }>;
}

export default function CertificationsPage() {
  const certs = getCertifications();

  return (
    <main className="min-h-screen bg-slate-950 pb-12 pt-8">
      <div className="mx-auto max-w-6xl px-4 space-y-6">
        <Section id="certifications" title="Certificaciones" headingLevel="h1">
          <div className="grid gap-4 md:grid-cols-2">
            {certs.map((c, idx) => (
              <div
                key={c.title ?? idx}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <h2 className="text-base font-semibold text-slate-100">
                  {c.title}
                </h2>
                {c.issuer ? (
                  <p className="text-sm text-slate-400 mt-1">{c.issuer}</p>
                ) : null}
                <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                  {c.date ? <span>{c.date}</span> : <span />}
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Ver
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
