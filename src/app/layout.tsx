import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Importadora Jormat | Repuestos para Camiones en Chile — Desde 2001",
  description:
    "Importadora Jormat — Desde 2001 ofreciendo la mayor gama de repuestos y accesorios para camiones. Mercedes-Benz, Volvo, Scania, MAN, Freightliner. +22.000 artículos. Casa matriz en Los Ángeles, Bío Bío. Sucursales en Chillán, Concepción, Constitución y Temuco.",
  keywords:
    "repuestos camiones Chile, Mercedes-Benz Actros repuestos, Volvo FH repuestos, Scania repuestos Chile, focos camiones, parachoques camiones, filtros aire camiones",
  openGraph: {
    title: "Jormat Repuestos | Mercedes-Benz, Volvo y Scania",
    description: "Repuestos para camiones con despacho a todo Chile",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#010118]">{children}</body>
    </html>
  );
}
