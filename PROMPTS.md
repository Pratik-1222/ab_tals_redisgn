# AI Usage Log

## Prompt 1 — Project Planning

### Tool
ChatGPT

### Prompt
Create a mobile-first product plan for an ABTalks 60-day coding challenge redesign with three routes: landing page, dashboard, and challenge day.

### Result
Used the suggested information architecture and screen requirements as the basis for the project.

---

## Prompt 2 — Project Scaffold

### Tool
ChatGPT

### Prompt
Scaffold a Vite + React app with three pages (`/`, `/dashboard`, `/day/12`), mobile-first components, and initial mock data. Record the prompt and results.

### Result
Created initial scaffold in `abtalks-redesign/` with pages, components, styles, mock data, and README.

---

## Prompt 3 — Landing polish

### Tool
ChatGPT

### Prompt
Polish the Landing page for mobile (390px): hero sizing, progress mini-card, proof badges, steps, trust section, and add a sticky bottom CTA. Update styles accordingly.

### Result
Updated `src/pages/Landing.jsx` and `src/styles.css` to improve mobile layout and add a bottom sticky CTA.

---

## Prompt 4 — Dashboard UI

### Tool
ChatGPT

### Prompt
Implement a mobile-first Dashboard UI that shows a supportive "Momentum Recovery" state when a day is missed, a circular progress visual, today's build card, stats grid, and achievements. Wire to `mockData.json`.

### Result
Added `src/pages/Dashboard.jsx`, updated `src/styles.css`, and extended `src/data/mockData.json` with `achievements`.

---

## Prompt 5 — Challenge Day submit flow

### Tool
ChatGPT

### Prompt
Implement the Day 12 challenge screen submit flow: validate GitHub/commit/LinkedIn URLs, enable submit only when at least one valid URL is present, save proof locally (mock via localStorage), and show a friendly success banner listing saved links.

### Result
Updated `src/pages/ChallengeDay.jsx` to validate URLs, save a mock payload to `localStorage`, and display a success banner. Added small compatibility styles in `src/styles.css`.

---

## Prompt 6 — Mock profiles & edge cases

### Tool
ChatGPT

### Prompt
Add multiple demo profiles to `mockData.json` (normal, missed, new, empty) and add a small profile selector in the Dashboard to switch between them for testing edge cases like missed days and empty profiles.

### Result
Replaced `mockData.json` with a `profiles` array and updated `src/pages/Dashboard.jsx` to allow selecting demo profiles. This enables testing edge states without a backend.

---

## Prompt 7 — Mobile polish (390px)

### Tool
ChatGPT

### Prompt
Apply a mobile polish focused on 390px: tighten page paddings, ensure buttons meet 44px touch target, increase readability, adjust stat and card padding, and ensure bottom navigation/CTA spacing doesn't overlap content.

### Result
Updated `src/styles.css` with a `@media (max-width:400px)` section that adjusts fonts, paddings, input sizes, button sizes, and bottom spacing for all three routes.
