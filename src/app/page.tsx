import Link from "next/link";
import BlocOffre from "@/components/BlocOffre";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Frontalier franco-suisse&nbsp;: comprenez et préparez votre
          déclaration
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Des outils gratuits pour estimer ce qui change pour vous, et un kit
          d&apos;assistance pour préparer votre déclaration. Contenu informatif,
          appuyé sur des sources officielles.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/calculateurs/teletravail-frontalier-suisse"
            className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Calculateur télétravail
          </Link>
          <Link
            href="/calculateurs"
            className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-400"
          >
            Tous les calculateurs
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">L&apos;outil du moment</h2>
        <Link
          href="/calculateurs/teletravail-frontalier-suisse"
          className="block rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-sm"
        >
          <h3 className="text-lg font-semibold">
            Combien de jours de télétravail sans changer de régime
            d&apos;imposition&nbsp;?
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Estimez votre plafond annuel de télétravail au regard de
            l&apos;avenant franco-suisse (40 % du temps de travail).
          </p>
          <span className="mt-3 inline-block text-sm font-medium text-slate-900">
            Ouvrir le calculateur →
          </span>
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Votre canton</h2>
        <Link
          href="/frontalier/geneve"
          className="block rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-sm"
        >
          <h3 className="text-lg font-semibold">
            Frontalier à Genève&nbsp;: le guide complet
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Impôt à la source, quasi-résident, télétravail, assurance maladie,
            salaire net — situation par situation.
          </p>
          <span className="mt-3 inline-block text-sm font-medium text-slate-900">
            Ouvrir le guide Genève →
          </span>
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Comparer et comprendre</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li>
            <Link
              href="/comparatifs/lamal-vs-cmu-frontalier"
              className="block h-full rounded-2xl border border-slate-200 p-5 transition hover:border-slate-300 hover:shadow-sm"
            >
              <h3 className="font-semibold">LAMal ou CMU ?</h3>
              <p className="mt-1 text-sm text-slate-600">
                Le droit d&apos;option assurance maladie, les délais et les
                critères pour choisir.
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/comparatifs/impot-source-vs-declaration"
              className="block h-full rounded-2xl border border-slate-200 p-5 transition hover:border-slate-300 hover:shadow-sm"
            >
              <h3 className="font-semibold">
                Impôt à la source ou déclaration en France ?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Le régime dépend de votre canton de travail.
              </p>
            </Link>
          </li>
        </ul>
        <p className="text-sm text-slate-600">
          Vous avez une question ?{" "}
          <Link href="/faq" className="font-medium text-slate-900 underline">
            Consultez la FAQ frontalier
          </Link>
          .
        </p>
      </section>

      <BlocOffre />
    </div>
  );
}
