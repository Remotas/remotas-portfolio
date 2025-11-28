// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { themeTokens } from "@/theme/tokens";

export const metadata: Metadata = {
  title: "Servicios · Remotas Work",
  description:
    "Desarrollo web, WordPress, SEO técnico, Contentful y soporte digital para pymes, profesionales y agencias. Trabajo remoto desde España.",
  openGraph: {
    title: "Servicios · Remotas Work",
    description:
      "Desarrollo web, WordPress, SEO técnico, Contentful y soporte digital para pymes, profesionales y agencias. Trabajo remoto desde España.",
    url: "https://remotas.work/services",
    siteName: "Remotas Work",
    images: ["/og-image.png"],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios · Remotas Work",
    description:
      "Desarrollo web, WordPress, SEO técnico, Contentful y soporte digital para pymes, profesionales y agencias. Trabajo remoto desde España.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/services",
    languages: {
      "es-ES": "/services",
      "en-US": "/services?lang=en",
    },
  },
};

// ---------- Card base ----------
function CardShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={[
        themeTokens.cardBg,
        themeTokens.cardBorder,
        themeTokens.cardRadius,
        themeTokens.cardPadding,
        themeTokens.shadowSm,
        "backdrop-blur transition-colors duration-200",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

// ---------- Tarjeta de servicio ----------
function ServiceCard({
  title,
  description,
  bullets,
  tags,
}: {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
}) {
  return (
    <CardShell>
      <h3
        className={[
          "text-lg font-semibold tracking-tight",
          themeTokens.headingColor,
        ].join(" ")}
      >
        {title}
      </h3>

      <p className="mt-3 text-sm text-[var(--foreground)]/80">{description}</p>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[var(--foreground)]/70">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[var(--surface)]/60 px-3 py-1 text-xs font-medium text-[var(--foreground)]/90 ring-1 ring-[var(--border)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </CardShell>
  );
}

// ---------- Tarjeta de paso (workflow) ----------
function StepCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <CardShell>
      <h3
        className={[
          "font-semibold tracking-tight",
          themeTokens.headingColor,
        ].join(" ")}
      >
        {title}
      </h3>
      <p className="mt-2 text-sm text-[var(--foreground)]/75">{description}</p>
    </CardShell>
  );
}

