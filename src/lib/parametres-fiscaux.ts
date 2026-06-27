// Tous les paramètres fiscaux du projet sont centralisés ici.
// RÈGLE NON NÉGOCIABLE (CLAUDE.md §2/§4) : aucune valeur fiscale en dur dans un
// composant. Chaque valeur porte obligatoirement son `millesime` + sa `source`
// officielle, vérifiée en ligne et datée. Jamais de chiffre de mémoire.
//
// Session #1 : Télétravail.
// Session #2 (SESSION_TASKS-02.md) : CMU frontalier, droit d'option, quasi-résident.
//   ⚠️ cmuFrontalier.abattementAnnee reste `null` (chiffre officiel non confirmé,
//   cf. dossier/03) → tant qu'il est null, ne JAMAIS afficher de cotisation CMU en €.
// Session #4 (SESSION_TASKS-04.md) : charges sociales salarié CH, taux de change.
//   ⚠️ tauxChangeIndicatif.chfEur reste `null` (jamais de change figé en dur, §4)
//   → le taux est saisi par l'utilisateur tant qu'Abi n'a pas pré-rempli une valeur datée.

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

  cmuFrontalier: {
    taux: 0.08, // 8 % — CONFIRMÉ officiel (haute-savoie.gouv.fr, MAJ 20/08/2025)
    // Cotisation = (Revenus N-2 − abattement forfaitaire) × 8 %. Prorata : × jours travaillés/365 si année partielle.
    millesime: "Cotisations 2026 calculées sur revenus 2024.",
    source:
      "https://www.haute-savoie.gouv.fr/Demarches/Frontaliers-franco-suisses/Cotisations-maladie/Montant-de-votre-cotisation",
    simulateurOfficiel: "https://www.dcl.urssaf.fr/messagerie/SimulateurDirect.action",

    // ⚠️ L'abattement est UN nombre officiel par an (= 25 % d'un PASS, mais l'année de PASS référencée
    // est ambiguë même dans les exemples officiels → NE PAS le recalculer soi-même).
    // À saisir manuellement depuis le simulateur URSSAF / avis STFS, avec sa source. null tant que non confirmé.
    abattementAnnee: null as number | null, // ex. à remplir : { valeur: ____, annee: 2026, source: "..." }
  },

  droitOption: {
    delaiMois: 3, // délai pour exercer le droit d'option
    irrevocable: true,
    millesime: "Règle en vigueur 2026.",
    source:
      "https://www.ameli.fr/assure/droits-demarches/europe-international/travailleur-frontalier-suisse ; https://www.cleiss.fr/faq/droit_d_option_des_frontaliers_france-suisse.html",
  },

  quasiResident: {
    seuilRevenuSuisse: 0.9, // ≥ 90 % des revenus bruts mondiaux du foyer imposables en Suisse
    millesime: "Règle AFC Genève en vigueur 2026.",
    source:
      "https://www.ge.ch/demande-rectification-taxation-ordinaire-ulterieure/determiner-statut-quasi-resident",
    // ⚠️ Barème impôt source GE + calcul taxation ordinaire = NON vérifiés → pas de gain € en v1.
  },

  chargesSocialesCH: {
    // Part SALARIÉ, déduite du brut. Source : ahv-iv.ch mémento 2.01 ; bsv.admin.ch/fr/cotisations-apercu
    avsAiApg: 0.053, // 5,3 % (AVS 4,35 + AI 0,7 + APG 0,25), pas de plafond
    ac: 0.011, // 1,1 % assurance chômage (part salarié)
    acPlafondAnnuelCHF: 148200, // AC due jusqu'à 148 200 CHF/an ; au-delà : 0
    millesime: "Taux 2026.",
    source:
      "https://www.ahv-iv.ch/p/2.01.f ; https://www.bsv.admin.ch/fr/cotisations-apercu",
    // ⚠️ Traitement au-delà du plafond AC = 0 (contribution de solidarité supprimée) — À VÉRIFIER avant de l'afficher comme certain.
    // LPP (2e pilier) et AANP (accident non pro) = VARIABLES → saisie utilisateur, PAS de taux ici.
  },

  tauxChangeIndicatif: {
    chfEur: null as number | null, // ex. 1.06 — à renseigner depuis réf. BCE, avec date + source. null = champ vide, l'utilisateur saisit.
    date: "", // date du taux indicatif
    source: "https://www.ecb.europa.eu/ (taux de référence) — à confirmer",
  },
} as const;
