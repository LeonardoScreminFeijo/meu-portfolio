import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Seus estilos globais que limpamos antes

// Vamos importar o Header que criaremos no próximo passo
import Header from "../components/Header/header";

// Carregando a fonte nativamente
const inter = Inter({ subsets: ["latin"] });

// Otimização de SEO
export const metadata: Metadata = {
  title: "Leonardo | Engenharia Front-end",
  description:
    "Portfólio focado em interfaces de alta performance e disponibilidade.",
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
        {/* O 'children' é a página atual (Home, Projetos, etc) */}
        {children}
      </body>
    </html>
  );
}
