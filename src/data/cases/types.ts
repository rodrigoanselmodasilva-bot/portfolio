export interface CaseSection {
  title: string;
  subtitle?: string;
  body: string;
  image?: string;
}

export interface CaseData {
  slug: string;
  n: string;
  title: string;
  summary: string;
  cover: string;
  client: string;
  tools: string[];
  year: string;
  roles: string[];
  sections: CaseSection[];
}
