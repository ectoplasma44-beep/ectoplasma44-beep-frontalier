import type { Metadata } from "next";
import Link from "next/link";
import BlocOffre from "@/components/BlocOffre";

export const metadata: Metadata = {
  title: "LAMal ou CMU pour un frontalier suisse ? Comparatif 2026",
  description:
    "LAMal (assurance suisse) ou CMU/PUMA (assurance française) ? Comprendre le droit d'option, les délais et les critères pour choisir votre assurance maladie de frontalier.",
};

// Emplacement affiliation désactivé tant que programmes Affilae/Kwanko non vérifiés.
// TODO vérifier programmes avant activation.
const AFFILIATE_LINKS: { label: string; url: string }[] = [];

const LIGNES = [
  {
    critere: "Calcul du coût",
    lamal: "Prime fixe par adulte (varie selon assureur, âge, profil)",
    cmu: "8 % du revenu, après abattement forfaitaire",
  },
  {
    critere: "Base de calcul",
    lamal: "Forfaitaire (par personne)",
    cmu: "Revenu (RFR du foyer)",
  },
  {
    critere: "Choix de la caisse",
    lamal: "Libre choix de l'assureur",
    cmu: "Affiliation à la CPAM de résidence",
  },
  {
    critere: "Où se soigner",
    lamal: "Adapté si soins fréquents en Suisse",
    cmu: "Adapté si soins surtout en France",
  },
];

export default function LamalVsCmuPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          LAMal ou CMU : comprendre le droit d&apos;option
        </h1>
        <p className="text-slate-600">
          En tant que frontalier, vous choisissez une fois votre régime maladie
          : <strong>LAMal</strong> (suisse) ou <strong>assurance maladie
          française (PUMA, ex-CMU)</strong>. Ce choix engage durablement — voici
          de quoi le comprendre.
        </p>
      </header>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold">Critère</th>
              <th className="px-4 py-3 font-semibold">LAMal (Suisse)</th>
              <th className="px-4 py-3 font-semibold">CMU / PUMA (France)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {LIGNES.map((l) => (
              <tr key={l.critere}>
                <td className="px-4 py-3 font-medium text-slate-700">
                  {l.critere}
                </td>
                <td className="px-4 py-3 text-slate-600">{l.lamal}</td>
                <td className="px-4 py-3 text-slate-600">{l.cmu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        role="alert"
        className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-900"
      >
        <strong>Le délai à ne pas manquer :</strong> l&apos;option s&apos;exerce
        dans les <strong>3 mois</strong> du début d&apos;activité. À défaut →
        affiliation <strong>automatique à la LAMal</strong>, et le choix est en
        principe <strong>irrévocable</strong>.
      </div>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Comment décider</h2>
        <p className="text-slate-600">
          Le bon choix dépend de vos revenus, de votre composition familiale et
          du lieu où vous vous soignez. Estimez les deux coûts avec le
          calculateur, puis vérifiez le montant CMU exact sur le simulateur
          officiel URSSAF.
        </p>
        <Link
          href="/calculateurs/droit-option-assurance-frontalier"
          className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Comparer les coûts (calculateur Droit d&apos;option)
        </Link>
      </section>

      {AFFILIATE_LINKS.length > 0 && (
        <section className="rounded-2xl border border-slate-200 p-5">
          <h2 className="text-lg font-semibold">Comparer les offres</h2>
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
    </article>
  );
}
