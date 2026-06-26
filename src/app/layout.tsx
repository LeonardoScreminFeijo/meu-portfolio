import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "Leonardo Scremin Feijó | Engenheiro Front-end",
    template: "%s | Leonardo",
  },
  description:
    "Engenheiro Front-end com background em infraestrutura. Construindo interfaces modernas, robustas e de alta disponibilidade com Next.js, React e TypeScript.",
  keywords: [
    "Front-end",
    "Next.js",
    "React",
    "TypeScript",
    "Portfólio",
    "Leonardo Scremin Feijó",
  ],
  authors: [{ name: "Leonardo Scremin Feijó" }],
  creator: "Leonardo Scremin Feijó",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Leonardo Scremin Feijó",
    title: "Leonardo Scremin Feijó | Engenheiro Front-end",
    description:
      "Engenheiro Front-end com background em infraestrutura. Next.js, React, TypeScript.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Scremin Feijó | Engenheiro Front-end",
    description:
      "Engenheiro Front-end com background em infraestrutura. Next.js, React, TypeScript.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
