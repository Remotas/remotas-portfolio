"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { Route } from "next";

// declaramos que cada href es una Route de Next
const NAV: { href: Route; label: string }[] = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/experience", label: "Experiencia" },
  { href: "/certifications", label: "Certificaciones" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 py-4 md:flex-nowrap">
        <Link href="/" className="font-semibold">
          Melquiades Farías
        </Link>
        <ul className="flex flex-wrap items-center gap-2 text-sm md:gap-4">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  "px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800",
                  pathname === item.href && "bg-neutral-100 dark:bg-neutral-800"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
