import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm/ContactForm";

export const metadata: Metadata = {
  title: "Contato | Leonardo",
  description: "Entre em contato com Leonardo Scremin Feijó.",
};

export default function ContatoPage() {
  return <ContactForm />;
}
