# SESSION_TASKS.md — #4 Calculateur Salaire net CHF→EUR (C4)

> Pour : Claude Code (Sonnet). Repo : `ectoplasma44-beep/ectoplasma44-beep-frontalier`. À exécuter APRÈS #3.
> Lire `CLAUDE.md`, `dossier/03-sources-verifiees.md` (section « Charges sociales salarié suisses »), `dossier/07`.
> Rappels durs : §3 (juridique), §4/§7 (taux sourcés, change jamais figé en dur), §5 (git).

## 0. Périmètre validé (Abi)
- Le « net » = **net après charges sociales suisses**, AVANT impôt à la source. (On ne reconstruit PAS le barème fiscal → renvoyer vers `/frontalier/geneve/impot-a-la-source`.)
- Taux de change CHF→EUR = **saisi par l'utilisateur**, pré-rempli avec une valeur indicative datée + sourcée.

## 1. Ajouts à `parametres-fiscaux.ts` (valeurs vérifiées 2026, source officielle)
```ts
export const PARAMS = {
  // ... existant ...

  chargesSocialesCH: {
    // Part SALARIÉ, déduite du brut. Source : ahv-iv.ch mémento 2.01 ; bsv.admin.ch/fr/cotisations-apercu
    avsAiApg: 0.053,          // 5,3 % (AVS 4,35 + AI 0,7 + APG 0,25), pas de plafond
    ac: 0.011,               // 1,1 % assurance chômage (part salarié)
    acPlafondAnnuelCHF: 148200, // AC due jusqu'à 148 200 CHF/an ; au-delà : 0
    millesime: "Taux 2026.",
    source: "https://www.ahv-iv.ch/p/2.01.f ; https://www.bsv.admin.ch/fr/cotisations-apercu",
    // ⚠️ Traitement au-delà du plafond AC = 0 (contribution de solidarité supprimée) — À VÉRIFIER avant de l'afficher comme certain.
    // LPP (2e pilier) et AANP (accident non pro) = VARIABLES → saisie utilisateur, PAS de taux ici.
  },

  tauxChangeIndicatif: {
    chfEur: null as number | null, // ex. 1.06 — à renseigner depuis réf. BCE, avec date + source. null = champ vide, l'utilisateur saisit.
    date: "",                       // date du taux indicatif
    source: "https://www.ecb.europa.eu/ (taux de référence) — à confirmer",
  },
} as const;
```
> Abi : renseigne `chfEur` + `date` depuis le taux de référence BCE quand tu veux un pré-remplissage ; sinon le champ reste à saisir par l'utilisateur (parfaitement OK).

## 2. Logique pure — `src/lib/calc-salaire-net.ts` (testable)
- **Entrées** : `brutMensuelCHF` (ou annuel), `tauxChange` (CHF→EUR, saisi), optionnels `lppTauxOuMontant`, `aanpTaux` (défaut 0).
- **Calcul** (raisonner en annuel pour le plafond AC, puis reproratiser si mensuel) :
  - `avsAiApg = brut * 0.053`
  - `ac = min(brutAnnuel, 148200) * 0.011` (proratisé au mois si saisie mensuelle)
  - `lpp` et `aanp` = depuis saisie utilisateur (0 si non renseigné)
  - `netSocialCHF = brut - avsAiApg - ac - lpp - aanp`
  - `netEUR = netSocialCHF * tauxChange`
- **Sortie** : détail des déductions + net social CHF + net EUR.
- Si `tauxChange` non renseigné → afficher le net CHF, et pour l'EUR demander la saisie du taux (pas de conversion fantôme).

## 3. UI — `/calculateurs/salaire-net-frontalier-suisse`
- En-tête `<Disclaimer/>` (« estimation indicative »).
- Champs : brut CHF, taux de change (pré-rempli si param dispo, sinon vide, toujours éditable — libellé « taux indicatif au [date], ajustez avec votre taux réel »), + champs optionnels LPP / AANP avec aide « varie selon votre plan/employeur ».
- Résultat : tableau des déductions + net social CHF + net EUR.
- **Encadré périmètre (obligatoire)** : « Ce montant est net de charges sociales, **avant impôt à la source**. Pour la part fiscale, voir » → lien `/frontalier/geneve/impot-a-la-source`.
- `<BlocOffre/>` produit.
- SEO : cible « salaire net frontalier suisse », « calcul salaire net suisse frontalier ».

## 4. Mises à jour de liens
- `/calculateurs` : passer **Salaire net** de « Bientôt » à actif (les 4 calculateurs sont désormais en ligne).
- `/frontalier/geneve/salaire-net` : remplacer la page pédagogique sans chiffre par un lien/CTA vers le calculateur Salaire net.

## 5. Tests
- `calc-salaire-net` : brut 8000 CHF/mois, taux 1.06, sans LPP/AANP → AVS/AI/APG 424 ; AC 88 (8000×0,011, sous plafond) ; net social 7488 CHF ; net EUR 7937,28.
- Plafond AC : brut annuel 200 000 → AC = 148 200 × 0,011 = 1 630,20 (pas 2 200).
- taux non renseigné → net CHF affiché, EUR demande la saisie (pas de 0/NaN).
- `npm run build` OK.

## 6. "Terminé"
- [ ] Calculateur rendu + index à jour (4 actifs) + page geneve/salaire-net reliée.
- [ ] Aucun taux de change figé en dur ; LPP/AANP en saisie ; taux sociaux depuis `parametres-fiscaux.ts`.
- [ ] Encadré « avant impôt » présent.
- [ ] Tests verts.

## 7. Clôture git (OBLIGATOIRE — §5)
```
git add -A
git commit -m "calculateur salaire net CHF->EUR"
git push
git log origin/main..main --oneline   # doit renvoyer vide
```
