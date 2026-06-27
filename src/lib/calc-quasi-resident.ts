// Logique PURE du calculateur Quasi-résident Genève v1 (testable).
// v1 = test d'ÉLIGIBILITÉ uniquement (seuil 90 % des revenus bruts mondiaux du
// foyer imposables en Suisse). PAS de chiffrage € du gain : le barème d'impôt à
// la source GE et le calcul de taxation ordinaire ne sont pas vérifiés
// (§7/§10, dossier/03) → aucun montant n'est produit ici.

import { PARAMS } from "./parametres-fiscaux";

export interface EntreesQuasiResident {
  /** Revenus bruts imposables en Suisse (salaire frontalier). */
  revenusBrutsSuisse: number;
  /** Revenus bruts mondiaux du foyer (inclut le conjoint, source France comprise). */
  revenusBrutsMondiauxFoyer: number;
}

export interface ResultatQuasiResident {
  /** Part des revenus du foyer imposable en Suisse (0 à 1), null si dénominateur invalide. */
  partSuisse: number | null;
  eligible: boolean;
  seuil: number;
}

export function calculerQuasiResident({
  revenusBrutsSuisse,
  revenusBrutsMondiauxFoyer,
}: EntreesQuasiResident): ResultatQuasiResident {
  const seuil = PARAMS.quasiResident.seuilRevenuSuisse;

  const valides =
    Number.isFinite(revenusBrutsSuisse) &&
    Number.isFinite(revenusBrutsMondiauxFoyer) &&
    revenusBrutsMondiauxFoyer > 0;

  if (!valides) {
    return { partSuisse: null, eligible: false, seuil };
  }

  const partSuisse = revenusBrutsSuisse / revenusBrutsMondiauxFoyer;
  return { partSuisse, eligible: partSuisse >= seuil, seuil };
}
