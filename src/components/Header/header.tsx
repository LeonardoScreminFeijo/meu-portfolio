"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

export default function Header() {
  const pathname = usePathname();

  // Array de rotas: Fica muito mais fácil adicionar abas no futuro
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Sobre Mim", path: "/sobre" },
    { label: "Setup/Lab", path: "/setup" },
    { label: "Projetos", path: "/projetos" },
    { label: "Contato", path: "/contato" },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer} aria-label="Navegação principal">
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Leonardo<span className={styles.dot}>.</span>
        </Link>

        {/* Links */}
        <ul className={styles.navLinks}>
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`${styles.linkItem} ${isActive ? styles.active : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
