import YAML from "yaml";
import { readFileSync } from "fs";
import path from "path";
import Link from "next/link";

export default function Certifications() {
  const certs = YAML.parse(
    readFileSync(path.join(process.cwd(), "content/certifications.yml"), "utf8")
  );
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Certificaciones</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((c: any, i: number) => (
          <article key={i} className="border rounded-2xl p-4">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm opacity-70">
              {c.issuer} · {c.date}
            </p>
            {c.link && (
              <Link
                href={c.link}
                className="underline mt-2 inline-block text-sm"
              >
                Ver documento
              </Link>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
