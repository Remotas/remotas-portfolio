// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://remotas-portfolio.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Melquiades Farías — Desarrollador Web | Tecnología & Soporte Digital",
    template: "%s | Melquiades Farías",
  },
  description:
    "Portfolio de Melquiades Farías. Desarrollo web con Next.js y Tailwind, soporte digital, documentación técnica y QA asistido por IA. Disponible para remoto / mixto en España y UE.",
  keywords: [
    "Melquiades Farías",
    "desarrollador web",
    "Next.js",
    "Tailwind CSS",
    "portfolio",
    "documentación técnica",
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
  openGraph: {
    title:
      "Melquiades Farías — Desarrollador Web | Tecnología & Soporte Digital",
    description:
      "Portfolio técnico con proyectos, experiencia, certificaciones y contacto.",
    url: "/",
    siteName: "Portfolio de Melquiades Farías",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Melquiades Farías",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Melquiades Farías — Desarrollador Web | Tecnología & Soporte Digital",
    description:
      "Portfolio técnico con proyectos, experiencia, certificaciones y contacto.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "en-US": "/?lang=en",
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {/* ya tienes el layout responsivo en las páginas; aquí solo envolvemos */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
