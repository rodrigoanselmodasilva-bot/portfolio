import type { Locale } from "@/i18n/config";

export type LocalizedText = Record<Locale, string>;

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

export interface LocalizedCaseSection {
  title: LocalizedText;
  subtitle?: LocalizedText;
  body: LocalizedText;
  image?: string;
}

export interface LocalizedCaseData {
  slug: string;
  n: string;
  cover: string;
  client: string;
  tools: string[];
  year: string;
  roles: string[];
  title: LocalizedText;
  summary: LocalizedText;
  sections: LocalizedCaseSection[];
}
