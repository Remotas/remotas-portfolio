"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState, type ReactNode } from "react";

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/experience", label: "Experiencia" },
  { href: "/certifications", label: "Certificaciones" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contacto" },
] as const;

function NavLink({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive?: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href as any}
      className={`rounded-full px-3 py-1.5 text-sm transition ${
        isActive
          ? "bg-slate-900/60 text-slate-50"
          : "text-slate-100/80 hover:bg-slate-900/40"
      }`}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // evitar salto de tema en el SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3">
        {/* Marca */}
        <Link href="/" className="flex items-center gap-4" prefetch>
          {/* Modo oscuro → logo claro */}
          <Image
            src="/logos/remotas-mark-light.svg"
            alt="Remotas Work"
            width={100}
            height={100}
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

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-2 md:flex">
          {NAV.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <NavLink key={item.href} href={item.href} isActive={isActive}>
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-2">
          {/* Botón tema */}
          <button
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 ring-1 ring-slate-800 transition hover:text-white"
            aria-label="Cambiar tema"
          >
            {mounted ? (
              theme === "light" ? (
                // luna
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z"
                  />
                </svg>
              ) : (
                // sol
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v-2.25m0 19.5v-2.25m7.5-7.5h2.25m-19.5 0h2.25m14.596-5.346 1.591-1.591M4.063 19.938l1.591-1.591m12.005 0 1.591 1.591M4.063 4.063l1.591 1.591M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
                  />
                </svg>
              )
            ) : (
              <div className="h-5 w-5 rounded-full bg-slate-700/40" />
            )}
          </button>
        </div>
      </div>

      {/* Navegación móvil */}
      <div className="flex gap-2 overflow-x-auto px-4 pb-3 md:hidden">
        {NAV.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <NavLink key={item.href} href={item.href} isActive={isActive}>
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </header>
  );
}
