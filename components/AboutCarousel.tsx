// C:\Users\melqu\remotas-portfolio\components\AboutCarousel.tsx
"use client";

import { useState } from "react";

type AboutCarouselProps = {
  lang: "es" | "en";
};

export default function AboutCarousel({ lang }: AboutCarouselProps) {
  const [active, setActive] = useState<0 | 1>(0);

  const slides = [
    {
      id: "about",
      title: lang === "en" ? "About me" : "Sobre mí",
      body:
        lang === "en"
          ? [
              "I'm Melquiades Farías, a web developer and technician with a long background in telecommunications, infrastructure support and now in building digital solutions.",
              "I work with **HTML, CSS, JavaScript, Next.js and Tailwind**, and I document projects clearly so other people (clients, recruiters or technical teams) can understand the real scope.",
              "I come from mobile networks environments (Movilnet, Inter) and I use that to work with a **critical-systems mindset**: order, traceability, logs and continuous improvement. I use AI to speed up documentation, base code generation and QA, but always with human review.",
              "I'm looking for **remote or hybrid opportunities in Spain/EU** where I can contribute in front-end, digital support and organization of technical content.",
            ]
          : [
              "Soy Melquiades Farías, desarrollador web y técnico con una trayectoria larga en telecomunicaciones, soporte de infraestructuras y ahora en creación de soluciones digitales.",
              "Trabajo con **HTML, CSS, JavaScript, Next.js y Tailwind**, y documento los proyectos de forma clara para que otras personas (clientes, recruiters o equipos técnicos) puedan entender el alcance real.",
              "Vengo de un entorno de redes móviles (Movilnet, Inter) y lo aprovecho para trabajar con mentalidad de **sistemas críticos**: orden, trazabilidad, bitácoras y mejora continua. Me apoyo en IA para acelerar documentación, generación de código base y QA, pero siempre con revisión humana.",
              "Busco oportunidades **remotas o mixtas en España/UE** donde pueda aportar en desarrollo front, soporte digital y organización de contenidos técnicos.",
            ],
    },
    {
      id: "philosophy",
      title: lang === "en" ? "Work philosophy" : "Filosofía de trabajo",
      body:
        lang === "en"
          ? [
              "1. **Clarity first.** Before writing code, I state what will be done, for whom and with which deliverables.",
              "2. **Document what you build.** Everything must be explainable in a PDF, README or client email.",
              "3. **Respectful communication.** Short, contextual replies, no friction.",
              "4. **AI as support, not replacement.** I use AI to generate templates and review, but final decision is human.",
              "5. **Responsible remote work.** Communicate progress, keep commits clean and keep a channel open (email / LinkedIn).",
            ]
          : [
              "1. **Claridad primero.** Antes de escribir código, dejo claro qué se va a hacer, para quién y con qué entregables. Esto evita retrabajos.",
              "2. **Documentar lo que se construye.** Todo lo que se hace debe poder explicarse en un PDF, en un README o en un correo al cliente.",
              "3. **Comunicación respetuosa.** Vengo de entornos técnicos donde no siempre hay tiempo, por eso valoro respuestas breves, con contexto y sin fricciones.",
              "4. **IA como apoyo, no como sustituto.** Uso IA para generar plantillas, estructurar contenido y revisar, pero la decisión final debe ser humana.",
              "5. **Remoto responsable.** Informar del avance, dejar el commit limpio y tener un canal abierto (correo / LinkedIn) es parte del trabajo.",
            ],
    },
  ];

  const current = slides[active];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
      {/* Botoncitos arriba */}
      <div className="mb-4 flex gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setActive(idx as 0 | 1)}
            className={`rounded-full px-4 py-1 text-sm transition ${
              active === idx
                ? "bg-blue-600 text-white"
                : "bg-slate-800/60 text-slate-200 hover:bg-slate-700"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Contenido */}
      <div className="space-y-3 text-slate-100">
        <h2 className="text-xl font-semibold">{current.title}</h2>
        {current.body.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed">
            {/* eslint-disable-next-line react/no-danger */}
            <span
              dangerouslySetInnerHTML={{
                __html: p.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          </p>
        ))}
      </div>
    </div>
  );
}
