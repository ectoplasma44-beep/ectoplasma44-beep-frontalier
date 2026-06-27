import type { Metadata } from "next";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";
import BlocOffre from "@/components/BlocOffre";
import FormulaireQuasiResident from "./FormulaireQuasiResident";
import { PARAMS } from "@/lib/parametres-fiscaux";

export const metadata: Metadata = {
  title: "Quasi-résident Genève : test d'éligibilité frontalier",
  description:
    "Êtes-vous éligible au statut de quasi-résident à Genève ? Testez le seuil de 90 % des revenus du foyer imposables en Suisse et comprenez la taxation ordinaire ultérieure (TOU).",
};

export default function QuasiResidentPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          Quasi-résident à Genève&nbsp;: êtes-vous éligible&nbsp;?
        </h1>
        <p className="text-slate-600">
          Le statut de quasi-résident permet, sous conditions, de demander une
          taxation ordinaire ultérieure et des déductions supplémentaires.
          Première condition&nbsp;: au moins{" "}
          {Math.round(PARAMS.quasiResident.seuilRevenuSuisse * 100)} % des
          revenus bruts mondiaux du foyer imposables en Suisse.
        </p>
        <Disclaimer />
      </header>

      <FormulaireQuasiResident />

      <p className="text-sm text-slate-600">
        Pour situer votre régime&nbsp;:{" "}
        <Link
          href="/comparatifs/impot-source-vs-declaration"
          className="font-medium text-slate-900 underline"
        >
          impôt à la source ou déclaration en France
        </Link>
        .
      </p>

      <BlocOffre />

      <footer className="border-t border-slate-200 pt-4 text-xs text-slate-500">
        <p>
          <strong>Source&nbsp;:</strong> {PARAMS.quasiResident.source}
        </p>
        <p className="mt-1">
          <strong>Millésime&nbsp;:</strong> {PARAMS.quasiResident.millesime}
        </p>
      </footer>
    </article>
  );
}
