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
      "Remotas Work · Melquiades Farías — Desarrollador Web | Tecnología & Soporte Digital",
    template: "%s | Remotas Work · Melquiades Farías",
  },
  description:
    "Portfolio profesional de Melquiades Farías (Remotas Work). Desarrollo web con Next.js y Tailwind, soporte digital, documentación técnica y QA asistido por IA. Disponible para remoto / mixto en España y UE.",
  keywords: [
    "Melquiades Farías",
    "Remotas Work",
    "desarrollador web",
    "Next.js",
    "Tailwind CSS",
    "portfolio profesional",
    "freelance remoto",
    "España",
    "UE",
  ],
  openGraph: {
    title:
      "Remotas Work · Melquiades Farías — Desarrollador Web | Tecnología & Soporte Digital",
    description:
      "Portfolio profesional con proyectos, experiencia, certificaciones y contacto.",
    url: siteUrl,
    siteName: "Remotas Work · Melquiades Farías",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
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
      "Remotas Work · Melquiades Farías — Desarrollador Web | Tecnología & Soporte Digital",
    description:
      "Portfolio técnico con proyectos, experiencia y contacto. Disponible para remoto / mixto en España y UE.",
    images: [`${siteUrl}/og-image.png`],
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Melquiades Farías",
    jobTitle: "Web Developer / Tech Support",
    url: siteUrl,
    image: `${siteUrl}/avatar.jpg`,
    worksFor: {
      "@type": "Organization",
      name: "Remotas Work",
    },
    sameAs: [
      "https://www.linkedin.com/in/remotas-work/",
      "https://github.com/Remotas",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressCountry: "ES",
    },
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
