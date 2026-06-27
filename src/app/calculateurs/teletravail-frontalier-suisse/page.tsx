import type { Metadata } from "next";
import Disclaimer from "@/components/Disclaimer";
import BlocOffre from "@/components/BlocOffre";
import FormulaireTeletravail from "./FormulaireTeletravail";
import { PARAMS } from "@/lib/parametres-fiscaux";

export const metadata: Metadata = {
  title: "Calculateur télétravail frontalier suisse (seuil 40 %)",
  description:
    "Combien de jours de télétravail par an un frontalier franco-suisse peut-il faire sans changer de régime d'imposition ? Estimation indicative basée sur l'avenant franco-suisse (40 %).",
};

export default function TeletravailPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          Télétravail frontalier franco-suisse&nbsp;: combien de jours sans
          changer de régime&nbsp;?
        </h1>
        <p className="text-slate-600">
          L&apos;avenant à la convention fiscale franco-suisse autorise le
          télétravail dans la limite de 40 % du temps de travail annuel sans
          changement de l&apos;État d&apos;imposition. Estimez votre plafond
          ci-dessous.
        </p>
        <Disclaimer />
      </header>

      <FormulaireTeletravail />

      <BlocOffre />

      <footer className="border-t border-slate-200 pt-4 text-xs text-slate-500">
        <p>
          <strong>Source&nbsp;:</strong> {PARAMS.teletravail.source}
        </p>
        <p className="mt-1">
          <strong>Millésime&nbsp;:</strong> {PARAMS.teletravail.millesime}
        </p>
      </footer>
    </article>
  );
}
