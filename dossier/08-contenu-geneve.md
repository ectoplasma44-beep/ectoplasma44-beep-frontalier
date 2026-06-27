# 08 — Contenu du hub Genève (canton-modèle)

> Contenu rédactionnel sourcé, prêt à implémenter. Posture §3 tenue : « assistance/information », jamais « conseil personnalisé ».
> Chaque page : mention légale (footer global déjà en place) + en-tête « estimation indicative » sur les blocs chiffrés.
> Date : 2026-06-27. Sources en bas de fichier. Tout chiffre non sourcé = absent.
> ⚠️ Claude Code : ce sont des TEXTES. Aucune valeur fiscale nouvelle à coder ; les calculs restent dans les calculateurs existants. Liens internes vers les calculateurs et `/assistance-declaration`.

---

## PAGE HUB — `/frontalier/geneve`
**Title** : Frontalier à Genève : impôts, quasi-résident, assurance — le guide 2026
**Meta** : Comprendre votre fiscalité de frontalier à Genève : impôt à la source, statut quasi-résident, droit d'option assurance, télétravail. Outils gratuits + aide à la déclaration.
**H1** : Frontalier à Genève : comprendre vos impôts et vos démarches

**Intro** :
Genève ne relève pas de l'accord franco-suisse de 1983. Concrètement, si vous résidez en France et travaillez à Genève, votre salaire est en principe **imposé à la source en Suisse** — un fonctionnement différent de la plupart des autres cantons (Vaud, Neuchâtel, Berne…), où l'impôt est dû en France. Cette page rassemble l'essentiel, situation par situation, avec des outils gratuits pour estimer votre cas.

