// En-tête « estimation indicative » à placer en tête de chaque calculateur
// (CLAUDE.md §3 : les calculateurs renvoient une estimation indicative, jamais
// un montant dû).

export default function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <div
      role="note"
      className={`rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 ${className}`}
    >
      <strong className="font-semibold">Estimation indicative.</strong> Cet outil
      fournit une aide à la compréhension et ne se substitue pas à un conseil
      professionnel individualisé. Vérifiez votre situation auprès de
      l&apos;administration compétente.
    </div>
  );
}
