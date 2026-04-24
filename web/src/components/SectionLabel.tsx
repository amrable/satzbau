import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="kicker">{children}</div>;
}
