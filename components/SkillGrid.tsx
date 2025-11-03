export default function SkillGrid({
  skills,
}: {
  skills: Record<string, string[]>;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {Object.entries(skills).map(([k, arr]) => (
        <div key={k} className="border rounded-2xl p-4">
          <h3 className="font-semibold capitalize">{k.replace("_", " ")}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {arr.map((i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800"
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
