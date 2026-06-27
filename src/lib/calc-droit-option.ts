// Logique PURE du calculateur Droit d'option assurance maladie (testable).
// Compare le coût annuel CMU (régime français) et LAMal (régime suisse).
//
// GARDE-FOU §4/§7 : la cotisation CMU n'est calculée QUE si l'abattement officiel
// de l'année est connu (PARAMS.cmuFrontalier.abattementAnnee). Tant qu'il est
// `null`, on NE fabrique aucun montant : on renvoie un statut « indisponible »
// + le lien vers le simulateur officiel URSSAF.

import { PARAMS } from "./parametres-fiscaux";

export interface EntreesDroitOption {
  /** Revenus du foyer de l'année N-2 (assiette CMU). */
  revenusN2: number;
  /** Prime mensuelle LAMal estimée par l'utilisateur (saisie libre, en €). */
  primeMensuelleLAMal: number;
  /**
   * Abattement forfaitaire officiel. Par défaut, valeur du paramètre central
   * (null tant que non confirmé). Injectable pour les tests uniquement.
   */
  abattement?: number | null;
}

export interface ResultatDroitOption {
  cmu:
    | { disponible: true; cotisationAnnuelle: number }
    | { disponible: false; simulateurUrl: string };
  lamal: { coutAnnuel: number };
  /** Régime le moins cher ; null si la CMU n'est pas chiffrable. */
  moinsCher: "cmu" | "lamal" | "egalite" | null;
}

export function calculerDroitOption({
  revenusN2,
  primeMensuelleLAMal,
  abattement = PARAMS.cmuFrontalier.abattementAnnee,
}: EntreesDroitOption): ResultatDroitOption {
  const primeMensuelle = Number.isFinite(primeMensuelleLAMal)
    ? Math.max(0, primeMensuelleLAMal)
    : 0;
  const coutLAMal = primeMensuelle * 12;

  // Abattement inconnu → aucun montant CMU fabriqué (§7).
  if (abattement === null || abattement === undefined) {
    return {
      cmu: {
        disponible: false,
        simulateurUrl: PARAMS.cmuFrontalier.simulateurOfficiel,
      },
      lamal: { coutAnnuel: coutLAMal },
      moinsCher: null,
    };
  }

  const revenus = Number.isFinite(revenusN2) ? Math.max(0, revenusN2) : 0;
  const cotisationCMU =
    Math.max(0, revenus - abattement) * PARAMS.cmuFrontalier.taux;

  let moinsCher: "cmu" | "lamal" | "egalite";
  if (cotisationCMU < coutLAMal) moinsCher = "cmu";
  else if (coutLAMal < cotisationCMU) moinsCher = "lamal";
  else moinsCher = "egalite";

  return {
    cmu: { disponible: true, cotisationAnnuelle: cotisationCMU },
    lamal: { coutAnnuel: coutLAMal },
    moinsCher,
  };
}
