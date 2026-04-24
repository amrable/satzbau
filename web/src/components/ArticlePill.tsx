const STYLES = {
  der: { background: "var(--der-bg)", color: "var(--der-fg)" },
  die: { background: "var(--die-bg)", color: "var(--die-fg)" },
  das: { background: "var(--das-bg)", color: "var(--das-fg)" },
} as const;

type Article = keyof typeof STYLES;

export function ArticlePill({ article }: { article: Article }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: "var(--radius-pill)",
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 1.5,
        ...STYLES[article],
      }}
    >
      {article}
    </span>
  );
}
