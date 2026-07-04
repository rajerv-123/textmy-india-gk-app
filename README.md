# India GK App (textmy-india-gk-app)

A comprehensive bilingual (English & Hindi) React Native Expo app for Indian General Knowledge — 70+ national GK questions, state-wise data for 14 states, 50+ district-level information, interactive quizzes, dark mode, and live Wikipedia enrichment.

## ✨ Features  

- **National GK (70+ Questions)** — Constitution (8 Q), History (9 Q), Geography (8 Q), Rivers (6 Q), Economy (6 Q), Culture (8 Q), Science (6 Q), Sports (6 Q), Literature (5 Q), plus 10 daily facts
- **State GK** — Comprehensive data for 14 states (Uttar Pradesh, Tamil Nadu, Rajasthan, Odisha, West Bengal, Punjab, Haryana, Gujarat, Goa, Assam, Karnataka, Madhya Pradesh, Bihar, Kerala) + 8 UTs
- **District Details** — In-depth information for 50+ districts with history, geography, culture, tourism, economy
- **Bilingual UI** — Seamlessly switch between English and Hindi (persisted in local storage)
- **Dark Mode** — Light/dark theme with persisted preference
- **Interactive Quizzes** — National and state-level MCQs with timer and scoring
- **Sources** — Wikipedia + official government portal links on every screen
- **Live Data** — Fetch live district data from Wikipedia for enrichment

## 📊 Comprehensive Data Coverage

### **National GK Categories**
- Constitution & Polity
- Indian History
- Geography  
- Rivers & Water Bodies
- Economy & Industry
- Culture & Heritage
- Science & Technology
- Sports & Awards
- Literature & Authors
- Daily Facts

### **States Covered (14)**
1. **Uttar Pradesh** — Lucknow, Kanpur, Varanasi, Mathura
2. **Tamil Nadu** — Chennai, Madurai, Salem, Coimbatore
3. **Rajasthan** — Jaipur, Jodhpur, Udaipur, Ajmer
4. **Odisha** — Bhubaneswar, Puri, Cuttack, Rourkela
5. **West Bengal** — Kolkata, Darjeeling, Siliguri, Asansol
6. **Punjab** — Amritsar, Chandigarh, Ludhiana
7. **Haryana** — Faridabad, Gurugram, Hisar
8. **Gujarat** — Ahmedabad, Surat, Vadodara
9. **Goa** — North Goa, South Goa
10. **Assam** — Guwahati, Dispur, Silchar
11. **Karnataka** — Bengaluru, Mysuru, Mangaluru
12. **Madhya Pradesh** — Indore, Bhopal, Khajuraho
13. **Bihar** — Patna, Gaya, Bodh Gaya, Nalanda
14. **Kerala** — Thiruvananthapuram, Kochi, Kottayam, Kozhikode

### **All 8 Union Territories**
- Delhi, Chandigarh, Ladakh, Jammu & Kashmir, Lakshadweep, Puducherry, Andaman & Nicobar, Dadra & Nagar Haveli

## 🌐 Bilingual Support

- **English & Hindi** for all questions, answers, state information, district details
- Real-time language switching with one tap
- Persistent language preference saved locally
- Complete translations across UI and all data

## Project Structure

