// app/certifications/page.tsx
import fs from "fs";
import path from "path";
import YAML from "yaml";
import Section from "@/components/Section";
import { themeTokens } from "@/theme/tokens";

const siteUrl = "https://remotas-portfolio.vercel.app";

export const metadata = {
  title: "Certificaciones",
  description:
    "Certificaciones oficiales, cursos y formación complementaria de Melquiades Farías (Remotas Work).",
  alternates: {
    canonical: "/certifications",
  },
  openGraph: {
    title: "Certificaciones — Melquiades Farías",
    description:
      "Formación técnica, homologaciones y cursos relevantes en desarrollo web y sistemas.",
    url: `${siteUrl}/certifications`,
    siteName: "Portfolio de Melquiades Farías",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Certificaciones — Melquiades Farías",
    description:
      "Formación técnica, homologaciones y cursos relevantes en desarrollo web y sistemas.",
  },
};

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
    description?: string;
  }>;
}

export default function CertificationsPage() {
  const certs = getCertifications();

  return (
    <main className={`min-h-screen ${themeTokens.backgroundBase} pb-12 pt-8`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6">
        <Section id="certifications" title="Certificaciones" headingLevel="h1">
          <p className="mb-4 text-[var(--foreground)]/75">
            Formación oficial, homologaciones y cursos que completan el perfil
            técnico. ES/EN en línea, siguiendo el resto del portfolio.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certs.map((c, idx) => (
              <article
                key={c.title ?? idx}
                className={`${themeTokens.cardRadius} ${themeTokens.cardBorder} ${themeTokens.cardBg} p-4 transition-colors`}
              >
                <h2
                  className={`text-base font-semibold ${themeTokens.headingColor}`}
                >
                  {c.title}
                </h2>
                {c.issuer ? (
                  <p className="text-sm text-[var(--foreground)]/65 mt-1">
                    {c.issuer}
                  </p>
                ) : null}
                <div className="mt-2 flex items-center justify-between text-xs text-[var(--muted)]">
                  {c.date ? <span>{c.date}</span> : <span />}
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 hover:text-blue-400 underline"
                    >
                      Ver
                    </a>
                  ) : null}
                </div>
                {c.description ? (
                  <p className="mt-3 text-xs text-[var(--foreground)]/75 leading-relaxed">
                    {c.description}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
