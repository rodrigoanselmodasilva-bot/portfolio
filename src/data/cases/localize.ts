import type { Locale } from "@/i18n/config";
import type { CaseData, LocalizedCaseData } from "./types";

function pick(text: Record<Locale, string>, locale: Locale): string {
  return text[locale] || text.pt;
}

export function localizeCase(c: LocalizedCaseData, locale: Locale): CaseData {
  return {
    slug: c.slug,
    n: c.n,
    cover: c.cover,
    client: c.client,
    tools: c.tools,
    year: c.year,
    roles: c.roles,
    title: pick(c.title, locale),
    summary: pick(c.summary, locale),
    sections: c.sections.map((s) => ({
      title: pick(s.title, locale),
      subtitle: s.subtitle ? pick(s.subtitle, locale) : undefined,
      body: pick(s.body, locale),
      image: s.image,
    })),
  };
}
