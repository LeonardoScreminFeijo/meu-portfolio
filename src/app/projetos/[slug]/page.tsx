import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import styles from "./slug.module.scss";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Leonardo`,
      description: project.description,
    },
  };
}

export default async function ProjetoSlugPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/projetos" className={styles.back}>
          ← Voltar para projetos
        </Link>

        <header className={styles.header}>
          <span className={styles.label}>&gt;_ projeto</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sobre o projeto</h2>
          <p className={styles.longDescription}>{project.longDescription}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Stack utilizada</h2>
          <ul className={styles.stack}>
            {project.stack.map((tech) => (
              <li key={tech} className={styles.tech}>
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.links}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Ver demo ao vivo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              Ver repositório
            </a>
          )}
        </section>
      </div>
    </main>
  );
}