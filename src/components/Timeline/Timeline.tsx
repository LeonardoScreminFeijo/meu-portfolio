"use client";

import { motion } from "framer-motion";
import styles from "./Timeline.module.scss";

const events = [
  {
    year: "2019",
    title: "Início na área de TI",
    description:
      "Primeiros passos em suporte técnico — base que moldou minha visão de sistemas estáveis e observáveis.",
  },
  {
    year: "2023",
    title: "Graduação em ADS",
    description:
      "Início do curso de Análise e Desenvolvimento de Sistemas na Universidade Estácio de Sá.",
  },
  {
    year: "2024",
    title: "Transição para Full-stack",
    description:
      "Mergulho no desenvolvimento web: React, Next.js, Node.js e TypeScript no dia a dia.",
  },
  {
    year: "Dez 2026",
    title: "Conclusão da graduação",
    description: "Previsão de conclusão do curso de ADS.",
    current: true,
  },
];

export default function Timeline() {
  return (
    <ol className={styles.timeline}>
      {events.map((event, index) => (
        <motion.li
          key={event.year}
          className={styles.event}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={styles.dot} data-current={event.current ?? false} />
          <div className={styles.content}>
            <span className={styles.year}>{event.year}</span>
            <h3 className={styles.title}>{event.title}</h3>
            <p className={styles.description}>{event.description}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
