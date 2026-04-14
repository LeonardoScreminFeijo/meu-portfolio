"use client";

import styles from "./Setup.module.scss";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function Setup() {
  const PCs = [
    {
      nome: "Workstation Pessoal",
      tag: "Dev, Gaming & Sim",
      specs: {
        CPU: "Ryzen 5 3600X",
        RAM: "32GB 3200MHz DDR4",
        GPU: "RTX 4060 Ti",
        MOBO: "B550M Steel Legend",
      },
    },
    {
      nome: "Workstation Profissional",
      tag: "Dev & Infra",
      specs: {
        CPU: "Intel i5 14500T",
        RAM: "16GB 4800MHz DDR5",
        GPU: "Intel UHD Graphics 770",
        MOBO: "Intel Business Class",
      },
    },
  ];

  return (
    <main className={styles.setupContainer}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Meu Setup
      </motion.h1>

      <div className={styles.grid}>
        {PCs.map((pc, i) => (
          <motion.div
            key={pc.nome}
            className={styles.pcCard}
            custom={i}
            initial="hidden"
            animate="show"
            variants={cardVariants}
          >
            <h2>
              {pc.nome} <br />
              <span>{pc.tag}</span>
            </h2>

            <div className={styles.specList}>
              {Object.entries(pc.specs).map(([key, value]) => (
                <div key={key} className={styles.specItem}>
                  <strong>{key}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Espaço reservado para o Notebook depois */}
      <motion.p
        style={{ marginTop: "3rem", textAlign: "center", color: "#666" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        + Notebook e Periféricos (VR Meta Quest 3s & Hotas) em breve...
      </motion.p>
    </main>
  );
}
