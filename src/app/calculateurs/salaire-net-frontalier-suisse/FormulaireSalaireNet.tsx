"use client";

import Link from "next/link";
import { useState } from "react";
import { calculerSalaireNet, type Periode } from "@/lib/calc-salaire-net";
import { PARAMS } from "@/lib/parametres-fiscaux";

const chf = (n: number) =>
  n.toLocaleString("fr-FR", { maximumFractionDigits: 2 }) + " CHF";
const eur = (n: number) =>
  n.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  });

// Taux indicatif pré-rempli SEULEMENT si Abi l'a renseigné (sinon champ vide).
const TAUX_DEFAUT = PARAMS.tauxChangeIndicatif.chfEur;

export default function FormulaireSalaireNet() {
  const [brut, setBrut] = useState<number>(8000);
  const [periode, setPeriode] = useState<Periode>("mensuel");
  const [taux, setTaux] = useState<string>(
    TAUX_DEFAUT !== null ? String(TAUX_DEFAUT) : ""
  );
  const [lpp, setLpp] = useState<string>("");
  const [aanp, setAanp] = useState<string>("");

  const tauxNum = taux.trim() === "" ? null : Number(taux.replace(",", "."));

  const r = calculerSalaireNet({
    brut,
    periode,
    tauxChange: tauxNum,
    lppMontant: lpp.trim() === "" ? 0 : Number(lpp.replace(",", ".")),
    aanpTaux:
      aanp.trim() === "" ? 0 : Number(aanp.replace(",", ".")) / 100,
  });

  const unite = periode === "mensuel" ? "/ mois" : "/ an";

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-slate-700">
          Salaire brut ({periode})
          <input
            type="number"
            min={0}
            value={Number.isFinite(brut) ? brut : ""}
            onChange={(e) => setBrut(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
          />
        </label>
        <label className="block text-sm text-slate-700">
          Période
          <select
            value={periode}
            onChange={(e) => setPeriode(e.target.value as Periode)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
          >
            <option value="mensuel">Mensuel</option>
            <option value="annuel">Annuel</option>
          </select>
        </label>
        <label className="block text-sm text-slate-700">
          Taux de change CHF → EUR
          <input
            type="text"
            inputMode="decimal"
            value={taux}
            placeholder="ex. 1,06"
            onChange={(e) => setTaux(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
          />
          <span className="mt-1 block text-xs text-slate-500">
            {TAUX_DEFAUT !== null && PARAMS.tauxChangeIndicatif.date
              ? `Taux indicatif au ${PARAMS.tauxChangeIndicatif.date}, ajustez avec votre taux réel.`
              : "Saisissez votre taux réel (ex. taux de votre banque le jour du change)."}
          </span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="block text-sm text-slate-700">
            LPP ({periode}, CHF)
            <input
              type="number"
              min={0}
              value={lpp}
              onChange={(e) => setLpp(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
            />
            <span className="mt-1 block text-xs text-slate-500">
              Varie selon votre plan.
            </span>
          </label>
          <label className="block text-sm text-slate-700">
            AANP (% du brut)
            <input
              type="number"
              min={0}
              step="0.1"
              value={aanp}
              onChange={(e) => setAanp(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
            />
            <span className="mt-1 block text-xs text-slate-500">
              Varie selon votre employeur.
            </span>
          </label>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <table className="w-full text-sm">
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-4 py-2 text-slate-600">
                AVS / AI / APG (5,3 %)
              </td>
              <td className="px-4 py-2 text-right">
                − {chf(r.deductions.avsAiApg)}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-slate-600">
                Assurance chômage (1,1 %, plafonnée)
              </td>
              <td className="px-4 py-2 text-right">− {chf(r.deductions.ac)}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-slate-600">LPP (2e pilier)</td>
              <td className="px-4 py-2 text-right">− {chf(r.deductions.lpp)}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-slate-600">AANP (accident)</td>
              <td className="px-4 py-2 text-right">
                − {chf(r.deductions.aanp)}
              </td>
            </tr>
            <tr className="bg-slate-50 font-semibold">
              <td className="px-4 py-2">Net social {unite}</td>
              <td className="px-4 py-2 text-right">{chf(r.netSocialCHF)}</td>
            </tr>
            <tr className="bg-slate-900 font-semibold text-white">
              <td className="px-4 py-2">Net estimé en euros {unite}</td>
              <td className="px-4 py-2 text-right">
                {r.netEUR !== null ? (
                  eur(r.netEUR)
                ) : (
                  <span className="font-normal text-slate-300">
                    saisissez un taux de change
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Encadré périmètre (obligatoire) */}
      <div
        role="note"
        className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600"
      >
        Ce montant est net de charges sociales, <strong>avant impôt à la
        source</strong>. Pour la part fiscale, voir{" "}
        <Link
          href="/frontalier/geneve/impot-a-la-source"
          className="font-medium text-slate-900 underline"
        >
          l&apos;impôt à la source à Genève
        </Link>
        .
      </div>
    </div>
  );
}
