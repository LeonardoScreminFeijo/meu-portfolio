"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.scss";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      className={`${styles.card} ${project.featured ? styles.featured : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {project.featured && (
        <span className={styles.featuredBadge}>Destaque</span>
      )}

      <div className={styles.body}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>

        <ul className={styles.stack}>
          {project.stack.map((tech) => (
            <li key={tech} className={styles.tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footer}>
        <Link href={`/projetos/${project.slug}`} className={styles.btnDetail}>
          Ver detalhes
        </Link>

        <div className={styles.externalLinks}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnExternal}
            >
              Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnExternal}
            >
              Repo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
