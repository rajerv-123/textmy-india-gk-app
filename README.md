# India GK App (textmy-india-gk-app)

A bilingual (English / Hindi) React Native Expo app for Indian General Knowledge — national facts, state-wise details, district-level information, interactive quizzes, dark mode, and live Wikipedia enrichment.

## Features

- **National GK** — Constitution, history, geography, rivers, economy, culture, science, sports
- **State GK** — All 28 states + 8 UTs with capital, area, population, literacy, official links
- **District Details** — In-depth district data for Bihar, Kerala, Maharashtra, Delhi (+ Wikipedia fetch for others)
- **Bilingual UI** — Switch between English and Hindi anytime (persisted)
- **Dark Mode** — Light / dark theme with persisted preference
- **Quizzes** — National and state-level MCQ with timer and scoring
- **Sources** — Wikipedia + official government portal links on every screen

## Project Structure

```
textmy-india-gk-app/
├── assets/                     # App icons and state images
├── src/
│   ├── components/             # Card, Header, StateSelector, SettingsPanel
│   ├── context/                # Theme + Language providers
│   ├── data/                   # nationalGk, stateGk, districts/, statesMetadata
│   ├── i18n/                   # English + Hindi translations
│   ├── navigation/             # Tab + stack navigators
│   ├── screens/                # Home, StateList, StateDetail, DistrictDetail, Quiz
│   ├── services/               # Wikipedia API + data enrichment
│   ├── styles/                 # Theme (light/dark)
│   └── utils/                  # Quiz engine
├── App.js
├── app.json
└── eas.json
```

## Getting Started

```bash
cd Projects/textmy-india-gk-app
npm install
npx expo start
```

Scan the QR code with **Expo Go** on your phone, or press `a` for Android emulator / `i` for iOS simulator.

## Build (EAS)

```bash
npm install -g eas-cli
eas build --platform android
eas build --platform ios
```

## Data Sources

| Source | Usage |
|--------|-------|
| [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/) | Live district/state summaries |
| [India.gov.in](https://www.india.gov.in/) | Official government links |
| State NIC portals | District-level official links (e.g. patna.nic.in) |

## Adding More District Data

Edit `src/data/districts/<state>.js` and register in `src/data/stateGk.js`:

```js
import newStateDistricts, { newStateDistrictNames } from './districts/new-state';

districtRegistry['new-state'] = { data: newStateDistricts, names: newStateDistrictNames };
```

Districts without local data automatically fetch summaries from Wikipedia when opened.

## License

MIT
