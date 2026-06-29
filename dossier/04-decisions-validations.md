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
- **2026-06-28 — CONFIRMÉ (web + aperçu reçu Gumroad)** : Gumroad débite **toujours en USD** au checkout. Avec un prix en €89, le reçu montrait « 89 » puis **$101,37** facturés → écart visible, casse-confiance.
- **2026-06-28 — DÉCISION : prix du kit fixé en USD à $89** (devise USD dans Gumroad), pour que l'acheteur voie « 89 » de bout en bout, sans saut 89→101. Site aligné sur **`89 $`** (au lieu de `89 €`) pour cohérence checkout. On teste Gumroad ainsi.
- **Déclencheur migration Stripe** (réserve) : si conversion faible / abandon à l'étape paiement → basculer le lien checkout vers Stripe (EUR natif). Le code n'a qu'à changer l'URL.

- **2026-06-27 — Infra en place** : domaine `monimpotfrontalier.fr` (OVH, DNS Vercel OK, vert), repo réel **`ectoplasma44-beep/ectoplasma44-beep-frontalier`** créé + connecté à Vercel, push #1 réussi (commit 79d6fe8, `origin/main..main` vide).

- **2026-06-28 — Kit Genève EN VENTE** : produit Gumroad publié (`monindemnite.gumroad.com/l/ytxpxi`, prix $89 USD), lien branché dans le site (commit e529ea3). Livrables : guide PDF 6 p. + tableur XLSX (test 90 %) + cover/thumbnail. Stamp PDF acheteur activé.

## Reste en attente (Abi)
- [ ] **Régler le prix Gumroad en USD $89** (sélecteur de devise) si pas déjà fait, + **test d'achat** pour valider la livraison des 2 fichiers.
- [ ] **Abattement CMU officiel** à saisir dans `parametres-fiscaux.ts` (depuis simulateur URSSAF) pour activer le chiffrage du calculateur Droit d'option.
- [ ] **Relecture humaine finale du guide** avant de pousser les ventes (§6, non délégable).
