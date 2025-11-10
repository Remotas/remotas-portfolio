// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const siteUrl = "https://remotas-portfolio.vercel.app";

export const metadata: Metadata = {
  title: "Remotas Work · Melquiades Farías",
  description:
    "Desarrollador web, soporte digital y sistemas. 14+ años de base técnica en telecomunicaciones y stack moderno: HTML, CSS, JavaScript, Next.js, WordPress, despliegues en Vercel. Documentación clara y entregables en PDF.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Remotas Work · Melquiades Farías",
    description:
      "Desarrollador web, soporte digital y sistemas. Proyectos documentados y trabajo remoto.",
    siteName: "Remotas Work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remotas Work · Melquiades Farías",
    description:
      "Desarrollador web, soporte digital y sistemas. Proyectos documentados y trabajo remoto.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Melquiades Farías",
    url: siteUrl,
    jobTitle: "Desarrollador web · soporte digital y sistemas",
    sameAs: [
      "https://www.linkedin.com/in/remotas-work/",
      "https://github.com/Remotas",
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          {/* mismo fondo que el body + transición al cambiar tema */}
          <main className="flex-1 bg-[var(--background)] transition-colors">
            {children}
          </main>
          <Footer />
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
