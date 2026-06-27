// Mention légale obligatoire (CLAUDE.md §3, SESSION_TASKS.md §5).
// Texte EXACT — ne pas reformuler sans validation juridique (Abi).

export const TEXTE_MENTION_LEGALE =
  "Contenu informatif et outil d'aide à la déclaration. Ne constitue pas un conseil fiscal, juridique ou comptable individualisé et ne se substitue pas à l'avis d'un professionnel réglementé. Les paramètres fiscaux sont donnés à titre indicatif ; vérifiez votre situation auprès de l'administration compétente.";

export default function MentionLegale({
  className = "",
}: {
  className?: string;
}) {
  return (
    <p className={`text-xs leading-relaxed text-slate-500 ${className}`}>
      {TEXTE_MENTION_LEGALE}
    </p>
  );
}
