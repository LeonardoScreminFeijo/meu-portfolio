import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mim",
  description:
    "Conheça Leonardo Scremin Feijó — engenheiro Front-end com background em infraestrutura de TI, estudante de ADS e apaixonado por sistemas robustos.",
  openGraph: {
    title: "Sobre Mim | Leonardo",
    description:
      "Trajetória, stack técnico e experiência profissional de Leonardo Scremin Feijó.",
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
