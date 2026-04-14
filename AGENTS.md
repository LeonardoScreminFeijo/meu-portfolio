# AI Assistant Guidelines for Portfolio Project

## Context

This is a modern Front-end portfolio built to demonstrate high performance, strict architecture, and maintainability. It uses the latest React and Next.js paradigms.

## Core Stack & Rules

- **Framework:** Next.js with **App Router** (`src/app`). Strictly forbid the use of the legacy `pages/` directory.
- **Language:** TypeScript. Ensure strict typing for all components and props.
- **Styling:** Use **SCSS Modules** (`*.module.scss`). DO NOT generate Tailwind classes or inline styles. Use the variables defined in `src/styles/_variables.module.scss`.
- **State & Performance (Crucial):** React Compiler is ENABLED in `next.config.mjs`. DO NOT use manual memoization like `useMemo`, `useCallback`, or `React.memo` unless explicitly instructed to override the compiler.
- **Client vs. Server Components:** By default, assume all components in `src/app` are Server Components. Only add `"use client"` at the very top of the file if the component requires hooks (`useState`, `useEffect`) or browser APIs (like Framer Motion animations).

## UI/UX Guidelines

- The design system follows a "Tech / Dark Mode" aesthetic. Use dark backgrounds (`$bg-primary`) and high-contrast accents (`$accent-color`).
- Maintain semantic HTML tags (e.g., `<section>`, `<article>`, `<nav>`) for accessibility and SEO.
