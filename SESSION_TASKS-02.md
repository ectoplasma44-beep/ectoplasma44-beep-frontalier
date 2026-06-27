# SESSION_TASKS.md — #2 Calculateurs Droit d'option + Quasi-résident (v1)

> Pour : Claude Code (Sonnet). Repo : `ectoplasma44-beep/ectoplasma44-beep-frontalier`. À exécuter APRÈS #1 (scaffolding).
> Lire `CLAUDE.md`, `dossier/02-cartographie-fiscale.md`, `dossier/03-sources-verifiees.md`, `dossier/07-architecture-routes.md`.
> Rappels durs : §3 (juridique), §4/§7 (aucun chiffre fiscal non sourcé, sinon `À VÉRIFIER` non affiché), §5 (git).

## 0. Garde-fous (identiques à #1)
- Tous les paramètres dans `src/lib/parametres-fiscaux.ts` (millésime + source).
- Mention légale + en-tête « estimation indicative » sur chaque calculateur.
- **Interdit d'inventer un chiffre.** Si une valeur est marquée `À VÉRIFIER` ci-dessous → ne pas l'afficher en euros, afficher un message « donnée en cours de vérification » à la place.

## 1. Ajouts à `parametres-fiscaux.ts`
```ts
export const PARAMS = {
  // ... (teletravail déjà présent)

  cmuFrontalier: {
    taux: 0.08, // 8 % — CONFIRMÉ officiel (haute-savoie.gouv.fr, MAJ 20/08/2025)
    // Cotisation = (Revenus N-2 − abattement forfaitaire) × 8 %. Prorata : × jours travaillés/365 si année partielle.
    millesime: "Cotisations 2026 calculées sur revenus 2024.",
    source: "https://www.haute-savoie.gouv.fr/Demarches/Frontaliers-franco-suisses/Cotisations-maladie/Montant-de-votre-cotisation",
    simulateurOfficiel: "https://www.dcl.urssaf.fr/messagerie/SimulateurDirect.action",

    // ⚠️ L'abattement est UN nombre officiel par an (= 25 % d'un PASS, mais l'année de PASS référencée
    // est ambiguë même dans les exemples officiels → NE PAS le recalculer soi-même).
    // À saisir manuellement depuis le simulateur URSSAF / avis STFS, avec sa source. null tant que non confirmé.
    abattementAnnee: null as number | null,   // ex. à remplir : { valeur: ____, annee: 2026, source: "..." }
  },

  droitOption: {
    delaiMois: 3, // délai pour exercer le droit d'option
    irrevocable: true,
    millesime: "Règle en vigueur 2026.",
    source: "https://www.ameli.fr/.../travailleur-frontalier-suisse ; https://www.cleiss.fr/faq/droit_d_option_des_frontaliers_france-suisse.html",
  },

  quasiResident: {
    seuilRevenuSuisse: 0.90, // ≥ 90 % des revenus bruts mondiaux du foyer imposables en Suisse
    millesime: "Règle AFC Genève en vigueur 2026.",
    source: "https://www.ge.ch/demande-rectification-taxation-ordinaire-ulterieure/determiner-statut-quasi-resident",
    // ⚠️ Barème impôt source GE + calcul taxation ordinaire = NON vérifiés → pas de gain € en v1.
  },
} as const;
```

## 2. Calculateur Droit d'option — `/calculateurs/droit-option-assurance-frontalier`
**But** : comparer le coût annuel CMU (régime français) vs LAMal (régime suisse), + rappeler le délai 3 mois.

- `src/lib/calc-droit-option.ts` (pur, testé) :
  - **CMU** : `cotisationCMU = Math.max(0, (revenusN2 - abattement)) * PARAMS.cmuFrontalier.taux`.
    - ⚠️ Si `PARAMS.cmuFrontalier.abattementAnnee === null` → **ne pas calculer**. Afficher la formule officielle + un lien vers le **simulateur officiel URSSAF** (`PARAMS.cmuFrontalier.simulateurOfficiel`). (Garde-fou §7 : jamais de montant inventé.)
  - **LAMal** : pas de formule unique (prime fixe par assureur/âge/canton). → l'utilisateur **saisit sa prime mensuelle estimée** (champ libre) ; `coutLAMal = primeMensuelle * 12`.
  - Sortie : les deux coûts annuels + « lequel est le moins cher pour vous » + **rappel encadré du délai 3 mois irrévocable**.
