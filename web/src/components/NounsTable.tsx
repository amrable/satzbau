import type { Noun } from "../lib/types";
import { ArticlePill } from "./ArticlePill";
import { SectionLabel } from "./SectionLabel";

export function NounsTable({ nouns }: { nouns: Noun[] }) {
  if (nouns.length === 0) return null;
  return (
    <section aria-labelledby="sec-nomen">
      <SectionLabel>
        <span id="sec-nomen">Nomen</span>
      </SectionLabel>
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <ul className="divide-y divide-slate-100">
          {nouns.map((n, i) => (
            <li key={i} className="px-4 py-3">
              <div
                className="hidden xs:grid items-baseline gap-3"
                style={{ gridTemplateColumns: "56px 1fr auto" }}
              >
                <span>
                  <ArticlePill article={n.article} />
                </span>
                <span className="text-base font-medium text-slate-900 leading-snug">
                  {n.word}
                </span>
                <span className="text-sm text-slate-500 tabnum">
                  {n.plural ?? "—"}
                </span>
              </div>
              <div className="xs:hidden">
                <div className="flex items-baseline gap-2">
                  <ArticlePill article={n.article} />
                  <span className="text-base font-medium text-slate-900">
                    {n.word}
                  </span>
                </div>
                <div className="text-sm text-slate-500 mt-0.5">
                  Plural: {n.plural ?? "—"}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
