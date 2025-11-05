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

  return (
    <section
      id={id}
      className={`${themeTokens.cardRadius} ${themeTokens.cardBorder} ${themeTokens.cardBg} ${themeTokens.cardPadding} ${className}`}
    >
      {title ? (
        <HeadingTag
          className={`text-xl font-semibold mb-4 ${themeTokens.headingColor}`}
        >
          {title}
        </HeadingTag>
      ) : null}
      {children}
    </section>
  );
}
