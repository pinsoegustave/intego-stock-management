import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const avantGarde = {
  className: "font-avant-garde",
  style: {
    fontFamily: "'ITC Avant Garde Gothic Std', sans-serif",
  }
};

export const metadata: Metadata = {
  title: "3MR Company Ltd - Stock Management",
  description: "Created by pinsoegustave",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`avantGarde.className antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
