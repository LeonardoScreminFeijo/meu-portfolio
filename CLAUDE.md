@AGENTS.md

---

# Roadmap de Desenvolvimento — Portfólio Leonardo Scremin Feijó

## Perfil do Dono

- **Nome:** Leonardo Scremin Feijó
- **Identidade técnica:** Engenheiro Front-end com background em infraestrutura/DevOps — esse diferencial deve aparecer no conteúdo.
- **Email de contato:** leofeijo2001@hotmail.com

---

## Status Atual

| Componente/Página | Status |
|---|---|
| Setup Next.js 16 + React 19 + App Router | ✅ Feito |
| Design tokens (`_variables.module.scss`) | ✅ Feito |
| `globals.css` (reset + dark mode) | ✅ Feito |
| `Header` (glassmorphism, active link, neon indicator) | ✅ Feito |
| `Hero` (Framer Motion, layout 2 colunas, neon glow) | ✅ Feito |
| Página `/sobre` | ❌ Vazia |
| Página `/projetos` (listagem) | ❌ Vazia |
| Página `/projetos/[slug]` (detalhe) | ❌ Sem page.tsx |
| Página `/contato` | ❌ Vazia |
| Página `/setup` | ❌ Vazia |
| Foto real no Hero | ❌ Pendente (`<div>` placeholder) |
| Menu mobile (hamburger) | ❌ Pendente |
| Footer | ❌ Pendente |

---

## Bug Conhecido

- `globals.css` define `font-family: Arial` mas `layout.tsx` aplica `inter.className` via next/font. Remover `font-family` do `globals.css` — a fonte Inter já é aplicada pelo className no `<body>`.

---

## Páginas a Construir

### `/sobre` — Sobre Mim

Seções obrigatórias (ordem):
1. **Introdução** — parágrafo curto com identidade técnica (infra → front-end)
2. **Stack Técnico** — grid de ícones/badges: Next.js, React, TypeScript, SCSS, Node.js, Docker, Linux, Git
3. **Linha do Tempo** — experiências/formação em ordem cronológica
4. **Soft Skills** — diferenciais de quem veio de infra: observabilidade, resiliência, pensamento sistêmico

Componentes a criar: `src/components/SkillGrid/`, `src/components/Timeline/`

---

### `/projetos` — Listagem de Projetos

- Grid responsivo de `ProjectCard` components
- Cada card: título, descrição curta, stack (badges), thumbnail, link para `/projetos/[slug]`
- Dados dos projetos: criar `src/data/projects.ts` com array tipado (`Project[]`)
- Filtro por tecnologia (opcional, fase 2)

Componentes a criar: `src/components/ProjectCard/`, `src/data/projects.ts`

Tipo `Project`:
```ts
interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  thumbnail: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}
```

---

### `/projetos/[slug]` — Detalhe do Projeto

- Criar `src/app/projetos/[slug]/page.tsx`
- Server Component: busca dados de `src/data/projects.ts` pelo slug
- Seções: hero do projeto, descrição longa, stack usada, links (demo + repo), galeria de screenshots
- `notFound()` se slug inválido

---

### `/contato` — Contato

- Formulário com campos: **Nome**, **Email**, **Assunto**, **Mensagem**
- Envio via **Resend** ou **Nodemailer** (API Route em `src/app/api/contact/route.ts`)
- Email de destino: `leofeijo2001@hotmail.com`
- Validação client-side básica (campos obrigatórios, formato email)
- Feedback visual: loading state + mensagem de sucesso/erro
- Links sociais ao lado: GitHub, LinkedIn
- Componente `"use client"` (formulário interativo)

Componentes a criar: `src/components/ContactForm/`

---

### `/setup` — Setup / Lab

Diferencial do portfólio — mostra o ambiente de trabalho como engenheiro vindo de infra:
- **Hardware:** lista de equipamentos (monitor, teclado, mouse, etc.)
- **Software / Dev Tools:** IDEs, terminais, extensões, dotfiles
- **Stack favorita:** tecnologias preferidas com breve justificativa
- **Homelab (opcional):** se tiver servidores/VMs em casa, listar

Dados: criar `src/data/setup.ts` com array tipado
Componentes a criar: `src/components/SetupCard/`

---

## Componentes Globais Pendentes

### `Footer`
- Links rápidos: Home, Projetos, Contato
- Links sociais: GitHub, LinkedIn
- Copyright dinâmico: `© {new Date().getFullYear()} Leonardo Scremin Feijó`
- Criar em `src/components/Footer/`

### Menu Mobile (Hamburger)
- Adicionar ao `Header` existente (`src/components/Header/header.tsx`)
- Visível abaixo de 768px (onde `navLinks` some)
- Animação com Framer Motion (drawer lateral ou dropdown)
- Estado de aberto/fechado via `useState` — Header já é `"use client"`

### Hero — Foto Real
- Substituir `<div className={styles.profilePic}>` por `<Image>` do Next.js
- Arquivo da foto em `public/images/profile.jpg`
- Props: `width={300}`, `height={300}`, `alt="Leonardo Scremin Feijó"`, `priority`

---

## Estrutura de Diretórios Alvo

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              (Home — Hero)
│   ├── globals.css
│   ├── sobre/page.tsx
│   ├── projetos/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contato/page.tsx
│   ├── setup/page.tsx
│   └── api/
│       └── contact/route.ts
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── Footer/
│   ├── ProjectCard/
│   ├── ContactForm/
│   ├── SkillGrid/
│   ├── Timeline/
│   └── SetupCard/
├── data/
│   ├── projects.ts
│   └── setup.ts
└── styles/
    └── _variables.module.scss
```

---

## Prioridade de Execução

1. Fix fonte (`globals.css`)
2. `Footer` + Menu Mobile
3. Foto real no Hero
4. `/sobre` completo
5. `src/data/projects.ts` + `/projetos` listagem
6. `/projetos/[slug]` detalhe
7. `/contato` + API Route
8. `/setup`
