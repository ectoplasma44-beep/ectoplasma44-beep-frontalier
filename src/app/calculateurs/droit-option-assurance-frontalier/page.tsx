import type { Metadata } from "next";
import Disclaimer from "@/components/Disclaimer";
import BlocOffre from "@/components/BlocOffre";
import FormulaireDroitOption from "./FormulaireDroitOption";
import { PARAMS } from "@/lib/parametres-fiscaux";

export const metadata: Metadata = {
  title: "Droit d'option assurance frontalier : LAMal ou CMU ?",
  description:
    "Comparez le coût annuel de l'assurance maladie suisse (LAMal) et du régime français (CMU) pour un frontalier franco-suisse, et le délai de 3 mois pour exercer votre droit d'option.",
};

// Emplacement affiliation (assurance / courtiers LAMal). Désactivé tant que les
// programmes Affilae / Kwanko ne sont pas vérifiés (cf. dossier).
// TODO vérifier programmes avant activation.
const AFFILIATE_LINKS: { label: string; url: string }[] = [];

export default function DroitOptionPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          Droit d&apos;option assurance maladie frontalier&nbsp;: LAMal ou
          CMU&nbsp;?
        </h1>
        <p className="text-slate-600">
          En début d&apos;activité en Suisse, vous choisissez votre régime
          d&apos;assurance maladie. Comparez les coûts annuels et gardez en tête
          le délai de {PARAMS.droitOption.delaiMois} mois, irrévocable.
        </p>
        <Disclaimer />
      </header>

      <FormulaireDroitOption />

      {AFFILIATE_LINKS.length > 0 && (
        <section className="rounded-2xl border border-slate-200 p-5">
          <h2 className="text-lg font-semibold">
            Comparer les offres LAMal / courtiers
          </h2>
          <ul className="mt-2 space-y-1 text-sm">
            {AFFILIATE_LINKS.map((lien) => (
              <li key={lien.url}>
                <a
                  href={lien.url}
                  className="text-slate-900 underline"
                  rel="sponsored noopener noreferrer"
                  target="_blank"
                >
                  {lien.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <BlocOffre />

      <footer className="border-t border-slate-200 pt-4 text-xs text-slate-500">
        <p>
          <strong>Sources&nbsp;:</strong> {PARAMS.droitOption.source} ;{" "}
          {PARAMS.cmuFrontalier.source}
        </p>
        <p className="mt-1">
          <strong>Millésime&nbsp;:</strong> {PARAMS.cmuFrontalier.millesime}
        </p>
      </footer>
    </article>
  );
}
