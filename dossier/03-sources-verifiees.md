# 03 — Registre des sources vérifiées

> Toute donnée fiscale du projet doit pointer vers une entrée datée ici. Dernière vérif : 2026-06-26.
> Statut des sources : O = officielle/primaire · S = secondaire fiable (à recouper avant prod).

## Imposition / répartition par canton
- **[O] impots.gouv.fr — Accord avec la Suisse, travailleurs frontaliers (PDF 2117)**
  https://www.impots.gouv.fr/sites/default/files/media/10_conventions/suisse/suisse_accord-avec-la-suisse-travailleurs-frontaliers_fd_2117.pdf
  → 8 cantons de l'accord 1983 ; compensation 4,5 % ; Genève hors accord.
- **[O] ne.ch — Impôt à la source et frontaliers**
  https://www.ne.ch/themes/impots/impot-la-source-et-frontaliers/frontaliers
- **[S] Frontaliers Grand Est — statut frontalier (8 cantons)**
  https://frontaliers-grandest.eu/accueil/salaries/france-suisse/fiscalite/limposition-dans-les-cantons-de-vaud-valais-bale-bern-jura-neufchatel-soleure/le-statut-de-frontalier-en-suisse/

## Statut quasi-résident (Genève)
- **[O] ge.ch — Déterminer le statut de quasi-résident**
  https://www.ge.ch/demande-rectification-taxation-ordinaire-ulterieure/determiner-statut-quasi-resident
  → seuil 90 % revenus bruts mondiaux du foyer ; TOU ; déductions ; taux mondial.
- **[O] ge.ch — Demande de rectification / TOU (DRIS)**
  https://www.ge.ch/demande-rectification-taxation-ordinaire-ulterieure
  → **délai : 31 mars de l'année qui suit le prélèvement** ; demande **irréversible** une fois déposée ; dépôt via e-démarches.
- **[O] ge.ch — Calculette et barèmes de perception de l'impôt à la source** (barèmes A/B/C/G/H selon situation familiale, forfait frais pro + assurance intégré)
  https://www.ge.ch/impot-source/calculette-baremes-perception-impot-source ; https://www.ge.ch/document/baremes-2026-perception-impot-source

## Droit d'option assurance maladie
- **[O] ameli.fr — Travailleur frontalier suisse**
  https://www.ameli.fr/assure/droits-demarches/europe-international/travailleur-frontalier-suisse
- **[O] urssaf.fr — Choisir entre assurance maladie française ou suisse**
  https://www.urssaf.fr/en/accueil/particulier/travailleur-frontalier-suisse/assurance-maladie-france-suisse.html
- **[O] ge.ch — Droit d'option pour les frontaliers résidant en France**
  https://www.ge.ch/assurance-maladie-frontaliers-residant-france
- **[O] cleiss.fr — FAQ droit d'option frontaliers France-Suisse**
  https://www.cleiss.fr/faq/droit_d_option_des_frontaliers_france-suisse.html
  → délai 3 mois ; irrévocabilité ; LAMal par défaut ; suppression assurance privée 2014 (art. L.380-3-1 CSS).

## Télétravail
- **[O] economie.gouv.fr — Avenant à la convention fiscale bilatérale (télétravail)**
  https://www.economie.gouv.fr/suisse-france-signent-avenant-convention-fiscale-bilaterale
  → signé 27 juin 2023 ; 40 % ; transitoire depuis 01/01/2023 ; avenant applicable depuis 01/01/2026.
- **[O] ge.ch — Accords applicables au télétravail**
  https://www.ge.ch/imposition-du-teletravail-personnes-frontalieres/accords-applicables-au-teletravail

## Cotisation CMU / PUMA frontalier (droit d'option)
- **[O] urssaf.fr — Travailleur frontalier suisse : déclarer et payer vos cotisations**
  https://www.urssaf.fr/en/accueil/particulier/travailleur-frontalier-suisse/declarer-payer-cotisations.html
