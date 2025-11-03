import YAML from "yaml";
import { readFileSync } from "fs";
import path from "path";
import Link from "next/link";

export default function Contact() {
  const c = YAML.parse(
    readFileSync(path.join(process.cwd(), "content/contact.yml"), "utf8")
  );
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Contacto</h1>
      <div className="space-y-2">
        <p>
          📧{" "}
          <a className="underline" href={`mailto:${c.email}`}>
            {c.email}
          </a>
        </p>
        <p>📍 {c.location}</p>
        <p>
          💼{" "}
          <Link className="underline" href={c.linkedin}>
            LinkedIn
          </Link>
        </p>
        <p>
          🧑‍💻{" "}
          <Link className="underline" href={c.github}>
            GitHub
          </Link>
        </p>
      </div>
    </>
  );
}
