"use client";

import styles from "./Hero.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Lado Esquerdo: Textos animando da esquerda para a direita */}
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.terminalGreeting}>
            &gt;_ Olá, eu sou o Leonardo.
          </span>

          <h1 className={styles.mainTitle}>
            Da infraestrutura para o Front-end:
            <br />
            construindo aplicações{" "}
            <span className={styles.highlight}>robustas</span>.
          </h1>

          <p className={styles.subtitle}>
            Unindo a precisão analítica e o foco em alta disponibilidade para
            desenvolver interfaces modernas, eficientes e focadas na experiência
            do usuário.
          </p>

          <div className={styles.actionButtons}>
            <Link href="/projetos" className={styles.btnPrimary}>
              Ver Meus Projetos
            </Link>
            <Link href="/contato" className={styles.btnSecondary}>
              Entrar em Contato
            </Link>
          </div>
        </motion.div>

        {/* Lado Direito: Círculo Neon animando do centro */}
        <motion.div
          className={styles.imageContent}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageGlow}>
            {}
            <div
              className={styles.profilePic}
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
