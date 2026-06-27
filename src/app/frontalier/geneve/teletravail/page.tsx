import type { Metadata } from "next";
import Link from "next/link";
import PageCantonSituation from "@/components/PageCantonSituation";

export const metadata: Metadata = {
  title: "Télétravail frontalier de Genève : la règle des 40 %",
  description:
    "Un frontalier de Genève peut télétravailler jusqu'à 40 % de son temps de travail annuel depuis la France sans changer d'État d'imposition. Attention au seuil distinct de sécurité sociale.",
};

export default function TeletravailGenevePage() {
  return (
    <PageCantonSituation
      filAriane={{
        canton: "Genève",
        cantonHref: "/frontalier/geneve",
        situation: "Télétravail",
      }}
      h1="Télétravail pour un frontalier de Genève : la règle des 40 %"
      cta={{
        href: "/calculateurs/teletravail-frontalier-suisse",
        label: "Combien de jours pour moi (calculateur)",
      }}
    >
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Depuis l&apos;avenant franco-suisse, un frontalier peut{" "}
          <strong>
            télétravailler jusqu&apos;à 40 % de son temps de travail annuel
          </strong>{" "}
          depuis la France <strong>sans changer l&apos;État
          d&apos;imposition</strong> de son salaire.
        </li>
        <li>
          Au-delà, le régime peut être remis en cause → vérifiez votre cas.
        </li>
        <li>
          <strong>Attention</strong> : ce seuil de 40 % concerne{" "}
          <strong>l&apos;imposition</strong>. Les règles de{" "}
          <strong>sécurité sociale / affiliation</strong> relèvent d&apos;un
          seuil <strong>distinct</strong> (voir la{" "}
          <Link
            href="/frontalier/geneve/assurance-maladie"
            className="font-medium text-slate-900 underline"
          >
            page assurance
          </Link>
          ).
        </li>
      </ul>
    </PageCantonSituation>
  );
}
