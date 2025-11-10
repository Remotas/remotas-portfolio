// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/experience", label: "Experiencia" },
  { href: "/certifications", label: "Certificaciones" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contacto" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40 border-b border-base bg-surface backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/remotas-logo-dark.svg"
            alt="Remotas Work"
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold">Remotas Work</p>
            <p className="text-xs opacity-70">Melquiades Farías</p>
          </div>
        </Link>

        {/* nav */}
        <nav className="hidden gap-2 md:flex">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                  isActive
                    ? "bg-[rgba(255,255,255,0.08)] dark:bg-[rgba(15,23,42,0.6)]"
                    : "hover:bg-[rgba(255,255,255,0.04)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] dark:bg-[rgba(2,6,23,0.6)] ring-1 ring-[rgba(148,163,184,0.25)] transition"
            aria-label="Cambiar tema"
          >
            {mounted ? (
              theme === "dark" ? (
                /* sol */
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
              ) : (
                /* luna */
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
              )
            ) : (
              <div className="h-5 w-5 rounded-full bg-[rgba(148,163,184,0.4)]" />
            )}
          </button>
        </div>
      </div>

      {/* scroll nav mobile */}
      <div className="flex gap-2 overflow-x-auto px-4 pb-3 md:hidden">
        {navLinks.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium transition ${
                isActive
                  ? "bg-[rgba(255,255,255,0.08)] dark:bg-[rgba(15,23,42,0.6)]"
                  : "hover:bg-[rgba(255,255,255,0.04)]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
