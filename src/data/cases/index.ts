export type { CaseData, CaseSection, LocalizedCaseData } from "./types";
export { localizeCase } from "./localize";

import georgiapro from "./georgiapro";
import plataformaDeLicitacoes from "./sabesp-licitacoes";
import aionSolution from "./aion-solution";
import sebrae from "./sebrae";

import type { LocalizedCaseData } from "./types";

export const cases: LocalizedCaseData[] = [
  georgiapro,
  plataformaDeLicitacoes,
  aionSolution,
  sebrae,
];
