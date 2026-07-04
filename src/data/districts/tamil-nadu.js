// Tamil Nadu Districts Data
const tamilNaduDistricts = {
  chennai: {
    name: { en: 'Chennai', hi: 'चेन्नई' },
    history: {
      en: 'Chennai is the capital of Tamil Nadu and was founded by the British as Madras. It is one of the oldest metropolitan cities in India with a rich trading history.',
      hi: 'चेन्नई तमिलनाडु की राजधानी है और ब्रिटिश द्वारा मद्रास के रूप में स्थापित की गई थी।',
    },
    geography: {
      en: 'Chennai is located on the Coromandel Coast of Bay of Bengal in southeastern India.',
      hi: 'चेन्नई दक्षिणपूर्वी भारत में कोरोमंडल तट पर स्थित है।',
    },
    culture: {
      en: 'Chennai is a major cultural hub, famous for Bharatanatyam dance, Carnatic classical music, and Tamil literature. It hosts major arts festivals like Margazhi Mela.',
      hi: 'चेन्नई भरतनाट्यम नृत्य, कर्नाटक शास्त्रीय संगीत के लिए प्रसिद्ध है।',
    },
    tourism: {
      en: 'Major attractions include Marina Beach, Fort St. George, San Thome Cathedral, Kapaleeshwarar Temple, and Government Museum.',
      hi: 'प्रमुख आकर्षण में मरीना बीच, फोर्ट सेंट जॉर्ज, कपालेश्वर मंदिर शामिल हैं।',
    },
    economy: {
      en: 'Major industries include IT services, automotive, textiles, and shipping. Chennai is a major software hub.',
      hi: 'प्रमुख उद्योग IT सेवाएं, ऑटोमोटिव, वस्त्र हैं।',
    },
  },
  madurai: {
    name: { en: 'Madurai', hi: 'मदुरै' },
    history: {
      en: 'Madurai is one of the oldest cities in India with a history spanning over 2,500 years. It was an important center of Tamil culture and learning.',
      hi: 'मदुरै भारत के सबसे पुराने शहरों में से एक है जिसका इतिहास 2,500 साल पुराना है।',
    },
    geography: {
      en: 'Madurai is located on the banks of the Vaigai River in southern Tamil Nadu.',
      hi: 'मदुरै दक्षिण तमिलनाडु में वैगई नदी के तट पर स्थित है।',
    },
    culture: {
      en: 'Madurai is famous for the Meenakshi Amman Temple, one of the greatest temples of South India, and its association with Tamil literature and classical arts.',
      hi: 'मदुरै मीनाक्षी अम्मन मंदिर के लिए प्रसिद्ध है, जो दक्षिण भारत के सबसे महान मंदिरों में से एक है।',
    },
    tourism: {
      en: 'Main attractions include Meenakshi Amman Temple, Thirumalai Nayak Palace, Vaigai Dam, and Alagar Koil Temple.',
      hi: 'मुख्य आकर्षण में मीनाक्षी अम्मन मंदिर, तिरुमलै नायक पैलेस शामिल हैं।',
    },
    economy: {
      en: 'Economy is based on textiles, agriculture, tourism, and small-scale industries.',
      hi: 'अर्थव्यवस्था वस्त्र, कृषि, पर्यटन पर आधारित है।',
    },
  },
  salem: {
    name: { en: 'Salem', hi: 'सलेम' },
    history: {
      en: 'Salem is an ancient city known for its industrial development. It has been a major trading center for centuries.',
      hi: 'सलेम एक प्राचीन शहर है जो अपने औद्योगिक विकास के लिए जाना जाता है।',
    },
    geography: {
      en: 'Salem is located in the northern part of Tamil Nadu, surrounded by hills and agricultural plains.',
      hi: 'सलेम तमिलनाडु के उत्तरी भाग में पहाड़ियों से घिरा है।',
    },
    culture: {
      en: 'Salem is known for its textile industry, handicrafts, and traditional arts.',
      hi: 'सलेम अपने वस्त्र उद्योग और हस्तशिल्प के लिए जाना जाता है।',
    },
    tourism: {
      en: 'Main attractions include Yercaud hill station, Ooty, and various temples in the region.',
      hi: 'मुख्य आकर्षण में येरकौड़ पहाड़ी स्टेशन शामिल है।',
    },
    economy: {
      en: 'Major industries include textiles, steel, sugar mills, and agriculture.',
      hi: 'प्रमुख उद्योग वस्त्र, इस्पात, चीनी मिलें हैं।',
    },
  },
  coimbatore: {
    name: { en: 'Coimbatore', hi: 'कोयंबटूर' },
    history: {
      en: 'Coimbatore is one of the oldest cities in Tamil Nadu. It was an important center of trade and commerce during medieval times.',
      hi: 'कोयंबटूर तमिलनाडु के सबसे पुराने शहरों में से एक है।',
    },
    geography: {
      en: 'Coimbatore is located at the confluence of Noyyal and Bhavani rivers in western Tamil Nadu.',
      hi: 'कोयंबटूर पश्चिमी तमिलनाडु में नोयल और भवानी नदियों के संगम पर स्थित है।',
    },
    culture: {
      en: 'Coimbatore is known for its textile industry, automotive sector, and agricultural products like tea and coffee.',
      hi: 'कोयंबटूर अपने वस्त्र उद्योग, ऑटोमोटिव क्षेत्र के लिए जाना जाता है।',
    },
    tourism: {
      en: 'Major attractions include Nilgiris hill station, Ooty, Coonoor, and various temples.',
      hi: 'प्रमुख आकर्षण में नीलगिरी पहाड़ी स्टेशन, ऊटी शामिल हैं।',
    },
    economy: {
      en: 'Major industries include textiles, automotive, food processing, and agriculture.',
      hi: 'प्रमुख उद्योग वस्त्र, ऑटोमोटिव, खाद्य प्रसंस्करण हैं।',
    },
  },
};

export default tamilNaduDistricts;

export const tamilNaduDistrictNames = Object.keys(tamilNaduDistricts);
