import { useEffect, useState } from "react";
import { SentenceInput } from "./components/SentenceInput";
import { NounsTable } from "./components/NounsTable";
import { VerbsTable } from "./components/VerbsTable";
import { Breakdown } from "./components/Breakdown";
import { Corrections } from "./components/Corrections";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { ErrorBanner } from "./components/ErrorBanner";
import { analyzeSentence, fetchStats, messageForError } from "./lib/api";
import type { Analysis } from "./lib/types";

const EXAMPLE_SENTENCE = "Der Mann hat das Buch in die Bibliothek gebracht.";
const EXAMPLE_ANALYSIS: Analysis = {
  nouns: [
    { word: "Mann", article: "der", plural: "die Männer" },
    { word: "Buch", article: "das", plural: "die Bücher" },
    { word: "Bibliothek", article: "die", plural: "die Bibliotheken" },
  ],
  verbs: [
    {
      infinitive: "bringen",
      formInSentence: "hat ... gebracht",
      partizipII: "gebracht",
      auxiliary: "haben",
      present: {
        ich: "bringe",
        du: "bringst",
        erSieEs: "bringt",
        wir: "bringen",
        ihr: "bringt",
        sie: "bringen",
      },
    },
  ],
  breakdown: [
    { part: "Der Mann", role: "Subjekt (Nominativ)" },
    { part: "hat ... gebracht", role: "Prädikat" },
    { part: "das Buch", role: "Akkusativobjekt" },
    { part: "in die Bibliothek", role: "Lokaladverbial (Direktional)" },
  ],
  corrections: [],
};

export default function App() {
  const [sentence, setSentence] = useState(EXAMPLE_SENTENCE);
  const [data, setData] = useState<Analysis | null>(EXAMPLE_ANALYSIS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState<number | null>(null);

  const refreshCount = () => {
    fetchStats()
      .then((s) => setCount(s.count))
      .catch(() => {});
  };

  useEffect(() => {
    refreshCount();
  }, []);

  const onAnalyze = async () => {
    const trimmed = sentence.trim();
    if (!trimmed) return;
    setData(null);
    setError(null);
    setLoading(true);
    try {
      const result = await analyzeSentence(trimmed);
      setData(result);
      refreshCount();
    } catch (err) {
      setError(messageForError(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && error) setError(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [error]);

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-10 flex items-center gap-4 text-xs text-slate-500">
        {count !== null && (
          <span>
            translated {count.toLocaleString()} sentence
            {count === 1 ? "" : "s"}
          </span>
        )}
        <a
          href="/about"
          className="hover:text-slate-900 underline-offset-2 hover:underline"
        >
          About
        </a>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=amrable&repo=nicht&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="110"
          height="20"
          title="Star amrable/nicht on GitHub"
          className="block"
        />
      </div>
      <main
        lang="de"
        className="mx-auto px-6 sm:px-8 pb-12 w-full"
        style={{
          maxWidth: 1100,
          paddingTop: "clamp(40px, 5vw, 80px)",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 640 }}>
          <h1 className="text-xl font-medium text-slate-900 leading-snug">
            German Sentence Analyzer
          </h1>

          <div className="mt-8">
            {error && (
              <ErrorBanner message={error} onDismiss={() => setError(null)} />
            )}
            <SentenceInput
              value={sentence}
              onChange={setSentence}
              onSubmit={onAnalyze}
              disabled={loading}
              loading={loading}
            />
            <p className="mt-3 text-xs text-slate-500">
              Uses AI — results may be inaccurate. Double-check when it matters.
            </p>
          </div>
        </div>

        <div aria-live="polite" className="mt-10">
          {loading && (
            <div className="mx-auto" style={{ maxWidth: 640 }}>
              <LoadingSkeleton />
            </div>
          )}
          {!loading && data && (
            <div className="flex flex-col gap-8">
              {data.corrections.length > 0 && (
                <div className="mx-auto w-full" style={{ maxWidth: 640 }}>
                  <Corrections items={data.corrections} />
                </div>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <NounsTable nouns={data.nouns} />
                <VerbsTable verbs={data.verbs} />
                <Breakdown items={data.breakdown} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
