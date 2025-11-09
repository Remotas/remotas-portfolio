// components/Footer.tsx
const CURRENT_YEAR = new Date().getFullYear();

const LINKS = {
  email: "mailto:remotaswork@gmail.com",
  linkedin: "https://www.linkedin.com/in/remotas-work/",
  github: "https://github.com/Remotas",
  cv: "/cv",
};

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-900/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-200/85 md:flex-row md:items-center md:justify-between">
        {/* izquierda: firma */}
        <p className="leading-tight">
          © {CURRENT_YEAR} Melquiades Farías · Remotas Work · Hecho con Next.js
          + Tailwind
        </p>

        {/* derecha: enlaces */}
        <div className="flex flex-wrap gap-3">
          <a
            href={LINKS.email}
            className="rounded-full bg-slate-900/40 px-4 py-1.5 text-xs font-medium text-slate-100 hover:bg-slate-800 transition"
          >
            Email
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900/40 px-4 py-1.5 text-xs font-medium text-slate-100 hover:bg-slate-800 transition"
          >
            LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900/40 px-4 py-1.5 text-xs font-medium text-slate-100 hover:bg-slate-800 transition"
          >
            GitHub
          </a>
          <a
            href={LINKS.cv}
            className="rounded-full bg-blue-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-blue-500 transition"
          >
            Ver CV
          </a>
        </div>
      </div>
    </footer>
  );
}
