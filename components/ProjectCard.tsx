// components/ProjectCard.tsx
import { themeTokens } from "@/theme/tokens";

interface ProjectCardProps {
  title: string;
  summary?: string;
  tech?: string[];
  // formato antiguo (lo que ya tenías)
  repo?: string;
  demo?: string;
  // formato nuevo (lo que metimos en los .mdx)
  links?: {
    demo?: string;
    repo?: string;
    docs?: string;
  };
  status?: string;
}

export default function ProjectCard({
  title,
  summary,
  tech = [],
  repo,
  demo,
  links,
  status,
}: ProjectCardProps) {
  // normalizamos para que el componente siempre tenga demo/repo/docs,
  // venga del formato viejo o del nuevo
  const demoLink = links?.demo ?? demo;
  const repoLink = links?.repo ?? repo;
  const docsLink = links?.docs;

  return (
    <article
      className={`${themeTokens.cardRadius} ${themeTokens.cardBorder} ${themeTokens.cardBg} ${themeTokens.cardPadding} ${themeTokens.shadowSm} flex flex-col h-full`}
    >
      {/* header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className={`text-lg font-semibold ${themeTokens.headingColor}`}>
          {title}
        </h3>
        {status ? (
          <span className="rounded-full bg-slate-900/50 px-3 py-1 text-xs uppercase tracking-wide text-slate-200">
            {status}
          </span>
        ) : null}
      </div>

      {/* summary */}
      {summary ? (
        <p className="mt-2 text-slate-300 text-sm">{summary}</p>
      ) : null}

      {/* tech badges */}
      {tech.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-950/40 px-3 py-1 text-xs text-slate-200 border border-slate-800/60"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {/* links */}
      {(demoLink || repoLink || docsLink) && (
        <div className="mt-4 flex flex-wrap gap-3">
          {/* orden: Demo → Repo → Docs, como en los .mdx */}
          {demoLink ? (
            <a
              href={demoLink}
              target={demoLink.startsWith("http") ? "_blank" : undefined}
              rel={demoLink.startsWith("http") ? "noreferrer" : undefined}
              className="text-xs font-medium text-slate-100 rounded-full bg-indigo-600/90 px-4 py-2 hover:bg-indigo-500 transition"
            >
              Demo
            </a>
          ) : null}
          {repoLink ? (
            <a
              href={repoLink}
              target={repoLink.startsWith("http") ? "_blank" : undefined}
              rel={repoLink.startsWith("http") ? "noreferrer" : undefined}
              className="text-xs font-medium text-slate-100 rounded-full bg-slate-800/80 px-4 py-2 hover:bg-slate-700 transition"
            >
              Repo
            </a>
          ) : null}
          {docsLink ? (
            <a
              href={docsLink}
              target={docsLink.startsWith("http") ? "_blank" : undefined}
              rel={docsLink.startsWith("http") ? "noreferrer" : undefined}
              className="text-xs font-medium text-slate-100 rounded-full bg-slate-800/80 px-4 py-2 hover:bg-slate-700 transition"
            >
              Docs
            </a>
          ) : null}
        </div>
      )}
    </article>
  );
}