**Sections (chacune = carte + lien vers la page situation + calculateur)** :
- Impôt à la source à Genève → `/frontalier/geneve/impot-a-la-source`
- Statut quasi-résident (récupérer des déductions) → `/frontalier/geneve/quasi-resident` + calculateur quasi-résident
- Télétravail : jusqu'à quel point ? → `/frontalier/geneve/teletravail` + calculateur télétravail
- Assurance maladie : LAMal ou CMU (droit d'option) → `/frontalier/geneve/assurance-maladie` + calculateur droit d'option
- Salaire net : du brut CHF à l'euro → `/frontalier/geneve/salaire-net`

**Encadré « Important »** : rappel légal (réutiliser `<MentionLegale/>`).

---

## PAGE — `/frontalier/geneve/impot-a-la-source`
**H1** : L'impôt à la source à Genève pour les frontaliers

- Genève étant hors accord 1983, l'employeur **prélève l'impôt directement sur le salaire** (impôt à la source).
- Le taux dépend d'un **barème selon votre situation familiale** : barèmes A (célibataire sans enfant), B (couple marié à un seul revenu), C (couple à deux revenus), H (famille monoparentale), etc. Ces barèmes intègrent déjà un forfait pour frais professionnels et assurance maladie.
- Les **barèmes officiels et la calculette** sont publiés chaque année par l'administration genevoise (ge.ch).
- Côté français : vous restez tenu de **déclarer** ce revenu en France, un mécanisme de **crédit d'impôt** évitant la double imposition (taux moyen publié sur le formulaire 2047-Suisse, mis à jour chaque année).

**Encadré estimation** : pour estimer votre situation, voir le calculateur quasi-résident (si éligible, vous pourriez récupérer des déductions).
**CTA** : `<BlocOffre/>` produit.

---

## PAGE — `/frontalier/geneve/quasi-resident`
**Title** : Quasi-résident à Genève : conditions, délai, intérêt (2026)
**H1** : Le statut de quasi-résident à Genève

- Si **au moins 90 % des revenus bruts mondiaux de votre foyer** (vous + conjoint) de l'année concernée sont imposables en Suisse, vous pouvez demander une **taxation ordinaire ultérieure (TOU)** au lieu du barème source.
- L'administration recalcule alors votre impôt **comme si vous étiez résident**, avec les **déductions** correspondantes (qui peuvent inclure : frais de transport, intérêts d'emprunt, frais d'assurance maladie, cotisations de prévoyance…), et **rembourse la différence** le cas échéant.
- **Délai à ne pas manquer** : la demande (DRIS/TOU) doit être envoyée avant le **31 mars de l'année qui suit** le prélèvement. Une fois déposée, **elle ne peut plus être retirée**.

**Encadré d'avertissement (obligatoire)** :
> Le statut n'est **pas automatiquement avantageux**. Les revenus de votre conjoint en France ne sont pas réimposés en Suisse, mais ils sont pris en compte pour déterminer votre **taux d'imposition**. Un conjoint bien rémunéré en France peut faire monter ce taux et annuler le bénéfice des déductions. Estimez avant de demander.

**CTA** : calculateur Quasi-résident (test d'éligibilité) → puis `<BlocOffre/>` (le kit accompagne la démarche DRIS/TOU pas à pas).

---

## PAGE — `/frontalier/geneve/teletravail`
**H1** : Télétravail pour un frontalier de Genève : la règle des 40 %

- Depuis l'avenant franco-suisse, un frontalier peut **télétravailler jusqu'à 40 % de son temps de travail annuel** depuis la France **sans changer l'État d'imposition** de son salaire.
- Au-delà, le régime peut être remis en cause → vérifiez votre cas.
- **Attention** : ce seuil de 40 % concerne **l'imposition**. Les règles de **sécurité sociale / affiliation** relèvent d'un seuil **distinct** (voir la page assurance).

**CTA** : calculateur Télétravail (combien de jours pour vous) → `<BlocOffre/>`.

---

## PAGE — `/frontalier/geneve/assurance-maladie`
**Title** : Assurance maladie frontalier Genève : LAMal ou CMU (droit d'option)
**H1** : Droit d'option : LAMal ou assurance française ?

- En commençant à travailler en Suisse, vous choisissez votre régime maladie : **LAMal** (suisse) ou **assurance maladie française (PUMA, ex-CMU)**.
- **Délai : 3 mois** à compter du début d'activité. À défaut, affiliation **automatique à la LAMal**, sans retour en arrière (sauf rares exceptions). Le choix est en principe **irrévocable**.
- Repères de coût : la **CMU** se calcule sur le revenu (8 % après abattement) ; la **LAMal** est une **prime fixe** par adulte qui varie selon l'assureur, l'âge et le profil.

**Encadré** : pour comparer les deux coûts dans votre situation, utilisez le calculateur Droit d'option (il renvoie au simulateur officiel URSSAF pour le chiffrage CMU exact).
**CTA** : calculateur Droit d'option → `<BlocOffre/>`. (Emplacement affiliation : désactivé tant que programmes non vérifiés.)

---

## PAGE — `/frontalier/geneve/salaire-net`
**H1** : Du salaire brut suisse au net en euros

- Le passage du **brut CHF** au **net** dépend des cotisations sociales suisses (AVS/AI/APG, assurance chômage, prévoyance LPP, etc.), puis de l'impôt à la source et enfin de la **conversion CHF→EUR**.
- ⚠️ Page contenu en attente du calculateur Salaire net (C4) : **taux de cotisations et taux de change à sourcer** (§4) avant tout chiffrage. En l'état : pédagogie, pas de chiffre.

**CTA** : `<BlocOffre/>`.

---

## Sources (à reporter dans `dossier/03`)
- ge.ch — Déterminer le statut de quasi-résident : https://www.ge.ch/demande-rectification-taxation-ordinaire-ulterieure/determiner-statut-quasi-resident
- ge.ch — Demande de rectification / TOU (délai 31 mars année N+1, irréversibilité) : https://www.ge.ch/demande-rectification-taxation-ordinaire-ulterieure
- ge.ch — Calculette et barèmes de perception de l'impôt à la source : https://www.ge.ch/impot-source/calculette-baremes-perception-impot-source
- ge.ch — Barèmes 2026 : https://www.ge.ch/document/baremes-2026-perception-impot-source
- impots.gouv.fr — accord/convention franco-suisse (crédit d'impôt, 2047-Suisse), economie.gouv.fr (avenant télétravail 40 %), ameli/urssaf/cleiss (droit d'option). Cf. `dossier/03`.
