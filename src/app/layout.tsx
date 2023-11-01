import type { Metadata } from "next";
import { Halant, Livvic } from "next/font/google";
import "./globals.css";

export const halant = Halant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const livvic = Livvic({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alison Nails",
  description:
    "Bienvenida/o al mejor lugar para el cuidado para tus uñas. Soy Alison, tu especialista en arte y tratamiento. Déjame consentirte con mis servicios personalizados y diseños únicos para lucir unas manos radiantes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={halant.className}>{children}</body>
    </html>
  );
}
