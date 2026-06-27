# SESSION_TASKS.md — #1 Scaffolding + Produit + Calculateur Télétravail

> Pour : Claude Code (Sonnet). Repo : `ectoplasma44-beep/frontalier`. Domaine cible : `monimpotfrontalier.fr`.
> Lire d'abord `CLAUDE.md` (racine) et `dossier/07-architecture-routes.md`. Respecter §3 (juridique), §4 (vérification), §5 (git).
> Objectif de cette session : un site déployable sur Vercel avec la home, la page produit, et le 1er calculateur fonctionnel.

## 0. Garde-fous NON NÉGOCIABLES
- **Aucun paramètre fiscal en dur dans un composant.** Tout vit dans `src/lib/parametres-fiscaux.ts`, avec `millesime` + `source` en commentaire.
- **Aucun chiffre fiscal ajouté qui ne soit pas dans ce fichier de tâches** (déjà vérifié et sourcé). Si une valeur manque → ne pas l'inventer, laisser un `// TODO À VÉRIFIER` et ne pas l'afficher.
- **Mention légale** (texte ci-dessous) dans le footer global ET en en-tête de chaque calculateur.
- Résultats de calcul = toujours libellés **« estimation indicative »**.

## 1. Scaffolding
```
npx create-next-app@latest . --typescript --tailwind --app --eslint --src-dir --import-alias "@/*"
```
- Structure attendue :
```
src/app/
  layout.tsx              # header + footer + mention légale globale
  page.tsx                # HOME (vitrine : met en avant le calculateur Télétravail)
  calculateurs/
    page.tsx              # index des 4 outils (3 en "bientôt", Télétravail actif)
    teletravail-frontalier-suisse/page.tsx
  assistance-declaration/page.tsx   # PAGE PRODUIT
src/lib/
  parametres-fiscaux.ts
  calc-teletravail.ts     # logique pure, testable
src/components/
  MentionLegale.tsx
  BlocOffre.tsx           # CTA produit réutilisable
  Disclaimer.tsx          # en-tête "estimation indicative"
```

## 2. `src/lib/parametres-fiscaux.ts` (valeurs vérifiées le 2026-06-26)
```ts
// Tous les paramètres fiscaux centralisés. millésime + source obligatoires.
export const PARAMS = {
  teletravail: {
    // Seuil FISCAL de télétravail sans changement de l'État d'imposition.
    seuilFiscal: 0.40, // 40 % du temps de travail annuel
    millesime: "Avenant franco-suisse signé le 27/06/2023 ; appliqué à titre transitoire depuis le 01/01/2023 ; avenant à la convention applicable depuis le 01/01/2026.",
    source: "https://www.economie.gouv.fr/suisse-france-signent-avenant-convention-fiscale-bilaterale ; https://www.ge.ch/imposition-du-teletravail-personnes-frontalieres/accords-applicables-au-teletravail",
    // ⚠️ NE PAS confondre avec le seuil de SÉCURITÉ SOCIALE (affiliation), qui est DISTINCT.
    // seuilSecuriteSociale: À VÉRIFIER — ne pas coder ni afficher tant que non sourcé.
  },
} as const;
```

## 3. Calculateur Télétravail — `src/lib/calc-teletravail.ts`
Logique pure (à tester) :
- **Entrées** : `joursTravaillesParAn` (number). Proposer un sélecteur pratique : 4 j/sem ≈ 200 j, 4,5 j/sem ≈ 220 j, 5 j/sem ≈ 230 j — OU saisie libre. (Ces équivalences sont des hypothèses de confort utilisateur, PAS des paramètres fiscaux ; le seul paramètre fiscal est le 40 %.)
- **Sortie** : `joursTeletravailMax = Math.floor(joursTravaillesParAn * PARAMS.teletravail.seuilFiscal)` + équivalent en jours/semaine.
- **Périmètre à afficher clairement** : ce calcul porte sur **l'imposition** uniquement. Mentionner que les règles de **sécurité sociale / affiliation** ont leur propre seuil, distinct, et renvoyer vers le calculateur Droit d'option (à venir).
- Cas particulier 8 cantons de l'accord 1983 vs Genève : le périmètre exact du seuil peut différer selon le canton → afficher un avertissement « vérifiez votre canton » et lien vers la page canton (à venir). Ne pas sur-spécifier tant que la cartographie canton n'est pas codée.

### UI de la page calculateur
- En-tête : titre + `<Disclaimer/>` (« estimation indicative, ne se substitue pas à un conseil professionnel »).
- Formulaire simple → résultat → **`<BlocOffre/>`** (CTA vers `/assistance-declaration`).
- SEO : `title`/`meta` ciblant « télétravail frontalier suisse » ; H1 explicite.

## 4. Page produit — `src/app/assistance-declaration/page.tsx`
- Présente le kit d'assistance à la déclaration (~89 €/saison).
- CTA = lien Gumroad. **Placeholder** `const GUMROAD_URL = "https://gumroad.com/l/PLACEHOLDER"` (Abi fournira le vrai lien).
- Reprendre la sémantique §3 : « assistance / aide / modèles / guide », jamais « conseil personnalisé ».
- Inclure la mention légale.

## 5. Mention légale (texte exact)
> « Contenu informatif et outil d'aide à la déclaration. Ne constitue pas un conseil fiscal, juridique ou comptable individualisé et ne se substitue pas à l'avis d'un professionnel réglementé. Les paramètres fiscaux sont donnés à titre indicatif ; vérifiez votre situation auprès de l'administration compétente. »

## 6. Tests
- Test unitaire `calc-teletravail` : 230 j → 92 j ; 220 j → 88 j ; 200 j → 80 j.
- `npm run build` doit passer sans erreur.

## 7. Définition de "terminé"
- [ ] `npm run build` OK.
- [ ] Home + /calculateurs + /calculateurs/teletravail-frontalier-suisse + /assistance-declaration rendus.
- [ ] Aucun paramètre fiscal hors `parametres-fiscaux.ts`.
- [ ] Mention légale présente (footer + en-tête calculateur).
- [ ] Test calc-teletravail vert.

## 8. Clôture git (OBLIGATOIRE — §5)
```
git add -A
git commit -m "scaffolding + page produit + calculateur teletravail"
git push
git log origin/main..main --oneline   # doit renvoyer vide
```
