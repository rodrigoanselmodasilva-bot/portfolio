import type { Locale } from "../config";
import type { Dictionary } from "../types";
import pt from "./pt";
import en from "./en";
import es from "./es";

export const dictionaries: Record<Locale, Dictionary> = { pt, en, es };
