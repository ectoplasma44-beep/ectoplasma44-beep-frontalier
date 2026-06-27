# 09 — Contenu comparatifs + FAQ

> Contenu rédactionnel sourcé, prêt à implémenter. Posture §3 : « information/aide », jamais « conseil personnalisé ».
> Aucun chiffre non sourcé (cf. `dossier/03`). Les comparatifs n'affirment pas « le moins cher dans l'absolu » : ils donnent les critères pour décider (prudence conseil financier/juridique).
> Date : 2026-06-27.

---

## PAGE — `/comparatifs/lamal-vs-cmu-frontalier`
**Title** : LAMal ou CMU pour un frontalier suisse ? Comparatif 2026
**Meta** : LAMal (assurance suisse) ou CMU/PUMA (assurance française) ? Comprendre le droit d'option, les délais et les critères pour choisir votre assurance maladie de frontalier.
**H1** : LAMal ou CMU : comprendre le droit d'option

**Intro** : En tant que frontalier, vous choisissez une fois votre régime maladie : **LAMal** (suisse) ou **assurance maladie française (PUMA, ex-CMU)**. Ce choix engage durablement — voici de quoi le comprendre.

**Tableau comparatif (faits sourcés)** :
| Critère | LAMal (Suisse) | CMU / PUMA (France) |
|---|---|---|
| Calcul du coût | Prime fixe par adulte (varie selon assureur, âge, profil) | 8 % du revenu, après abattement forfaitaire |
| Base de calcul | Forfaitaire (par personne) | Revenu (RFR du foyer) |
| Choix de la caisse | Libre choix de l'assureur | Affiliation à la CPAM de résidence |
| Où se soigner | Adapté si soins fréquents en Suisse | Adapté si soins surtout en France |

**Le délai à ne pas manquer** : l'option s'exerce dans les **3 mois** du début d'activité. À défaut → affiliation **automatique à la LAMal**, et le choix est en principe **irrévocable**.

**Comment décider** : le bon choix dépend de vos revenus, de votre composition familiale et du lieu où vous vous soignez. Estimez les deux coûts avec le calculateur, puis vérifiez le montant CMU exact sur le simulateur officiel URSSAF.

**CTA** : calculateur Droit d'option → `<BlocOffre/>`. (Emplacement affiliation : désactivé tant que programmes Affilae/Kwanko non vérifiés.)

---

## PAGE — `/comparatifs/impot-source-vs-declaration`
**Title** : Impôt à la source ou déclaration en France : quel régime selon votre canton ?
**Meta** : Frontalier suisse : selon votre canton de travail, votre salaire est imposé en France (accord 1983) ou à la source en Suisse (Genève). Comprendre les deux régimes.
**H1** : Impôt à la source ou imposition en France : ça dépend de votre canton

**Point clé (à mettre en avant)** : pour la plupart des frontaliers, **ce n'est pas un choix** — le régime est déterminé par le **canton de travail**.

**Les deux régimes (sourcés)** :
- **8 cantons de l'accord de 1983** (Berne, Soleure, Bâle-Ville, Bâle-Campagne, Vaud, Valais, Neuchâtel, Jura) : le salaire est **imposé en France**. Vous le déclarez en France.
- **Genève (hors accord 1983)** : imposition **à la source en Suisse**, avec un mécanisme de **crédit d'impôt** côté français pour éviter la double imposition (taux moyen publié sur le formulaire 2047-Suisse).

**Là où il y a une marge de manœuvre** : à Genève (et situations imposées à la source), le statut **quasi-résident** permet, sous conditions, de demander une taxation au réel (TOU) au lieu du barème source — potentiellement plus avantageux, mais pas toujours.

**CTA** : lien vers le hub Genève + calculateur Quasi-résident + `<BlocOffre/>`.

---

## PAGE — `/faq`
**Title** : FAQ frontalier franco-suisse : impôts, assurance, télétravail
**H1** : Questions fréquentes des frontaliers franco-suisses
> Implémenter en `FAQPage` (schema.org) pour le SEO. Réponses courtes, sourcées, sans chiffre non vérifié.

**Q. Dans quel pays suis-je imposé ?**
Cela dépend de votre canton de travail : dans les 8 cantons de l'accord de 1983, votre salaire est imposé en France ; à Genève, il est imposé à la source en Suisse. (Voir le comparatif des régimes.)

**Q. Qu'est-ce que le statut de quasi-résident ?**
Si au moins 90 % des revenus bruts mondiaux de votre foyer sont imposables en Suisse, vous pouvez demander une taxation ordinaire ultérieure (TOU) à Genève, avec des déductions. La demande doit être déposée avant le **31 mars de l'année suivante** et est irréversible.

**Q. LAMal ou CMU : quel délai pour choisir ?**
Vous avez **3 mois** à compter du début de votre activité en Suisse. Sans démarche, vous êtes affilié automatiquement à la LAMal, et le choix est en principe irrévocable.

**Q. Combien de jours puis-je télétravailler ?**
Sur le plan de l'imposition, jusqu'à **40 % de votre temps de travail annuel** depuis la France sans changer l'État d'imposition. Le seuil de sécurité sociale est distinct.

**Q. Le statut quasi-résident est-il toujours avantageux ?**
Non. Les revenus du conjoint en France sont pris en compte pour déterminer le taux d'imposition, ce qui peut annuler le bénéfice des déductions. À estimer avant de demander.

**Q. Ce site remplace-t-il un expert-comptable ou un avocat fiscaliste ?**
Non. C'est un outil d'information et d'aide à la déclaration ; il ne constitue pas un conseil personnalisé et ne se substitue pas à un professionnel réglementé.

Chaque réponse renvoie vers la page/le calculateur concerné + `<BlocOffre/>` en bas.

---

## Maillage
- Comparatifs liés depuis : home, hub Genève (situations correspondantes), calculateurs concernés.
- FAQ liée depuis le footer global + home.
- Sources : déjà dans `dossier/03` (ameli/urssaf/cleiss pour droit d'option ; impots.gouv/economie.gouv pour imposition & télétravail ; ge.ch pour quasi-résident).
