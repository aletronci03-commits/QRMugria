import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Murgia Formaggi Sardi | Monteterno",
  description: "Scheda tecnica premium per Monteterno, formaggio sardo di Murgia Formaggi Sardi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
