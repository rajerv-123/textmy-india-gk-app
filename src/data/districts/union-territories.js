// Union Territories Districts Data
const unionTerritories = {
  chandigarh_ut: {
    name: { en: 'Chandigarh', hi: 'चंडीगढ़' },
    history: { en: 'Capital of Punjab and Haryana, planned city by Le Corbusier', hi: 'पंजाब और हरियाणा की राजधानी' },
    geography: { en: 'Located in the foothills of Himalayas between Punjab and Haryana', hi: 'पंजाब और हरियाणा के बीच स्थित' },
    culture: { en: 'Modern planned city, cultural hub, cleanest city in India', hi: 'आधुनिक नियोजित शहर, भारत का सबसे स्वच्छ शहर' },
    tourism: { en: 'Rock Garden, Capitol Complex, Rose Garden, Sukhna Lake', hi: 'रॉक गार्डन, कैपिटल कॉम्प्लेक्स, गुलाब उद्यान' },
    economy: { en: 'IT, education, government services, tourism', hi: 'IT, शिक्षा, सरकारी सेवाएं, पर्यटन' },
  },
  lakshadweep_ut: {
    name: { en: 'Lakshadweep', hi: 'लक्षद्वीप' },
    history: { en: 'Island group Union Territory', hi: 'द्वीपों का संघ क्षेत्र' },
    geography: { en: 'Located in the Arabian Sea, 600 km west of Kerala coast', hi: 'अरब सागर में स्थित, केरल तट से 600 किमी पश्चिम' },
    culture: { en: 'Islamic culture, coconut plantations, coral reefs', hi: 'इस्लामिक संस्कृति, नारियल बागान, मूंगा चट्टानें' },
    tourism: { en: 'Coral reefs, water sports, pristine beaches, diving', hi: 'मूंगा चट्टानें, जल खेल, कौडीव, डाइविंग' },
    economy: { en: 'Tourism, fishing, coconut cultivation, handicrafts', hi: 'पर्यटन, मत्स्य पालन, नारियल, हस्तशिल्प' },
  },
  puducherry_ut: {
    name: { en: 'Puducherry', hi: 'पुडुचेरी' },
    history: { en: 'French overseas territory, pilgrimage destination', hi: 'फ्रांसीसी विदेशी क्षेत्र, तीर्थ स्थल' },
    geography: { en: 'Located on Bay of Bengal coast in southern India', hi: 'बंगाल की खाड़ी के तट पर दक्षिणी भारत में' },
    culture: { en: 'French colonial architecture, Tamil traditions, Aurobindo Ashram', hi: 'फ्रांसीसी वास्तुकला, तमिल परंपराएं, अरविंदो आश्रम' },
    tourism: { en: 'Auroville, French Quarter, Promenade, Sri Aurobindo Ashram', hi: 'अरोविल, फ्रांसीसी क्वार्टर, श्री अरविंदो आश्रम' },
    economy: { en: 'Tourism, textiles, handicrafts, pilgrim services', hi: 'पर्यटन, वस्त्र, हस्तशिल्प, तीर्थ सेवाएं' },
  },
};

export default unionTerritories;
export const unionTerritories_DistrictNames = Object.keys(unionTerritories);
