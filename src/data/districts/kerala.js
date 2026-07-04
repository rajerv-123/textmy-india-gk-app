export const keralaDistricts = {
  thiruvananthapuram: {
    id: 'thiruvananthapuram',
    name: { en: 'Thiruvananthapuram', hi: 'तिरुवनंतपुरम' },
    headquarters: { en: 'Thiruvananthapuram', hi: 'तिरुवनंतपुरम' },
    area: { en: '2,189 sq km', hi: '2,189 वर्ग किमी' },
    population: { en: '33.0 lakh (2011)', hi: '33.0 लाख (2011)' },
    blocks: 11,
    overview: {
      en: 'Thiruvananthapuram is Kerala\'s capital district, home to Padmanabhaswamy Temple, Kovalam beach, and ISRO\'s VSSC.',
      hi: 'तिरुवनंतपुरम केरल की राजधानी जिला — पद्मनाभस्वामी मंदिर, कोवलम समुद्र तट और ISRO का VSSC।',
    },
    landmarks: [
      { en: 'Sri Padmanabhaswamy Temple', hi: 'श्री पद्मनाभस्वामी मंदिर' },
      { en: 'Kovalam Beach', hi: 'कोवलम समुद्र तट' },
      { en: 'Napier Museum & Zoo', hi: 'नेपियर संग्रहालय और चिड़ियाघर' },
      { en: 'Ponmudi Hill Station', hi: 'पonmudi हिल स्टेशन' },
    ],
    economy: {
      en: 'IT (Technopark), tourism, aerospace research (VSSC/ISRO), and government administration.',
      hi: 'IT (टेकnopark), पर्यटन, एयरospace अनुसंधान (VSSC/ISRO) और सरकारी प्रशासन।',
    },
    sources: {
      wikipedia: 'https://en.wikipedia.org/wiki/Thiruvananthapuram_district',
      govt: 'https://trivandrum.nic.in/',
    },
  },
  ernakulam: {
    id: 'ernakulam',
    name: { en: 'Ernakulam', hi: 'एर्नाकुलम' },
    headquarters: { en: 'Kakkanad', hi: 'कक्कनाद' },
    area: { en: '3,068 sq km', hi: '3,068 वर्ग किमी' },
    population: { en: '32.8 lakh (2011)', hi: '32.8 लाख (2011)' },
    blocks: 14,
    overview: {
      en: 'Ernakulam includes Kochi, the commercial capital of Kerala, with historic Fort Kochi, Chinese fishing nets, and backwaters.',
      hi: 'एर्नाकुलम में कोच्चि है — केरल की व्यापारिक राजधानी, ऐतिहासिक फोर्ट कोच्चि, चीनी मछुआरे जाल और बैकवाटर।',
    },
    landmarks: [
      { en: 'Fort Kochi & Mattancherry', hi: 'फोर्ट कोच्चि और मट्टनचेरी' },
      { en: 'Jewish Synagogue', hi: 'यहूदी सिनेगॉग' },
      { en: 'Marine Drive, Kochi', hi: 'मरीन ड्राइव, कोच्चि' },
    ],
    tourism: {
      en: 'Backwater cruises, spice markets, biennale art festival, and hill stations of Munnar (nearby Idukki).',
      hi: 'बैकवाटर क्रूज, मसाला बाजार, biennale कला उत्सव।',
    },
    sources: {
      wikipedia: 'https://en.wikipedia.org/wiki/Ernakulam_district',
      govt: 'https://ernakulam.nic.in/',
    },
  },
  wayanad: {
    id: 'wayanad',
    name: { en: 'Wayanad', hi: 'वायनाड' },
    headquarters: { en: 'Kalpetta', hi: 'कलपेट्टा' },
    area: { en: '2,131 sq km', hi: '2,131 वर्ग किमी' },
    population: { en: '8.2 lakh (2011)', hi: '8.2 लाख (2011)' },
    blocks: 3,
    overview: {
      en: 'Wayanad is a lush hill district with wildlife sanctuaries, tribal heritage, tea/coffee plantations, and Edakkal Caves.',
      hi: 'वायनाड हरा-भरा पहाड़ी जिला — वन्यजीव अभयारण्य, आदिवासी विरासत, चाय/कॉफी plantations और edakkal गुफाएं।',
    },
    landmarks: [
      { en: 'Edakkal Caves — prehistoric petroglyphs', hi: 'edakkal गुफाएं — प्रागैतिहासिक petroglyphs' },
      { en: 'Wayanad Wildlife Sanctuary', hi: 'वायनाड वन्यजीव अभयारण्य' },
      { en: 'Banasura Sagar Dam', hi: 'बनासुरा सागर बांध' },
    ],
    sources: {
      wikipedia: 'https://en.wikipedia.org/wiki/Wayanad_district',
      govt: 'https://wayanad.nic.in/',
    },
  },
  alappuzha: {
    id: 'alappuzha',
    name: { en: 'Alappuzha', hi: 'अलप्पुझा' },
    headquarters: { en: 'Alappuzha', hi: 'अलप्पुझा' },
    area: { en: '1,414 sq km', hi: '1,414 वर्ग किमी' },
    population: { en: '21.3 lakh (2011)', hi: '21.3 लाख (2011)' },
    blocks: 12,
    overview: {
      en: 'Alappuzha (Alleppey) is the "Venice of the East", famous for houseboat cruises on Kerala backwaters and Nehru Trophy Boat Race.',
      hi: 'अलप्पुझा "पूर्व का Venice" — केरल बैकवाटर पर houseboat और नेहरू ट्रॉफी नाव race।',
    },
    tourism: {
      en: 'Houseboat tourism, Vembanad Lake, Alappuzha Beach, coir industry, and snake boat races.',
      hi: 'houseboat पर्यटन, वembanad झील, अलप्पुझा समुद्र तट, coir उद्योग।',
    },
    sources: {
      wikipedia: 'https://en.wikipedia.org/wiki/Alappuzha_district',
      govt: 'https://alappuzha.nic.in/',
    },
  },
};

export const keralaDistrictNames = [
  'thiruvananthapuram', 'kollam', 'pathanamthitta', 'alappuzha',
  'kottayam', 'idukki', 'ernakulam', 'thrissur', 'palakkad',
  'malappuram', 'kozhikode', 'wayanad', 'kannur', 'kasaragod',
];

export default keralaDistricts;
