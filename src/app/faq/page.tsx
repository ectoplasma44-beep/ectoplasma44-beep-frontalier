import type { Metadata } from "next";
import Link from "next/link";
import BlocOffre from "@/components/BlocOffre";

export const metadata: Metadata = {
  title: "FAQ frontalier franco-suisse : impôts, assurance, télétravail",
  description:
    "Questions fréquentes des frontaliers franco-suisses : pays d'imposition, statut quasi-résident, droit d'option LAMal/CMU, télétravail. Réponses courtes et sourcées.",
};

interface QR {
  question: string;
  /** Réponse en texte simple (sert aussi au JSON-LD). */
  reponse: string;
  lien?: { href: string; label: string };
}

const FAQ: QR[] = [
  {
    question: "Dans quel pays suis-je imposé ?",
    reponse:
      "Cela dépend de votre canton de travail : dans les 8 cantons de l'accord de 1983, votre salaire est imposé en France ; à Genève, il est imposé à la source en Suisse.",
    lien: {
      href: "/comparatifs/impot-source-vs-declaration",
      label: "Voir le comparatif des régimes",
    },
  },
  {
    question: "Qu'est-ce que le statut de quasi-résident ?",
    reponse:
      "Si au moins 90 % des revenus bruts mondiaux de votre foyer sont imposables en Suisse, vous pouvez demander une taxation ordinaire ultérieure (TOU) à Genève, avec des déductions. La demande doit être déposée avant le 31 mars de l'année suivante et est irréversible.",
    lien: {
      href: "/calculateurs/quasi-resident-geneve",
      label: "Tester mon éligibilité",
    },
  },
  {
    question: "LAMal ou CMU : quel délai pour choisir ?",
    reponse:
      "Vous avez 3 mois à compter du début de votre activité en Suisse. Sans démarche, vous êtes affilié automatiquement à la LAMal, et le choix est en principe irrévocable.",
    lien: {
      href: "/comparatifs/lamal-vs-cmu-frontalier",
      label: "Comparer LAMal et CMU",
    },
  },
  {
    question: "Combien de jours puis-je télétravailler ?",
    reponse:
      "Sur le plan de l'imposition, jusqu'à 40 % de votre temps de travail annuel depuis la France sans changer l'État d'imposition. Le seuil de sécurité sociale est distinct.",
    lien: {
      href: "/calculateurs/teletravail-frontalier-suisse",
      label: "Calculer mon plafond de télétravail",
    },
  },
  {
    question: "Le statut quasi-résident est-il toujours avantageux ?",
    reponse:
      "Non. Les revenus du conjoint en France sont pris en compte pour déterminer le taux d'imposition, ce qui peut annuler le bénéfice des déductions. À estimer avant de demander.",
    lien: {
      href: "/frontalier/geneve/quasi-resident",
      label: "Comprendre le quasi-résident",
    },
  },
  {
    question:
      "Ce site remplace-t-il un expert-comptable ou un avocat fiscaliste ?",
    reponse:
      "Non. C'est un outil d'information et d'aide à la déclaration ; il ne constitue pas un conseil personnalisé et ne se substitue pas à un professionnel réglementé.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((qr) => ({
    "@type": "Question",
    name: qr.question,
    acceptedAnswer: { "@type": "Answer", text: qr.reponse },
  })),
};

export default function FaqPage() {
  return (
    <article className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header>
        <h1 className="text-3xl font-bold tracking-tight">
          Questions fréquentes des frontaliers franco-suisses
        </h1>
      </header>

      <dl className="space-y-6">
        {FAQ.map((qr) => (
          <div
            key={qr.question}
            className="rounded-2xl border border-slate-200 p-5"
          >
            <dt className="font-semibold text-slate-900">{qr.question}</dt>
            <dd className="mt-2 text-sm text-slate-600">{qr.reponse}</dd>
            {qr.lien && (
              <dd className="mt-2 text-sm">
                <Link
                  href={qr.lien.href}
                  className="font-medium text-slate-900 underline"
                >
                  {qr.lien.label} →
                </Link>
              </dd>
            )}
          </div>
        ))}
      </dl>

      <BlocOffre />
    </article>
  );
}
