// Uttar Pradesh Districts Data
const uttarPradeshDistricts = {
  lucknow: {
    name: { en: 'Lucknow', hi: 'लखनऊ' },
    history: {
      en: 'Lucknow is the capital of Uttar Pradesh, known as the "City of Nawabs". It was a major center of Mughal culture and is famous for its architecture, cuisine, and classical arts.',
      hi: 'लखनऊ उत्तर प्रदेश की राजधानी है, जिसे "नवाबों का शहर" कहा जाता है। यह मुगल संस्कृति का प्रमुख केंद्र था।',
    },
    geography: {
      en: 'Lucknow is situated on the banks of the Gomti River in the northern plains of India.',
      hi: 'लखनऊ भारत के उत्तरी मैदान में गोमती नदी के तट पर स्थित है।',
    },
    culture: {
      en: 'Lucknow is famous for Kathak dance, Mughlai cuisine (Lucknowi biryani, kebabs), Chikankari embroidery, and literature. It was the capital of the Awadh region.',
      hi: 'लखनऊ कथक नृत्य, मुगलई व्यंजन, चिकनकारी कढ़ाई और साहित्य के लिए प्रसिद्ध है।',
    },
    tourism: {
      en: 'Major attractions include Bara Imambara, Chota Imambara, Rumi Gate, Ambedkar Park, and the Dilkusha Palace.',
      hi: 'प्रमुख आकर्षण में बड़ा इमामबाड़ा, छोटा इमामबाड़ा, रूमी गेट शामिल हैं।',
    },
    economy: {
      en: 'Major industries include textiles, handicrafts (chikankari), food processing, and tourism.',
      hi: 'प्रमुख उद्योग वस्त्र, हस्तशिल्प, खाद्य प्रसंस्करण हैं।',
    },
  },
  kanpur: {
    name: { en: 'Kanpur', hi: 'कानपुर' },
    history: {
      en: 'Kanpur is one of the major industrial cities in India and was an important center during the British era. It played a crucial role in the 1857 Rebellion.',
      hi: 'कानपुर भारत के प्रमुख औद्योगिक शहरों में से एक है और 1857 के विद्रोह में महत्वपूर्ण भूमिका निभाई।',
    },
    geography: {
      en: 'Kanpur is located on the banks of the Ganges River in central Uttar Pradesh.',
      hi: 'कानपुर मध्य उत्तर प्रदेश में गंगा नदी के तट पर स्थित है।',
    },
    culture: {
      en: 'Kanpur has a diverse cultural heritage and is known for its industrial development and educational institutions.',
      hi: 'कानपुर अपनी औद्योगिक विकास और शैक्षणिक संस्थानों के लिए जाना जाता है।',
    },
    tourism: {
      en: 'Main attractions include Jajmau, Kanpur Memorial, and various temples.',
      hi: 'मुख्य आकर्षण में जाजमाऊ, कानपुर स्मारक शामिल हैं।',
    },
    economy: {
      en: 'Major industries include textiles, leather goods, paper mills, and sugar refineries.',
      hi: 'प्रमुख उद्योग वस्त्र, चमड़े के सामान, कागज मिलें हैं।',
    },
  },
  varanasi: {
    name: { en: 'Varanasi', hi: 'वाराणसी' },
    history: {
      en: 'Varanasi is one of the oldest inhabited cities in the world and is the holiest city in Hinduism. It has been a center of learning, culture, and spirituality for millennia.',
      hi: 'वाराणसी दुनिया के सबसे पुराने शहरों में से एक है और हिंदू धर्म का सबसे पवित्र शहर है।',
    },
    geography: {
      en: 'Varanasi is situated on the banks of the holy Ganges River in eastern Uttar Pradesh.',
      hi: 'वाराणसी पूर्वी उत्तर प्रदेश में पवित्र गंगा नदी के तट पर स्थित है।',
    },
    culture: {
      en: 'Varanasi is the spiritual capital of India, famous for its ghats, temples, rituals, Hindustani classical music, and philosophy. It is known as "Kashi" and "City of Lights".',
      hi: 'वाराणसी भारत की आध्यात्मिक राजधानी है, अपने घाटों, मंदिरों, अनुष्ठानों के लिए प्रसिद्ध है।',
    },
    tourism: {
      en: 'Main attractions include the Ganges Aarti ceremony, Kashi Vishwanath Temple, Dashashwamedh Ghat, Manikarnika Ghat, and Sarnath.',
      hi: 'मुख्य आकर्षण में गंगा आरती, काशी विश्वनाथ मंदिर, दशाश्वमेध घाट शामिल हैं।',
    },
    economy: {
      en: 'Major industries include silk weaving, handicrafts, tourism, and religious services.',
      hi: 'प्रमुख उद्योग रेशम बुनाई, हस्तशिल्प, पर्यटन हैं।',
    },
  },
  mathura: {
    name: { en: 'Mathura', hi: 'मथुरा' },
    history: {
      en: 'Mathura is the birthplace of Lord Krishna according to Hindu mythology. It was an important center of Buddhism and had the famous Mathura School of Art.',
      hi: 'मथुरा हिंदू पौराणिक कथाओं के अनुसार भगवान कृष्ण की जन्मस्थली है।',
    },
    geography: {
      en: 'Mathura is located on the banks of the Yamuna River in northwestern Uttar Pradesh.',
      hi: 'मथुरा उत्तरपश्चिमी उत्तर प्रदेश में यमुना नदी के तट पर स्थित है।',
    },
    culture: {
      en: 'Mathura is a major pilgrimage site and is famous for its temples, Krishna Janmashtami celebrations, and classical Raas Lila performances.',
      hi: 'मथुरा एक प्रमुख तीर्थ स्थल है और अपने मंदिरों, कृष्ण जन्मोत्सव के लिए प्रसिद्ध है।',
    },
    tourism: {
      en: 'Major temples include Krishna Janmabhoomi Temple, Dwarkadhish Temple, Govind Dev Ji Temple, and the Mathura Museum.',
      hi: 'प्रमुख मंदिरों में कृष्ण जन्मभूमि मंदिर, द्वारकाधीश मंदिर शामिल हैं।',
    },
    economy: {
      en: 'Economy is primarily based on tourism, agriculture, and handicrafts.',
      hi: 'अर्थव्यवस्था मुख्य रूप से पर्यटन, कृषि पर आधारित है।',
    },
  },
};

export default uttarPradeshDistricts;

export const utPradeshDistrictNames = Object.keys(uttarPradeshDistricts);
