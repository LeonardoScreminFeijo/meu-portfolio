import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup / Lab",
  description:
    "O ambiente de trabalho de Leonardo Scremin Feijó — hardware, software, ferramentas e stack favorita de um engenheiro com raízes em infraestrutura.",
  openGraph: {
    title: "Setup / Lab | Leonardo",
    description:
      "Hardware, software e ferramentas do dia a dia de um engenheiro Front-end com background em infra.",
  },
};

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
