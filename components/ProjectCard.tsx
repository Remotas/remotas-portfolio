// components/ProjectCard.tsx

interface ProjectCardProps {
  title: string;
  summary?: string;
  tech?: string[];
  repo?: string;
  demo?: string;
}

export default function ProjectCard({
  title,
  summary,
  tech = [],
  repo,
  demo,
}: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-100 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      {summary ? (
        <p className="mt-2 text-slate-300 text-sm">{summary}</p>
      ) : null}

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

      {(repo || demo) && (
        <div className="mt-4 flex gap-4 text-sm">
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Repo
            </a>
          ) : null}
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Demo
            </a>
          ) : null}
        </div>
      )}
    </article>
  );
}
