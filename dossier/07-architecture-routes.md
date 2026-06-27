# 07 — Architecture des routes (étape 4)

> Next.js App Router. Genève-first, business d'abord (§7 du CLAUDE.md), construit pour la duplication.
> Date : 2026-06-26. Domaine OVH à définir (Abi).

## Principe directeur
Chaque calculateur est une **landing autonome** (entrée SEO + hook). Son résultat débouche sur un **bloc d'offre** vers le produit €89. Les **pages canton × situation** captent la longue traîne et renvoient vers le calculateur pertinent + le produit. Articles de blog en dernier.

## Arborescence cible

```
/                                   Home — vitrine. Met en avant le calculateur Télétravail
                                     (moteur de trafic) + accès aux 4 calculateurs.

/calculateurs/                       Index des 4 outils
  /teletravail-frontalier-suisse     [C1] Vitrine/trafic — "combien de jours sans changer de régime"
  /quasi-resident-geneve             [C2] Hook produit €89 — gain d'une taxation au réel (TOU)
  /droit-option-assurance-frontalier [C3] Affiliation — LAMal vs CMU, coût + délai 3 mois
  /salaire-net-frontalier-suisse     [C4] Evergreen — conversion CHF→EUR, net après impôt/charges

/assistance-declaration/             PRODUIT €89 — page offre (le cœur qui vend)
                                     Checkout Gumroad/Stripe. Bloc d'offre dupliqué en fin de chaque calculateur.

/frontalier/                         Hub cantons
  /geneve/                           HUB GENÈVE (priorité 1, source-tax)
    /quasi-resident                  situation × canton
    /teletravail
    /impot-a-la-source               (vs déclaration)
    /assurance-maladie               (droit d'option)
    /salaire-net
  /vaud/        (accord 1983 → imposition France)
  /neuchatel/   (accord 1983)
  /jura/        (accord 1983)
  /valais/      (accord 1983)
  /berne/       (accord 1983)
  /bale-ville/  (accord 1983)
  /bale-campagne/ (accord 1983)
  /soleure/     (accord 1983)

/comparatifs/
  /lamal-vs-cmu-frontalier           comparaison (intention décision assurance)
  /impot-source-vs-declaration       comparaison (gros générique 1102)

/faq/                                FAQ structurée (schema FAQPage)

/blog/                               EN DERNIER — volume & équilibrage, pas conversion
```

## Situations par type de canton
- **Genève (source)** : quasi-résident, télétravail, impôt à la source, assurance (droit d'option), salaire net.
- **8 cantons accord 1983 (imposition France)** : déclaration en France, télétravail, assurance (droit d'option), salaire net. **Pas** de quasi-résident en standard (déjà imposé en France) — sauf cas non-retour quotidien (`dossier/02`, à cartographier).

## Ordre de build (business d'abord, duplication ensuite)
1. **Produit** `/assistance-declaration` (l'offre) + bloc d'offre réutilisable.
2. **Calculateur C1 Télétravail** (trafic, ranking facile) — 1er livré.
3. **Calculateurs C2 Quasi-résident Genève, C3 Droit d'option, C4 Salaire net.**
4. **Hub Genève complet** (5 situations) — le canton-modèle à dupliquer.
5. **Duplication cantons** : prioriser par volume frontalier réel. **À VÉRIFIER sur Haloscan par canton** ; hypothèse de départ : Genève > Vaud > Neuchâtel > Jura > Valais > Berne > Bâle > Soleure.
6. **Comparatifs + FAQ.**
7. **Blog** en dernier.

## Maillage interne (règles)
- Chaque page canton×situation → lien vers le calculateur correspondant + vers `/assistance-declaration`.
- Chaque calculateur → bloc d'offre produit après le résultat + liens vers les pages canton concernées.
- `/droit-option-assurance-frontalier` et `/comparatifs/lamal-vs-cmu` → emplacements **affiliation** assurance (à activer après vérif Affilae/Kwanko).
- Fil d'Ariane : Accueil > Frontalier > [Canton] > [Situation].

## Conventions techniques (rappel pour Claude Code)
- Slugs en minuscules sans accent, mots séparés par `-`.
- Pages canton générées via segment dynamique `app/frontalier/[canton]/[situation]/page.tsx` + data statique par canton.
- **Zéro paramètre fiscal en dur** : tout vient de `src/lib/parametres-fiscaux.ts` (millésime + source en commentaire).
- Mention légale (`dossier/01`) dans le footer global + en-tête de chaque calculateur.
- Chaque résultat = « estimation indicative ».

## À trancher (Abi)
- [ ] Nom de domaine OVH (ex. frontalier-suisse-impots.fr, declaration-frontalier.fr… à choisir).
- [ ] Plateforme checkout : Gumroad ou Stripe.
- [ ] Slug définitif de la page produit (`/assistance-declaration` proposé).
