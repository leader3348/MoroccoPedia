# MoroccoPedia 🇲🇦

**The living digital encyclopedia of Moroccan culture, dialect and heritage.**

A national-scale cultural platform built with Next.js 14 + Tailwind CSS 3.

---

## Tech Stack

| Layer      | Technology |
|------------|------------|
| Framework  | Next.js 14 (Pages Router) |
| Styling    | Tailwind CSS 3 + CSS Variables |
| Fonts      | Playfair Display (display) + Outfit (body) |
| Icons      | Lucide React |
| Animation  | Framer Motion (optional) |
| AI Backend | Python + FastAPI (separate service) |
| Database   | MongoDB |
| Maps       | Mapbox / Leaflet |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         — sticky top navigation
│   ├── Footer.jsx         — 4-column footer
│   ├── Layout.jsx         — page wrapper
│   └── SectionHeader.jsx  — reusable section titles
├── data/
│   └── constants.js       — all platform data (cities, features, dictionary, AI models…)
├── hooks/
│   ├── useAnimatedMount.js — staggered fade-up animation
│   └── useLocalStorage.js  — persisted state
├── pages/
│   ├── _app.jsx            — app entry
│   ├── _document.jsx       — custom HTML head
│   ├── index.jsx           — Homepage
│   ├── map.jsx             — Interactive Cultural Map
│   ├── city/[slug].jsx     — Dynamic City Guide
│   ├── dialect.jsx         — Dialect Dictionary + Translation
│   ├── community.jsx       — Community Contributions
│   ├── tourism.jsx         — Tourism Mode
│   ├── ai.jsx              — AI Features + Chatbot
│   ├── archive.jsx         — Heritage Archive
│   ├── education.jsx       — Education Hub
│   └── home-culture.jsx    — Moroccan Home Culture
└── styles/
    └── globals.css         — CSS variables + Tailwind component layer
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## Design System

### Colors
```css
--terra:  #c0390a   /* Terracotta — primary brand */
--gold:   #c47b0a   /* Saffron gold — accent */
--teal:   #0a7a6a   /* Heritage teal — secondary */
--cream:  #fdf8f2   /* Off-white background */
--ink:    #1c1007   /* Dark brown text */
--muted:  #7a6248   /* Warm grey muted text */
```

### Typography
- **Display**: `Playfair Display` — headings, titles, Arabic-inspired elegance
- **Body**: `Outfit` — clean, modern, highly legible

### Key CSS Classes (globals.css)
- `.btn-primary` — gradient terra→gold button
- `.btn-outline` — outlined terra button
- `.btn-teal` — teal CTA button
- `.card-base` — white card with border
- `.card-hover` — card with hover lift effect
- `.badge-terra / badge-gold / badge-teal` — coloured badges
- `.tag-chip` — filter chip / tag
- `.nav-link` — navigation link
- `.sec-label` — section eyebrow label
- `.fact-row` — key/value row
- `.word-card` — dictionary word card
- `.page-hdr` — dark page header section

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Hero, features grid, cities belt |
| `/map` | Cultural Map | Interactive city dots + sidebar list |
| `/city/[slug]` | City Guide | Deep dive: food, crafts, music, timeline, dialect |
| `/dialect` | Dictionary | Word cards, search, translation panel, alphabet browser |
| `/community` | Community | Contribution feed, upload CTA, submit form |
| `/tourism` | Tourism Mode | Experience cards, Darija phrases (tap to copy) |
| `/ai` | AI Features | 6 AI model cards + live chatbot |
| `/archive` | Heritage Archive | Digitised records browser |
| `/education` | Education Hub | Course cards, curriculum modules |
| `/home-culture` | Home Culture | Regional traditions, daily rituals |

---

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## Roadmap

- [ ] Integrate real Mapbox interactive map
- [ ] Connect MongoDB for community contributions
- [ ] Build Python/FastAPI AI backend (dialect detection, translation)
- [ ] Add authentication (NextAuth.js)
- [ ] Implement real-time search with Algolia or Meilisearch
- [ ] Launch mobile app (React Native)

---

## License

© 2025 MoroccoPedia. All rights reserved.
