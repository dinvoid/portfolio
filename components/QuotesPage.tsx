"use client";

import { useState } from "react";

export default function QuotesPage() {
  const allQuotes=[
    "No one cares about your excuses, they only see the results.",
    "If you quit now, you’ll end up exactly where you started — and that place made you want to change in the first place.",
    "Discipline will take you places motivation never will.",
    "Life doesn’t get easier, you just get stronger or you stay weak.",
    "Comfort is the killer of ambition.",
    "If you don’t work for your goals, you’ll spend your life working for someone else’s.",
    "Dreams don’t work unless you do.",
    "The world owes you nothing. It existed before you and will continue without you.",
    "Nobody is coming to save you — it’s all on you.",
    "You either suffer the pain of discipline, or the pain of regret. Your choice.",
    "Life doesn’t care about your feelings, only your actions.",
    "If you wait until you’re ‘ready,’ you’ll be waiting forever.",
    "Hard work beats talent when talent refuses to work hard.",
    "Most people don’t fail because they can’t, they fail because they won’t.",
    "If you keep doing what you’re doing, you’ll keep getting what you’re getting.",
    "One day, you’ll wish you started today.",
    "Take risks or stay average forever.",
    "If you don’t take the risk, you’ve already chosen failure.",
    "Comfort zones are where dreams go to die.",
    "No risk, no story. No risk, no growth.",
    "The biggest risk is thinking you’ll have another chance later.",
    "No one’s coming to save you.",
    "Your excuses don’t pay the bills.",
    "Time doesn’t stop while you waste it.",
    "Comfort kills ambition.",
    "Discipline beats motivation.",
    "If you don’t sacrifice for your dream, your dream becomes the sacrifice.",
    "You’re not tired, you’re just weak.",
    "Tomorrow is where failures hide.",
    "The world doesn’t care about your potential, only your results.",
    "You either make progress or make excuses.",
  ];

  const [quotes, setQuotes] = useState<string[]>([]);
  const [source, setSource] = useState<"local" | "api">("local");

  const getRandomLocalQuotes = () => {
    const shuffled = [...allQuotes].sort(() => 0.5 - Math.random());
    setQuotes(shuffled.slice(0, 5));
    setSource("local");
  };

  const getApiQuotes = async () => {
    try {
      const res = await fetch("https://type.fit/api/quotes");
      const data: { text: string; author: string | null }[] = await res.json();
      const randomQuotes = [...data].sort(() => 0.5 - Math.random()).slice(0, 5);
      setQuotes(randomQuotes.map((q) => `${q.text} — ${q.author ?? "Unknown"}`));
      setSource("api");
    } catch (error) {
      setQuotes([" Failed to fetch API quotes."]);
    }
  };

  return (
    <div className="p-6 font-mono bg-gray-900 text-gray-100">
      <h1 className="text-2xl text-pink-400 mb-4">💡 Harsh Reality & Random Quotes</h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={getRandomLocalQuotes}
          className={`px-4 py-2 rounded-lg shadow text-white ${
            source === "local" ? "bg-green-600" : "bg-gray-700 hover:bg-green-500"
          }`}
        >
          My Harsh Quotes
        </button>

        <button
          onClick={getApiQuotes}
          className={`px-4 py-2 rounded-lg shadow text-white ${
            source === "api" ? "bg-blue-600" : "bg-gray-700 hover:bg-blue-500"
          }`}
        >
          Free API Quotes
        </button>
      </div>

      <ul className="space-y-3">
        {quotes.map((q, i) => (
          <li key={i} className="text-gray-200 bg-gray-800 p-3 rounded-lg shadow">
            {q}
          </li>
        ))}
      </ul>
    </div>
  );
}
