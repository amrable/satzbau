import type { Correction } from "../lib/types";
import { SectionLabel } from "./SectionLabel";

export function Corrections({ items }: { items: Correction[] }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="sec-corrections">
      <SectionLabel>
        <span id="sec-corrections">Korrekturen</span>
      </SectionLabel>
      <div
        style={{
          background: "var(--warn-bg)",
          border: "1px solid var(--warn-border)",
          borderRadius: "var(--radius-card)",
          padding: "14px 16px",
        }}
      >
        {items.map((c, i) => (
          <div
            key={i}
            style={{
              paddingTop: i === 0 ? 0 : 12,
              paddingBottom: i === items.length - 1 ? 0 : 12,
              borderBottom:
                i === items.length - 1 ? "none" : "1px solid var(--warn-border)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "#DC2626",
                  textDecorationThickness: 2,
                  color: "var(--warn-text)",
                  fontSize: 14.5,
                  fontWeight: 500,
                }}
              >
                {c.original}
              </span>
              <span style={{ color: "var(--text-faint)", fontSize: 13 }}>→</span>
              <span
                style={{
                  fontSize: 14.5,
                  fontWeight: 600,
                  color: "var(--text)",
                }}
              >
                {c.suggested}
              </span>
            </div>
            {c.reason && (
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  marginTop: 3,
                }}
              >
                {c.reason}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
