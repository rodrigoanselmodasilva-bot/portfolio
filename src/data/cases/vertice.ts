import type { CaseData } from "./types";

const vertice: CaseData = {
  slug: "vertice",
  n: "02",
  title: "Vértice",
  summary: "Strategic intelligence platform for boutique funds.",
  cover: "cover.svg",
  client: "Vértice Capital",
  tools: ["Figma", "Python", "D3.js"],
  year: "2023",
  roles: ["Product Strategy", "UX Design"],
  sections: [
    {
      title: "The Challenge",
      subtitle: "Signal from noise at scale",
      body: "A team of fifteen analysts compressing thousands of signals into a single weekly decision. The existing workflow was a patchwork of spreadsheets, proprietary terminals, and tribal knowledge — a process that couldn't survive headcount changes or ambition.",
    },
    {
      title: "The Design",
      body: "We built the platform around a single decision surface: one view that shows the full competitive landscape, ranked by a model the team co-authored. The model is transparent, adjustable, and logged — every parameter change is traceable to a person and a rationale.",
    },
    {
      title: "The Result",
      body: "Reshaped how a team of fifteen analysts compress thousands of signals into a single weekly decision. Decision latency dropped from five days to one. The weekly report became a formality.",
    },
  ],
};

export default vertice;
