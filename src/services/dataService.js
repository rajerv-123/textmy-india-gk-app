import { getStateById, getStates } from '../data/statesMetadata';
import { getDistrictsForState, getDistrictById, getDistrictCategories, getStateCategories } from '../data/stateGk';
import { enrichDistrict, fetchStateInfo } from './wikipediaService';

export async function loadStateWithEnrichment(stateId, lang = 'en') {
  const state = getStateById(stateId);
  if (!state) return null;

  const wiki = await fetchStateInfo(state.name.en, lang);
  return {
    ...state,
    wikiExtract: wiki?.extract,
    wikiUrl: wiki?.url,
    wikiThumbnail: wiki?.thumbnail,
    categories: getStateCategories(stateId),
    districts: getDistrictsForState(stateId),
  };
}

export async function loadDistrictDetail(stateId, districtId, lang = 'en') {
  let district = getDistrictById(stateId, districtId);
  if (!district) return null;

  const state = getStateById(stateId);
  if (district._placeholder && state) {
    district = await enrichDistrict(district, state.name.en, lang);
  }

  return {
    district,
    categories: getDistrictCategories(district),
    state,
  };
}

export function searchStatesAndDistricts(query, lang = 'en') {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results = [];
  const states = getStates();

  states.forEach((state) => {
    const nameEn = state.name.en.toLowerCase();
    const nameHi = state.name.hi;
    if (nameEn.includes(q) || nameHi.includes(q)) {
      results.push({ type: 'state', id: state.id, name: state.name, color: state.color, region: state.region });
    }

    const districts = getDistrictsForState(state.id);
    districts.forEach((d) => {
      const dEn = d.name.en.toLowerCase();
      const dHi = d.name.hi;
      if (dEn.includes(q) || dHi.includes(q)) {
        results.push({
          type: 'district',
          stateId: state.id,
          id: d.id,
          name: d.name,
          stateName: state.name,
          color: state.color,
          region: state.region,
        });
      }
    });
  });

  return results.slice(0, 30);
}
