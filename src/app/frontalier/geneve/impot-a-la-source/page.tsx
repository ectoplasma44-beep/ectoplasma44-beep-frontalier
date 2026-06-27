import type { Metadata } from "next";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";
import PageCantonSituation from "@/components/PageCantonSituation";

export const metadata: Metadata = {
  title: "Impôt à la source à Genève pour les frontaliers",
  description:
    "Comment fonctionne l'impôt à la source à Genève pour un frontalier résidant en France : barèmes selon la situation familiale, déclaration en France et crédit d'impôt.",
};

export default function ImpotSourcePage() {
  return (
    <PageCantonSituation
      filAriane={{
        canton: "Genève",
        cantonHref: "/frontalier/geneve",
        situation: "Impôt à la source",
      }}
      h1="L'impôt à la source à Genève pour les frontaliers"
    >
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Genève étant hors accord 1983, l&apos;employeur{" "}
          <strong>prélève l&apos;impôt directement sur le salaire</strong>{" "}
          (impôt à la source).
        </li>
        <li>
          Le taux dépend d&apos;un{" "}
          <strong>barème selon votre situation familiale</strong> : barèmes A
          (célibataire sans enfant), B (couple marié à un seul revenu), C
          (couple à deux revenus), H (famille monoparentale), etc. Ces barèmes
          intègrent déjà un forfait pour frais professionnels et assurance
          maladie.
        </li>
        <li>
          Les <strong>barèmes officiels et la calculette</strong> sont publiés
          chaque année par l&apos;administration genevoise (ge.ch).
        </li>
        <li>
          Côté français : vous restez tenu de <strong>déclarer</strong> ce
          revenu en France, un mécanisme de <strong>crédit d&apos;impôt</strong>{" "}
          évitant la double imposition (taux moyen publié sur le formulaire
          2047-Suisse, mis à jour chaque année).
        </li>
      </ul>

      <Disclaimer />
      <p className="text-sm text-slate-600">
        Pour estimer votre situation, voir le{" "}
        <Link
          href="/frontalier/geneve/quasi-resident"
          className="font-medium text-slate-900 underline"
        >
          statut quasi-résident
        </Link>{" "}
        : si vous êtes éligible, vous pourriez récupérer des déductions.
      </p>
    </PageCantonSituation>
  );
}
