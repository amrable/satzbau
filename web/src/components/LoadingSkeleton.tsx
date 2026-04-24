export function LoadingSkeleton() {
  const bar = (w: number | string, h = 14) => (
    <div
      className="animate-pulse"
      style={{
        height: h,
        width: w,
        background: "var(--border)",
        borderRadius: 4,
      }}
    />
  );

  const card = (rows = 3) => (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-card)",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          style={{
            padding: "14px 16px",
            borderTop: i === 0 ? "none" : "1px solid var(--hairline)",
            display: "flex",
            gap: 12,
            alignItems: "center",
          }}
        >
          {bar(36, 18)}
          {bar(140, 14)}
          <div style={{ flex: 1 }} />
          {bar(80, 14)}
        </div>
      ))}
    </div>
  );

  return (
    <div aria-hidden="true">
      <div style={{ marginTop: 28 }}>
        {bar(60, 10)}
        <div style={{ height: 10 }} />
        {card()}
      </div>
      <div style={{ marginTop: 28 }}>
        {bar(60, 10)}
        <div style={{ height: 10 }} />
        {card()}
      </div>
    </div>
  );
}
