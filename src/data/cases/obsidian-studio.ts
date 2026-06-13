import type { CaseData } from "./types";

const obsidianStudio: CaseData = {
  slug: "obsidian-studio",
  n: "04",
  title: "Obsidian Studio",
  summary: "Creative operating system for a multidisciplinary studio.",
  cover: "cover.svg",
  client: "Obsidian Studio",
  tools: ["Figma", "Notion API", "React"],
  year: "2022",
  roles: ["Operating System Design", "Product Strategy"],
  sections: [
    {
      title: "The Diagnosis",
      subtitle: "Ten tools, zero system",
      body: "A multidisciplinary studio running on ten disconnected tools: separate platforms for projects, time, assets, communication, billing, and knowledge. Every handoff leaked. Every context switch cost minutes that became hours that became months of overhead.",
    },
    {
      title: "The Architecture",
      body: "We designed a single structural model: every project, every person, every asset lives in one graph. The model is the operating system — not a product that sits on top of one. Existing tools that the team loved were integrated as views into the same underlying structure.",
    },
    {
      title: "The Transformation",
      body: "Replaced ten disconnected tools with one structural model. Months of overhead reclaimed; the studio doubled output without growing headcount.",
    },
  ],
};

export default obsidianStudio;
