import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import styles from "./projetos.module.scss";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos reais desenvolvidos por Leonardo Scremin Feijó — cada um com um problema específico para resolver.",
  openGraph: {
    title: "Projetos | Leonardo",
    description:
      "Projetos reais desenvolvidos com Next.js, React, TypeScript, AWS e mais.",
  },
};

export default function ProjetosPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <span className={styles.label}>&gt;_ projetos</span>
        <h1 className={styles.title}>O que tenho construído</h1>
        <p className={styles.subtitle}>
          Projetos reais — cada um com um problema específico para resolver.
        </p>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
