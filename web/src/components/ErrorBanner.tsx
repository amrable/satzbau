type Props = { message: string; onDismiss: () => void };

export function ErrorBanner({ message, onDismiss }: Props) {
  return (
    <div
      role="alert"
      style={{
        background: "var(--error-bg)",
        border: "1px solid var(--error-border)",
        color: "var(--error-text)",
        padding: "10px 14px",
        borderRadius: "var(--radius-card)",
        marginBottom: 16,
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
      }}
    >
      <span
        style={{ fontSize: 14, fontWeight: 500, flex: 1, lineHeight: 1.5 }}
      >
        {message}
      </span>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Fehlermeldung schließen"
        className="focus-ring"
        style={{
          background: "transparent",
          border: "none",
          color: "var(--error-text)",
          cursor: "pointer",
          fontSize: 16,
          lineHeight: 1,
          padding: 2,
          borderRadius: 4,
        }}
      >
        ×
      </button>
    </div>
  );
}
