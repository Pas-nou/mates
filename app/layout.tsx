import type { Metadata } from "next";

import localFont from 'next/font/local'

import "./globals.css";

// TODO --- Déclaration des fonts ---

const minecraftory = localFont({
  src: './fonts/Minercraftory.ttf',
  variable: '--font-minecraft',
  display: 'swap',
})

const headth = localFont({
  src: './fonts/Headth.ttf',
  variable: '--font-texts',
  display: 'swap',
})

const headoh = localFont({
  src: './fonts/Headoh.ttf',
  variable: '--font-titles',
  display: 'swap',
})

// TODO --- Fin de déclaration des fonts ---

// TODO --- Décalaration des métadonnées ---

export const metadata: Metadata = {
  title: "Mates",
  description: "Marre de jouer solo! Trouves ton pote de jeu sur Mates",
};

// TODO --- Fin de déclaration des métadonnées ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${minecraftory.variable} ${headth.variable} ${headoh.variable}`}>{children}</body>
    </html>
  );
}
