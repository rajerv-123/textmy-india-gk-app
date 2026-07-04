// West Bengal Districts Data
const westBengalDistricts = {
  kolkata: {
    name: { en: 'Kolkata', hi: 'कोलकाता' },
    history: {
      en: 'Kolkata is the capital of West Bengal and was the capital of India under British rule. It is known as the "City of Joy" and is a major cultural and intellectual center.',
      hi: 'कोलकाता पश्चिम बंगाल की राजधानी है और ब्रिटिश शासन के दौरान भारत की राजधानी थी।',
    },
    geography: {
      en: 'Kolkata is located on the Hooghly River in the Ganges Delta in eastern India.',
      hi: 'कोलकाता गंगा डेल्टा में हूगली नदी पर पूर्वी भारत में स्थित है।',
    },
    culture: {
      en: 'Kolkata is the cultural capital of India, known for its literary tradition (Tagore, Banerjee), Bengali cinema, theater, and arts. It is called the "City of Joy".',
      hi: 'कोलकाता भारत की सांस्कृतिक राजधानी है, जो साहित्य, बंगाली सिनेमा, नाटक के लिए प्रसिद्ध है।',
    },
    tourism: {
      en: 'Major attractions include Victoria Memorial, Howrah Bridge, Indian Museum, St. Paul\'s Cathedral, and Kalighat Temple.',
      hi: 'प्रमुख आकर्षण में विक्टोरिया मेमोरियल, हावड़ा पुल, भारतीय संग्रहालय, कालीघाट मंदिर शामिल हैं।',
    },
    economy: {
      en: 'Major industries include publishing, film production, textiles, engineering, and services. Kolkata has a strong tradition of small industries.',
      hi: 'प्रमुख उद्योग प्रकाशन, फिल्म निर्माण, वस्त्र, इंजीनियरिंग हैं।',
    },
  },
  darjeeling: {
    name: { en: 'Darjeeling', hi: 'दार्जिलिंग' },
    history: {
      en: 'Darjeeling is a historic hill station developed by the British. It is famous for its tea gardens and is known as the "Queen of the Hills".',
      hi: 'दार्जिलिंग ब्रिटिश द्वारा विकसित एक ऐतिहासिक पहाड़ी स्टेशन है।',
    },
    geography: {
      en: 'Darjeeling is located in the Himalayas at an altitude of 2,134 meters in northern West Bengal, with views of Kanchenjunga peak.',
      hi: 'दार्जिलिंग पश्चिम बंगाल के उत्तरी भाग में हिमालय में 2,134 मीटर की ऊंचाई पर स्थित है।',
    },
    culture: {
      en: 'Darjeeling is famous for its Darjeeling tea, diverse culture with Nepali, Bengali, and Tibetan influences, and traditional handicrafts.',
      hi: 'दार्जिलिंग अपनी दार्जिलिंग चाय, विविध संस्कृति और हस्तशिल्प के लिए प्रसिद्ध है।',
    },
    tourism: {
      en: 'Major attractions include Tiger Hill (sunrise point), Kanchenjunga Peak, Himalayan Railway (UNESCO site), Batasia Loop, and tea gardens.',
      hi: 'प्रमुख आकर्षण में टाइगर हिल, कंचनजंगा पीक, हिमालयन रेलवे, चाय के बाग शामिल हैं।',
    },
    economy: {
      en: 'Economy is based on tea cultivation, tourism, and handicrafts.',
      hi: 'अर्थव्यवस्था चाय की खेती, पर्यटन पर आधारित है।',
    },
  },
  siliguri: {
    name: { en: 'Siliguri', hi: 'सिलिगुड़ी' },
    history: {
      en: 'Siliguri is a modern city that has grown as a major commercial hub in North Bengal. It connects the North East with the rest of India.',
      hi: 'सिलिगुड़ी एक आधुनिक शहर है जो उत्तर बंगाल में एक प्रमुख वाणिज्यिक केंद्र है।',
    },
    geography: {
      en: 'Siliguri is located in the foothills of the Himalayas at the junction of several states in North Bengal.',
      hi: 'सिलिगुड़ी उत्तर बंगाल में हिमालय की तलहटी में कई राज्यों के संगम पर स्थित है।',
    },
    culture: {
      en: 'Siliguri is a multicultural city with diverse communities. It is a major transit point for Northeast India.',
      hi: 'सिलिगुड़ी एक बहुसांस्कृतिक शहर है और पूर्वोत्तर भारत का एक प्रमुख पारगमन बिंदु है।',
    },
    tourism: {
      en: 'Main attractions include Darjeeling nearby, Kanyam, Mirik Lake, and various tea gardens.',
      hi: 'मुख्य आकर्षण में पास में दार्जिलिंग, मिरिक झील शामिल हैं।',
    },
    economy: {
      en: 'Economy is based on trade, transportation, and commerce, serving as a gateway to Northeast India.',
      hi: 'अर्थव्यवस्था व्यापार, परिवहन, वाणिज्य पर आधारित है।',
    },
  },
  ashoka: {
    name: { en: 'Asansol', hi: 'आसनसोल' },
    history: {
      en: 'Asansol is an industrial city located in the Dooars region. It developed as a major coal and mining center.',
      hi: 'आसनसोल एक औद्योगिक शहर है जो दुआर्स क्षेत्र में स्थित है।',
    },
    geography: {
      en: 'Asansol is located on the Durgapur River in western West Bengal.',
      hi: 'आसनसोल पश्चिम बंगाल में दुर्गापुर नदी पर स्थित है।',
    },
    culture: {
      en: 'Asansol has a diverse culture with influences from various communities. It is known for its industrial heritage.',
      hi: 'आसनसोल एक विविध संस्कृति वाला शहर है और अपनी औद्योगिक विरासत के लिए जाना जाता है।',
    },
    tourism: {
      en: 'Main attractions include Dumka Vidyapith and various temples in the region.',
      hi: 'मुख्य आकर्षण में दुमका विद्यापीठ और क्षेत्र के विभिन्न मंदिर शामिल हैं।',
    },
    economy: {
      en: 'Major industries include coal mining, steel production, and manufacturing.',
      hi: 'प्रमुख उद्योग कोयला खनन, इस्पात उत्पादन हैं।',
    },
  },
};

export default westBengalDistricts;

export const westBengalDistrictNames = Object.keys(westBengalDistricts);
