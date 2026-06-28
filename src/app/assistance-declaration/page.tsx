import type { Metadata } from "next";
import MentionLegale from "@/components/MentionLegale";

export const metadata: Metadata = {
  title: "Kit d'assistance à la déclaration frontalier franco-suisse",
  description:
    "Guides, modèles et explications pas à pas pour préparer votre déclaration de frontalier franco-suisse. Aide à la déclaration, pas un conseil personnalisé.",
};

// Lien de checkout Gumroad (produit publié). Prix en USD côté Gumroad.
const GUMROAD_URL = "https://monindemnite.gumroad.com/l/ytxpxi";

const INCLUS = [
  "Un guide pas à pas pour comprendre votre situation de frontalier franco-suisse.",
  "Des modèles et check-lists pour préparer votre déclaration.",
  "Des explications claires sur les régimes d'imposition (accord 1983 vs Genève).",
  "Des repères sur le télétravail, le droit d'option assurance et le quasi-résident.",
];

export default function AssistanceDeclarationPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Kit d&apos;assistance à la déclaration frontalier franco-suisse
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Une aide à la déclaration pour préparer votre dossier en confiance.
          Des guides et des modèles clairs — pas un conseil personnalisé, mais de
          quoi comprendre et avancer par vous-même.
        </p>
      </header>

      <section className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Ce que contient le kit</h2>
          <ul className="space-y-2">
            {INCLUS.map((item) => (
              <li key={item} className="flex gap-2 text-slate-700">
                <span aria-hidden className="text-slate-400">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:w-64">
          <p className="text-3xl font-bold text-slate-900">89&nbsp;$</p>
          <p className="text-sm text-slate-600">par saison de déclaration</p>
          <a
            href={GUMROAD_URL}
            className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Obtenir le kit
          </a>
          <p className="mt-3 text-xs text-slate-500">
            Paiement sécurisé. Accès aux mises à jour de la saison.
          </p>
        </aside>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold">Important</h2>
        <p className="mt-2 text-sm text-slate-600">
          Ce kit est un outil d&apos;information et d&apos;aide à la déclaration.
          Il ne constitue pas un conseil fiscal personnalisé et ne se substitue
          pas à l&apos;avis d&apos;un professionnel réglementé.
        </p>
        <MentionLegale className="mt-4" />
      </section>
    </div>
  );
}
