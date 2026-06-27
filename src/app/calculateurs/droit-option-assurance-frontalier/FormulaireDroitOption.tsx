"use client";

import { useState } from "react";
import { calculerDroitOption } from "@/lib/calc-droit-option";
import { PARAMS } from "@/lib/parametres-fiscaux";

const eur = (n: number) =>
  n.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });

export default function FormulaireDroitOption() {
  const [revenusN2, setRevenusN2] = useState<number>(50_000);
  const [primeMensuelle, setPrimeMensuelle] = useState<number>(350);

  // En prod, PARAMS.cmuFrontalier.abattementAnnee est `null` → la CMU n'est pas
  // chiffrée (§7). Le composant gère automatiquement les deux cas.
  const resultat = calculerDroitOption({
    revenusN2,
    primeMensuelleLAMal: primeMensuelle,
  });

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-slate-700">
          Revenus du foyer (année N-2, assiette CMU)
          <input
            type="number"
            min={0}
            value={Number.isFinite(revenusN2) ? revenusN2 : ""}
            onChange={(e) => setRevenusN2(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
          />
        </label>
        <label className="block text-sm text-slate-700">
          Prime LAMal mensuelle estimée (€)
          <input
            type="number"
            min={0}
            value={Number.isFinite(primeMensuelle) ? primeMensuelle : ""}
            onChange={(e) => setPrimeMensuelle(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
          />
          <span className="mt-1 block text-xs text-slate-500">
            La prime LAMal dépend de l&apos;assureur, de l&apos;âge et du canton.
            Reportez votre estimation personnelle.
          </span>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* CMU / régime français */}
        <div className="rounded-2xl border border-slate-200 p-5">
          <h3 className="text-sm font-medium text-slate-500">
            Régime français (CMU / cotisation maladie)
          </h3>
          {resultat.cmu.disponible ? (
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {eur(resultat.cmu.cotisationAnnuelle)} / an
            </p>
          ) : (
            <div className="mt-2 space-y-2 text-sm text-slate-600">
              <p>
                Le montant officiel ne peut pas être calculé ici&nbsp;: la
                cotisation dépend d&apos;un abattement forfaitaire fixé chaque
                année, que nous n&apos;affichons pas tant qu&apos;il n&apos;est
                pas confirmé sur source officielle.
              </p>
              <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
                Formule officielle&nbsp;: (revenus N-2 − abattement forfaitaire)
                × {Math.round(PARAMS.cmuFrontalier.taux * 100)} %.
              </p>
              <a
                href={resultat.cmu.simulateurUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium text-slate-900 underline"
              >
                Calculer sur le simulateur officiel URSSAF →
              </a>
            </div>
          )}
        </div>

        {/* LAMal / régime suisse */}
        <div className="rounded-2xl border border-slate-200 p-5">
          <h3 className="text-sm font-medium text-slate-500">
            Régime suisse (LAMal)
          </h3>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {eur(resultat.lamal.coutAnnuel)} / an
          </p>
          <p className="mt-1 text-xs text-slate-500">
            soit {eur(resultat.lamal.coutAnnuel / 12)} / mois (votre saisie ×
            12).
          </p>
        </div>
      </div>

      {resultat.moinsCher === null ? (
        <p className="text-sm text-slate-600">
          Comparaison chiffrée indisponible tant que la cotisation française
          n&apos;est pas calculée sur le simulateur officiel. Reportez-y le
          résultat pour comparer avec votre prime LAMal.
        </p>
      ) : (
        <p className="text-sm text-slate-700">
          Sur la base de vos saisies, le régime{" "}
          <strong>
            {resultat.moinsCher === "cmu"
              ? "français (CMU)"
              : resultat.moinsCher === "lamal"
                ? "suisse (LAMal)"
                : "français et suisse à égalité"}
          </strong>{" "}
          {resultat.moinsCher === "egalite"
            ? "ressortent au même coût."
            : "ressort le moins cher. Estimation indicative."}
        </p>
      )}

      {/* Avertissement obligatoire : délai 3 mois irrévocable (PARAMS.droitOption) */}
      <div
        role="alert"
        className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-900"
      >
        <strong className="font-semibold">
          Délai de {PARAMS.droitOption.delaiMois} mois, choix irrévocable.
        </strong>{" "}
        Le droit d&apos;option s&apos;exerce dans les{" "}
        {PARAMS.droitOption.delaiMois} mois suivant le début de
        l&apos;activité&nbsp;; à défaut, l&apos;affiliation à la LAMal devient
        automatique et le choix est en principe définitif. Vérifiez votre
        échéance auprès de l&apos;administration compétente.
      </div>
    </div>
  );
}
