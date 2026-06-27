// Logique PURE du calculateur Télétravail frontalier (testable, sans React).
// Seul paramètre fiscal utilisé : PARAMS.teletravail.seuilFiscal (40 %).
// Périmètre : IMPOSITION uniquement. La sécurité sociale / l'affiliation ont
// leur propre seuil, DISTINCT, non couvert ici (cf. calculateur Droit d'option).

import { PARAMS } from "./parametres-fiscaux";

export interface ResultatTeletravail {
  /** Jours travaillés par an saisis en entrée. */
  joursTravaillesParAn: number;
  /** Seuil fiscal appliqué (part du temps de travail annuel). */
  seuilFiscal: number;
  /** Plafond de jours de télétravail sans changement d'État d'imposition. */
  joursTeletravailMax: number;
  /** Équivalent indicatif en jours/semaine (base 5 j ouvrés). */
  joursParSemaineEquivalent: number;
}

/**
 * Calcule le nombre maximal de jours de télétravail par an qu'un frontalier
 * peut effectuer sans changer d'État d'imposition, au sens de l'avenant
 * franco-suisse (40 % du temps de travail annuel).
 *
 * Estimation INDICATIVE — ne constitue pas un conseil. Le périmètre exact du
 * seuil peut différer selon le canton (accord 1983 vs Genève).
 */
export function calculerTeletravail(
  joursTravaillesParAn: number
): ResultatTeletravail {
  const jours = Number.isFinite(joursTravaillesParAn)
    ? Math.max(0, joursTravaillesParAn)
    : 0;

  const seuilFiscal = PARAMS.teletravail.seuilFiscal;
  const joursTeletravailMax = Math.floor(jours * seuilFiscal);

  // Équivalent jours/semaine : hypothèse de confort utilisateur (semaine de 5 j
  // ouvrés). PAS un paramètre fiscal. Arrondi à 0,1 pour l'affichage.
  const joursParSemaineEquivalent =
    Math.round((joursTeletravailMax / 52) * 10) / 10;

  return {
    joursTravaillesParAn: jours,
    seuilFiscal,
    joursTeletravailMax,
    joursParSemaineEquivalent,
  };
}

/** Préréglages pratiques d'aide à la saisie. Hypothèses de confort, NON fiscales. */
export const PRESETS_JOURS = [
  { label: "4 jours / semaine (≈ 200 j/an)", jours: 200 },
  { label: "4,5 jours / semaine (≈ 220 j/an)", jours: 220 },
  { label: "5 jours / semaine (≈ 230 j/an)", jours: 230 },
] as const;
