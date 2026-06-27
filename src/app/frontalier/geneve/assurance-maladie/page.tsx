import type { Metadata } from "next";
import PageCantonSituation from "@/components/PageCantonSituation";

export const metadata: Metadata = {
  title: "Assurance maladie frontalier Genève : LAMal ou CMU (droit d'option)",
  description:
    "Frontalier de Genève : choisir entre LAMal (suisse) et assurance maladie française (PUMA, ex-CMU). Le délai de 3 mois irrévocable et comment comparer les coûts.",
};

export default function AssuranceMaladieGenevePage() {
  return (
    <PageCantonSituation
      filAriane={{
        canton: "Genève",
        cantonHref: "/frontalier/geneve",
        situation: "Assurance maladie",
      }}
      h1="Droit d'option : LAMal ou assurance française ?"
      cta={{
        href: "/calculateurs/droit-option-assurance-frontalier",
        label: "Comparer les coûts (calculateur)",
      }}
    >
      <ul className="list-disc space-y-2 pl-5">
        <li>
          En commençant à travailler en Suisse, vous choisissez votre régime
          maladie : <strong>LAMal</strong> (suisse) ou{" "}
          <strong>assurance maladie française (PUMA, ex-CMU)</strong>.
        </li>
        <li>
          <strong>Délai : 3 mois</strong> à compter du début d&apos;activité. À
          défaut, affiliation <strong>automatique à la LAMal</strong>, sans
          retour en arrière (sauf rares exceptions). Le choix est en principe{" "}
          <strong>irrévocable</strong>.
        </li>
        <li>
          Repères de coût : la <strong>CMU</strong> se calcule sur le revenu
          (8 % après abattement) ; la <strong>LAMal</strong> est une{" "}
          <strong>prime fixe</strong> par adulte qui varie selon l&apos;assureur,
          l&apos;âge et le profil.
        </li>
      </ul>

      <div
        role="alert"
        className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-900"
      >
        <strong>Délai de 3 mois, choix irrévocable.</strong> Pour comparer les
        deux coûts dans votre situation, utilisez le calculateur Droit
        d&apos;option (il renvoie au simulateur officiel URSSAF pour le chiffrage
        CMU exact).
      </div>
    </PageCantonSituation>
  );
}
