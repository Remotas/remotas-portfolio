// components/Timeline.tsx

type TimelineItem = {
  company?: string;
  role?: string;
  period?: string;
  bullets?: string[] | string;
};

interface TimelineProps {
  // puede venir como array o como objeto del YAML
  items: TimelineItem[] | Record<string, TimelineItem>;
}

export default function Timeline({ items }: TimelineProps) {
  const list: TimelineItem[] = Array.isArray(items)
    ? items
    : Object.values(items ?? {});

  return (
    <ol className="relative border-s border-slate-800">
      {list.map((it, idx) => (
        <li key={idx} className="ms-6 pt-4 pb-4">
          <span className="absolute -left-1.5 mt-2 h-3 w-3 rounded-full bg-blue-500" />
          <h3 className="text-sm font-semibold text-slate-100">
            {it.company ?? "—"}
          </h3>
          {it.role ? (
            <p className="text-xs text-slate-300 mt-1">{it.role}</p>
          ) : null}
          {it.period ? (
            <p className="text-xs text-slate-500 mt-1">{it.period}</p>
          ) : null}
          {it.bullets ? (
            <ul className="mt-2 list-disc ms-5 space-y-1 text-xs text-slate-200">
              {(Array.isArray(it.bullets)
                ? it.bullets
                : [String(it.bullets)]
              ).map((b: string, i: number) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