- UI :
  - En-tête `<Disclaimer/>`.
  - Encadré rouge/alerte : « Délai de 3 mois, choix irrévocable » (PARAMS.droitOption).
  - **Emplacement affiliation** : sous le résultat, bloc « Comparer les offres LAMal / courtiers » → liens d'affiliation **désactivés/placeholder** tant que les programmes Affilae/Kwanko ne sont pas vérifiés (cf. `dossier`). Mettre `AFFILIATE_LINKS = []` et un commentaire `// TODO vérifier programmes avant activation`.
  - `<BlocOffre/>` produit.
  - SEO : cible « droit d'option frontalier », « lamal ou cmu ».

## 3. Calculateur Quasi-résident Genève v1 — `/calculateurs/quasi-resident-geneve`
**But v1** : test d'éligibilité + pédagogie des déductions. **Pas de chiffrage € du gain** (barème GE non vérifié).

- `src/lib/calc-quasi-resident.ts` (pur, testé) :
  - Entrées : `revenusBrutsSuisse`, `revenusBrutsMondiauxFoyer` (inclut conjoint).
  - `partSuisse = revenusBrutsSuisse / revenusBrutsMondiauxFoyer`.
  - `eligible = partSuisse >= PARAMS.quasiResident.seuilRevenuSuisse`.
  - Sortie : éligible oui/non + message.
- UI :
  - Si éligible : liste pédagogique des **déductions activables** via la TOU (frais kilométriques, intérêts d'emprunt, frais d'assurance maladie, etc. — formulé « peuvent inclure », pas de montant).
  - **Avertissement clé** (vérifié, `dossier/02`) : « Le statut n'est pas automatiquement avantageux : les revenus du conjoint en France comptent pour le taux. » → afficher systématiquement.
  - **Pas de chiffrage € du gain** : décision actée (`dossier/03`) de NE PAS coder un moteur de taxation ordinaire GE (lourd + risqué, §7/§10). À la place : renvoyer vers la **calculette officielle ge.ch** pour l'impôt à la source, et positionner le **produit €89** comme l'outil qui fait le calcul personnalisé. `<BlocOffre/>` produit juste après le résultat d'éligibilité.
  - Ne PAS afficher de fourchette type « 3 000–8 000 CHF » (source courtier non officielle).
  - SEO : cible « quasi résident genève ».

## 4. Mettre à jour `/calculateurs` (index)
- Passer Télétravail, Droit d'option, Quasi-résident en **actifs** ; Salaire net reste « bientôt ».

## 5. Tests
- `calc-droit-option` : avec un abattement de test injecté = 10 000 et revenus 50 000 → CMU = (50 000−10 000)×8 % = 3 200 ; primeMensuelle 350 → LAMal = 4 200 ; min = CMU. (Valeur de test uniquement — en prod `abattementAnnee` reste null jusqu'à confirmation officielle.)
- `calc-droit-option` : si `abattementAnnee = null` → renvoie un statut « indisponible » + lien simulateur URSSAF, jamais un nombre.
- `calc-quasi-resident` : 100 000 / 100 000 → éligible ; 80 000 / 100 000 → non éligible ; couple 90 000 / 100 000 → éligible.
- `npm run build` OK.

## 6. Définition de "terminé"
- [ ] Les 2 calculateurs rendus + index à jour.
- [ ] Aucun chiffre `À VÉRIFIER` affiché en euros (abattement CMU, gain quasi-résident).
- [ ] Avertissements obligatoires présents (délai 3 mois ; taux conjoint quasi-résident).
- [ ] Liens d'affiliation = placeholder vide.
- [ ] Tests verts.

## 7. Clôture git (OBLIGATOIRE — §5)
```
git add -A
git commit -m "calculateurs droit-option + quasi-resident v1"
git push
git log origin/main..main --oneline   # doit renvoyer vide
```
