import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Head } from "next/document";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kanban Board',
  description:
    'Simple Kanban Board for Peerlist frontend assignmet',
    icons: ["/Logos/logo.svg"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
