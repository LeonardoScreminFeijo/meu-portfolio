import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Leonardo Scremin Feijó para oportunidades, projetos ou colaborações.",
  openGraph: {
    title: "Contato | Leonardo",
    description:
      "Aberto a oportunidades. Envie uma mensagem ou conecte-se pelo LinkedIn e GitHub.",
  },
};

export default function ContatoPage() {
  return <ContactForm />;
}
