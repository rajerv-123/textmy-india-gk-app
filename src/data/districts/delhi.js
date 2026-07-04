export const delhiDistricts = {
  'new-delhi': {
    id: 'new-delhi',
    name: { en: 'New Delhi', hi: 'नई दिल्ली' },
    headquarters: { en: 'New Delhi', hi: 'नई दिल्ली' },
    area: { en: '42.7 sq km', hi: '42.7 वर्ग किमी' },
    population: { en: '2.5 lakh (2011)', hi: '2.5 लाख (2011)' },
    overview: {
      en: 'New Delhi is the capital district designed by Edwin Lutyens, housing Rashtrapati Bhavan, Parliament House, and India Gate.',
      hi: 'नई दिल्ली Edwin Lutyens द्वारा डिज़ाइन की गई राजधानी — राष्ट्रपति भवन, संसद भवन और India Gate।',
    },
    landmarks: [
      { en: 'Rashtrapati Bhavan', hi: 'राष्ट्रपति भवन' },
      { en: 'Parliament House (Sansad Bhavan)', hi: 'संसद भवन' },
      { en: 'India Gate', hi: 'इंडिया गेट' },
      { en: 'Connaught Place', hi: 'कनॉट प्लेस' },
    ],
    government: {
      en: 'Seat of the President, Parliament, and central ministries.',
      hi: 'राष्ट्रपति, संसद और केंद्रीय मंत्रालयों की सीट।',
    },
    sources: {
      wikipedia: 'https://en.wikipedia.org/wiki/New_Delhi_district',
      govt: 'https://delhi.gov.in/',
    },
  },
  'central-delhi': {
    id: 'central-delhi',
    name: { en: 'Central Delhi', hi: 'मध्य दिल्ली' },
    headquarters: { en: 'Daryaganj', hi: 'दरियागंज' },
    area: { en: '25 sq km', hi: '25 वर्ग किमी' },
    population: { en: '5.8 lakh (2011)', hi: '5.8 लाख (2011)' },
    overview: {
      en: 'Central Delhi includes Old Delhi (Shahjahanabad), Red Fort, Jama Masjid, and Chandni Chowk bazaar.',
      hi: 'मध्य दिल्ली में पुरानी दिल्ली (शाहजहानाबाद), लाल किला, जामा masjid और chandni chowk बाजार।',
    },
    landmarks: [
      { en: 'Red Fort (UNESCO)', hi: 'लाल किला (UNESCO)' },
      { en: 'Jama Masjid', hi: 'जामा masjid' },
      { en: 'Chandni Chowk', hi: 'chandi chowk' },
      { en: 'Raj Ghat (Mahatma Gandhi memorial)', hi: 'राज घाट' },
    ],
    sources: {
      wikipedia: 'https://en.wikipedia.org/wiki/Central_Delhi',
      govt: 'https://delhi.gov.in/',
    },
  },
  'south-delhi': {
    id: 'south-delhi',
    name: { en: 'South Delhi', hi: 'दक्षिण दिल्ली' },
    headquarters: { en: 'Saket', hi: 'साकet' },
    area: { en: '250 sq km', hi: '250 वर्ग किमी' },
    population: { en: '27.3 lakh (2011)', hi: '27.3 लाख (2011)' },
    overview: {
      en: 'South Delhi is an affluent district with Qutub Minar, Lotus Temple, Hauz Khas, and premier educational institutions.',
      hi: 'दक्षिण दिल्ली affluents जिला — Qutub Minar, Lotus Temple, Hauz Khas।',
    },
    landmarks: [
      { en: 'Qutub Minar (UNESCO)', hi: 'Qutub Minar (UNESCO)' },
      { en: 'Lotus Temple (Baháʼí House of Worship)', hi: 'Lotus Temple' },
      { en: 'Humayun\'s Tomb (UNESCO)', hi: 'Humayun\'s Tomb (UNESCO)' },
    ],
    sources: {
      wikipedia: 'https://en.wikipedia.org/wiki/South_Delhi',
      govt: 'https://delhi.gov.in/',
    },
  },
};

export const delhiDistrictNames = [
  'new-delhi', 'central-delhi', 'north-delhi', 'south-delhi',
  'east-delhi', 'west-delhi', 'north-east-delhi', 'north-west-delhi',
  'south-east-delhi', 'south-west-delhi', 'shahdara',
];

export default delhiDistricts;
