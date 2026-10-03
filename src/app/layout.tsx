import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { business } from "@/data/business";
import "./globals.css";
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-editorial",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
export const metadata: Metadata = {
  title: `${business.name} | Concepto de diseño`,
  description:
    "Propuesta conceptual de una experiencia de barbería clásica premium. Creada por KALILOGIC TECH. Demo, sitio no oficial.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Jacovich — Tradición, precisión y estilo",
    description: "Propuesta de diseño por KALILOGIC TECH. Sitio no oficial.",
    locale: "es_PE",
    type: "website",
  },
};
export const viewport: Viewport = { themeColor: "#0B0B0B" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
