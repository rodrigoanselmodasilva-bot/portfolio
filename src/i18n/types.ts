export interface TimelineItem {
  year: string;
  title: string;
  body: string;
}

export interface MethodNode {
  id: string;
  label: string;
  body: string;
}

export interface Dictionary {
  meta: {
    homeTitle: string;
    homeDescription: string;
    ogTitle: string;
    ogDescription: string;
  };
  topMeta: {
    archive: string; // "Arquivo · MMXXVI" or "Archive · MMXXVI"
  };
  nav: {
    sections: Array<{ id: string; label: string; num: string }>;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleItalic: string; // the italic middle part
    titleHighlight: string; // the bronze-colored last word/phrase
    lead: string;
    cta: string;
  };
  story: {
    eyebrow: string;
    title: string;
    fragmentLabel: string; // "Fragment" or "Fragmento"
    timeline: TimelineItem[];
    scrollHint: string; // "Scroll"
  };
  method: {
    eyebrow: string;
    title: string;
    hoverHint: string; // "Hover each stage to reveal"
    nodes: MethodNode[];
  };
  projects: {
    eyebrow: string;
    title: string;
  };
  principles: {
    eyebrow: string;
    lines: string[];
  };
  contact: {
    eyebrow: string;
    titleLine1: string;
    titleItalic: string;
    titleHighlight: string;
    lead: string;
    cta: string;
    monolithLabel: string; // "Monolith · Complete"
  };
  footer: {
    copyright: string;
    location: string;
    archive: string;
  };
  case: {
    client: string;
    tools: string;
    year: string;
    role: string;
    archive: string;
    previous: string;
    next: string;
    backToArchive: string;
    notFound: string;
    caseLabel: string; // "Case" or "Caso"
  };
}

