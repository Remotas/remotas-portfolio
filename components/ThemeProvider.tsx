// components/ThemeProvider.tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark" // tu sitio nace oscuro
      enableSystem={true} // si quieres, puedes poner false aquí
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
