// Logique PURE du calculateur Salaire net frontalier CHF→EUR (testable).
//
// Périmètre (validé Abi, SESSION_TASKS-04 §0) : « net » = net APRÈS charges
// sociales suisses, AVANT impôt à la source. On ne reconstruit pas le barème
// fiscal. Le taux de change est saisi par l'utilisateur (jamais figé, §4) :
// sans taux, on renvoie le net CHF et `netEUR = null` (pas de conversion fantôme).
//
// Taux salariés : PARAMS.chargesSocialesCH (AVS/AI/APG, AC + plafond annuel).
// LPP et AANP sont variables (plan/employeur) → saisis par l'utilisateur.

import { PARAMS } from "./parametres-fiscaux";

export type Periode = "mensuel" | "annuel";

export interface EntreesSalaireNet {
  /** Salaire brut, dans l'unité de `periode`. */
  brut: number;
  /** Unité du brut saisi. */
  periode: Periode;
  /** Taux CHF→EUR saisi par l'utilisateur. null/undefined = non renseigné. */
  tauxChange?: number | null;
  /** Cotisation LPP (2e pilier), montant CHF sur la même période. Défaut 0. */
  lppMontant?: number;
  /** Taux AANP (accident non professionnel), fraction du brut. Défaut 0. */
  aanpTaux?: number;
}

export interface ResultatSalaireNet {
  brut: number;
  periode: Periode;
  deductions: {
    avsAiApg: number;
    ac: number;
    lpp: number;
    aanp: number;
    total: number;
  };
  netSocialCHF: number;
  /** Net converti ; null si le taux de change n'est pas renseigné. */
  netEUR: number | null;
}

const round2 = (n: number) => Math.round(n * 100) / 100;
const positif = (n: number | undefined) =>
  Number.isFinite(n) && (n as number) > 0 ? (n as number) : 0;

export function calculerSalaireNet({
  brut,
  periode,
  tauxChange,
  lppMontant,
  aanpTaux,
}: EntreesSalaireNet): ResultatSalaireNet {
  const brutPeriode = positif(brut);
  const brutAnnuel = periode === "annuel" ? brutPeriode : brutPeriode * 12;

  const { avsAiApg, ac, acPlafondAnnuelCHF } = PARAMS.chargesSocialesCH;

  // AVS/AI/APG : pas de plafond, taux sur le brut de la période.
  const avs = round2(brutPeriode * avsAiApg);

  // AC : assise plafonnée en ANNUEL, puis reproratisée au mois si saisie mensuelle.
  const acAnnuel = Math.min(brutAnnuel, acPlafondAnnuelCHF) * ac;
  const acPeriode = round2(periode === "annuel" ? acAnnuel : acAnnuel / 12);

  // LPP : montant saisi (même période). AANP : taux saisi appliqué au brut.
  const lpp = round2(positif(lppMontant));
  const aanp = round2(brutPeriode * positif(aanpTaux));

  const total = round2(avs + acPeriode + lpp + aanp);
  const netSocialCHF = round2(brutPeriode - total);

  const tauxValide =
    tauxChange !== null &&
    tauxChange !== undefined &&
    Number.isFinite(tauxChange) &&
    tauxChange > 0;

  const netEUR = tauxValide ? round2(netSocialCHF * tauxChange) : null;

  return {
    brut: brutPeriode,
    periode,
    deductions: { avsAiApg: avs, ac: acPeriode, lpp, aanp, total },
    netSocialCHF,
    netEUR,
  };
}
