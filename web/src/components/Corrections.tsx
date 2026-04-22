import type { Correction } from "../lib/types";
import { SectionLabel } from "./SectionLabel";

export function Corrections({ items }: { items: Correction[] }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="sec-corrections">
      <SectionLabel>
        <span id="sec-corrections">Korrekturen</span>
      </SectionLabel>
      <div className="rounded-xl border border-amber-200 bg-amber-50/60 shadow-sm overflow-hidden">
        <ul className="divide-y divide-amber-100">
          {items.map((c, i) => (
            <li key={i} className="px-4 py-3">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-slate-500 line-through text-[15px]">
                  {c.original}
                </span>
                <span className="text-amber-700/70 text-sm">→</span>
                <span className="text-slate-900 font-medium text-[15px]">
                  {c.suggested}
                </span>
              </div>
              <div className="text-sm text-slate-600 mt-0.5">{c.reason}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
