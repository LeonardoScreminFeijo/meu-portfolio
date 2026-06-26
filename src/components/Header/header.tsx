"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.scss";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Sobre Mim", path: "/sobre" },
  { label: "Setup/Lab", path: "/setup" },
  { label: "Projetos", path: "/projetos" },
  { label: "Contato", path: "/contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer} aria-label="Navegação principal">
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          Leonardo<span className={styles.dot}>.</span>
        </Link>

        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`${styles.linkItem} ${pathname === item.path ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span className={`${styles.bar} ${open ? styles.barOpen1 : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen2 : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen3 : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${styles.mobileLink} ${pathname === item.path ? styles.active : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
