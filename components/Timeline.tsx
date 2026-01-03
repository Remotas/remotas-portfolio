// components/Timeline.tsx
import { themeTokens } from "@/theme/tokens";

export type TimelineItem = {
  company?: string;
  role?: string;
  period?: string;
  bullets?: string[] | string;
};

export interface TimelineProps {
  items: TimelineItem[] | Record<string, TimelineItem>;
}

export default function Timeline({ items }: TimelineProps) {
  const list: TimelineItem[] = Array.isArray(items)
    ? items
    : Object.values(items ?? {});

  return (
    <ol className={`relative border-l ${themeTokens.cardBorderColor} pl-6`}>
      {list.map((it, idx) => (
        <li key={idx} className="relative pt-4 pb-4 pl-2">
          {/* puntito */}
          <span className="absolute -left-2 top-5 h-3 w-3 rounded-full bg-blue-500" />

          <h3 className={`text-sm font-semibold ${themeTokens.headingColor}`}>
            {it.company ?? "—"}
          </h3>

          {it.role ? (
            <p className="mt-1 text-xs text-[var(--foreground)]/70">
              {it.role}
            </p>
          ) : null}

          {it.period ? (
            <p className="mt-1 text-xs text-[var(--muted)]">{it.period}</p>
          ) : null}

          {it.bullets ? (
            <ul className="mt-2 list-disc ms-5 space-y-1 text-xs text-[var(--foreground)]/80">
              {(Array.isArray(it.bullets) ? it.bullets : [it.bullets]).map(
                (b, i) => {
                  const bulletText =
                    typeof b === "string"
                      ? b
                      : Object.entries(b as Record<string, unknown>)
                          .map(([key, value]) =>
                            [key, value].filter(Boolean).join(": ")
                          )
                          .join(" · ");
                  return <li key={i}>{bulletText}</li>;
                }
              )}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
