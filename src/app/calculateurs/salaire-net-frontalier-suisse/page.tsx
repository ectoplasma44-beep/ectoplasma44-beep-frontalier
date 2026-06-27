import type { Metadata } from "next";
import Disclaimer from "@/components/Disclaimer";
import BlocOffre from "@/components/BlocOffre";
import FormulaireSalaireNet from "./FormulaireSalaireNet";
import { PARAMS } from "@/lib/parametres-fiscaux";

export const metadata: Metadata = {
  title: "Calcul du salaire net frontalier suisse (CHF → EUR)",
  description:
    "Estimez votre salaire net de charges sociales suisses (AVS/AI/APG, chômage, LPP, AANP) et convertissez-le en euros. Estimation indicative, avant impôt à la source.",
};

export default function SalaireNetPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          Calcul du salaire net frontalier suisse (CHF → EUR)
        </h1>
        <p className="text-slate-600">
          Estimez votre salaire net après cotisations sociales suisses, puis
          convertissez-le en euros avec votre propre taux de change. Le résultat
          est <strong>net de charges sociales, avant impôt à la source</strong>.
        </p>
        <Disclaimer />
      </header>

      <FormulaireSalaireNet />

      <BlocOffre />

      <footer className="border-t border-slate-200 pt-4 text-xs text-slate-500">
        <p>
          <strong>Source charges sociales&nbsp;:</strong>{" "}
          {PARAMS.chargesSocialesCH.source}
        </p>
        <p className="mt-1">
          <strong>Millésime&nbsp;:</strong> {PARAMS.chargesSocialesCH.millesime}{" "}
          Le taux de change est saisi par l&apos;utilisateur (jamais figé).
        </p>
      </footer>
    </article>
  );
}
