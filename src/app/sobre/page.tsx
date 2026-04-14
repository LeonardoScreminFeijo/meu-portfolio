"use client"; // Necessário para animações no lado do cliente

import styles from "./Sobre.module.scss";
import { motion, Variants } from "framer-motion";
const itemAnimation: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

export default function Sobre() {
  return (
    <main className={styles.sobreContainer}>
      {/* Título com animação simples */}
      <motion.h1
        className={styles.title}
        initial="hidden"
        animate="show"
        variants={itemAnimation}
      >
        Sobre Mim
      </motion.h1>

      <div className={styles.contentGrid}>
        {}
        <motion.div
          className={styles.textSection}
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.2 }}
        >
          <motion.p variants={itemAnimation}>
            Olá! Eu sou o Leonardo. Minha jornada na tecnologia começou nos
            bastidores, garantindo que tudo funcione sem quedas. Atualmente,
            atuo na gestão de{" "}
            <span className={styles.highlight}>
              infraestrutura de TI e servidores{" "}
            </span>
            dentro da fábrica da Volkswagen (pela Sesé Logística).
          </motion.p>

          <motion.p variants={itemAnimation}>
            Lidar com a alta pressão e a exigência de disponibilidade de uma
            operação logística automotiva me ensinou a ter um raciocínio lógico
            afiado e um foco absurdo em resolução de problemas. Foi essa base
            sólida que me levou a mergulhar de cabeça no{" "}
            <span className={styles.highlight}>
              Desenvolvimento de Software
            </span>
            .
          </motion.p>

          <motion.p variants={itemAnimation}>
            Como estudante de Análise e Desenvolvimento de Sistemas (ADS), estou
            unindo minha visão de infraestrutura com a criação de aplicações web
            modernas, automações em Python, análise de dados e dashboards
            inteligentes. Meu objetivo é construir sistemas que não apenas
            funcionem bem no servidor, mas que entreguem a melhor experiência
            possível para o usuário final.
          </motion.p>

          <motion.p variants={itemAnimation}>
            Quando não estou codando ou arrumando racks de servidores, você
            provavelmente vai me encontrar treinando Jiu-Jitsu, pilotando caças
            no DCS World, explorando realidade virtual no Quest 3s ou passando
            tempo com minha noiva, Ana Carolina, e nosso cachorro.
          </motion.p>
        </motion.div>

        {/* Lado Direito: Card de Resumo animando um pouquinho depois */}
        <motion.aside
          className={styles.infoCard}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className={styles.cardBlock}>
            <h3>Localização</h3>
            <p>Curitiba / São José dos Pinhais - PR</p>
          </div>

          <div className={styles.cardBlock}>
            <h3>Stack Principal</h3>
            <p>Python, React/Next.js, SQL, Power BI</p>
          </div>

          <div className={styles.cardBlock}>
            <h3>Educação</h3>
            <p>Análise e Desenvolvimento de Sistemas (ADS)</p>
          </div>
        </motion.aside>
      </div>
    </main>
  );
}
