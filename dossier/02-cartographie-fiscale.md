# 02 — Cartographie fiscale franco-suisse (étape 2)

> Statut : vérifié en ligne, sourcé et daté. **En attente de validation Abi avant tout build.**
> Date de vérification : 2026-06-26. Sources détaillées : `dossier/03-sources-verifiees.md`.
> ⚠️ Cette cartographie est le **régime de haut niveau**. Les barèmes et seuils chiffrés exacts par canton restent à re-vérifier au moment de coder chaque calculateur/page (règle §7).

## La fracture centrale : accord 1983 (impôt en France) vs imposition à la source (Suisse)

### A. Les 8 cantons de l'accord du 11 avril 1983 → imposition EN FRANCE
**Berne, Soleure, Bâle-Ville, Bâle-Campagne, Vaud, Valais, Neuchâtel, Jura.**
- Le salaire n'est imposable **que dans l'État de résidence** (France).
- Compensation : la Suisse verse à la France **4,5 %** de la masse salariale brute annuelle des frontaliers.
- Le frontalier perçoit un salaire (sous conditions, pas de retenue à la source suisse) et **déclare en France**.
- Condition de statut : être frontalier au sens de l'accord (retour au domicile, attestation de résidence). **À VÉRIFIER** : conditions exactes de retour quotidien / zone.
- Millésime : accord de 1983, **en vigueur en 2026**.

### B. Genève (HORS accord 1983) → imposition À LA SOURCE en Suisse
- Genève prélève l'impôt à la source sur le salaire du frontalier résidant en France.
- Rétrocession aux départements de l'**Ain et de la Haute-Savoie** (fonds frontalier, ~3,5 % de la masse salariale brute).
- Mécanisme de correction possible côté contribuable : **statut quasi-résident** (voir plus bas).
- **À VÉRIFIER** : base légale primaire exacte du régime genevois (souvent cité « accord de 1973 » dans les sources secondaires — confirmer sur source primaire).

### ⚠️ Zone grise à cartographier avant rédaction
Un frontalier des 8 cantons qui **ne rentre pas quotidiennement** à son domicile peut **perdre** le statut fiscal de frontalier de l'accord 1983 et basculer en **imposition à la source suisse**. Cette frontière conditionne **qui est concerné par le calculateur quasi-résident**. → À cartographier finement (situation × canton) avant d'écrire les pages.

## Statut quasi-résident (calculateur phare)
- Pour un contribuable **imposé à la source** résidant à l'étranger.
- Condition : **≥ 90 % des revenus bruts mondiaux du foyer** imposables en Suisse (couple : total des deux conjoints).
- Effet : demande de **taxation ordinaire ultérieure (TOU)** → déductions supplémentaires (frais kilométriques, intérêts d'emprunt, frais d'assurance maladie…).
- **Piège à modéliser** : pas automatiquement avantageux. Les revenus du conjoint en France ne sont pas réimposés mais comptent pour le **taux mondial** → un conjoint bien payé en France peut annuler le bénéfice. Le calculateur DOIT intégrer ça.

### 🔑 Correction stratégique
Le quasi-résident est essentiellement un mécanisme **genevois / imposition à la source**, PAS pour les 8 cantons (déjà imposés en France).
→ **Le calculateur phare est d'abord un play Genève (et cas assimilés à la source).** Impact direct sur l'archi SEO et le ciblage. À acter par Abi (`dossier/04`).

## Droit d'option assurance maladie (cœur de l'affiliation — vérification renforcée)
- Au début de l'activité en Suisse, choix du régime maladie. **Délai strict : 3 mois.**
- À défaut → affiliation **automatique et définitive à la LAMal** (suisse).
- Choix **irrévocable** en principe (rares « motifs de réouverture » légaux).
- Deux options aujourd'hui :
  - **LAMal** (suisse) : prime fixe par adulte, libre choix de la caisse.
  - **PUMA / ex-CMU** (français) : cotisation assise sur le revenu fiscal de référence (~8 % — **À VÉRIFIER** taux/millésime exact).
- L'**assurance privée** française comme 3ᵉ voie a été **supprimée en 2014** (art. L.380-3-1 CSS).
- ⚠️ **Vérification renforcée obligatoire** : aucun taux/plafond/délai chiffré en prod sans re-vérification datée (ameli/URSSAF/cleiss). Contenu le plus à risque (délais à conséquence lourde) → c'est aussi là que vit l'affiliation courtiers.

## Évolution récente à intégrer : télétravail 40 %
- Avenant franco-suisse signé le **27 juin 2023** : jusqu'à **40 % du temps de travail annuel en télétravail** sans changement de l'État d'imposition.
- Appliqué à titre transitoire depuis le **1ᵉʳ janvier 2023** ; avenant à la convention **applicable depuis le 1ᵉʳ janvier 2026**.
- Échange automatique de données salariales entre États instauré.
- → Intention de recherche fraîche et mal comprise = **candidat sérieux** pour un des 3 autres calculateurs (« combien de jours de télétravail sans perdre mon régime ? »).

## Liste des points « À VÉRIFIER » avant rédaction des pages canton
1. Base légale primaire du régime genevois (« 1973 »).
2. Conditions exactes du statut frontalier de l'accord 1983 (retour quotidien / zone).
3. Bascule source-tax pour non-retour quotidien dans les 8 cantons (par canton).
4. Existence d'un quasi-résident hors Genève (Vaud non-frontaliers, etc.).
5. Barèmes d'impôt à la source par canton + millésime.
6. Taux/plafond PUMA et primes LAMal de référence, millésime.
7. Modalités précises et délais de réouverture du droit d'option.