// ---------- Página principal ----------
export default function ServicesPage() {
  return (
    <main className={`min-h-screen ${themeTokens.backgroundBase} pb-12 pt-8`}>
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <Section
          id="services-hero"
          title="Desarrollo web · WordPress · SEO técnico · Contentful · Soporte digital"
          headingLevel="h1"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]/60">
              Remotas Work · Servicios
            </p>

            <p className="text-base text-[var(--foreground)]/90 text-justify leading-relaxed lg:max-w-none">
              Desarrollador Web &amp; Full Stack Technician especializado en
              WordPress, PHP/MySQL, Contentful y JavaScript moderno (HTML5,
              CSS3, Next.js). Diseño, construyo y mantengo sitios orientados a
              negocio: velocidad, SEO técnico, seguridad y soporte continuo.
              Trabajo con pymes, profesionales y agencias como refuerzo técnico,
              en remoto desde España.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                Enviar una consulta
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] shadow-sm transition hover:bg-[var(--surface)]/60"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </Section>

        {/* QUÉ PUEDO HACER POR TU PROYECTO */}
        <Section
          id="services-what-i-do"
          title="Qué puedo hacer por tu proyecto"
          headingLevel="h2"
        >
          <p className="text-sm text-[var(--foreground)]/70 text-justify leading-relaxed lg:max-w-none">
            La base es técnica y documentada: entregables claros, código limpio
            y enfoque en mantener los sitios funcionando en el tiempo.
          </p>

          {/* Añadimos 6 tarjetas (3 por fila en desktop) */}
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Desarrollo web a medida"
              description="Sitios y aplicaciones web centrados en rendimiento, accesibilidad y mantenimiento."
              bullets={[
                "Landing pages, sitios corporativos y pequeños paneles internos.",
                "HTML5, CSS3/Tailwind, JavaScript moderno y Next.js (base).",
                "Código versionado en GitHub y preparado para futuras extensiones.",
              ]}
              tags={[
                "HTML5, CSS3 / Tailwind",
                "JavaScript",
                "Next.js (base)",
                "Git / GitHub",
              ]}
            />

            <ServiceCard
              title="Diseño y construcción en WordPress"
              description="Sitios en WordPress con base técnica sólida, no solo plantillas."
              bullets={[
                "Instalación, configuración y hardening básico de WordPress.",
                "Personalización de themes, maquetación de páginas y formularios.",
                "Integración de plugins esenciales (SEO, seguridad, backups).",
              ]}
              tags={["WordPress", "Themes", "Forms", "SEO básico"]}
            />

            <ServiceCard
              title="Integración con Contentful (Headless CMS)"
              description="Gestión de contenido flexible y profesional con Contentful, ideal para proyectos en crecimiento o equipos editoriales."
              bullets={[
                "Configuración de modelos de contenido y espacios (Content Models).",
                "Integración API REST / GraphQL con Next.js.",
                "Soporte para localización, roles y flujos de publicación.",
              ]}
              tags={[
                "Contentful CMS",
                "Headless Architecture",
                "GraphQL / REST",
                "Integración Next.js",
              ]}
            />

            <ServiceCard
              title="Optimización para buscadores (SEO técnico)"
              description="Mejoras técnicas para que el sitio sea más rastreable, rápido y claro para buscadores."
              bullets={[
                "Revisión de estructura HTML, headings y metadatos.",
                "Optimización de tiempos de carga (imágenes, assets, caché).",
                "Sitemaps, robots.txt y prácticas básicas de indexación.",
              ]}
              tags={["SEO técnico", "Performance", "Core Web Vitals"]}
            />

            <ServiceCard
              title="Soporte digital & sistemas"
              description="Acompañamiento técnico para mantener sitios y entornos funcionando de forma estable."
              bullets={[
                "Gestión de dominios y hosting, certificados SSL y DNS.",
                "Backups, pequeñas correcciones y ajustes de contenido.",
                "Asesoría técnica para decidir stack, hosting o siguientes pasos.",
              ]}
              tags={["Hosting", "Dominios", "Backups", "Soporte remoto"]}
            />

            {/* NUEVA TARJETA para llenar el hueco */}
            <ServiceCard
              title="Consultoría técnica y mentoring"
              description="Orientación profesional y revisión técnica de proyectos en curso o en planificación. Ideal para pymes y freelancers que buscan dirección técnica sólida."
              bullets={[
                "Auditorías de código, arquitectura y performance.",
                "Definición de roadmap técnico y buenas prácticas.",
                "Acompañamiento en decisiones tecnológicas o migraciones.",
              ]}
              tags={[
                "Mentoring",
                "Consultoría técnica",
                "Arquitectura Frontend",
                "Revisión de código",
              ]}
            />
          </div>
        </Section>

        {/* CÓMO TRABAJO */}
        <Section
          id="services-workflow"
          title="Cómo trabajo (workflow)"
          headingLevel="h2"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <StepCard
              title="1. Contexto y alcance"
              description="Definir qué se necesita, para quién es el sitio y qué entregables habrá (PDF, README, acceso a repo, etc.)."
            />
            <StepCard
              title="2. Propuesta técnica"
              description="Elegir stack sencillo y sostenible según el caso: WordPress, Contentful o Next.js, siempre documentando decisiones clave."
            />
            <StepCard
              title="3. Desarrollo trazable"
              description="Implementación por iteraciones cortas, con commits claros en Git y revisiones periódicas del avance."
            />
            <StepCard
              title="4. Entrega y soporte"
              description="Despliegue en hosting o plataforma acordada, guía de uso y soporte posterior."
            />
          </div>
        </Section>

        {/* STACK Y CTA FINAL */}
        <Section
          id="services-stack"
          title="Stack y herramientas que uso"
          headingLevel="h2"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <p className="text-sm text-[var(--foreground)]/80">
                No se trata de usar todas las tecnologías posibles, sino las
                adecuadas para el tamaño, el presupuesto y la fase del proyecto.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5 / CSS3 / Tailwind",
                  "JavaScript",
                  "WordPress",
                  "Next.js (base)",
                  "Contentful (Headless CMS)",
                  "Node.js / APIs simples",
                  "PHP / MySQL (formación)",
                  "Git / GitHub",
                  "Vercel deploys",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--surface)]/60 px-3 py-1 text-xs font-medium text-[var(--foreground)]/90 ring-1 ring-[var(--border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <CardShell>
              <h3
                className={[
                  "text-base font-semibold tracking-tight",
                  themeTokens.headingColor,
                ].join(" ")}
              >
                ¿Tienes un proyecto o necesitas soporte?
              </h3>

              <p className="mt-3 text-sm text-[var(--foreground)]/80">
                Escríbeme unas líneas sobre lo que necesitas y la fase del
                proyecto.
              </p>

              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-[var(--foreground)]/70">
                <li>Tipo de proyecto</li>
                <li>Tecnología actual</li>
                <li>Plazo aproximado</li>
              </ul>

              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Contactar desde el formulario →
                </Link>
                <p className="text-xs text-[var(--foreground)]/60">
                  También puedes escribirme a{" "}
                  <span className="font-medium text-[var(--foreground)]">
                    remotas.work@gmail.com
                  </span>
                  .
                </p>
              </div>
            </CardShell>
          </div>
        </Section>
      </div>
    </main>
  );
}
