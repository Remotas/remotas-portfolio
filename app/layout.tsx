import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Melquiades Farías — Portfolio",
  description: "Desarrollador Web | Tecnología & Soporte Digital",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
