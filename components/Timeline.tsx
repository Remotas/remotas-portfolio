// components/Timeline.tsx
export default function Timeline({ items }: { items: any[] }) {
  const list = Array.isArray(items) ? items : Object.values(items ?? {});
  return (
    <ol className="relative border-s border-neutral-200 dark:border-neutral-800">
      {list.map((it: any, i: number) => {
        const bullets: any[] = Array.isArray(it?.bullets) ? it.bullets : [];
        return (
          <li key={i} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-brand rounded-full -start-1.5 mt-2" />
            <h3 className="font-semibold">{it?.company}</h3>
            <p className="text-sm opacity-70">
              {it?.role} · {it?.period}
            </p>
            {bullets.length > 0 && (
              <ul className="list-disc ms-5 mt-2 opacity-90">
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
