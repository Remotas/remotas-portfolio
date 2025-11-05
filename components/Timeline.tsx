// components/Timeline.tsx
export default function Timeline({ items }: { items: any[] }) {
  const list = Array.isArray(items) ? items : Object.values(items ?? {});
  return (
    <ol className="relative border-s border-slate-800">
      {list.map((it: any, i: number) => {
        const bullets: any[] = Array.isArray(it?.bullets) ? it.bullets : [];
        return (
          <li key={i} className="mb-10 ms-4 text-slate-100">
            <div className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-blue-500" />
            <h3 className="text-lg font-semibold text-slate-100">{it?.company}</h3>
            <p className="text-sm text-slate-400">
              {it?.role} · {it?.period}
            </p>
            {bullets.length > 0 && (
              <ul className="ms-5 mt-2 list-disc text-sm text-slate-300">
                {bullets.map((b, j) => (
                  <li key={j}>
                    {typeof b === "string" ? b : JSON.stringify(b)}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ol>
  );
}
