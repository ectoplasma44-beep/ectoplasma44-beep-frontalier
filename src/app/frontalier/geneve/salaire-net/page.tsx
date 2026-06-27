import type { Metadata } from "next";
import PageCantonSituation from "@/components/PageCantonSituation";

export const metadata: Metadata = {
  title: "Salaire net frontalier Genève : du brut CHF au net en euros",
  description:
    "Comprendre le passage du salaire brut suisse (CHF) au net en euros pour un frontalier de Genève : cotisations sociales, impôt à la source et conversion CHF→EUR.",
};

export default function SalaireNetGenevePage() {
  return (
    <PageCantonSituation
      filAriane={{
        canton: "Genève",
        cantonHref: "/frontalier/geneve",
        situation: "Salaire net",
      }}
      h1="Du salaire brut suisse au net en euros"
      cta={{
        href: "/calculateurs/salaire-net-frontalier-suisse",
        label: "Estimer mon salaire net (calculateur)",
      }}
    >
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Le passage du <strong>brut CHF</strong> au <strong>net</strong> dépend
          des cotisations sociales suisses (AVS/AI/APG, assurance chômage,
          prévoyance LPP, etc.), puis de l&apos;impôt à la source et enfin de la{" "}
          <strong>conversion CHF→EUR</strong>.
        </li>
      </ul>

      <div
        role="note"
        className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600"
      >
        Notre calculateur estime le net <strong>après charges sociales,
        avant impôt à la source</strong> (la part fiscale dépend du barème
        genevois — voir la page impôt à la source). Le taux de change est saisi
        par vos soins.
      </div>
    </PageCantonSituation>
  );
}
