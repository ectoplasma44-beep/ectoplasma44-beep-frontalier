# Projet Frontalier franco-suisse — CLAUDE.md

> Référence canonique du projet. À lire en premier par toute session Claude (stratégie) ou Claude Code (exécution).
> Dernière mise à jour : 2026-06-26.

## 1. En une phrase
Site d'assistance à la déclaration pour frontaliers franco-suisses : **outil gratuit (calculateurs) → trafic ultra-qualifié → produit payant (~89 €/saison) + affiliation (assurance maladie frontalier)**.

## 2. Stack & conventions
- Next.js / TypeScript / Tailwind / Vercel. Domaine OVH : **monimpotfrontalier.fr**. GitHub : `ectoplasma44-beep` — repo réel : **`ectoplasma44-beep/ectoplasma44-beep-frontalier`** (⚠️ pas `…/frontalier`).
- Tous les paramètres fiscaux centralisés dans `src/lib/parametres-fiscaux.ts` — **jamais en dur dans les composants**. Chaque valeur porte en commentaire son **millésime** et sa **source**.

## 3. Posture juridique — NON NÉGOCIABLE
On vend de l'**assistance / information / modèles / guides**, PAS du conseil fiscal réglementé.
- OUI : « assistance », « aide à la déclaration », « comprendre », « estimer », « modèles », « guide ».
- NON : « conseil fiscal personnalisé », « optimisation sur-mesure », « adapté à votre situation ».
- Mention obligatoire (footer + en-tête de chaque calculateur + produit) : *contenu informatif, ne se substitue pas à un conseil professionnel individualisé.*
- Les calculateurs renvoient une **« estimation indicative »**, jamais un « montant dû ».
Détail : `dossier/01-cadrage-juridique.md`.

## 4. RÈGLES DE VÉRIFICATION — le cœur du projet (§7 du brief)
Historique d'incidents de données fabriquées → risque maximal ici (fiscalité cantonale, millésimes, délais à conséquence lourde).
- **Aucun** taux, seuil, barème, plafond, délai, taux de change ou règle n'est écrit ou codé **sans source officielle vérifiée en ligne et datée**. Jamais de mémoire du modèle.
- Sources prioritaires : impots.gouv.fr, conventions franco-suisses, administrations cantonales (ge.ch, ne.ch…), ameli/URSSAF/CPAM/cleiss pour l'assurance maladie.
- Vérification **par canton** quand la règle est cantonale — ne jamais généraliser un régime cantonal.
- Donnée non vérifiable avec certitude → marquée **« À VÉRIFIER »**, jamais affirmée.
- Garde-fou systématique à implémenter : un contrôle bloque la rédaction/publication si la source manque.

## 5. Règle git (incident passé : commits jamais pushés → 404 silencieux)
Tout `SESSION_TASKS.md` pour Claude Code se termine par :
```
git push
git log origin/<branche>..<branche> --oneline   # doit renvoyer vide
```

## 6. Répartition des rôles
- **Claude (stratégie)** : valide l'archi, vérifie les données par canton, rédige le contenu, produit les `SESSION_TASKS.md`. Modèle Opus pour l'éditorial/vérif.
- **Claude Code** : scaffolding, routes par canton, calculateurs (logique dans `src/lib/`), blocs d'offre, liens d'affiliation. Sonnet.
- **Abi (non délégable)** : repo, domaine OVH, DNS/Vercel, comptes Gumroad/Stripe + Affilae/Kwanko, validation juridique, déploiement, relecture humaine finale de tout contenu fiscal.

## 7. Ordre de construction (principe de Débora : business d'abord)
1. Page produit / offre  2. Calculateurs  3. Pages canton × situation (longue traîne)  4. Comparaisons + FAQ  5. Articles de blog (en dernier).
Règle SEO : laisser un contenu **dormir 90 jours** avant de juger sa position. Un seul outil de data (Haloscan).

## 8. État d'avancement
- [x] Étape 1 — Cadrage juridique posé ET **validé par Abi le 2026-06-26** (`dossier/01`).
- [x] Étape 2 — Cartographie fiscale vérifiée et sourcée (`dossier/02`, `dossier/03`).
- [x] Pivot Genève confirmé par la data (`dossier/06`).
- [x] Étape 3 — 4 calculateurs arrêtés sur volumes Haloscan réels (`dossier/04`, `06`) : Télétravail (vitrine/trafic), Droit d'option (affiliation), Quasi-résident Genève (hook produit €89), Salaire net CHF→EUR.
- [x] Étape 4 — Archi des routes conçue (`dossier/07`) : produit + 4 calculateurs + hub Genève × situations + comparatifs/FAQ + blog.
- [x] Étape 5 — Build #1 (scaffolding + produit + Télétravail) déployé (commit 79d6fe8).
- [x] Étape 5 — Build #2 (calculateurs Droit d'option + Quasi-résident v1) déployé (commit 0ba4fab). 3 calculateurs en ligne, garde-fous §7 tenus.
- [x] Infra : domaine `monimpotfrontalier.fr` (vert), repo `ectoplasma44-beep/ectoplasma44-beep-frontalier` + Vercel connecté.
- [x] Hub Genève déployé (commit fca5555) : composant `PageCantonSituation` réutilisable + 6 pages (hub + 5 situations), `dossier/08`. Canton-modèle prêt à dupliquer.
- [ ] Étape 6 — Calculateur Salaire net CHF→EUR (C4) : **vérif préalable requise** (charges sociales suisses + taux de change, §4).
- [ ] Duplication du hub aux autres cantons (Vaud, Neuchâtel… selon volumes).
- [ ] Pré-requis Abi restants : produit Gumroad (vrai lien) ; abattement CMU officiel à saisir.

## 9. Déclencheur de lancement
Tant que **monindemnite.fr** n'a pas prouvé qu'un visiteur paie (test kit rupture conventionnelle), ce projet reste en **scaffolding / tâche de fond** (structure, vérif fiscale, choix calculateurs) — pas en lancement plein. Signal obtenu → priorité haute.

## 10. Ce qu'on NE fait PAS
Pas de conseil fiscal perso. Pas de growth hacking / réseaux sociaux. Pas de chiffre fiscal sans source. Pas de sur-ingénierie : on construit pour le signal et la duplication.
