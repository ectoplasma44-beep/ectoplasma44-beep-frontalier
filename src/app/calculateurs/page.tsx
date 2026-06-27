import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calculateurs frontalier franco-suisse",
  description:
    "Les outils gratuits pour frontaliers franco-suisses : télétravail, droit d'option assurance, quasi-résident Genève, salaire net.",
};

interface Outil {
  titre: string;
  description: string;
  href?: string;
  statut: "actif" | "bientot";
}

const OUTILS: Outil[] = [
  {
    titre: "Télétravail frontalier",
    description:
      "Combien de jours de télétravail par an sans changer de régime d'imposition (seuil de 40 %).",
    href: "/calculateurs/teletravail-frontalier-suisse",
    statut: "actif",
  },
  {
    titre: "Droit d'option assurance maladie",
    description:
      "Comparer LAMal (Suisse) et régime français, et le délai de 3 mois.",
    href: "/calculateurs/droit-option-assurance-frontalier",
    statut: "actif",
  },
  {
    titre: "Quasi-résident Genève",
    description:
      "Tester votre éligibilité au statut de quasi-résident (taxation ordinaire ultérieure).",
    href: "/calculateurs/quasi-resident-geneve",
    statut: "actif",
  },
  {
    titre: "Salaire net frontalier",
    description: "Convertir un salaire suisse en net estimatif (CHF → EUR).",
    statut: "bientot",
  },
];

export default function CalculateursIndex() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Calculateurs</h1>
        <p className="text-slate-600">
          Des estimations indicatives gratuites pour y voir clair sur votre
          situation de frontalier franco-suisse.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {OUTILS.map((outil) => {
          const contenu = (
            <>
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">{outil.titre}</h2>
                {outil.statut === "bientot" && (
                  <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                    Bientôt
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-slate-600">{outil.description}</p>
            </>
          );

          return (
            <li key={outil.titre}>
              {outil.href ? (
                <Link
                  href={outil.href}
                  className="block h-full rounded-2xl border border-slate-200 p-5 transition hover:border-slate-300 hover:shadow-sm"
                >
                  {contenu}
                </Link>
              ) : (
                <div className="h-full rounded-2xl border border-dashed border-slate-200 p-5 opacity-70">
                  {contenu}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
