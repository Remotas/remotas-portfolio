// components/Section.tsx
import React from "react";
import { themeTokens } from "@/theme/tokens";

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

  const headingClass =
    headingLevel === "h1" || headingLevel === "h2"
      ? `text-2xl sm:text-3xl lg:text-4xl font-bold ${themeTokens.headingColor}`
      : `text-xl font-semibold ${themeTokens.headingColor}`;

  return (
    <section
      id={id}
      className={`${themeTokens.cardRadius} ${themeTokens.cardBorder} ${themeTokens.cardBg} ${themeTokens.cardPadding} ${className}`}
    >
      {title ? (
        <HeadingTag
          className={`${headingClass} mb-4`}
        >
          {title}
        </HeadingTag>
      ) : null}
      {children}
    </section>
  );
}