- **[O] haute-savoie.gouv.fr — Montant de votre cotisation (cotisations maladie frontaliers)**
  https://www.haute-savoie.gouv.fr/Demarches/Frontaliers-franco-suisses/Cotisations-maladie/Montant-de-votre-cotisation
- **Mécanisme (solide)** : cotisation = (RFR de l'année N-2 − abattement) × **8 %**. Assiette = RFR (tous revenus du foyer), pas seulement le salaire suisse. Déclaration URSSAF sept→~15 oct. Retard → majoration 10 %, pire cas assiette = 5× PASS.
- **PASS 2026 = 48 060 €** (PMSS 4 005 €) — arrêté du 22/12/2025, JO 23/12/2025. Source : service-public.gouv.fr / legisocial.
  - [S] https://www.service-public.gouv.fr/particuliers/actualites/A15386

### Règle CMU — CONFIRMÉE sur source officielle (haute-savoie.gouv.fr, MAJ 20/08/2025)
Citation officielle : « cotisation calculée par le STFS, sur revenus N-2, après **abattement forfaitaire = 25 % du PASS** revalorisé chaque année, **taux 8 %** ». Prorata si activité partielle : `(Revenus − abattement) × 8 % × jours travaillés / 365`.
- Source officielle (licence etalab) : https://www.haute-savoie.gouv.fr/Demarches/Frontaliers-franco-suisses/Cotisations-maladie/Montant-de-votre-cotisation
- Simulateur officiel URSSAF : https://www.dcl.urssaf.fr/messagerie/SimulateurDirect.action

### ⚠️ Le montant exact de l'abattement reste un paramètre à CONFIRMER chaque année
Les **exemples de la page officielle elle-même sont incohérents** sur l'année de PASS référencée :
- Ex. 1 (cotis. 2024) : abattement **10 284 €** = 25 % × **41 136 €** (PASS 2022, soit l'année N-2 des revenus).
- Ex. 2 (cotis. 2024) : abattement **10 998 €** = 25 % × **43 992 €** (PASS 2023).
→ Impossible de dériver l'abattement 2026 par déduction. **Conclusion §7 : ne pas calculer le 25 %×PASS soi-même.** L'abattement est **UN seul nombre par an**, à récupérer sur le simulateur officiel URSSAF / l'avis STFS, puis saisi dans `parametres-fiscaux.ts` (`abattementAnnee` + millésime + source). Tant qu'il n'est pas saisi → calculateur renvoie vers le simulateur URSSAF, n'invente aucun montant.
- (Les guides privés donnant 11 775 € ou 12 015 € sont des extrapolations non officielles → écartés.)

## Statut quasi-résident — calcul du gain (barème)
- Éligibilité (seuil 90 %) : **vérifiée** (ge.ch, ci-dessus).
- Mécanisme TOU **confirmé** (ge.ch) : l'AFC recalcule l'impôt « comme si résident » avec toutes les déductions, et **rembourse la différence**.
- Barèmes 2026 de perception à la source : **publiés** sur ge.ch.
  - https://www.ge.ch/document/baremes-2026-perception-impot-source
  - https://www.ge.ch/impot-source/calculette-baremes-perception-impot-source
- **MAIS chiffrer le gain € exige un moteur de taxation ordinaire GE complet (ICC cantonal + IFD fédéral + déductions)** — lourd et à fort risque d'erreur. **Décision (§10 anti-sur-ingénierie + §7) : on NE construit PAS ce moteur.** Le calculateur quasi-résident reste un outil d'**éligibilité + pédagogie** ; le **chiffrage personnalisé = rôle du produit €89** (ou renvoi vers la calculette officielle ge.ch). Pas de montant de gain fabriqué.
- Fourchette « 3 000–8 000 CHF » vue chez des courtiers = **secondaire, non officielle → ne pas l'afficher comme un chiffre du site.**

## À recouper sur source primaire avant publication
- Base légale du régime genevois (« accord 1973 ») et taux exact de rétrocession au fonds frontalier (Ain / Haute-Savoie).
- Taux de cotisation PUMA et primes LAMal de référence (millésime applicable).
- Barèmes d'impôt à la source par canton (millésime).
