// components/ProjectCard.tsx
import { themeTokens } from "@/theme/tokens";

interface ProjectCardProps {
  title: string;
  summary?: string;
  tech?: string[];
  repo?: string;
  demo?: string;
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
  const demoLink = links?.demo ?? demo;
  const repoLink = links?.repo ?? repo;
  const docsLink = links?.docs;

  return (
    <article
      className={`${themeTokens.cardRadius} ${themeTokens.cardBorder} ${themeTokens.cardBg} ${themeTokens.cardPadding} ${themeTokens.shadowSm} flex flex-col h-full transition-colors`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className={`text-lg font-semibold ${themeTokens.headingColor}`}>
          {title}
        </h3>
        {status ? (
          <span className="rounded-full bg-[var(--background)]/25 px-3 py-1 text-xs uppercase tracking-wide text-[var(--foreground)]/80">
            {status}
          </span>
        ) : null}
      </div>

      {summary ? (
        <p className="mt-2 text-[var(--foreground)]/75 text-sm">{summary}</p>
      ) : null}

      {tech.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[var(--background)]/15 px-3 py-1 text-xs text-[var(--foreground)] border border-[var(--border)]/50"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {(demoLink || repoLink || docsLink) && (
        <div className="mt-4 flex flex-wrap gap-3">
          {demoLink ? (
            <a
              href={demoLink}
              target={demoLink.startsWith("http") ? "_blank" : undefined}
              rel={demoLink.startsWith("http") ? "noreferrer" : undefined}
              className="text-xs font-medium text-white rounded-full bg-indigo-600 px-4 py-2 hover:bg-indigo-500 transition"
            >
              Demo
            </a>
          ) : null}
          {repoLink ? (
            <a
              href={repoLink}
              target={repoLink.startsWith("http") ? "_blank" : undefined}
              rel={repoLink.startsWith("http") ? "noreferrer" : undefined}
              className="text-xs font-medium text-[var(--foreground)] rounded-full border border-[var(--border)] px-4 py-2 hover:bg-[var(--background)]/5 transition"
            >
              Repo
            </a>
          ) : null}
          {docsLink ? (
            <a
              href={docsLink}
              target={docsLink.startsWith("http") ? "_blank" : undefined}
              rel={docsLink.startsWith("http") ? "noreferrer" : undefined}
              className="text-xs font-medium text-[var(--foreground)] rounded-full border border-[var(--border)] px-4 py-2 hover:bg-[var(--background)]/5 transition"
            >
              Docs
            </a>
          ) : null}
        </div>
      )}
    </article>
  );
}
