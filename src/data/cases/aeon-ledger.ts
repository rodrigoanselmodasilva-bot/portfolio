import type { CaseData } from "./types";

const aeonLedger: CaseData = {
  slug: "aeon-ledger",
  n: "01",
  title: "Aeon Ledger",
  summary: "Decentralized archives for cultural institutions.",
  cover: "cover.svg",
  client: "Aeon Foundation",
  tools: ["Figma", "React", "TypeScript"],
  year: "2024",
  roles: ["System Architecture", "UX Design"],
  sections: [
    {
      title: "The Problem",
      subtitle: "When memory becomes liability",
      body: "A living archive that turns institutional memory into queryable infrastructure — designed to outlive the team that built it. Cultural institutions accumulate decades of context in formats that resist access: siloed databases, brittle file structures, undocumented rituals. The archive itself becomes a liability when the people who know it leave.",
    },
    {
      title: "The Approach",
      body: "We designed a metadata-first ingestion pipeline that treats every artifact as a node in a graph, not a row in a table. Relationships between objects, events, people, and time periods are first-class citizens. The interface lets curators navigate by association, not by folder.",
    },
    {
      title: "The Outcome",
      body: "A living archive that turns institutional memory into queryable infrastructure — designed to outlive the team that built it.",
    },
  ],
};

export default aeonLedger;
