"use client";

import { motion } from "framer-motion";
import styles from "./SkillGrid.module.scss";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "SCSS Modules"],
  },
  {
    category: "Backend & Dados",
    items: ["Node.js", "Python", "REST APIs", "SQL"],
  },
  {
    category: "DevOps / Infra",
    items: ["Git", "CI/CD", "Docker", "Linux"],
  },
  {
    category: "Analytics",
    items: ["Power BI"],
  },
];

export default function SkillGrid() {
  return (
    <div className={styles.grid}>
      {skills.map((group, index) => (
        <motion.div
          key={group.category}
          className={styles.group}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className={styles.category}>{group.category}</h3>
          <ul className={styles.items}>
            {group.items.map((item) => (
              <li key={item} className={styles.badge}>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
