import Link from "next/link";

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
    <article className="border rounded-2xl p-4 hover:shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="my-2 opacity-80">{summary}</p>
      <div className="flex flex-wrap gap-2 my-3">
        {tech?.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3 text-sm">
        {demo && (
          <Link href={demo} className="underline">
            Demo
          </Link>
        )}
        {repo && (
          <Link href={repo} className="underline">
            Repo
          </Link>
        )}
      </div>
    </article>
  );
}
