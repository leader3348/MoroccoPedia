# MoroccoPedia Backend API 🇲🇦

Node.js + Express + MongoDB backend for the MoroccoPedia platform.

---

## Quick Start

```bash
# 1. Install
npm install

# 2. Configure environment
cp .env.example .env
# Edit .env with your MongoDB URI

# 3. Start development server
npm run dev
# → http://localhost:5000

# 4. (Optional) Seed database with dialect words
npm run seed
```

---

## API Endpoints

### 🗣 Dialect Dictionary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/dialect/search?q=zwina` | Fuzzy search words |
| GET | `/api/dialect/word/zwina` | Get a single word |
| GET | `/api/dialect/translate/l3zawi?from=Marrakesh` | ★ Regional translation |
| GET | `/api/dialect/compare?r1=Marrakesh&r2=North` | Compare two regions |
| GET | `/api/dialect/region/Marrakesh` | All words from a region |
| GET | `/api/dialect/random` | Random word of the day |
| GET | `/api/dialect/regions` | List all regions |
| GET | `/api/dialect/themes` | List all themes |

---

### ★ Regional Translation — The Core Feature

**GET `/api/dialect/translate/:word`**

Returns how a word/concept is expressed in ALL Moroccan regions.

**Example:**
```
GET /api/dialect/translate/l3zawi?from=Marrakesh
```

**Response:**
```json
{
  "found": true,
  "word": "l3zawi",
  "arabic": "العزاوي",
  "definition": "A person from Azemmour...",
  "fromRegion": {
    "region": "Marrakesh",
    "dialect": "Marrakshi",
    "word": "L3zawi",
    "meaning": "Person from the south / Azemmour area"
  },
  "variants": [
    { "region": "North (Tangier / Tetouan)", "dialect": "Tanjawi", "word": "L-Jnubi", "meaning": "The southerner" },
    { "region": "Casablanca",                 "dialect": "Casawi",  "word": "Lmrrakchi", "meaning": "..." },
    { "region": "Fès",                        "dialect": "Fassi",   "word": "L-Blidi", "meaning": "The villager" },
    { "region": "Souss (Agadir)",             "dialect": "Soussiya","word": "Soussi / Amazigh", "meaning": "..." },
    { "region": "Oujda (East)",               "dialect": "Sharqi",  "word": "L-Gharbi", "meaning": "The westerner" }
  ],
  "quickMap": {
    "Marrakesh": "L3zawi",
    "North (Tangier / Tetouan)": "L-Jnubi",
    "Fès": "L-Blidi",
    "Casablanca": "Lmrrakchi"
  }
}
```

**More examples:**
```
GET /api/dialect/translate/zwina
→ Marrakesh: "Zwina", North: "Mli7a", Souss: "Ifilki", Sahara: "Zena"

GET /api/dialect/translate/bezzaf
→ Central: "Bezzaf", North: "Wajid", East: "Barsha", Rif: "Aṭṭas"
```

---

**GET `/api/dialect/compare?r1=Marrakesh&r2=North`**

```json
{
  "region1": "Marrakesh",
  "region2": "North",
  "totalDifferences": 6,
  "differences": [
    {
      "concept": "zwina",
      "Marrakesh": { "word": "Zwina",  "meaning": "Beautiful" },
      "North":     { "word": "Mli7a",  "meaning": "Beautiful (Northern)" }
    },
    {
      "concept": "bezzaf",
      "Marrakesh": { "word": "Bezzaf", "meaning": "A lot" },
      "North":     { "word": "Wajid",  "meaning": "A lot (Spanish influence)" }
    }
  ]
}
```

---

### 🔄 Translation (Darija → Other Languages)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/translate` | Translate Darija text |
| GET  | `/api/translate/languages` | List supported languages |
| GET  | `/api/translate/phrases` | Get all preset phrases |

**POST `/api/translate`**
```json
Body: { "text": "labas alik?", "to": "en" }

Response:
{
  "original": "labas alik?",
  "translated": "How are you? Are you doing well?",
  "language": "en",
  "method": "phrase-dictionary",
  "confidence": "high"
}
```

Supported `to` values: `ar` `fr` `en` `es`

---

### 🏙 Cities

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cities` | List all cities |
| GET | `/api/cities/marrakesh` | Get city details |

---

### 🤝 Community

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET  | `/api/community` | List contributions |
| POST | `/api/community` | Submit contribution |
| POST | `/api/community/:id/like` | Like a contribution |

---

### 🤖 AI Assistant

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ai/chat` | Ask the cultural AI |

```json
Body:    { "message": "Tell me about Gnawa music" }
Response:{ "message": "Gnawa music is a UNESCO-listed...", "type": "cultural-info" }
```

---

## Connect to Next.js Frontend

Add to your Next.js `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Then call the API:
```javascript
// Search a word
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dialect/search?q=zwina`);
const data = await res.json();

// Translate across regions
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dialect/translate/l3zawi?from=Marrakesh`);
const data = await res.json();
// data.variants → array of { region, word, meaning }
```

---

## Project Structure

```
src/
├── server.js              — Express app entry
├── config/
│   └── db.js              — MongoDB connection
├── routes/
│   ├── dialect.js         — Dialect search + regional translation
│   ├── translate.js       — Darija → AR/FR/EN/ES
│   ├── cities.js          — City data
│   ├── community.js       — Contributions
│   ├── search.js          — Global search
│   └── ai.js              — AI assistant
├── services/
│   └── dialectService.js  — Core logic: search, translate, compare
├── models/
│   ├── Word.js            — Mongoose word schema
│   ├── City.js            — Mongoose city schema
│   └── Contribution.js    — Mongoose contribution schema
└── data/
    └── dialectData.js     — 9 words × 7 regions static dataset
scripts/
└── seed.js                — Seed MongoDB with dialect data
```
