// Bloc d'offre réutilisable : CTA vers la page produit /assistance-declaration.
// Sémantique §3 : « assistance / aide / modèles / guide », jamais « conseil
// personnalisé ».

import Link from "next/link";

export default function BlocOffre({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`rounded-2xl border border-slate-200 bg-slate-50 p-6 ${className}`}
    >
      <h2 className="text-lg font-semibold text-slate-900">
        Besoin d&apos;aide pour votre déclaration&nbsp;?
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Notre kit d&apos;assistance à la déclaration frontalier franco-suisse
        rassemble guides, modèles et explications pas à pas pour préparer votre
        déclaration en confiance.
      </p>
      <Link
        href="/assistance-declaration"
        className="mt-4 inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        Découvrir le kit d&apos;assistance
      </Link>
    </aside>
  );
}
