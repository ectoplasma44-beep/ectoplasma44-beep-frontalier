import type { Metadata } from "next";
import Link from "next/link";
import BlocOffre from "@/components/BlocOffre";

export const metadata: Metadata = {
  title:
    "Impôt à la source ou déclaration en France : quel régime selon votre canton ?",
  description:
    "Frontalier suisse : selon votre canton de travail, votre salaire est imposé en France (accord 1983) ou à la source en Suisse (Genève). Comprendre les deux régimes.",
};

export default function ImpotSourceVsDeclarationPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          Impôt à la source ou imposition en France : ça dépend de votre canton
        </h1>
      </header>

      <div className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800">
        <strong>Point clé :</strong> pour la plupart des frontaliers,{" "}
        <strong>ce n&apos;est pas un choix</strong> — le régime est déterminé par
        le <strong>canton de travail</strong>.
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Les deux régimes</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            <strong>8 cantons de l&apos;accord de 1983</strong> (Berne, Soleure,
            Bâle-Ville, Bâle-Campagne, Vaud, Valais, Neuchâtel, Jura) : le
            salaire est <strong>imposé en France</strong>. Vous le déclarez en
            France.
          </li>
          <li>
            <strong>Genève (hors accord 1983)</strong> : imposition{" "}
            <strong>à la source en Suisse</strong>, avec un mécanisme de{" "}
            <strong>crédit d&apos;impôt</strong> côté français pour éviter la
            double imposition (taux moyen publié sur le formulaire 2047-Suisse).
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">
          Là où il y a une marge de manœuvre
        </h2>
        <p className="text-slate-600">
          À Genève (et situations imposées à la source), le statut{" "}
          <strong>quasi-résident</strong> permet, sous conditions, de demander
          une taxation au réel (TOU) au lieu du barème source — potentiellement
          plus avantageux, mais pas toujours.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href="/frontalier/geneve"
            className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-400"
          >
            Guide frontalier Genève
          </Link>
          <Link
            href="/calculateurs/quasi-resident-geneve"
            className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Tester l&apos;éligibilité quasi-résident
          </Link>
        </div>
      </section>

      <BlocOffre />
    </article>
  );
}
