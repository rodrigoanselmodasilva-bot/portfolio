import type { Dictionary } from "../types";

const en: Dictionary = {
  meta: {
    homeTitle: "Rodrigo Anselmo — Product & Design Strategist",
    homeDescription:
      "Product and design strategist. Building systems, products and ideas at the intersection of strategy, narrative and design.",
    ogTitle: "Rodrigo Anselmo — Product & Design Strategist",
    ogDescription:
      "Product and design strategist. Building systems, products and ideas at the intersection of strategy, narrative and design.",
  },
  topMeta: {
    archive: "Archive · MMXXVI",
  },
  nav: {
    sections: [
      { id: "vision", label: "Vision", num: "I" },
      { id: "story", label: "Story", num: "II" },
      { id: "method", label: "Method", num: "III" },
      { id: "projects", label: "Projects", num: "IV" },
      { id: "legacy", label: "Principles", num: "V" },
      { id: "contact", label: "Contact", num: "VI" },
    ],
  },
  hero: {
    eyebrow: "Ch. I — Vision",
    title: "Strategy, narrative",
    titleItalic: "and design",
    titleHighlight: "in the same place.",
    lead: "I design products and strategies at the intersection of business, narrative and design — from problem to execution.",
    cta: "See projects",
  },
  story: {
    eyebrow: "Ch. II — Story",
    title: "A path built from disciplines that compound.",
    fragmentLabel: "Fragment",
    timeline: [
      {
        year: "2008",
        title: "Law",
        body: "Learned that every system rests on a framework of language and argument.",
      },
      {
        year: "2012",
        title: "Marketing",
        body: "Translated abstract value into stories audiences could hold. Strategy without narrative collapses on contact.",
      },
      {
        year: "2015",
        title: "UX",
        body: "Studied the geometry of behavior. Every click is a sentence; every flow, a paragraph in a longer text.",
      },
      {
        year: "2018",
        title: "Product",
        body: "Built products as living organisms — composed of trade-offs, vision, and discipline measured in shipped iterations.",
      },
      {
        year: "2021",
        title: "Strategy",
        body: "Connected business architecture to creative intention. Moved from making things to deciding which things deserve to be made.",
      },
      {
        year: "Today",
        title: "Product & Design",
        body: "I connect business strategy and design intention to build products that last.",
      },
    ],
    scrollHint: "Scroll",
  },
  method: {
    eyebrow: "Ch. III — Method",
    title: "More than a process: decisions with consequence.",
    hoverHint: "Hover each stage to reveal",
    nodes: [
      { id: "research", label: "Research", body: "Inhabit the territory before drawing the map." },
      { id: "insight", label: "Insight", body: "Compress the noise into a single load-bearing truth." },
      { id: "strategy", label: "Strategy", body: "Sequence the moves that compound." },
      { id: "design", label: "Design", body: "Translate intention into form, ritual and constraint." },
      { id: "execution", label: "Execution", body: "Ship with the discipline of someone who must live with it." },
      { id: "scale", label: "Scale", body: "Build the structure that lets the system grow without losing its shape." },
    ],
  },
  projects: {
    eyebrow: "Ch. IV — Projects",
    title: "Real cases, not portfolio entries.",
  },
  principles: {
    eyebrow: "Ch. V — Principles",
    lines: [
      "Every system tells a story.",
      "Every product leaves a mark.",
      "Every good idea starts simple — and is refined until it becomes inevitable.",
    ],
  },
  contact: {
    eyebrow: "Ch. VI — Contact",
    titleLine1: "Let's build something",
    titleItalic: "worth ",
    titleHighlight: "remembering.",
    lead: "For collaborations, advisory work and long-arc projects where the outcome matters more than the cycle.",
    cta: "Start a conversation",
    monolithLabel: "Monolith · Complete",
  },
  footer: {
    copyright: "© MMXXVI · Rodrigo Anselmo",
    location: "Lat 23°33′44″S · Lon 46°38′20″W · São Paulo",
    archive: "Archive · v.1",
  },
  case: {
    client: "Client",
    tools: "Tools",
    year: "Year",
    role: "Role",
    archive: "Archive",
    previous: "Previous",
    next: "Next",
    backToArchive: "← Archive",
    notFound: "Case not found.",
    caseLabel: "Case",
  },
};

export default en;
