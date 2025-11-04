"use client";

import { useEffect, useState } from "react";

type RotatingInfoProps = {
  lang: "es" | "en";
};

const messages = {
  es: [
    {
      title: "Documentación clara",
      text: "Entregables en PDF o README para que el cliente o recruiter entienda el alcance.",
    },
    {
      title: "QA asistido con IA",
      text: "Uso IA para revisar textos y flujos, pero la decisión final es humana.",
    },
    {
      title: "Trabajo remoto ordenado",
      text: "Commits limpios, bitácora y actualizaciones de estado.",
    },
  ],
  en: [
    {
      title: "Clear documentation",
      text: "PDF or README so client / recruiter can see the real scope.",
    },
    {
      title: "AI-assisted QA",
      text: "I use AI to review content and flows, final decision is human.",
    },
    {
      title: "Organized remote work",
      text: "Clean commits, progress notes and status updates.",
    },
  ],
};

export default function RotatingInfo({ lang }: RotatingInfoProps) {
  const [index, setIndex] = useState(0);
  const list = messages[lang] ?? messages.es;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % list.length);
    }, 10000); // 10s
    return () => clearInterval(id);
  }, [list.length]);

  const current = list[index];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-all duration-500 text-slate-200">
      <p className="text-xs uppercase tracking-wide text-white/40">
        {lang === "es" ? "Notas rápidas" : "Quick notes"}
      </p>
      <h3 className="mt-2 text-sm font-semibold">{current.title}</h3>
      <p className="mt-1 text-sm text-white/65">{current.text}</p>
      <p className="mt-3 text-[10px] text-white/30">
        {index + 1} / {list.length}
      </p>
    </div>
  );
}
