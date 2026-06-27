// Gabarit réutilisable d'une page canton × situation (hub Genève et, plus tard,
// duplication Vaud / Neuchâtel…). Fournit le fil d'Ariane, le H1, le corps
// (children), un CTA optionnel vers le calculateur pertinent, et le BlocOffre.

import type { ReactNode } from "react";
import Link from "next/link";
import BlocOffre from "@/components/BlocOffre";

export interface FilAriane {
  /** Libellé du canton, ex. "Genève". */
  canton: string;
  /** URL du hub canton, ex. "/frontalier/geneve". */
  cantonHref: string;
  /** Libellé de la situation, ex. "Impôt à la source". */
  situation: string;
}

export interface CTACalculateur {
  href: string;
  label: string;
}

export default function PageCantonSituation({
  filAriane,
  h1,
  children,
  cta,
}: {
  filAriane: FilAriane;
  h1: string;
  children: ReactNode;
  /** CTA vers le calculateur lié (facultatif : certaines pages n'en ont pas). */
  cta?: CTACalculateur;
}) {
  return (
    <article className="space-y-8">
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
          <li>
            <Link href={filAriane.cantonHref} className="hover:text-slate-700">
              {filAriane.canton}
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li className="text-slate-700">{filAriane.situation}</li>
        </ol>
      </nav>

      <header>
        <h1 className="text-3xl font-bold tracking-tight">{h1}</h1>
      </header>

      <div className="space-y-4 text-slate-700">{children}</div>

      {cta && (
        <div>
          <Link
            href={cta.href}
            className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            {cta.label}
          </Link>
        </div>
      )}

      <BlocOffre />

      <p className="text-sm">
        <Link
          href={filAriane.cantonHref}
          className="text-slate-600 underline hover:text-slate-900"
        >
          ← Retour au guide frontalier {filAriane.canton}
        </Link>
      </p>
    </article>
  );
}
