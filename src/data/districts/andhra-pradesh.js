// Andhra Pradesh Districts Data
const andhraPradeshDistricts = {
  visakhapatnam: {
    name: { en: 'Visakhapatnam', hi: 'विशाखापत्तनम' },
    history: {
      en: 'Visakhapatnam is a major port city and is known as the "Jewel of East Coast". It was an important center for port activities.',
      hi: 'विशाखापत्तनम एक प्रमुख बंदरगाह शहर है और "पूर्वी तट का गहना" के नाम से जाना जाता है।',
    },
    geography: {
      en: 'Visakhapatnam is located on the Bay of Bengal coast in northeastern Andhra Pradesh.',
      hi: 'विशाखापत्तनम बंगाल की खाड़ी के तट पर पूर्वोत्तर आंध्र प्रदेश में स्थित है।',
    },
    culture: {
      en: 'Known for Telugu culture, port operations, fishing heritage, and modern infrastructure.',
      hi: 'तेलुगु संस्कृति, बंदरगाह संचालन, मत्स्य विरासत के लिए जाना जाता है।',
    },
    tourism: {
      en: 'Attractions include Tirupati Temple, Borra Caves, Araku Valley, and beaches.',
      hi: 'आकर्षण में तिरुपति मंदिर, बोर्रा गुफाएं, अराकु घाटी शामिल हैं।',
    },
    economy: {
      en: 'Major industries include shipping, steel plants, refineries, and fishing.',
      hi: 'प्रमुख उद्योग शिपिंग, इस्पात संयंत्र, रिफाइनरी, मत्स्य पालन हैं।',
    },
  },
  tirupati: {
    name: { en: 'Tirupati', hi: 'तिरुपति' },
    history: {
      en: 'Tirupati is one of the richest temples in the world - the Venkateswara Temple. A major pilgrimage center for centuries.',
      hi: 'तिरुपति विश्व के सबसे समृद्ध मंदिरों में से एक है - वेंकटेश्वर मंदिर।',
    },
    geography: {
      en: 'Tirupati is located in the Eastern Ghats in southern Andhra Pradesh.',
      hi: 'तिरुपति पूर्वी घाटों में दक्षिणी आंध्र प्रदेश में स्थित है।',
    },
    culture: {
      en: 'Major pilgrimage site with deep religious significance. Known for Venkateswara Temple rituals and Telugu spirituality.',
      hi: 'प्रमुख तीर्थ स्थल जिसका गहरा धार्मिक महत्व है।',
    },
    tourism: {
      en: 'Main attractions: Venkateswara Temple, Sri Kalahasti Temple, Papavinasam Temple.',
      hi: 'मुख्य आकर्षण: वेंकटेश्वर मंदिर, श्री कालहस्ति मंदिर शामिल हैं।',
    },
    economy: {
      en: 'Economy based on pilgrimage tourism and religious services.',
      hi: 'अर्थव्यवस्था तीर्थ पर्यटन और धार्मिक सेवाओं पर आधारित है।',
    },
  },
  hyderabad: {
    name: { en: 'Hyderabad', hi: 'हैदराबाद' },
    history: {
      en: 'Hyderabad was the capital of the Nizam state and is now a major IT and tech hub in India.',
      hi: 'हैदराबाद निजाम राज्य की राजधानी थी और अब भारत का एक प्रमुख IT हब है।',
    },
    geography: {
      en: 'Hyderabad is located on the Musi River in central Telangana (formerly Andhra Pradesh).',
      hi: 'हैदराबाद मुसी नदी पर तेलंगाना में स्थित है।',
    },
    culture: {
      en: 'Known for Hyderabadi cuisine, Charminar monument, pearl trade, and IT industry.',
      hi: 'हैदराबादी व्यंजन, चारमीनार स्मारक, मोती व्यापार के लिए जाना जाता है।',
    },
    tourism: {
      en: 'Main attractions: Charminar, Mecca Masjid, Chowmahalla Palace, Osman Sagar Lake.',
      hi: 'मुख्य आकर्षण: चारमीनार, मक्का मस्जिद, चौमहल्ला पैलेस शामिल हैं।',
    },
    economy: {
      en: 'Major industries include IT services, biotech, automobiles, pharmaceuticals.',
      hi: 'प्रमुख उद्योग IT सेवाएं, बायोटेक, ऑटोमोबाइल, दवा हैं।',
    },
  },
};

export default andhraPradeshDistricts;
export const andhraPradeshDistrictNames = Object.keys(andhraPradeshDistricts);
