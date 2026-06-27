# 04 — Décisions & validations en attente

> Journal des points qui bloquent le passage à l'étape suivante. Mis à jour : 2026-06-26.

## EN ATTENTE DE TOI (Abi) — bloque l'étape 3
1. **Posture juridique** — Valides-tu la ligne « assistance/information » + la mention de non-substitution (`dossier/01`) ?
2. **Pivot Genève** — OK pour acter que le calculateur phare quasi-résident est d'abord un play **Genève / imposition à la source** (et non les 8 cantons de l'accord 1983) ? Ça oriente toute l'archi SEO.
3. **Source de volumes** — Pour choisir les 4 calculateurs sur data réelle (ta règle, pas l'intuition), confirme l'outil : **Haloscan** recommandé dans le brief. Je n'ai pas accès à tes comptes → soit tu colles les volumes des mots-clés que je liste, soit tu me dis comment procéder.

## Pré-décidé par le brief (rappel)
- Calculateur phare = gain quasi-résident.
- 3 autres calculateurs à choisir sur volumes réels. Candidats issus de la vérif : comparaison source vs déclaration ; simulation CHF/EUR net ; coût assurance maladie selon droit d'option ; **télétravail 40 % (sujet frais, fort potentiel)**.
- Produit ~89 €/saison, bloc d'offre juste après le résultat du calcul.
- Affiliation = assurance maladie frontalier (Affilae/Kwanko), à re-vérifier avant intégration.

## Prochaine étape une fois validé
→ Étape 3 : arrêter les 4 calculateurs sur volumes.
→ Étape 4 : archi des routes (canton × situation) + ordre business → articles.
→ Étape 5 : 1er `SESSION_TASKS.md` (scaffolding + calculateur phare) pour Claude Code, terminé par le bloc git de contrôle.

## Décisions prises
- **2026-06-26 — Pivot Genève confirmé** par la data Haloscan (télétravail frontalier genève 1300 vs suisse 110, etc.). On construit Genève-first.
- **2026-06-26 — Les 4 calculateurs sont arrêtés** (sur volumes réels, `dossier/06`) :
  1. **Télétravail Genève/Suisse** — calculateur vitrine / moteur de trafic (KGR 0,92, gros cluster, croissance).
  2. **Droit d'option / coût LAMal vs CMU** — placement affiliation assurance (CPC 11,83 $).
  3. **Quasi-résident Genève** — hook produit €89 (haute intention, faible volume → page dédiée, pas la home).
  4. **Salaire net CHF→EUR** — entrée large evergreen.
- **2026-06-26 — Rôle du quasi-résident requalifié** : reste le « phare » côté *produit/conversion*, mais le *phare trafic* affiché en home est le **télétravail**.

- **2026-06-26 — Posture juridique VALIDÉE** par Abi (`dossier/01`).
- **2026-06-26 — Domaine retenu : `monimpotfrontalier.fr`** (dispo confirmée OVH par Abi). Prolonge le schéma `mon` (monindemnité/monchômage) + capte le mot-clé central « impôt frontalier ».

- **2026-06-26 — Checkout : Gumroad** (cohérence avec monindemnite). Frein connu : page de paiement en **anglais / USD** → friction de conversion possible. Arbitrage assumé « signal d'abord ». **À réévaluer avec la data** (taux de conversion réel) ; migration Stripe possible ensuite.

## Reste en attente (Abi)
- [ ] **Achat du domaine `monimpotfrontalier.fr`** sur OVH + config DNS/Vercel.
- [ ] **Création du repo** `ectoplasma44-beep/frontalier` (non délégable).
- [ ] **Lien produit Gumroad** à créer + coller dans la page produit (placeholder en attendant).
