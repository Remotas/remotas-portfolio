import { ReactNode } from "react";
import { marked } from "marked";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default function Section({
  id,
  title,
  children,
  markdown,
  headingLevel = "h2",
  className = "",
}: {
  id?: string;
  title: string;
  children?: ReactNode;
  markdown?: string;
  headingLevel?: HeadingLevel;
  className?: string;
}) {
  const HeadingTag = headingLevel as keyof JSX.IntrinsicElements;

  return (
    <section
      id={id}
      className={`mt-12 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-slate-100 shadow-sm ${className}`}
    >
      <HeadingTag className="text-2xl font-semibold mb-4 text-slate-100">
        {title}
      </HeadingTag>
      {markdown ? (
        <article
          className="prose prose-invert max-w-none text-slate-100"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      ) : (
        children
      )}
    </section>
  );
}
