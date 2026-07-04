export const maharashtraDistricts = {
  mumbai: {
    id: 'mumbai',
    name: { en: 'Mumbai City', hi: 'मुंबई शहर' },
    headquarters: { en: 'Mumbai', hi: 'मुंबई' },
    area: { en: '157 sq km (city district)', hi: '157 वर्ग किमी' },
    population: { en: '30.8 lakh (city)', hi: '30.8 लाख (शहर)' },
    overview: {
      en: 'Mumbai is India\'s financial capital and entertainment hub (Bollywood). Home to Gateway of India, Marine Drive, and BSE/NSE.',
      hi: 'मुंबई भारत की वित्तीय राजधानी और मनोरंजन hub (बॉलीवुड) — गेटवे ऑफ इंडिया, मरीन ड्राइव, BSE/NSE।',
    },
    landmarks: [
      { en: 'Gateway of India', hi: 'गेटवे ऑफ इंडिया' },
      { en: 'Chhatrapati Shivaji Terminus (UNESCO)', hi: 'छत्रपति शिवाजी टर्मिनस (UNESCO)' },
      { en: 'Elephanta Caves (UNESCO)', hi: 'एlephanta गुफाएं (UNESCO)' },
      { en: 'Marine Drive', hi: 'मरीन ड्राइव' },
    ],
    economy: {
      en: 'Finance, film industry, IT, diamond trade, and port commerce.',
      hi: 'वित्त, फिल्म उद्योग, IT, हीरा व्यापार और बंदरगाह commerce।',
    },
    sources: {
      wikipedia: 'https://en.wikipedia.org/wiki/Mumbai_City_district',
      govt: 'https://mumbaicity.gov.in/',
    },
  },
  pune: {
    id: 'pune',
    name: { en: 'Pune', hi: 'पुणे' },
    headquarters: { en: 'Pune', hi: 'पुणे' },
    area: { en: '15,642 sq km', hi: '15,642 वर्ग किमी' },
    population: { en: '94.3 lakh (2011)', hi: '94.3 लाख (2011)' },
    blocks: 14,
    overview: {
      en: 'Pune is the Oxford of the East — a major education and IT hub with Shaniwar Wada, Aga Khan Palace, and Sinhagad Fort.',
      hi: 'पुणे "पूर्व का Oxford" — प्रमुख शिक्षा और IT hub, शनिवार वाड़ा, आगा खान पैलेस।',
    },
    landmarks: [
      { en: 'Shaniwar Wada', hi: 'शनिवार वाड़ा' },
      { en: 'Aga Khan Palace', hi: 'आगा खान पैलेस' },
      { en: 'Sinhagad Fort', hi: 'सinhagad किला' },
    ],
    education: {
      en: 'Savitribai Phule Pune University, IIT Bombay (nearby), NDA, and numerous IT parks.',
      hi: 'सावित्रीबाई फुले पुणे विश्वविद्यालय, IIT Bombay, NDA और IT parks।',
    },
    sources: {
      wikipedia: 'https://en.wikipedia.org/wiki/Pune_district',
      govt: 'https://pune.gov.in/',
    },
  },
  aurangabad: {
    id: 'aurangabad',
    name: { en: 'Chhatrapati Sambhajinagar (Aurangabad)', hi: 'छत्रपति संभाजीनगर (औरंगाबाद)' },
    headquarters: { en: 'Chhatrapati Sambhajinagar', hi: 'छत्रपति संभाजीनगर' },
    area: { en: '10,107 sq km', hi: '10,107 वर्ग किमी' },
    population: { en: '37.0 lakh (2011)', hi: '37.0 लाख (2011)' },
    overview: {
      en: 'Home to the UNESCO World Heritage Sites of Ajanta and Ellora caves — masterpieces of Buddhist, Hindu, and Jain art.',
      hi: 'UNESCO विश्व धरोहर अजanta और ellora गुफाएं — बौद्ध, हिंदू और जain कला की masterpieces।',
    },
    landmarks: [
      { en: 'Ajanta Caves (UNESCO)', hi: 'अजanta गुफाएं (UNESCO)' },
      { en: 'Ellora Caves (UNESCO)', hi: 'ellora गुफाएं (UNESCO)' },
      { en: 'Bibi Ka Maqbara', hi: 'बीबी का मकबरा' },
      { en: 'Daulatabad Fort', hi: 'दौलatabad किला' },
    ],
    sources: {
      wikipedia: 'https://en.wikipedia.org/wiki/Chhatrapati_Sambhajinagar_district',
      govt: 'https://aurangabad.gov.in/',
    },
  },
};

export const maharashtraDistrictNames = [
  'mumbai', 'mumbai-suburban', 'pune', 'nagpur', 'nashik', 'aurangabad',
  'thane', 'kolhapur', 'solapur', 'satara', 'sangli', 'jalgaon',
  'amravati', 'latur', 'akola', 'ahmednagar', 'chandrapur', 'parbhani',
  'dhule', 'nandurbar', 'jalna', 'beed', 'osmanabad', 'nanded',
  'yavatmal', 'buldhana', 'washim', 'hingoli', 'gondia', 'bhandara',
  'gadchiroli', 'wardha', 'ratnagiri', 'raigad', 'palghar', 'sindhudurg',
];

export default maharashtraDistricts;
