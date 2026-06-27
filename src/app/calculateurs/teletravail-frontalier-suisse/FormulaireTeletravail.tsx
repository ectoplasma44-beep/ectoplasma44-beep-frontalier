"use client";

import { useState } from "react";
import {
  calculerTeletravail,
  PRESETS_JOURS,
} from "@/lib/calc-teletravail";
import { PARAMS } from "@/lib/parametres-fiscaux";

export default function FormulaireTeletravail() {
  const [jours, setJours] = useState<number>(220);

  const resultat = calculerTeletravail(jours);
  const pourcentage = Math.round(PARAMS.teletravail.seuilFiscal * 100);

  return (
    <div className="space-y-6">
      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-slate-700">
          Vos jours travaillés par an
        </legend>

        <div className="flex flex-wrap gap-2">
          {PRESETS_JOURS.map((preset) => (
            <button
              key={preset.jours}
              type="button"
              onClick={() => setJours(preset.jours)}
              className={`rounded-lg border px-3 py-1.5 text-sm transition ${
                jours === preset.jours
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 text-slate-700 hover:border-slate-400"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        <label className="block text-sm text-slate-600">
          ou saisie libre&nbsp;:
          <input
            type="number"
            min={0}
            max={366}
            value={Number.isFinite(jours) ? jours : ""}
            onChange={(e) => setJours(Number(e.target.value))}
            className="ml-2 w-28 rounded-lg border border-slate-300 px-3 py-1.5 text-slate-900"
          />
          <span className="ml-1">jours/an</span>
        </label>
      </fieldset>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm text-slate-600">
          Estimation indicative — plafond de télétravail sans changement
          d&apos;État d&apos;imposition ({pourcentage} % du temps de travail)
          &nbsp;:
        </p>
        <p className="mt-1 text-3xl font-bold text-slate-900">
          {resultat.joursTeletravailMax} jours / an
        </p>
        <p className="mt-1 text-sm text-slate-600">
          soit environ {resultat.joursParSemaineEquivalent.toLocaleString("fr-FR")}{" "}
          jour(s) de télétravail par semaine.
        </p>
      </div>

      <div
        role="note"
        className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600"
      >
        <p>
          <strong className="font-semibold text-slate-800">
            Périmètre&nbsp;: imposition uniquement.
          </strong>{" "}
          Ce seuil concerne l&apos;État d&apos;imposition. Les règles de{" "}
          <strong>sécurité sociale / affiliation</strong> relèvent d&apos;un seuil
          distinct, non couvert par ce calcul (calculateur «&nbsp;Droit
          d&apos;option&nbsp;» à venir).
        </p>
        <p className="mt-2">
          Le périmètre exact peut différer selon votre canton (cantons de
          l&apos;accord de 1983 vs Genève).{" "}
          <strong>Vérifiez votre canton</strong> auprès de l&apos;administration
          compétente.
        </p>
      </div>
    </div>
  );
}
