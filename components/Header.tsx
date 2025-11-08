"use client";

import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Menú de navegación principal del portfolio.
 */
const NAV: Array<{ href: string; label: string }> = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/experience", label: "Experiencia" },
  { href: "/certifications", label: "Certificaciones" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contacto" },
];

/**
 * Wrapper para <Link> compatible con typed routes.
 */
function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href as any}
      className="rounded-full px-3 py-1.5 transition hover:bg-slate-900/50"
    >
      {children}
    </Link>
  );
}

/**
 * Encabezado principal con logo ampliado, marca y navegación.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3">
        {/* Marca */}
        <Link href="/" className="flex items-center gap-4">
          {/* Modo oscuro → logo claro */}
          <Image
            src="/logos/remotas-mark-light.svg"
            alt="Remotas Work"
            width={48}
            height={48}
            className="hidden dark:block"
            priority
          />
          {/* Modo claro → logo oscuro */}
          <Image
            src="/logos/remotas-mark-dark.svg"
            alt="Remotas Work"
            width={48}
            height={48}
            className="dark:hidden"
            priority
          />
          <span className="text-base font-semibold text-slate-100 leading-tight">
            Remotas Work
            <span className="ml-1 block text-xs text-slate-400">
              Melquiades Farías
            </span>
          </span>
        </Link>

        {/* Navegación */}
        <nav className="flex gap-5 text-sm text-slate-100">
          {NAV.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
