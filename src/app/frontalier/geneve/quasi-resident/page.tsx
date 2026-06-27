import type { Metadata } from "next";
import PageCantonSituation from "@/components/PageCantonSituation";

export const metadata: Metadata = {
  title: "Quasi-résident à Genève : conditions, délai, intérêt (2026)",
  description:
    "Statut de quasi-résident à Genève : seuil de 90 % des revenus du foyer, taxation ordinaire ultérieure, déductions, délai du 31 mars et points de vigilance.",
};

export default function QuasiResidentGenevePage() {
  return (
    <PageCantonSituation
      filAriane={{
        canton: "Genève",
        cantonHref: "/frontalier/geneve",
        situation: "Quasi-résident",
      }}
      h1="Le statut de quasi-résident à Genève"
      cta={{
        href: "/calculateurs/quasi-resident-geneve",
        label: "Tester mon éligibilité (calculateur)",
      }}
    >
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Si <strong>au moins 90 % des revenus bruts mondiaux de votre foyer</strong>{" "}
          (vous + conjoint) de l&apos;année concernée sont imposables en Suisse,
          vous pouvez demander une <strong>taxation ordinaire ultérieure
          (TOU)</strong> au lieu du barème source.
        </li>
        <li>
          L&apos;administration recalcule alors votre impôt{" "}
          <strong>comme si vous étiez résident</strong>, avec les{" "}
          <strong>déductions</strong> correspondantes (qui peuvent inclure :
          frais de transport, intérêts d&apos;emprunt, frais d&apos;assurance
          maladie, cotisations de prévoyance…), et{" "}
          <strong>rembourse la différence</strong> le cas échéant.
        </li>
        <li>
          <strong>Délai à ne pas manquer</strong> : la demande (DRIS/TOU) doit
          être envoyée avant le <strong>31 mars de l&apos;année qui suit</strong>{" "}
          le prélèvement. Une fois déposée,{" "}
          <strong>elle ne peut plus être retirée</strong>.
        </li>
      </ul>

      <div
        role="alert"
        className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900"
      >
        Le statut n&apos;est <strong>pas automatiquement avantageux</strong>. Les
        revenus de votre conjoint en France ne sont pas réimposés en Suisse, mais
        ils sont pris en compte pour déterminer votre{" "}
        <strong>taux d&apos;imposition</strong>. Un conjoint bien rémunéré en
        France peut faire monter ce taux et annuler le bénéfice des déductions.
        Estimez avant de demander.
      </div>

      <p className="text-sm text-slate-600">
        Le kit d&apos;assistance accompagne la démarche DRIS/TOU pas à pas.
      </p>
    </PageCantonSituation>
  );
}
