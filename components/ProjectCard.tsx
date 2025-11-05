export default function ProjectCard({
  title,
  summary,
  tech,
  demo,
  repo,
}: {
  title: string;
  summary: string;
  tech: string[];
  demo?: string;
  repo?: string;
}) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-100 shadow-sm transition hover:shadow-lg hover:shadow-slate-900/40">
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      <p className="my-2 text-sm text-slate-300">{summary}</p>
      <div className="my-3 flex flex-wrap gap-2">
        {tech?.map((t) => (
          <span
            key={t}
            className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-200"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3 text-sm text-blue-400">
        {demo && (
          <a
            href={demo}
            className="underline hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        )}
        {repo && (
          <a
            href={repo}
            className="underline hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        )}
      </div>
    </article>
  );
}
