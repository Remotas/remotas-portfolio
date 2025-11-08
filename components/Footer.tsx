// components/Footer.tsx
const CURRENT_YEAR = new Date().getFullYear();

// enlaces oficiales del plan
const LINKS = {
  email: "mailto:remotaswork@gmail.com",
  linkedin: "https://www.linkedin.com/in/remotas-work/",
  github: "https://github.com/Remotas",
  cv: "/cv",
};

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-200/80 md:flex-row md:items-center md:justify-between">
        {/* izquierda: firma */}
        <p className="opacity-80">
          © {CURRENT_YEAR} Melquiades Farías · Hecho con Next.js + Tailwind
        </p>

        {/* derecha: enlaces */}
        <div className="flex flex-wrap gap-3">
          <a href={LINKS.email} className="hover:text-white transition-colors">
            Email
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          {/* CTA opcional al CV dentro del sitio */}
          <a
            href={LINKS.cv}
            className="rounded-full bg-slate-900/50 px-4 py-1.5 text-xs font-medium hover:bg-slate-800 transition-colors"
          >
            Ver CV
          </a>
        </div>
      </div>
    </footer>
  );
}
