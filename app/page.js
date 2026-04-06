'use client';

import { useMemo, useState } from 'react';

const JUNK_KEYWORDS = [
  'candy',
  'chips',
  'soda',
  'cola',
  'fries',
  'burger',
  'donut',
  'doughnut',
  'pizza',
  'cookie',
  'ice cream',
  'milkshake',
  'chocolate',
  'hot dog'
];

const HEALTHY_KEYWORDS = [
  'apple',
  'banana',
  'broccoli',
  'carrot',
  'salad',
  'oatmeal',
  'brown rice',
  'grilled chicken',
  'beans',
  'nuts',
  'yogurt',
  'fish',
  'egg'
];

function classifyFood(input) {
  const normalized = input.trim().toLowerCase();

  if (!normalized) {
    return { label: 'Type something to begin.', tone: 'neutral' };
  }

  if (JUNK_KEYWORDS.some((word) => normalized.includes(word))) {
    return {
      label: 'Likely junk food 🍟',
      tone: 'junk'
    };
  }

  if (HEALTHY_KEYWORDS.some((word) => normalized.includes(word))) {
    return {
      label: 'Likely not junk food 🥗',
      tone: 'healthy'
    };
  }

  return {
    label: 'Not sure 🤔 — try a more specific food name.',
    tone: 'neutral'
  };
}

export default function Home() {
  const [foodName, setFoodName] = useState('');

  const result = useMemo(() => classifyFood(foodName), [foodName]);

  const badgeClasses = {
    junk: 'bg-red-100 text-red-700 border-red-200',
    healthy: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200'
  };

  return (
    <main className="min-h-screen px-4 py-12">
      <section className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">Junk or No</h1>
        <p className="mt-2 text-slate-600">
          Beginner-friendly food checker: type a food item and this app guesses if it is junk
          food.
        </p>

        <label htmlFor="food" className="mt-6 block text-sm font-medium text-slate-700">
          Food item
        </label>
        <input
          id="food"
          type="text"
          placeholder="Example: french fries"
          value={foodName}
          onChange={(event) => setFoodName(event.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-sky-200 transition focus:ring"
        />

        <div className={`mt-6 rounded-xl border px-4 py-3 font-medium ${badgeClasses[result.tone]}`}>
          {result.label}
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Tip: This is a simple keyword-based demo, not medical advice.
        </p>
      </section>
    </main>
  );
}
