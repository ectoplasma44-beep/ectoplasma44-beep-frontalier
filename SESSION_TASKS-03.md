# SESSION_TASKS.md — #3 Hub Genève (canton-modèle)

> Pour : Claude Code (Sonnet). Repo : `ectoplasma44-beep/ectoplasma44-beep-frontalier`. À exécuter APRÈS #2.
> Lire `CLAUDE.md`, `dossier/07-architecture-routes.md`, et surtout **`dossier/08-contenu-geneve.md`** (les textes exacts).
> Rappels durs : §3 (juridique), §4/§7 (aucun NOUVEAU chiffre fiscal — cette session est éditoriale), §5 (git).

## 0. Garde-fous
- **Cette session n'introduit AUCUN paramètre fiscal.** Tout chiffrage reste dans les calculateurs existants. Les pages canton sont du **contenu** + liens internes. Si un chiffre manque dans `dossier/08`, ne pas l'inventer.
- Mention légale (`<MentionLegale/>`) présente sur chaque page (footer global déjà en place + encadré « Important » sur le hub).
- Reprendre les textes **mot pour mot** depuis `dossier/08-contenu-geneve.md`.

## 1. Routes à créer
```
src/app/frontalier/geneve/page.tsx                  # HUB (cartes vers les 5 situations)
src/app/frontalier/geneve/impot-a-la-source/page.tsx
src/app/frontalier/geneve/quasi-resident/page.tsx
src/app/frontalier/geneve/teletravail/page.tsx
src/app/frontalier/geneve/assurance-maladie/page.tsx
src/app/frontalier/geneve/salaire-net/page.tsx
```
- Composant réutilisable suggéré : `src/components/PageCantonSituation.tsx` (titre, intro, corps, encadrés, CTA calculateur + `<BlocOffre/>`) → facilitera la **duplication aux autres cantons** (Vaud, Neuchâtel…).

## 2. Contenu
- Chaque page reprend `title`/`meta`/H1/corps/encadrés depuis `dossier/08`.
- **Liens internes obligatoires** (maillage) :
  - quasi-resident → calculateur `/calculateurs/quasi-resident-geneve` + `/assistance-declaration`.
  - teletravail → `/calculateurs/teletravail-frontalier-suisse` + produit.
  - assurance-maladie → `/calculateurs/droit-option-assurance-frontalier` + produit.
  - impot-a-la-source & salaire-net → produit + lien vers les calculateurs pertinents.
  - chaque page situation → retour vers le hub `/frontalier/geneve` (fil d'Ariane Accueil > Frontalier > Genève > [situation]).
- Le hub `/frontalier/geneve` est lié depuis la home et `/calculateurs`.

## 3. Encadrés spécifiques à ne pas oublier
- `quasi-resident` : encadré d'avertissement « pas automatiquement avantageux / taux conjoint » (texte dans `dossier/08`) — OBLIGATOIRE.
- `quasi-resident` : délai **31 mars année N+1**, demande irréversible.
- `assurance-maladie` : délai **3 mois**, irrévocable.
- `salaire-net` : page pédagogique SANS chiffre (calculateur C4 pas encore construit) — l'indiquer clairement.

## 4. SEO
- `metadata` (title/description) par page depuis `dossier/08`.
- Fil d'Ariane + `<nav>` cohérents. Pas de `sitemap` complexe pour l'instant (§10 anti-sur-ingénierie).

## 5. Vérifications / "terminé"
- [ ] 6 routes rendues, build OK (`npm run build`).
- [ ] Aucun nouveau paramètre dans `parametres-fiscaux.ts`.
- [ ] Tous les liens internes fonctionnent (calculateurs + produit + hub).
- [ ] Encadrés d'avertissement présents (quasi-résident, assurance).
- [ ] Mentions légales présentes.

## 6. Clôture git (OBLIGATOIRE — §5)
```
git add -A
git commit -m "hub Geneve : 6 pages canton x situation"
git push
git log origin/main..main --oneline   # doit renvoyer vide
```
