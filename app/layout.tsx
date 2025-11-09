// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// si cambias dominio, cambia esto
const siteUrl = "https://remotas-portfolio.vercel.app";
const siteName = "Remotas Work · Melquiades Farías";
const siteTitle =
  "Melquiades Farías — Desarrollador Web | Tecnología & Soporte Digital";
const siteDescription =
  "Portfolio técnico de Melquiades Farías (Remotas Work). Desarrollo web con Next.js y Tailwind, soporte digital, documentación técnica y QA asistido por IA. Disponible para remoto / mixto en España y UE.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Melquiades Farías",
  },
  description: siteDescription,
  keywords: [
    "Melquiades Farías",
    "Remotas Work",
    "desarrollador web",
    "Next.js",
    "Tailwind CSS",
    "portfolio técnico",
    "documentación técnica",
    "soporte digital",
    "remoto",
    "España",
    "UE",
  ],
  authors: [
    {
      name: "Melquiades Farías",
      url: "https://www.linkedin.com/in/remotas-work/",
    },
  ],
  creator: "Melquiades Farías",
  publisher: "Melquiades Farías",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "en-US": "/?lang=en",
    },
  },
  // opcional pero útil
  category: "technology",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      {/* fondo y layout global */}
      <body className="min-h-screen bg-[#020617] text-slate-50 flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
