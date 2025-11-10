// components/SkillGrid.tsx
import { themeTokens } from "@/theme/tokens";

export default function SkillGrid({
  skills,
}: {
  skills: Record<string, string[]>;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {Object.entries(skills).map(([k, arr]) => (
        <div
          key={k}
          className={`${themeTokens.cardBorder} ${themeTokens.cardBg} ${themeTokens.cardRadius} p-4 transition-colors`}
        >
          <h3 className="font-semibold capitalize text-[var(--foreground)]">
            {k.replace("_", " ")}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {arr.map((i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded bg-[var(--background)]/10 text-[var(--foreground)]"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
