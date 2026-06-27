# SESSION_TASKS.md — #5 Comparatifs + FAQ

> Pour : Claude Code (Sonnet). Repo : `ectoplasma44-beep/ectoplasma44-beep-frontalier`. À exécuter APRÈS #4.
> Lire `CLAUDE.md`, `dossier/07-architecture-routes.md`, et **`dossier/09-contenu-comparatifs-faq.md`** (textes exacts).
> Rappels durs : §3 (juridique), §4/§7 (aucun NOUVEAU chiffre fiscal — session éditoriale), §5 (git).

## 0. Garde-fous
- **Aucun paramètre fiscal nouveau.** Contenu + liens internes uniquement. Reprendre les textes mot pour mot de `dossier/09`.
- Mention légale présente sur chaque page.
- Les comparatifs ne tranchent PAS « le moins cher » dans l'absolu : ils donnent les critères (prudence conseil financier).

## 1. Routes à créer
```
src/app/comparatifs/lamal-vs-cmu-frontalier/page.tsx
src/app/comparatifs/impot-source-vs-declaration/page.tsx
src/app/faq/page.tsx
```
- Réutiliser les composants existants (`Disclaimer`/`MentionLegale`, `BlocOffre`). Possible composant `Comparatif`/`TableauComparatif` si utile, mais pas de sur-ingénierie (§10).

## 2. Contenu (depuis `dossier/09`)
- `lamal-vs-cmu-frontalier` : tableau comparatif + encadré délai 3 mois irrévocable + CTA calculateur Droit d'option + produit. Affiliation = placeholder vide.
- `impot-source-vs-declaration` : point clé « pas un choix, ça dépend du canton » + les 2 régimes + quasi-résident (marge de manœuvre) + CTA hub Genève / calculateur quasi-résident + produit.
- `faq` : implémenter en **`FAQPage` (schema.org JSON-LD)** pour le SEO. Questions/réponses de `dossier/09`, courtes et sourcées.

## 3. Maillage (obligatoire)
- Comparatifs liés depuis : home, hub Genève (pages assurance-maladie & impot-a-la-source), calculateurs concernés.
- FAQ liée depuis le **footer global** + home.
- Chaque page → `<BlocOffre/>` produit.

## 4. SEO
- `metadata` (title/description) par page depuis `dossier/09`.
- FAQ : JSON-LD `FAQPage` valide.

## 5. "Terminé"
- [ ] 3 routes rendues, build OK.
- [ ] Aucun nouveau paramètre dans `parametres-fiscaux.ts`.
- [ ] JSON-LD FAQPage présent et valide.
- [ ] Liens internes + mentions légales OK.

## 6. Clôture git (OBLIGATOIRE — §5)
```
git add -A
git commit -m "comparatifs LAMal/CMU + source/declaration + FAQ"
git push
git log origin/main..main --oneline   # doit renvoyer vide
```
