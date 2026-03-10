import { colorful } from "@farming-labs/astro-theme/colorful";
import { defineDocs } from "@farming-labs/docs";

export default defineDocs({
  entry: "docs",
  contentDir: "docs",
  staticExport: true,
  theme: colorful({
    ui: {
      components: { Callout: { variant: "outline" } },
      layout: {
        toc: { enabled: true, depth: 3, style: "default" },
        sidebarWidth: 280,
      },
      sidebar: { style: "default" },
      typography: {
        font: {
          style: {
            sans: "'Inter', system-ui, -apple-system, sans-serif",
            mono: "'JetBrains Mono', ui-monospace, monospace",
          },
          h1: { size: "3rem", weight: 900, letterSpacing: "-0.04em" },
          h2: { size: "1.875rem", weight: 800, letterSpacing: "-0.03em" },
          h3: { size: "1.5rem", weight: 700, letterSpacing: "-0.02em" },
          body: { size: "1rem", lineHeight: "1.75", weight: 400 },
        },
      },
    },
  }),
  github: {
    url: "https://github.com/Kumneger0/cligram",
    branch: "main",
    directory: "cligram_docs/cligram_docs/docs",
  },
  ordering: "numeric",
  nav: {
    title: "cligram Docs",
    url: "/docs",
  },
  sidebar: { flat: false, collapsible: true },
  pageActions: {
    alignment: "right",
    copyMarkdown: { enabled: true },
    openDocs: {
      enabled: true,
      providers: [
        {
          name: "ChatGPT",
          urlTemplate:
            "https://chatgpt.com/?hints=search&q=Read+{mdxUrl},+I+want+to+ask+questions+about+it.",
        },
        {
          name: "Claude",
          urlTemplate: "https://claude.ai/new?q=Read+{mdxUrl},+I+want+to+ask+questions+about+it.",
        },
      ],
    },
  },
  llmsTxt: { enabled: false, baseUrl: "https://docs.farming-labs.dev" },
  lastUpdated: { enabled: true, position: "below-title" },
  themeToggle: { enabled: true, default: "dark" },
  breadcrumb: { enabled: true },
  metadata: {
    titleTemplate: "%s – cligram Docs",
    description: "cligram is a Telegram client that runs in your terminal.",
  },
});
