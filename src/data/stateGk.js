import biharDistricts, { biharDistrictNames } from './districts/bihar';
import keralaDistricts, { keralaDistrictNames } from './districts/kerala';
import maharashtraDistricts, { maharashtraDistrictNames } from './districts/maharashtra';
import delhiDistricts, { delhiDistrictNames } from './districts/delhi';
import uttarPradeshDistricts, { utPradeshDistrictNames } from './districts/uttar-pradesh';
import tamilNaduDistricts, { tamilNaduDistrictNames } from './districts/tamil-nadu';
import rajasthanDistricts, { rajasthanDistrictNames } from './districts/rajasthan';
import odishaDistricts, { odishaDistrictNames } from './districts/odisha';
import westBengalDistricts, { westBengalDistrictNames } from './districts/west-bengal';
import { stateMeta } from './statesMetadata';

const districtRegistry = {
  bihar: { data: biharDistricts, names: biharDistrictNames },
  kerala: { data: keralaDistricts, names: keralaDistrictNames },
  maharashtra: { data: maharashtraDistricts, names: maharashtraDistrictNames },
  delhi: { data: delhiDistricts, names: delhiDistrictNames },
  'uttar-pradesh': { data: uttarPradeshDistricts, names: utPradeshDistrictNames },
  'tamil-nadu': { data: tamilNaduDistricts, names: tamilNaduDistrictNames },
  rajasthan: { data: rajasthanDistricts, names: rajasthanDistrictNames },
  odisha: { data: odishaDistricts, names: odishaDistrictNames },
  'west-bengal': { data: westBengalDistricts, names: westBengalDistrictNames },
};

export const stateCategories = {
  history: { icon: '📜', key: 'history' },
  geography: { icon: '🏔️', key: 'geography' },
  culture: { icon: '🎨', key: 'culture' },
  economy: { icon: '💼', key: 'economy' },
  government: { icon: '🏛️', key: 'government' },
  tourism: { icon: '🧳', key: 'tourism' },
  education: { icon: '🎓', key: 'education' },
  agriculture: { icon: '🌾', key: 'agriculture' },
};

export function getDistrictsForState(stateId) {
  const registry = districtRegistry[stateId];
  if (!registry) return [];

  const { data, names } = registry;
  return names.map((id) => {
    if (data[id]) return data[id];
    const displayName = id.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      id,
      name: { en: displayName, hi: displayName },
      headquarters: { en: displayName, hi: displayName },
      overview: {
        en: `${displayName} district — tap to load detailed information from official sources.`,
        hi: `${displayName} जिला — आधिकारिक स्रोतों से विस्तृत जानकारी के लिए टैप करें।`,
      },
      sources: {
        wikipedia: `https://en.wikipedia.org/wiki/${displayName.replace(/ /g, '_')}_district`,
        govt: stateMeta[stateId]?.sources?.govt || 'https://www.india.gov.in/',
      },
      _placeholder: true,
    };
  });
}

export function getDistrictById(stateId, districtId) {
  const districts = getDistrictsForState(stateId);
  return districts.find((d) => d.id === districtId) || null;
}

export function getStateCategories(stateId) {
  const meta = stateMeta[stateId];
  if (!meta) return [];

  const cats = [];
  if (meta.overview) cats.push({ key: 'overview', icon: '📋', content: meta.overview });
  if (meta.history) cats.push({ key: 'history', icon: '📜', content: meta.history });
  if (meta.geography) cats.push({ key: 'geography', icon: '🏔️', content: meta.geography });
  if (meta.culture) cats.push({ key: 'culture', icon: '🎨', content: meta.culture });
  if (meta.economy) cats.push({ key: 'economy', icon: '💼', content: meta.economy });

  cats.push({
    key: 'government',
    icon: '🏛️',
    content: {
      en: `Official portal: ${meta.sources?.govt || 'india.gov.in'}`,
      hi: `आधिकारिक पोर्टल: ${meta.sources?.govt || 'india.gov.in'}`,
    },
    link: meta.sources?.govt,
  });

  return cats;
}

export function getDistrictCategories(district) {
  if (!district) return [];
  const cats = [];
  const fields = [
    'overview', 'history', 'geography', 'culture', 'economy',
    'tourism', 'education', 'agriculture', 'government', 'connectivity',
    'handloom', 'demographics',
  ];
  fields.forEach((key) => {
    if (district[key]) {
      cats.push({
        key,
        icon: stateCategories[key]?.icon || '📌',
        content: district[key],
        link: typeof district[key] === 'object' && district[key].link ? district[key].link : null,
      });
    }
  });
  if (district.landmarks) {
    cats.push({
      key: 'landmarks',
      icon: '🏰',
      content: district.landmarks,
      isList: true,
    });
  }
  return cats;
}

export function getStateQuizzes(stateId) {
  const meta = stateMeta[stateId];
  if (!meta) return [];

  const questions = [
    {
      id: `${stateId}-capital`,
      question: { en: `What is the capital of ${meta.name.en}?`, hi: `${meta.name.hi} की राजधानी क्या है?` },
      correctAnswer: meta.capital,
      options: shuffleAnswers(meta.capital, [
        { en: 'Mumbai', hi: 'मुंबई' },
        { en: 'Kolkata', hi: 'कोलकाता' },
        { en: 'Chennai', hi: 'चेन्नई' },
      ]),
    },
    {
      id: `${stateId}-language`,
      question: { en: `What is the official language of ${meta.name.en}?`, hi: `${meta.name.hi} की राजभाषा क्या है?` },
      correctAnswer: meta.language,
      options: shuffleAnswers(meta.language, [
        { en: 'English', hi: 'अंग्रेजी' },
        { en: 'Sanskrit', hi: 'संस्कृत' },
        { en: 'Urdu', hi: 'उर्दू' },
      ]),
    },
  ];

  const districts = getDistrictsForState(stateId);
  if (districts.length > 0) {
    const d = districts[0];
    questions.push({
      id: `${stateId}-district-count`,
      question: {
        en: `How many districts are listed for ${meta.name.en}?`,
        hi: `${meta.name.hi} के लिए कितने जिले सूचीबद्ध हैं?`,
      },
      correctAnswer: { en: String(districts.length), hi: String(districts.length) },
      options: shuffleAnswers(
        { en: String(districts.length), hi: String(districts.length) },
        [{ en: '10', hi: '10' }, { en: '50', hi: '50' }, { en: '100', hi: '100' }],
      ),
    });
  }

  return questions;
}

function shuffleAnswers(correct, wrongs) {
  const all = [correct, ...wrongs.slice(0, 3)];
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all;
}

export { districtRegistry };
