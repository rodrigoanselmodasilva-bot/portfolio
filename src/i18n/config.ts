export type Locale = "pt" | "en" | "es";
export const LOCALES: Locale[] = ["pt", "en", "es"];
export const DEFAULT_LOCALE: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export const SITE_ORIGIN = "https://rodrigoanselmodasilva.github.io";

export const LOCALE_LABELS: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

export const OG_LOCALES: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};
