import type { BreakdownItem } from "../lib/types";
import { SectionLabel } from "./SectionLabel";

export function Breakdown({ items }: { items: BreakdownItem[] }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="sec-aufbau">
      <SectionLabel>
        <span id="sec-aufbau">Aufbau</span>
      </SectionLabel>
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <ul className="divide-y divide-slate-100">
          {items.map((b, i) => (
            <li key={i} className="px-4 py-3">
              <div className="hidden xs:flex items-baseline justify-between gap-6">
                <span className="text-slate-900 font-medium text-[15px]">
                  {b.part}
                </span>
                <span className="text-sm text-slate-500 text-right">
                  {b.role}
                </span>
              </div>
              <div className="xs:hidden">
                <div className="text-slate-900 font-medium text-[15px]">
                  {b.part}
                </div>
                <div className="text-sm text-slate-500 mt-0.5">{b.role}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
