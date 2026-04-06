# Junk or No

A beginner-friendly **Next.js + Tailwind CSS** app where users type a food item and the app tells whether it's likely junk food.

## Features

- Single input box for food names
- Instant classification (junk / not junk / not sure)
- Clear, simple UI for beginners
- Client-side logic in plain JavaScript

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## How it works

The app uses simple keyword matching:

- If your text includes words like `chips`, `soda`, or `pizza`, it returns **Likely junk food**.
- If your text includes words like `apple`, `salad`, or `beans`, it returns **Likely not junk food**.
- Otherwise it returns **Not sure**.

This is intentionally simple so beginners can understand and edit it quickly.
