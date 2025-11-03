import { ReactNode } from "react";
import { marked } from "marked";

export default function Section({
  id,
  title,
  children,
  markdown,
}: {
  id?: string;
  title: string;
  children?: ReactNode;
  markdown?: string;
}) {
  return (
    <section id={id} className="mt-16">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {markdown ? (
        <article
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      ) : (
        children
      )}
    </section>
  );
}
