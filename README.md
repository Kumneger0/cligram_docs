# cligram Documentation Site

This is the source code for the [cligram](https://github.com/Kumneger0/cligram) documentation site, built with [Astro](https://astro.build/) and [@farming-labs/docs](https://docs.farming-labs.dev/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/)

### Installation

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

The documentation will be available at `http://localhost:4321/docs`.

### Build

Build the production site:

```bash
pnpm build
```

## Structure

- `docs/`: Contains the documentation content in Markdown (`.md`) files.
- `src/pages/index.astro`: The custom landing page.
- `src/lib/docs.config.ts`: Main configuration for the documentation engine.
- `public/`: Static assets (like `demo.gif`).

## Adding New Pages

To add a new page, create a new directory or a `.md` file inside the `docs/` folder. Each page should have frontmatter:

```markdown
---
order: 10
title: My New Page
description: A short description
icon: book
---
```

Supported icons: `book`, `terminal`, `rocket`, `settings`, `file`, `code`.
