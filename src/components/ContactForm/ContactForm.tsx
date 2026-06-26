"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData) {
    const errs: Record<string, string> = {};
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const subject = form.get("subject") as string;
    const message = form.get("message") as string;

    if (!name.trim()) errs.name = "Nome obrigatório.";
    if (!email.trim()) errs.email = "Email obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Email inválido.";
    if (!subject.trim()) errs.subject = "Assunto obrigatório.";
    if (!message.trim()) errs.message = "Mensagem obrigatória.";

    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          subject: form.get("subject"),
          message: form.get("message"),
        }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.layout}>
      <div className={styles.formWrapper}>
        <span className={styles.label}>&gt;_ contato</span>
        <h1 className={styles.title}>Vamos conversar</h1>
        <p className={styles.subtitle}>
          Preencha o formulário ou me chame pelas redes sociais.
        </p>

        {status === "success" ? (
          <div className={styles.successBox}>
            <span className={styles.successIcon}>✓</span>
            <p>Mensagem enviada! Responderei em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.fieldLabel}>
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                  placeholder="Leonardo Feijó"
                  disabled={status === "loading"}
                />
                {errors.name && (
                  <span className={styles.error}>{errors.name}</span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.fieldLabel}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                  placeholder="email@exemplo.com"
                  disabled={status === "loading"}
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="subject" className={styles.fieldLabel}>
                Assunto
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className={`${styles.input} ${errors.subject ? styles.inputError : ""}`}
                placeholder="Oportunidade, projeto, dúvida..."
                disabled={status === "loading"}
              />
              {errors.subject && (
                <span className={styles.error}>{errors.subject}</span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.fieldLabel}>
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                placeholder="Escreva sua mensagem aqui..."
                disabled={status === "loading"}
              />
              {errors.message && (
                <span className={styles.error}>{errors.message}</span>
              )}
            </div>

            {status === "error" && (
              <p className={styles.errorGlobal}>
                Falha ao enviar. Tente novamente ou me contate diretamente.
              </p>
            )}

            <button
              type="submit"
              className={styles.btn}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>
        )}
      </div>

      <aside className={styles.sidebar}>
        <div className={styles.sideCard}>
          <h2 className={styles.sideTitle}>Redes sociais</h2>

          <a
            href="https://github.com/LeonardoScreminFeijo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span className={styles.socialIcon}>⌥</span>
            <span>
              <strong>GitHub</strong>
              <small>LeonardoScreminFeijo</small>
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/leonardosfeijo/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span className={styles.socialIcon}>in</span>
            <span>
              <strong>LinkedIn</strong>
              <small>leonardosfeijo</small>
            </span>
          </a>

          <a
            href="mailto:leofeijo2001@hotmail.com"
            className={styles.socialLink}
          >
            <span className={styles.socialIcon}>@</span>
            <span>
              <strong>Email</strong>
              <small>leofeijo2001@hotmail.com</small>
            </span>
          </a>
        </div>

        <div className={styles.sideCard}>
          <h2 className={styles.sideTitle}>Disponibilidade</h2>
          <p className={styles.availability}>
            <span className={styles.dot} />
            Aberto a oportunidades
          </p>
          <p className={styles.availabilityNote}>
            Respondo em até 48h nos dias úteis.
          </p>
        </div>
      </aside>
    </div>
  );
}
