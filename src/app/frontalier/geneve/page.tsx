import type { Metadata } from "next";
import Link from "next/link";
import MentionLegale from "@/components/MentionLegale";

export const metadata: Metadata = {
  title:
    "Frontalier à Genève : impôts, quasi-résident, assurance — le guide 2026",
  description:
    "Comprendre votre fiscalité de frontalier à Genève : impôt à la source, statut quasi-résident, droit d'option assurance, télétravail. Outils gratuits + aide à la déclaration.",
};

interface CarteSituation {
  titre: string;
  description: string;
  href: string;
}

const SITUATIONS: CarteSituation[] = [
  {
    titre: "Impôt à la source à Genève",
    description:
      "Comment l'employeur prélève l'impôt, les barèmes selon votre situation familiale, et l'obligation de déclarer en France.",
    href: "/frontalier/geneve/impot-a-la-source",
  },
  {
    titre: "Statut quasi-résident (récupérer des déductions)",
    description:
      "Si 90 % des revenus du foyer sont imposables en Suisse, vous pouvez demander une taxation ordinaire et des déductions.",
    href: "/frontalier/geneve/quasi-resident",
  },
  {
    titre: "Télétravail : jusqu'à quel point ?",
    description:
      "La règle des 40 % du temps de travail annuel sans changer d'État d'imposition.",
    href: "/frontalier/geneve/teletravail",
  },
  {
    titre: "Assurance maladie : LAMal ou CMU (droit d'option)",
    description:
      "Le choix de régime, le délai de 3 mois irrévocable, et comment comparer les coûts.",
    href: "/frontalier/geneve/assurance-maladie",
  },
  {
    titre: "Salaire net : du brut CHF à l'euro",
    description:
      "Les cotisations sociales suisses, l'impôt à la source et la conversion CHF→EUR.",
    href: "/frontalier/geneve/salaire-net",
  },
];

export default function HubGenevePage() {
  return (
    <div className="space-y-10">
      <nav aria-label="Fil d'Ariane" className="text-xs text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-slate-700">
              Accueil
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li>Frontalier</li>
          <li aria-hidden>›</li>
          <li className="text-slate-700">Genève</li>
        </ol>
      </nav>

      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Frontalier à Genève : comprendre vos impôts et vos démarches
        </h1>
        <p className="max-w-2xl text-slate-600">
          Genève ne relève pas de l&apos;accord franco-suisse de 1983.
          Concrètement, si vous résidez en France et travaillez à Genève, votre
          salaire est en principe <strong>imposé à la source en Suisse</strong> —
          un fonctionnement différent de la plupart des autres cantons (Vaud,
          Neuchâtel, Berne…), où l&apos;impôt est dû en France. Cette page
          rassemble l&apos;essentiel, situation par situation, avec des outils
          gratuits pour estimer votre cas.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {SITUATIONS.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="block h-full rounded-2xl border border-slate-200 p-5 transition hover:border-slate-300 hover:shadow-sm"
            >
              <h2 className="text-lg font-semibold">{s.titre}</h2>
              <p className="mt-2 text-sm text-slate-600">{s.description}</p>
              <span className="mt-3 inline-block text-sm font-medium text-slate-900">
                Lire →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold">Important</h2>
        <MentionLegale className="mt-2" />
      </section>
    </div>
  );
}
