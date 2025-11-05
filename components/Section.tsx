// components/Section.tsx
import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface SectionProps {
  id?: string;
  title?: string;
  headingLevel?: HeadingLevel;
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  title,
  headingLevel = "h2",
  className = "",
  children,
}: SectionProps) {
  const HeadingTag = headingLevel;

  return (
    <section
      id={id}
      className={`rounded-2xl border border-slate-800 bg-slate-900/70 p-5 ${className}`}
    >
      {title ? (
        <HeadingTag className="text-xl font-semibold mb-4 text-slate-100">
          {title}
        </HeadingTag>
      ) : null}
      {children}
    </section>
  );
}
