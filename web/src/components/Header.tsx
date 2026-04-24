interface HeaderProps {
  count?: number | null;
}

export default function Header({ count }: HeaderProps) {
  return (
    <div
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "18px 24px 0",
        display: "flex",
        justifyContent: "flex-end",
        gap: 18,
        fontSize: 12.5,
        color: "var(--text-muted)",
      }}
    >
      {count !== null && count !== undefined && (
        <span>
          translated {count.toLocaleString()} sentence
          {count === 1 ? "" : "s"}
        </span>
      )}
      <a href="/" style={{ color: "var(--text)", textDecoration: "none" }}>
        Home
      </a>
      <a href="/guides" style={{ color: "var(--text)", textDecoration: "none" }}>
        Guides
      </a>
      <a href="/about" style={{ color: "var(--text)", textDecoration: "none" }}>
        About
      </a>
    </div>
  );
}