export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "wed",
    title: "Ana & Leo — Site de Casamento",
    description:
      "Site completo para o nosso casamento: RSVP de convidados, galeria, lista de presentes com PIX e área exclusiva via autenticação AWS.",
    longDescription:
      "Desenvolvido do zero com arquitetura modular e abordagem Mobile-First. Integração com AWS Lambda, DynamoDB e API Gateway para autenticação e persistência dos dados de RSVP. Lista de presentes com QR Code PIX integrado, galeria de fotos, timer de contagem regressiva para o grande dia e integração com Google Maps e Google Calendar. Área exclusiva para convidados protegida por autenticação serverless. Deploy contínuo via Vercel.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vite",
      "AWS Lambda",
      "DynamoDB",
      "API Gateway",
      "Google Maps API",
      "Vercel",
    ],
    liveUrl: "https://wed-smoky.vercel.app/",
    repoUrl: "https://github.com/LeonardoScreminFeijo/wed",
    featured: true,
  },
];
