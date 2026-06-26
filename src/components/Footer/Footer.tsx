import Link from "next/link";
import styles from "./Footer.module.scss";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Sobre Mim", path: "/sobre" },
  { label: "Projetos", path: "/projetos" },
  { label: "Setup/Lab", path: "/setup" },
  { label: "Contato", path: "/contato" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/LeonardoScreminFeijo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leonardosfeijo/" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Link href="/" className={styles.logo}>
            Leonardo<span className={styles.dot}>.</span>
          </Link>

          <nav className={styles.nav} aria-label="Links rápidos">
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.social}>
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Leonardo Scremin Feijó
          </p>
          <p className={styles.copy}>
            Construído com Next.js, React &amp; SCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
