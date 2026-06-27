// Tous les paramètres fiscaux du projet sont centralisés ici.
// RÈGLE NON NÉGOCIABLE (CLAUDE.md §2/§4) : aucune valeur fiscale en dur dans un
// composant. Chaque valeur porte obligatoirement son `millesime` + sa `source`
// officielle, vérifiée en ligne et datée. Jamais de chiffre de mémoire.
//
// Session #1 (SESSION_TASKS.md) : seul le paramètre Télétravail est introduit.
// Les paramètres des autres calculateurs (droit d'option, quasi-résident, CMU…)
// seront ajoutés lors de la session #2 (SESSION_TASKS-02.md), après vérification.

export const PARAMS = {
  teletravail: {
    // Seuil FISCAL de télétravail sans changement de l'État d'imposition.
    seuilFiscal: 0.4, // 40 % du temps de travail annuel
    millesime:
      "Avenant franco-suisse signé le 27/06/2023 ; appliqué à titre transitoire depuis le 01/01/2023 ; avenant à la convention applicable depuis le 01/01/2026.",
    source:
      "https://www.economie.gouv.fr/suisse-france-signent-avenant-convention-fiscale-bilaterale ; https://www.ge.ch/imposition-du-teletravail-personnes-frontalieres/accords-applicables-au-teletravail",
    // ⚠️ NE PAS confondre avec le seuil de SÉCURITÉ SOCIALE (affiliation), qui est DISTINCT.
    // seuilSecuriteSociale: À VÉRIFIER — ne pas coder ni afficher tant que non sourcé.
  },
} as const;
