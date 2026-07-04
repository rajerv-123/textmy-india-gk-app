const WIKI_API = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const WIKI_API_HI = 'https://hi.wikipedia.org/api/rest_v1/page/summary/';
const cache = new Map();

export async function fetchWikipediaSummary(title, lang = 'en') {
  const cacheKey = `${lang}:${title}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  const base = lang === 'hi' ? WIKI_API_HI : WIKI_API;
  const encoded = encodeURIComponent(title.replace(/ /g, '_'));

  try {
    const response = await fetch(`${base}${encoded}`);
    if (!response.ok) return null;
    const data = await response.json();
    const result = {
      title: data.title,
      extract: data.extract,
      thumbnail: data.thumbnail?.source,
      url: data.content_urls?.desktop?.page,
      description: data.description,
    };
    cache.set(cacheKey, result);
    return result;
  } catch {
    return null;
  }
}

export async function fetchDistrictInfo(stateName, districtName, lang = 'en') {
  const titles = [
    `${districtName} district`,
    `${districtName}, ${stateName}`,
    districtName,
  ];

  for (const title of titles) {
    const result = await fetchWikipediaSummary(title, lang);
    if (result?.extract) return result;
  }
  return null;
}

export async function fetchStateInfo(stateName, lang = 'en') {
  return fetchWikipediaSummary(stateName, lang);
}

export async function enrichDistrict(district, stateName, lang = 'en') {
  if (!district._placeholder) return district;

  const wikiData = await fetchDistrictInfo(
    stateName,
    typeof district.name === 'object' ? district.name.en : district.name,
    lang,
  );

  if (!wikiData) return district;

  return {
    ...district,
    overview: {
      en: wikiData.extract,
      hi: wikiData.extract,
    },
    _enriched: true,
    _wikiUrl: wikiData.url,
    _thumbnail: wikiData.thumbnail,
  };
}

export function clearWikiCache() {
  cache.clear();
}
