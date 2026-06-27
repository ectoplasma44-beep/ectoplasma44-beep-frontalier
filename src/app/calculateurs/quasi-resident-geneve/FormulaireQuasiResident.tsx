"use client";

import { useState } from "react";
import { calculerQuasiResident } from "@/lib/calc-quasi-resident";

const DEDUCTIONS_PEDAGOGIQUES = [
  "frais de transport (frais kilométriques domicile-travail)",
  "intérêts d'emprunt",
  "frais d'assurance maladie",
  "certaines cotisations et frais professionnels",
];

export default function FormulaireQuasiResident() {
  const [revenusSuisse, setRevenusSuisse] = useState<number>(90_000);
  const [revenusFoyer, setRevenusFoyer] = useState<number>(100_000);

  const resultat = calculerQuasiResident({
    revenusBrutsSuisse: revenusSuisse,
    revenusBrutsMondiauxFoyer: revenusFoyer,
  });

  const pct =
    resultat.partSuisse === null
      ? null
      : Math.round(resultat.partSuisse * 1000) / 10;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-slate-700">
          Vos revenus bruts imposables en Suisse (€/an)
          <input
            type="number"
            min={0}
            value={Number.isFinite(revenusSuisse) ? revenusSuisse : ""}
            onChange={(e) => setRevenusSuisse(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
          />
        </label>
        <label className="block text-sm text-slate-700">
          Revenus bruts mondiaux du foyer (conjoint inclus, €/an)
          <input
            type="number"
            min={0}
            value={Number.isFinite(revenusFoyer) ? revenusFoyer : ""}
            onChange={(e) => setRevenusFoyer(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
          />
        </label>
      </div>

      <div
        className={`rounded-2xl border p-6 ${
          resultat.eligible
            ? "border-emerald-300 bg-emerald-50"
            : "border-slate-200 bg-slate-50"
        }`}
      >
        {pct !== null && (
          <p className="text-sm text-slate-600">
            Part de vos revenus imposables en Suisse&nbsp;:{" "}
            <strong>{pct.toLocaleString("fr-FR")} %</strong> (seuil&nbsp;:{" "}
            {Math.round(resultat.seuil * 100)} %).
          </p>
        )}
        <p className="mt-1 text-xl font-bold text-slate-900">
          {resultat.eligible
            ? "Vous semblez éligible au statut de quasi-résident."
            : "Vous ne semblez pas éligible au statut de quasi-résident."}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Test d&apos;éligibilité indicatif, à confirmer auprès de
          l&apos;administration fiscale genevoise (AFC).
        </p>
      </div>

      {resultat.eligible && (
        <div className="rounded-2xl border border-slate-200 p-5 text-sm text-slate-700">
          <h3 className="font-semibold text-slate-900">
            Ce que la taxation ordinaire ultérieure (TOU) peut permettre
          </h3>
          <p className="mt-1">
            En tant que quasi-résident, vous pouvez demander une taxation
            ordinaire qui peut inclure des déductions telles que&nbsp;:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {DEDUCTIONS_PEDAGOGIQUES.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-slate-500">
            Liste pédagogique non exhaustive&nbsp;; aucun montant n&apos;est
            garanti.
          </p>
        </div>
      )}

      {/* Avertissement obligatoire (dossier/02) : taux mondial / conjoint. */}
      <div
        role="alert"
        className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900"
      >
        <strong className="font-semibold">
          Le statut n&apos;est pas automatiquement avantageux.
        </strong>{" "}
        Les revenus du conjoint en France ne sont pas réimposés, mais ils
        comptent pour le calcul du <strong>taux d&apos;imposition mondial</strong>
        &nbsp;: un conjoint bien rémunéré en France peut annuler le bénéfice. Le
        chiffrage exact dépend du barème genevois.
      </div>

      <p className="text-sm text-slate-600">
        Cet outil ne chiffre pas votre gain en euros&nbsp;: le calcul dépend du
        barème d&apos;impôt à la source genevois et de votre situation complète.
        Pour l&apos;impôt à la source, reportez-vous à la{" "}
        <a
          href="https://www.ge.ch/impot-source/calculette-baremes-perception-impot-source"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-900 underline"
        >
          calculette officielle ge.ch
        </a>
        .
      </p>
    </div>
  );
}