```
textmy-india-gk-app/
├── assets/                      # App icons and state images
├── src/
│   ├── components/              # Card, Header, StateSelector, SettingsPanel
│   ├── context/                 # Theme + Language providers
│   ├── data/
│   │   ├── nationalGk.js        # 70+ national GK questions across 9 categories
│   │   ├── stateGk.js           # State categories and district registry
│   │   ├── statesMetadata.js    # 28 states + 8 UTs metadata (name, capital, area, population, literacy, overview)
│   │   └── districts/           # District-level data for 50+ cities
│   │       ├── bihar.js         ├── kerala.js        ├── maharashtra.js      ├── delhi.js
│   │       ├── uttar-pradesh.js ├── tamil-nadu.js    ├── rajasthan.js        ├── odisha.js
│   │       ├── west-bengal.js   ├── punjab.js        ├── haryana.js          ├── gujarat.js
│   │       ├── goa.js           ├── assam.js         ├── karnataka.js        ├── madhya-pradesh.js
│   ├── i18n/                    # English + Hindi translations (i18next)
│   ├── navigation/              # Tab + stack navigators
│   ├── screens/                 # Home, StateList, StateDetail, DistrictDetail, Quiz, NationalGK
│   ├── services/                # Wikipedia API + data enrichment service
│   ├── styles/                  # Light/dark theme configurations
│   └── utils/                   # Quiz engine
├── App.js
├── app.json
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

### Installation & Running

```bash
cd Projects/textmy-india-gk-app
npm install
npx expo start
```

**On your phone:**
- Scan the QR code with **Expo Go** app (iOS/Android)
- Or press `w` to open in web browser

**On emulator:**
- Press `a` for Android emulator
- Press `i` for iOS simulator

### 🌐 Language Switching

The app supports **English & Hindi** with real-time switching:

1. **Tap the ⚙️ Settings icon** (top-right corner)
2. **Select Language:**
   - 🇬🇧 English (Global)
   - 🇮🇳 हिंदी (Devanagari)
3. Your preference is **automatically saved** to device

**All content translates instantly:**
- National GK questions and answers
- State names and capitals
- District information and descriptions
- Quiz questions and options
- UI buttons and labels

### 🎮 How to Use

#### Home Tab
- View daily GK fact (changes each day)
- Quick stats about India
- National GK categories overview

#### National GK
- Browse 70+ questions across 9 categories
- Read bilingual explanations
- View source links (Wikipedia, Government sites)

#### States Tab
- Select from 14 comprehensive states or 8 UTs
- View state metadata (capital, area, population, literacy rate)
- Explore 50+ cities/districts with detailed information
- Each district includes:
  - Historical significance
  - Geography & location
  - Culture & heritage
  - Tourism attractions
  - Economy & industries

#### Quiz
- National GK Quiz: 70 questions
- State-wise Quizzes: Available for each state
- Multiple choice questions with instant feedback
- Timer for each question
- Score calculation

#### Settings
- **Language:** English ↔️ Hindi
- **Theme:** Light ☀️ / Dark 🌙 mode
- **About:** App version and credits

### 📱 Screens Overview

| Screen | Purpose |
|--------|---------|
| **Home** | Daily facts, quick stats, category overview |
| **National GK** | Browse 70+ GK questions by category |
| **State List** | Select from 14 states + 8 UTs |
| **State Detail** | State metadata and district list |
| **District Detail** | Comprehensive district information |
| **Quiz** | Interactive MCQ testing |
| **Settings** | Language & theme preferences |

## 🏗️ Tech Stack

- **React Native** — Cross-platform mobile development
- **Expo** — Fast development and deployment
- **i18next** — Internationalization (EN/HI)
- **AsyncStorage** — Local data persistence
- **React Navigation** — Navigation stack and tabs
- **Fetch API** — Wikipedia integration

## 📊 Data Statistics

| Category | Count |
|----------|-------|
| National GK Questions | 70+ |
| States with Data | 14 |
| Union Territories | 8 |
| Districts Covered | 50+ |
| Languages | 2 (EN/HI) |
| Themes | 2 (Light/Dark) |

## 🔗 Data Sources

- **Wikipedia** — Live enrichment for districts
- **Official Government Portals** — State & central data
- **UNESCO Sites** — Heritage information
- **Ministry of Tourism** — Tourism details

## 🛠️ Build (EAS)

```bash
npm install -g eas-cli
eas build --platform android
eas build --platform ios
```

## 📝 License

MIT

## 👤 Author

Created as a bilingual educational GK app for India

---

**🎓 Happy Learning!** — Read in your preferred language (English/Hindi)

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
