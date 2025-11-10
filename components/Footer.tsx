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
    <footer className="mt-16 border-t border-[var(--border)] bg-[var(--background)] transition-colors">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-[var(--foreground)]/85 md:flex-row md:items-center md:justify-between">
        {/* izquierda: firma */}
        <p className="leading-tight">
          © {CURRENT_YEAR} Melquiades Farías · Remotas Work · Hecho con Next.js
          + Tailwind
        </p>

        {/* derecha: enlaces */}
        <div className="flex flex-wrap gap-3">
          <a
            href={LINKS.email}
            className="rounded-full bg-[var(--surface)] px-4 py-1.5 text-xs font-medium text-[var(--foreground)] border border-[var(--border)] hover:opacity-90 transition"
          >
            Email
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--surface)] px-4 py-1.5 text-xs font-medium text-[var(--foreground)] border border-[var(--border)] hover:opacity-90 transition"
          >
            LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--surface)] px-4 py-1.5 text-xs font-medium text-[var(--foreground)] border border-[var(--border)] hover:opacity-90 transition"
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
