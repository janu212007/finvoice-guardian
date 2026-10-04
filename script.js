/* =========================================================
   FINVOICE GUARDIAN
   COMPLETE MULTILINGUAL SCRIPT
========================================================= */


/* =========================================================
   CURRENT LANGUAGE
========================================================= */

let currentLanguage = "en";


/* =========================================================
   PAGE LANGUAGE TEXT
========================================================= */

const pageText = {

    en: {

        navHome: "Home",
        navHow: "How it works",
        navAbout: "About",

        heroBadge: "Financial Safety Assistant",
        heroTitle: "Understand your <span>financial information.</span>",
        heroDescription:
            "FinVoice helps you understand financial terms, identify warning signs in messages, and check financial claims — before you act.",

        startLearning: "Start learning",
        checkMessage: "Check a message",

        available: "Available in",

        financialAssistant: "Financial Safety Assistant",
        online: "● Online",
        you: "YOU",
        financialExplanation: "Financial explanation",
        example: "EXAMPLE",
        listen: "Listen",
        simpleExplanation: "Simple explanation",
        askFinancialTerm: "Ask about a financial term...",

        trustLearn: "Learn",
        trustLearnText: "Understand financial concepts",
        trustCheck: "Check",
        trustCheckText: "Identify potential warning signs",
        trustVerify: "Verify",
        trustVerifyText: "Know what to check before acting",

        learnLabel: "LEARN FINANCE",
        learnTitle: "Understand money<br>in simple words.",
        learnDescription:
            "Ask about a financial concept and FinVoice will explain it in clear, simple language.",

        learningQuestion:
            "What would you like to understand?",
        learningPlaceholder:
            "Example: What is inflation?",
        explain: "Explain",
        tryAsking: "Try asking:",
        inflationQuestion: "What is inflation?",
        compoundQuestion: "What is compound interest?",
        mutualQuestion: "What is a mutual fund?",
        scamQuestion: "What is a scam?",

        answerPlaceholderTitle:
            "Your explanation will appear here",
        answerPlaceholderText:
            "Ask a financial question to get started.",

        messageLabel: "CHECK A MESSAGE",
        messageTitle:
            "Check financial messages<br>before you act.",
        messageDescription:
            "Paste a financial message and FinVoice will identify potential warning signs and explain what to verify.",

        messageInputLabel:
            "Paste the message you received",
        messagePlaceholder:
            "Example: Invest ₹5,000 today and get guaranteed 30% returns. Contact us immediately!",
        analyzeMessage: "Analyze message →",
        tryExample: "Try an example",

        messageEmptyTitle:
            "Check before you act",
        messageEmptyText:
            "Warning signs and verification steps will appear here.",

        claimLabel: "CHECK A CLAIM",
        claimTitle:
            "Understand financial claims<br>before you trust them.",
        claimDescription:
            "Enter a financial claim and learn what evidence, source, date and context should be checked.",

        claimInputLabel:
            "Enter the financial claim",
        claimPlaceholder:
            "Example: This investment gives guaranteed 30% returns every year.",
        checkClaim: "Check this claim →",

        claimEmptyTitle:
            "Verify before trusting",
        claimEmptyText:
            "Enter a financial claim to see what you should verify.",

        toolsLabel: "FINVOICE TOOLS",
        toolsTitle:
            "One place to understand<br>financial information.",
        toolsDescription:
            "Simple tools designed for everyday financial information and digital messages.",

        learnFinance: "Learn Finance",
        learnFinanceText:
            "Get simple explanations for financial terms and concepts.",
        learnConcept: "Learn a concept →",

        checkMessageCard: "Check a Message",
        checkMessageText:
            "Find potential warning signs in suspicious financial messages.",
        checkMessageButton: "Check a message →",

        checkClaimCard: "Check a Claim",
        checkClaimText:
            "Understand financial claims and learn what information needs verification.",
        checkClaimButton: "Check a claim →",

        howLabel: "HOW IT WORKS",
        howTitle: "Understand before you act.",
        howDescription:
            "FinVoice turns complicated financial information into clear, understandable guidance.",

        askShare: "Ask or Share",
        askShareText:
            "Ask a question or share financial information you want to understand.",
        understand: "Understand",
        understandText:
            "FinVoice explains the information in simple language.",
        verify: "Verify",
        verifyText:
            "Learn what warning signs to look for and what should be independently checked.",

        principleLabel: "OUR PRINCIPLE",
        principleTitle:
            "Information should be <span>understandable.</span>",
        aboutText1:
            "Financial information can be difficult to understand, especially when it comes through social media, messaging apps, or unfamiliar terminology.",
        aboutText2:
            "FinVoice focuses on helping users understand information and recognize warning signs — without making investment decisions for them.",

        educationFirst: "✓ Education-first",
        privacyFocused: "✓ Privacy-focused",
        clearExplanations: "✓ Clear explanations",
        noRecommendations: "✓ No investment recommendations",

        footerText: "Financial awareness and safety",
        footerTagline: "Understand. Check. Verify."
    },


    te: {

        navHome: "హోమ్",
        navHow: "ఎలా పనిచేస్తుంది",
        navAbout: "మా గురించి",

        heroBadge: "ఆర్థిక భద్రత సహాయకుడు",
        heroTitle: "మీ <span>ఆర్థిక సమాచారాన్ని</span> అర్థం చేసుకోండి.",
        heroDescription:
            "FinVoice మీకు ఆర్థిక పదాలను అర్థం చేసుకోవడానికి, సందేశాల్లో హెచ్చరికలను గుర్తించడానికి మరియు ఆర్థిక క్లెయిమ్‌లను తనిఖీ చేయడానికి సహాయపడుతుంది — చర్య తీసుకునే ముందు.",

        startLearning: "నేర్చుకోవడం ప్రారంభించండి",
        checkMessage: "సందేశాన్ని తనిఖీ చేయండి",

        available: "అందుబాటులో ఉన్న భాషలు",

        financialAssistant: "ఆర్థిక భద్రత సహాయకుడు",
        online: "● ఆన్‌లైన్",
        you: "మీరు",
        financialExplanation: "ఆర్థిక వివరణ",
        example: "ఉదాహరణ",
        listen: "వినండి",
        simpleExplanation: "సులభమైన వివరణ",
        askFinancialTerm: "ఆర్థిక పదం గురించి అడగండి...",

        trustLearn: "నేర్చుకోండి",
        trustLearnText: "ఆర్థిక అంశాలను అర్థం చేసుకోండి",
        trustCheck: "తనిఖీ చేయండి",
        trustCheckText: "సంభావ్య హెచ్చరికలను గుర్తించండి",
        trustVerify: "ధృవీకరించండి",
        trustVerifyText: "చర్యకు ముందు ఏమి తనిఖీ చేయాలో తెలుసుకోండి",

        learnLabel: "ఆర్థిక విషయాలు నేర్చుకోండి",
        learnTitle: "డబ్బును<br>సులభమైన పదాల్లో అర్థం చేసుకోండి.",
        learnDescription:
            "ఆర్థిక అంశం గురించి అడగండి. FinVoice దానిని స్పష్టమైన, సులభమైన భాషలో వివరిస్తుంది.",

        learningQuestion:
            "మీరు ఏమి అర్థం చేసుకోవాలనుకుంటున్నారు?",
        learningPlaceholder:
            "ఉదాహరణ: ద్రవ్యోల్బణం అంటే ఏమిటి?",
        explain: "వివరించండి",
        tryAsking: "ఇలా అడగండి:",
        inflationQuestion: "ద్రవ్యోల్బణం అంటే ఏమిటి?",
        compoundQuestion: "చక్రవడ్డీ అంటే ఏమిటి?",
        mutualQuestion: "మ్యూచువల్ ఫండ్ అంటే ఏమిటి?",
        scamQuestion: "ఆర్థిక మోసం అంటే ఏమిటి?",

        answerPlaceholderTitle:
            "మీ వివరణ ఇక్కడ కనిపిస్తుంది",
        answerPlaceholderText:
            "ప్రారంభించడానికి ఒక ఆర్థిక ప్రశ్న అడగండి.",

        messageLabel: "సందేశాన్ని తనిఖీ చేయండి",
        messageTitle:
            "చర్య తీసుకునే ముందు<br>ఆర్థిక సందేశాలను తనిఖీ చేయండి.",
        messageDescription:
            "మీకు వచ్చిన ఆర్థిక సందేశాన్ని ఇక్కడ పెట్టండి. FinVoice సంభావ్య హెచ్చరికలను గుర్తించి ఏమి ధృవీకరించాలో వివరిస్తుంది.",

        messageInputLabel:
            "మీకు వచ్చిన సందేశాన్ని ఇక్కడ పెట్టండి",
        messagePlaceholder:
            "ఉదాహరణ: ఈరోజే ₹5,000 పెట్టుబడి పెట్టండి. 30% రాబడి హామీ. వెంటనే సంప్రదించండి!",
        analyzeMessage: "సందేశాన్ని విశ్లేషించండి →",
        tryExample: "ఉదాహరణ ప్రయత్నించండి",

        messageEmptyTitle:
            "చర్య తీసుకునే ముందు తనిఖీ చేయండి",
        messageEmptyText:
            "హెచ్చరికలు మరియు ధృవీకరణ దశలు ఇక్కడ కనిపిస్తాయి.",

        claimLabel: "క్లెయిమ్‌ను తనిఖీ చేయండి",
        claimTitle:
            "నమ్మే ముందు ఆర్థిక<br>క్లెయిమ్‌లను అర్థం చేసుకోండి.",
        claimDescription:
            "ఒక ఆర్థిక క్లెయిమ్‌ను నమోదు చేయండి. ఏ ఆధారం, మూలం, తేదీ మరియు సందర్భాన్ని తనిఖీ చేయాలో తెలుసుకోండి.",

        claimInputLabel:
            "ఆర్థిక క్లెయిమ్‌ను నమోదు చేయండి",
        claimPlaceholder:
            "ఉదాహరణ: ఈ పెట్టుబడి ప్రతి సంవత్సరం 30% రాబడిని హామీ ఇస్తుంది.",
        checkClaim: "ఈ క్లెయిమ్‌ను తనిఖీ చేయండి →",

        claimEmptyTitle:
            "నమ్మే ముందు ధృవీకరించండి",
        claimEmptyText:
            "మీరు ఏమి ధృవీకరించాలో చూడటానికి ఒక ఆర్థిక క్లెయిమ్‌ను నమోదు చేయండి.",

        toolsLabel: "FINVOICE సాధనాలు",
        toolsTitle:
            "ఆర్థిక సమాచారాన్ని అర్థం చేసుకోవడానికి<br>ఒకే చోటు.",
        toolsDescription:
            "రోజువారీ ఆర్థిక సమాచారం మరియు డిజిటల్ సందేశాల కోసం రూపొందించిన సులభమైన సాధనాలు.",

        learnFinance: "ఆర్థిక విషయాలు నేర్చుకోండి",
        learnFinanceText:
            "ఆర్థిక పదాలు మరియు అంశాలకు సులభమైన వివరణలను పొందండి.",
        learnConcept: "ఒక అంశాన్ని నేర్చుకోండి →",

        checkMessageCard: "సందేశాన్ని తనిఖీ చేయండి",
        checkMessageText:
            "అనుమానాస్పద ఆర్థిక సందేశాల్లో సంభావ్య హెచ్చరికలను గుర్తించండి.",
        checkMessageButton: "సందేశాన్ని తనిఖీ చేయండి →",

        checkClaimCard: "క్లెయిమ్‌ను తనిఖీ చేయండి",
        checkClaimText:
            "ఆర్థిక క్లెయిమ్‌లను అర్థం చేసుకుని ఏ సమాచారాన్ని ధృవీకరించాలో తెలుసుకోండి.",
        checkClaimButton: "క్లెయిమ్‌ను తనిఖీ చేయండి →",

        howLabel: "ఎలా పనిచేస్తుంది",
        howTitle: "చర్య తీసుకునే ముందు అర్థం చేసుకోండి.",
        howDescription:
            "FinVoice క్లిష్టమైన ఆర్థిక సమాచారాన్ని స్పష్టమైన, అర్థమయ్యే మార్గదర్శకంగా మారుస్తుంది.",

        askShare: "అడగండి లేదా పంచుకోండి",
        askShareText:
            "మీరు అర్థం చేసుకోవాలనుకునే ప్రశ్న లేదా ఆర్థిక సమాచారాన్ని పంచుకోండి.",
        understand: "అర్థం చేసుకోండి",
        understandText:
            "FinVoice సమాచారాన్ని సులభమైన భాషలో వివరిస్తుంది.",
        verify: "ధృవీకరించండి",
        verifyText:
            "ఏ హెచ్చరికలను గమనించాలో మరియు ఏ సమాచారాన్ని స్వతంత్రంగా తనిఖీ చేయాలో తెలుసుకోండి.",

        principleLabel: "మా సూత్రం",
        principleTitle:
            "సమాచారం <span>అర్థమయ్యేలా</span> ఉండాలి.",
        aboutText1:
            "సోషల్ మీడియా, మెసేజింగ్ యాప్‌లు లేదా తెలియని ఆర్థిక పదాల ద్వారా వచ్చే సమాచారం అర్థం చేసుకోవడం కష్టంగా ఉండవచ్చు.",
        aboutText2:
            "FinVoice వినియోగదారులు సమాచారాన్ని అర్థం చేసుకోవడానికి మరియు హెచ్చరికలను గుర్తించడానికి సహాయపడుతుంది — వారి తరపున పెట్టుబడి నిర్ణయాలు తీసుకోదు.",

        educationFirst: "✓ విద్యకు ప్రాధాన్యత",
        privacyFocused: "✓ గోప్యతకు ప్రాధాన్యత",
        clearExplanations: "✓ స్పష్టమైన వివరణలు",
        noRecommendations: "✓ పెట్టుబడి సిఫార్సులు లేవు",

        footerText: "ఆర్థిక అవగాహన మరియు భద్రత",
        footerTagline: "అర్థం చేసుకోండి. తనిఖీ చేయండి. ధృవీకరించండి."
    },


    hi: {

        navHome: "होम",
        navHow: "यह कैसे काम करता है",
        navAbout: "हमारे बारे में",

        heroBadge: "वित्तीय सुरक्षा सहायक",
        heroTitle: "अपनी <span>वित्तीय जानकारी</span> को समझें।",
        heroDescription:
            "FinVoice आपको वित्तीय शब्दों को समझने, संदेशों में चेतावनी संकेत पहचानने और वित्तीय दावों की जाँच करने में मदद करता है — कार्रवाई करने से पहले।",

        startLearning: "सीखना शुरू करें",
        checkMessage: "संदेश जाँचें",

        available: "उपलब्ध भाषाएँ",

        financialAssistant: "वित्तीय सुरक्षा सहायक",
        online: "● ऑनलाइन",
        you: "आप",
        financialExplanation: "वित्तीय व्याख्या",
        example: "उदाहरण",
        listen: "सुनें",
        simpleExplanation: "सरल व्याख्या",
        askFinancialTerm: "किसी वित्तीय शब्द के बारे में पूछें...",

        trustLearn: "सीखें",
        trustLearnText: "वित्तीय अवधारणाओं को समझें",
        trustCheck: "जाँचें",
        trustCheckText: "संभावित चेतावनी संकेत पहचानें",
        trustVerify: "सत्यापित करें",
        trustVerifyText: "कार्रवाई से पहले क्या जाँचना है जानें",

        learnLabel: "वित्तीय जानकारी सीखें",
        learnTitle: "पैसे को<br>सरल शब्दों में समझें।",
        learnDescription:
            "किसी वित्तीय अवधारणा के बारे में पूछें और FinVoice उसे सरल और स्पष्ट भाषा में समझाएगा।",

        learningQuestion:
            "आप क्या समझना चाहते हैं?",
        learningPlaceholder:
            "उदाहरण: महंगाई क्या है?",
        explain: "समझाएँ",
        tryAsking: "यह पूछकर देखें:",
        inflationQuestion: "महंगाई क्या है?",
        compoundQuestion: "चक्रवृद्धि ब्याज क्या है?",
        mutualQuestion: "म्यूचुअल फंड क्या है?",
        scamQuestion: "वित्तीय धोखाधड़ी क्या है?",

        answerPlaceholderTitle:
            "आपकी व्याख्या यहाँ दिखाई देगी",
        answerPlaceholderText:
            "शुरू करने के लिए एक वित्तीय प्रश्न पूछें।",

        messageLabel: "संदेश जाँचें",
        messageTitle:
            "कार्रवाई करने से पहले<br>वित्तीय संदेश जाँचें।",
        messageDescription:
            "वित्तीय संदेश यहाँ डालें और FinVoice संभावित चेतावनी संकेतों की पहचान करके बताएगा कि क्या सत्यापित करना चाहिए।",

        messageInputLabel:
            "आपको मिला संदेश यहाँ डालें",
        messagePlaceholder:
            "उदाहरण: आज ₹5,000 निवेश करें और 30% रिटर्न की गारंटी पाएँ। तुरंत संपर्क करें!",
        analyzeMessage: "संदेश का विश्लेषण करें →",
        tryExample: "उदाहरण आज़माएँ",

        messageEmptyTitle:
            "कार्रवाई से पहले जाँचें",
        messageEmptyText:
            "चेतावनी संकेत और सत्यापन के चरण यहाँ दिखाई देंगे।",

        claimLabel: "दावा जाँचें",
        claimTitle:
            "भरोसा करने से पहले<br>वित्तीय दावों को समझें।",
        claimDescription:
            "वित्तीय दावा दर्ज करें और जानें कि कौन से प्रमाण, स्रोत, तारीख और संदर्भ की जाँच करनी चाहिए।",

        claimInputLabel:
            "वित्तीय दावा दर्ज करें",
        claimPlaceholder:
            "उदाहरण: यह निवेश हर साल 30% रिटर्न की गारंटी देता है।",
        checkClaim: "इस दावे को जाँचें →",

        claimEmptyTitle:
            "भरोसा करने से पहले सत्यापित करें",
        claimEmptyText:
            "आपको क्या सत्यापित करना चाहिए यह देखने के लिए वित्तीय दावा दर्ज करें।",

        toolsLabel: "FINVOICE टूल्स",
        toolsTitle:
            "वित्तीय जानकारी समझने के लिए<br>एक ही जगह।",
        toolsDescription:
            "रोज़मर्रा की वित्तीय जानकारी और डिजिटल संदेशों के लिए सरल टूल्स।",

        learnFinance: "वित्तीय जानकारी सीखें",
        learnFinanceText:
            "वित्तीय शब्दों और अवधारणाओं की सरल व्याख्या पाएँ।",
        learnConcept: "एक अवधारणा सीखें →",

        checkMessageCard: "संदेश जाँचें",
        checkMessageText:
            "संदिग्ध वित्तीय संदेशों में संभावित चेतावनी संकेत खोजें।",
        checkMessageButton: "संदेश जाँचें →",

        checkClaimCard: "दावा जाँचें",
        checkClaimText:
            "वित्तीय दावों को समझें और जानें कि कौन सी जानकारी सत्यापित करनी चाहिए।",
        checkClaimButton: "दावा जाँचें →",

        howLabel: "यह कैसे काम करता है",
        howTitle: "कार्रवाई करने से पहले समझें।",
        howDescription:
            "FinVoice जटिल वित्तीय जानकारी को स्पष्ट और समझने योग्य मार्गदर्शन में बदलता है।",

        askShare: "पूछें या साझा करें",
        askShareText:
            "कोई प्रश्न पूछें या वह वित्तीय जानकारी साझा करें जिसे आप समझना चाहते हैं।",
        understand: "समझें",
        understandText:
            "FinVoice जानकारी को सरल भाषा में समझाता है।",
        verify: "सत्यापित करें",
        verifyText:
            "जानें कि किन चेतावनी संकेतों को देखना है और क्या स्वतंत्र रूप से जाँचना चाहिए।",

        principleLabel: "हमारा सिद्धांत",
        principleTitle:
            "जानकारी <span>समझने योग्य</span> होनी चाहिए।",
        aboutText1:
            "वित्तीय जानकारी समझना कठिन हो सकता है, खासकर जब वह सोशल मीडिया, मैसेजिंग ऐप या अपरिचित शब्दों के माध्यम से आती है।",
        aboutText2:
            "FinVoice उपयोगकर्ताओं को जानकारी समझने और चेतावनी संकेत पहचानने में मदद करता है — उनके लिए निवेश निर्णय नहीं लेता।",

        educationFirst: "✓ शिक्षा को प्राथमिकता",
        privacyFocused: "✓ गोपनीयता पर ध्यान",
        clearExplanations: "✓ स्पष्ट व्याख्या",
        noRecommendations: "✓ कोई निवेश सिफारिश नहीं",

        footerText: "वित्तीय जागरूकता और सुरक्षा",
        footerTagline: "समझें। जाँचें। सत्यापित करें।"
    }
};


/* =========================================================
   FINANCIAL KNOWLEDGE
========================================================= */

const financeData = {

    inflation: {
        en: {
            title: "Inflation",
            explanation:
                "Inflation means that the prices of goods and services increase over time. When prices increase, the same amount of money may buy fewer things.",
            example:
                "For example, if something costs ₹100 today and ₹110 later, its price has increased by 10%."
        },
        te: {
            title: "ద్రవ్యోల్బణం",
            explanation:
                "కాలక్రమేణా వస్తువులు మరియు సేవల ధరలు పెరగడాన్ని ద్రవ్యోల్బణం అంటారు. ధరలు పెరిగినప్పుడు అదే మొత్తంలో డబ్బుతో తక్కువ వస్తువులు కొనగలుగుతాము.",
            example:
                "ఉదాహరణకు, ఒక వస్తువు ఈరోజు ₹100 ఉండి తర్వాత ₹110 అయితే, దాని ధర 10% పెరిగింది."
        },
        hi: {
            title: "महंगाई",
            explanation:
                "समय के साथ वस्तुओं और सेवाओं की कीमतों में वृद्धि को महंगाई कहते हैं। कीमतें बढ़ने पर उतने ही पैसों से कम चीजें खरीदी जा सकती हैं।",
            example:
                "उदाहरण के लिए, यदि किसी वस्तु की कीमत आज ₹100 है और बाद में ₹110 हो जाती है, तो उसकी कीमत 10% बढ़ी है।"
        }
    },

    "compound interest": {
        en: {
            title: "Compound Interest",
            explanation:
                "Compound interest means earning interest on your original money as well as on the interest that has already been added.",
            example:
                "Money saved with compound interest can grow because previously earned interest can also earn interest."
        },
        te: {
            title: "చక్రవడ్డీ",
            explanation:
                "మీ అసలు డబ్బుపై మాత్రమే కాకుండా ఇప్పటికే వచ్చిన వడ్డీపై కూడా వడ్డీ రావడాన్ని చక్రవడ్డీ అంటారు.",
            example:
                "ఇప్పటికే వచ్చిన వడ్డీపై కూడా వడ్డీ రావడం వల్ల పొదుపు చేసిన డబ్బు కాలక్రమేణా పెరగవచ్చు."
        },
        hi: {
            title: "चक्रवृद्धि ब्याज",
            explanation:
                "चक्रवृद्धि ब्याज में मूल धन के साथ-साथ पहले से मिले ब्याज पर भी ब्याज मिलता है।",
            example:
                "पहले मिले ब्याज पर भी ब्याज मिलने के कारण बचत समय के साथ बढ़ सकती है।"
        }
    },

    "mutual fund": {
        en: {
            title: "Mutual Fund",
            explanation:
                "A mutual fund collects money from many investors and invests that money in a group of financial assets according to the fund's stated objective.",
            example:
                "Instead of directly selecting individual assets, an investor can own units of a mutual fund."
        },
        te: {
            title: "మ్యూచువల్ ఫండ్",
            explanation:
                "మ్యూచువల్ ఫండ్ అనేది అనేక మంది పెట్టుబడిదారుల నుంచి డబ్బును సేకరించి, ఫండ్ లక్ష్యానికి అనుగుణంగా వివిధ ఆర్థిక ఆస్తుల్లో పెట్టుబడి చేసే విధానం.",
            example:
                "వ్యక్తిగతంగా ప్రతి ఆస్తిని ఎంచుకోవడానికి బదులుగా, ఒక పెట్టుబడిదారు మ్యూచువల్ ఫండ్ యూనిట్లను కలిగి ఉండవచ్చు."
        },
        hi: {
            title: "म्यूचुअल फंड",
            explanation:
                "म्यूचुअल फंड कई निवेशकों से पैसा एकत्र करता है और फंड के उद्देश्य के अनुसार उसे विभिन्न वित्तीय परिसंपत्तियों में निवेश करता है।",
            example:
                "व्यक्तिगत परिसंपत्तियों को सीधे चुनने के बजाय निवेशक म्यूचुअल फंड की यूनिट्स रख सकता है।"
        }
    },

    scam: {
        en: {
            title: "Financial Scam",
            explanation:
                "A financial scam is an attempt to deceive someone into giving away money, personal information, or access to an account.",
            example:
                "A message promising guaranteed returns and asking you to send money immediately can be a warning sign that needs verification."
        },
        te: {
            title: "ఆర్థిక మోసం",
            explanation:
                "డబ్బు, వ్యక్తిగత సమాచారం లేదా ఖాతా యాక్సెస్‌ను మోసపూరితంగా పొందడానికి చేసే ప్రయత్నాన్ని ఆర్థిక మోసం అంటారు.",
            example:
                "ఖచ్చితమైన రాబడిని హామీ ఇచ్చి వెంటనే డబ్బు పంపమని అడిగే సందేశం ఒక హెచ్చరిక కావచ్చు."
        },
        hi: {
            title: "वित्तीय धोखाधड़ी",
            explanation:
                "किसी व्यक्ति से पैसा, व्यक्तिगत जानकारी या खाते की पहुंच धोखे से प्राप्त करने के प्रयास को वित्तीय धोखाधड़ी कहा जाता है।",
            example:
                "गारंटीड रिटर्न का वादा करके तुरंत पैसे भेजने के लिए कहना एक चेतावनी संकेत हो सकता है।"
        }
    },

    volatility: {
        en: {
            title: "Volatility",
            explanation:
                "Volatility describes how much the value of an investment changes over a period of time.",
            example:
                "If an investment moves from ₹100 to ₹120 and then to ₹90, it is experiencing significant price changes."
        },
        te: {
            title: "ధరల మార్పు",
            explanation:
                "ఒక పెట్టుబడి విలువ కొంత కాలంలో ఎంతగా మారుతుందో వోలాటిలిటీ వివరిస్తుంది.",
            example:
                "ఒక పెట్టుబడి విలువ ₹100 నుంచి ₹120కి వెళ్లి, తర్వాత ₹90కి వస్తే, దాని విలువలో గణనీయమైన మార్పులు ఉన్నాయి."
        },
        hi: {
            title: "अस्थिरता",
            explanation:
                "किसी निवेश के मूल्य में समय के साथ कितना बदलाव होता है, उसे अस्थिरता कहा जाता है।",
            example:
                "यदि किसी निवेश का मूल्य ₹100 से ₹120 और फिर ₹90 हो जाता है, तो उसमें काफी मूल्य परिवर्तन हुआ है।"
        }
    },

    investment: {
        en: {
            title: "Investment",
            explanation:
                "An investment is money placed into an asset or financial product with the expectation that it may generate returns or other benefits over time.",
            example:
                "People may invest in different types of assets, but each investment has its own risks and characteristics."
        },
        te: {
            title: "పెట్టుబడి",
            explanation:
                "కాలక్రమేణా రాబడి లేదా ఇతర ప్రయోజనాలు రావచ్చనే ఉద్దేశంతో డబ్బును ఒక ఆస్తి లేదా ఆర్థిక ఉత్పత్తిలో పెట్టడాన్ని పెట్టుబడి అంటారు.",
            example:
                "వివిధ రకాల ఆస్తుల్లో పెట్టుబడి పెట్టవచ్చు. ప్రతి పెట్టుబడికి దాని స్వంత ప్రమాదాలు మరియు లక్షణాలు ఉంటాయి."
        },
        hi: {
            title: "निवेश",
            explanation:
                "समय के साथ रिटर्न या अन्य लाभ मिलने की उम्मीद से किसी परिसंपत्ति या वित्तीय उत्पाद में पैसा लगाना निवेश कहलाता है।",
            example:
                "लोग अलग-अलग प्रकार की परिसंपत्तियों में निवेश कर सकते हैं, लेकिन हर निवेश के अपने जोखिम और विशेषताएं होती हैं।"
        }
    },

    risk: {
        en: {
            title: "Financial Risk",
            explanation:
                "Financial risk is the possibility that an outcome may be different from what someone expects, including the possibility of losing money.",
            example:
                "An asset whose value changes significantly can expose an investor to greater changes in the value of their money."
        },
        te: {
            title: "ఆర్థిక ప్రమాదం",
            explanation:
                "ఎవరైనా ఊహించిన ఫలితానికి భిన్నంగా ఫలితం రావడం లేదా డబ్బు కోల్పోయే అవకాశం ఉండటాన్ని ఆర్థిక ప్రమాదం అంటారు.",
            example:
                "విలువలో ఎక్కువ మార్పులు ఉండే ఆస్తి పెట్టుబడిదారుడి డబ్బు విలువలో కూడా ఎక్కువ మార్పులకు దారితీయవచ్చు."
        },
        hi: {
            title: "वित्तीय जोखिम",
            explanation:
                "किसी वित्तीय परिणाम के उम्मीद से अलग होने या पैसा खोने की संभावना को वित्तीय जोखिम कहा जाता है।",
            example:
                "जिस परिसंपत्ति के मूल्य में अधिक बदलाव होता है, उसमें निवेश करने पर पैसे के मूल्य में भी अधिक बदलाव हो सकता है।"
        }
    },

    savings: {
        en: {
            title: "Savings",
            explanation:
                "Savings are money that is set aside instead of being spent immediately. Savings can help with future expenses and emergencies.",
            example:
                "Keeping part of your income aside each month can create a financial reserve."
        },
        te: {
            title: "పొదుపు",
            explanation:
                "వెంటనే ఖర్చు చేయకుండా భవిష్యత్ అవసరాల కోసం పక్కన పెట్టే డబ్బును పొదుపు అంటారు.",
            example:
                "ప్రతి నెల మీ ఆదాయంలో కొంత భాగాన్ని పక్కన పెట్టడం ద్వారా ఆర్థిక నిల్వను ఏర్పరచుకోవచ్చు."
        },
        hi: {
            title: "बचत",
            explanation:
                "तुरंत खर्च करने के बजाय भविष्य की जरूरतों और आपातकालीन परिस्थितियों के लिए अलग रखे गए पैसे को बचत कहते हैं।",
            example:
                "हर महीने अपनी आय का कुछ हिस्सा अलग रखने से वित्तीय बचत तैयार हो सकती है।"
        }
    }
};


/* =========================================================
   CLAIM CHECKER LANGUAGE
========================================================= */

const claimCheckerText = {

    en: {

        emptyTitle: "Please enter a claim",
        emptyText: "Enter a financial claim to check.",
        detected: "Claim detected",
        saying: "What this claim is saying",
        detectedWarnings: "What FinVoice detected",
        verify: "What should you verify?",

        guidance:
            "FinVoice does not determine whether a claim is true or false. Verify important financial information using reliable sources before acting.",

        source:
            "Verify the source independently.",

        explanationDefault:
            "This claim contains financial information that should be checked against reliable evidence before being trusted.",

        explanationSafe:
            "This appears to be a general financial or educational statement. FinVoice did not detect an obvious misleading pattern in the wording.",

        explanationNeutral:
            "FinVoice did not identify a specific warning pattern, but the claim should still be checked against a reliable source before being trusted.",

        statuses: {
            misleading: "POTENTIALLY MISLEADING",
            verify: "NEEDS VERIFICATION",
            safe: "NO OBVIOUS WARNING"
        },

        warnings: {

            guaranteed:
                "The claim promises a guaranteed financial outcome.",

            zeroRisk:
                "The claim suggests there is no risk or possibility of loss.",

            highReturn:
                "The claim suggests unusually high or unrealistic returns.",

            futureOutcome:
                "The claim predicts a certain future financial outcome.",

            recommendation:
                "The claim encourages people to invest or act immediately.",

            government:
                "The claim makes a government or official approval claim that should be independently verified.",

            statistics:
                "The claim uses statistics or numerical information that should be checked against a reliable source.",

            neverLost:
                "The claim says the investment has never lost money or always produces profits.",

            urgency:
                "The claim creates pressure to act quickly.",

            payment:
                "The claim asks for money, fees, or a payment.",

            sensitive:
                "The claim requests sensitive financial or personal information.",

            source:
                "The claim mentions a source or authority that should be checked directly."
        },

        verifyItems: {

            guaranteed:
                "Check whether the promised outcome is supported by reliable evidence.",

            zeroRisk:
                "Check whether the investment can actually involve loss or risk.",

            highReturn:
                "Compare the return claim with reliable financial information.",

            futureOutcome:
                "Do not assume that future prices or returns can be predicted with certainty.",

            recommendation:
                "Understand the risks before making an investment decision.",

            government:
                "Check the claimed approval directly on the relevant official website.",

            statistics:
                "Verify the numbers and their original source.",

            neverLost:
                "Look for independent evidence rather than relying on the promotional statement.",

            urgency:
                "Take time to verify the information before acting.",

            payment:
                "Verify who is requesting the payment and why.",

            sensitive:
                "Do not share OTPs, PINs, passwords, or other sensitive credentials.",

            source:
                "Open and verify the original source independently."
        }
    },


    te: {

        emptyTitle: "దయచేసి ఒక క్లెయిమ్ నమోదు చేయండి",
        emptyText: "తనిఖీ చేయడానికి ఒక ఆర్థిక క్లెయిమ్‌ను నమోదు చేయండి.",
        detected: "గుర్తించిన క్లెయిమ్",
        saying: "ఈ క్లెయిమ్ ఏమి చెబుతోంది",
        detectedWarnings: "FinVoice గుర్తించిన అంశాలు",
        verify: "మీరు ఏమి ధృవీకరించాలి?",

        guidance:
            "FinVoice ఒక క్లెయిమ్ నిజమా లేదా అబద్ధమా అని నిర్ణయించదు. ముఖ్యమైన ఆర్థిక సమాచారాన్ని నమ్మదగిన వనరులతో ధృవీకరించిన తర్వాత మాత్రమే చర్య తీసుకోండి.",

        source:
            "మూలాన్ని స్వతంత్రంగా ధృవీకరించండి.",

        explanationDefault:
            "ఈ క్లెయిమ్‌లోని ఆర్థిక సమాచారాన్ని నమ్మే ముందు నమ్మదగిన ఆధారాలతో తనిఖీ చేయాలి.",

        explanationSafe:
            "ఇది సాధారణ ఆర్థిక లేదా విద్యా సమాచారం లాగా కనిపిస్తోంది. ఈ వాక్యంలో స్పష్టమైన తప్పుదారి పట్టించే నమూనాను FinVoice గుర్తించలేదు.",

        explanationNeutral:
            "FinVoice నిర్దిష్ట హెచ్చరిక నమూనాను గుర్తించలేదు. అయినప్పటికీ, ఈ క్లెయిమ్‌ను నమ్మే ముందు నమ్మదగిన మూలంతో తనిఖీ చేయండి.",

        statuses: {
            misleading: "తప్పుదారి పట్టించే అవకాశం ఉంది",
            verify: "ధృవీకరణ అవసరం",
            safe: "స్పష్టమైన హెచ్చరిక లేదు"
        },

        warnings: {

            guaranteed:
                "ఈ క్లెయిమ్ ఖచ్చితమైన ఆర్థిక ఫలితాన్ని హామీ ఇస్తోంది.",

            zeroRisk:
                "ఎటువంటి ప్రమాదం లేదా నష్టం ఉండదని ఈ క్లెయిమ్ సూచిస్తోంది.",

            highReturn:
                "అసాధారణంగా ఎక్కువ లేదా అవాస్తవ రాబడిని ఈ క్లెయిమ్ సూచిస్తోంది.",

            futureOutcome:
                "భవిష్యత్తులో ఖచ్చితమైన ఆర్థిక ఫలితాన్ని ఈ క్లెయిమ్ అంచనా వేస్తోంది.",

            recommendation:
                "పెట్టుబడి పెట్టాలని లేదా వెంటనే చర్య తీసుకోవాలని ఈ క్లెయిమ్ ప్రోత్సహిస్తోంది.",

            government:
                "ప్రభుత్వం లేదా అధికారిక అనుమతికి సంబంధించిన క్లెయిమ్ ఉంది. దీనిని స్వతంత్రంగా ధృవీకరించాలి.",

            statistics:
                "ఈ క్లెయిమ్ గణాంకాలు లేదా సంఖ్యలను ఉపయోగిస్తోంది. వాటిని నమ్మదగిన మూలంతో తనిఖీ చేయాలి.",

            neverLost:
                "ఈ పెట్టుబడిలో ఎప్పుడూ నష్టం రాలేదని లేదా ఎల్లప్పుడూ లాభం వస్తుందని క్లెయిమ్ చెబుతోంది.",

            urgency:
                "త్వరగా చర్య తీసుకోవాలని ఈ క్లెయిమ్ ఒత్తిడి చేస్తోంది.",

            payment:
                "డబ్బు, ఫీజు లేదా చెల్లింపు చేయాలని ఈ క్లెయిమ్ కోరుతోంది.",

            sensitive:
                "సున్నితమైన ఆర్థిక లేదా వ్యక్తిగత సమాచారాన్ని ఈ క్లెయిమ్ కోరుతోంది.",

            source:
                "ఈ క్లెయిమ్ పేర్కొన్న మూలం లేదా అధికారాన్ని నేరుగా తనిఖీ చేయాలి."
        },

        verifyItems: {

            guaranteed:
                "హామీ ఇచ్చిన ఫలితానికి నమ్మదగిన ఆధారం ఉందో లేదో తనిఖీ చేయండి.",

            zeroRisk:
                "ఆ పెట్టుబడిలో నష్టం లేదా ప్రమాదం ఉండవచ్చో లేదో తనిఖీ చేయండి.",

            highReturn:
                "రాబడి క్లెయిమ్‌ను నమ్మదగిన ఆర్థిక సమాచారంతో పోల్చండి.",

            futureOutcome:
                "భవిష్యత్తు ధరలు లేదా రాబడిని ఖచ్చితంగా అంచనా వేయవచ్చని అనుకోకండి.",

            recommendation:
                "పెట్టుబడి నిర్ణయం తీసుకునే ముందు ప్రమాదాలను అర్థం చేసుకోండి.",

            government:
                "చెప్పబడిన అనుమతిని సంబంధిత అధికారిక వెబ్‌సైట్‌లో నేరుగా తనిఖీ చేయండి.",

            statistics:
                "సంఖ్యలు మరియు వాటి అసలు మూలాన్ని ధృవీకరించండి.",

            neverLost:
                "ప్రచార ప్రకటనపై మాత్రమే ఆధారపడకుండా స్వతంత్ర ఆధారాలను చూడండి.",

            urgency:
                "చర్య తీసుకునే ముందు సమాచారాన్ని ధృవీకరించడానికి సమయం తీసుకోండి.",

            payment:
                "ఎవరు చెల్లింపు కోరుతున్నారు మరియు ఎందుకు కోరుతున్నారో ధృవీకరించండి.",

            sensitive:
                "OTPలు, PINలు, పాస్‌వర్డ్‌లు లేదా ఇతర సున్నితమైన సమాచారాన్ని పంచుకోవద్దు.",

            source:
                "అసలు మూలాన్ని స్వతంత్రంగా తెరిచి ధృవీకరించండి."
        }
    },


    hi: {

        emptyTitle: "कृपया एक दावा दर्ज करें",
        emptyText: "जाँचने के लिए एक वित्तीय दावा दर्ज करें।",
        detected: "पहचाना गया दावा",
        saying: "यह दावा क्या कह रहा है",
        detectedWarnings: "FinVoice ने क्या पहचाना",
        verify: "आपको क्या सत्यापित करना चाहिए?",

        guidance:
            "FinVoice यह तय नहीं करता कि कोई दावा सही है या गलत। महत्वपूर्ण वित्तीय जानकारी पर कार्रवाई करने से पहले विश्वसनीय स्रोतों से उसकी पुष्टि करें।",

        source:
            "स्रोत को स्वतंत्र रूप से सत्यापित करें।",

        explanationDefault:
            "इस दावे में वित्तीय जानकारी है, जिसे भरोसा करने से पहले विश्वसनीय प्रमाणों से जाँचना चाहिए।",

        explanationSafe:
            "यह एक सामान्य वित्तीय या शैक्षिक जानकारी जैसा लगता है। FinVoice ने इस कथन में कोई स्पष्ट भ्रामक पैटर्न नहीं पाया।",

        explanationNeutral:
            "FinVoice ने कोई विशेष चेतावनी पैटर्न नहीं पाया, लेकिन भरोसा करने से पहले इस दावे को विश्वसनीय स्रोत से जाँचना चाहिए।",

        statuses: {
            misleading: "भ्रामक होने की संभावना",
            verify: "सत्यापन आवश्यक",
            safe: "कोई स्पष्ट चेतावनी नहीं"
        },

        warnings: {

            guaranteed:
                "यह दावा निश्चित वित्तीय परिणाम की गारंटी देता है।",

            zeroRisk:
                "यह दावा किसी जोखिम या नुकसान की संभावना न होने का संकेत देता है।",

            highReturn:
                "यह दावा असामान्य रूप से अधिक या अवास्तविक रिटर्न का संकेत देता है।",

            futureOutcome:
                "यह दावा भविष्य के निश्चित वित्तीय परिणाम की भविष्यवाणी करता है।",

            recommendation:
                "यह दावा लोगों को निवेश करने या तुरंत कार्रवाई करने के लिए प्रेरित करता है।",

            government:
                "यह दावा सरकारी या आधिकारिक मंजूरी का उल्लेख करता है, जिसकी स्वतंत्र रूप से पुष्टि करनी चाहिए।",

            statistics:
                "यह दावा आँकड़ों या संख्याओं का उपयोग करता है, जिन्हें विश्वसनीय स्रोत से जाँचना चाहिए।",

            neverLost:
                "यह दावा कहता है कि निवेश में कभी नुकसान नहीं हुआ या हमेशा लाभ होता है।",

            urgency:
                "यह दावा जल्दी कार्रवाई करने का दबाव बनाता है।",

            payment:
                "यह दावा पैसे, शुल्क या भुगतान की मांग करता है।",

            sensitive:
                "यह दावा संवेदनशील वित्तीय या व्यक्तिगत जानकारी मांगता है।",

            source:
                "दावे में दिए गए स्रोत या प्राधिकरण को सीधे जाँचना चाहिए।"
        },

        verifyItems: {

            guaranteed:
                "जाँचें कि वादा किए गए परिणाम के लिए विश्वसनीय प्रमाण मौजूद है या नहीं।",

            zeroRisk:
                "जाँचें कि निवेश में नुकसान या जोखिम की संभावना हो सकती है या नहीं।",

            highReturn:
                "रिटर्न के दावे की तुलना विश्वसनीय वित्तीय जानकारी से करें।",

            futureOutcome:
                "यह न मानें कि भविष्य की कीमत या रिटर्न निश्चित रूप से बताया जा सकता है।",

            recommendation:
                "निवेश का निर्णय लेने से पहले जोखिमों को समझें।",

            government:
                "बताई गई मंजूरी को संबंधित आधिकारिक वेबसाइट पर सीधे जाँचें।",

            statistics:
                "आँकड़ों और उनके मूल स्रोत की पुष्टि करें।",

            neverLost:
                "केवल प्रचारात्मक बयान पर भरोसा करने के बजाय स्वतंत्र प्रमाण देखें।",

            urgency:
                "कार्रवाई करने से पहले जानकारी की पुष्टि करने के लिए समय लें।",

            payment:
                "सत्यापित करें कि भुगतान कौन मांग रहा है और क्यों।",

            sensitive:
                "OTP, PIN, पासवर्ड या अन्य संवेदनशील जानकारी साझा न करें।",

            source:
                "मूल स्रोत को स्वतंत्र रूप से खोलकर सत्यापित करें।"
        }
    }
};


/* =========================================================
   APPLY PAGE LANGUAGE
========================================================= */

function applyPageLanguage() {

    const t = pageText[currentLanguage] || pageText.en;


    /* NAVBAR */

    const navLinks = document.querySelectorAll(".navbar nav a");

    if (navLinks.length >= 3) {
        navLinks[0].textContent = t.navHome;
        navLinks[1].textContent = t.navHow;
        navLinks[2].textContent = t.navAbout;
    }


    /* HERO */

    const badge = document.querySelector(".hero .badge");
    if (badge) {
        badge.innerHTML = `<span>●</span> ${t.heroBadge}`;
    }

    const heroTitle = document.querySelector(".hero-left h1");
    if (heroTitle) {
        heroTitle.innerHTML = t.heroTitle;
    }

    const heroDescription = document.querySelector(".hero-left > p");
    if (heroDescription) {
        heroDescription.textContent = t.heroDescription;
    }

    const heroButtons = document.querySelectorAll(".hero-buttons button");

    if (heroButtons.length >= 2) {
        heroButtons[0].innerHTML =
            `${t.startLearning} <span>→</span>`;

        heroButtons[1].textContent =
            t.checkMessage;
    }


    const heroLanguages =
        document.querySelector(".hero-languages");

    if (heroLanguages) {

        const spans =
            heroLanguages.querySelectorAll("span");

        if (spans.length > 0) {
            spans[0].textContent = t.available;
        }
    }


    /* PRODUCT PREVIEW */

    const previewBrandSpan =
        document.querySelector(".preview-brand span");

    if (previewBrandSpan) {
        previewBrandSpan.textContent =
            t.financialAssistant;
    }

    const online =
        document.querySelector(".online");

    if (online) {
        online.textContent = t.online;
    }

    const userQuestion =
        document.querySelector(".user-question span");

    if (userQuestion) {
        userQuestion.textContent = t.you;
    }

    const aiAnswerSpan =
        document.querySelector(".ai-title span");

    if (aiAnswerSpan) {
        aiAnswerSpan.textContent =
            t.financialExplanation;
    }

    const exampleLabel =
        document.querySelector(".simple-example span");

    if (exampleLabel) {
        exampleLabel.textContent = t.example;
    }

    const answerAction =
        document.querySelector(".answer-actions button");

    if (answerAction) {
        answerAction.textContent = t.listen;
    }

    const simpleExplanation =
        document.querySelector(".answer-actions span");

    if (simpleExplanation) {
        simpleExplanation.textContent =
            t.simpleExplanation;
    }

    const previewInput =
        document.querySelector(".preview-input span");

    if (previewInput) {
        previewInput.textContent =
            t.askFinancialTerm;
    }


    /* TRUST STRIP */

    const trustItems =
        document.querySelectorAll(".trust-strip > div");

    if (trustItems.length >= 3) {

        trustItems[0].querySelector("strong").textContent =
            t.trustLearn;

        trustItems[0].querySelector("span").textContent =
            t.trustLearnText;

        trustItems[1].querySelector("strong").textContent =
            t.trustCheck;

        trustItems[1].querySelector("span").textContent =
            t.trustCheckText;

        trustItems[2].querySelector("strong").textContent =
            t.trustVerify;

        trustItems[2].querySelector("span").textContent =
            t.trustVerifyText;
    }


    /* LEARN FINANCE */

    const learningSection =
        document.querySelector(".learning-section");

    if (learningSection) {

        const label =
            learningSection.querySelector(".section-label");

        if (label) {
            label.textContent = t.learnLabel;
        }

        const heading =
            learningSection.querySelector(".section-heading h2");

        if (heading) {
            heading.innerHTML = t.learnTitle;
        }

        const description =
            learningSection.querySelector(".section-heading p");

        if (description) {
            description.textContent =
                t.learnDescription;
        }

        const questionLabel =
            learningSection.querySelector("label");

        if (questionLabel) {
            questionLabel.textContent =
                t.learningQuestion;
        }

        const financeInput =
            document.getElementById("financeQuestion");

        if (financeInput) {
            financeInput.placeholder =
                t.learningPlaceholder;
        }

        const explainButton =
            learningSection.querySelector(".finance-input-row button");

        if (explainButton) {
            explainButton.innerHTML =
                `${t.explain} <span>→</span>`;
        }

        const suggestedSpan =
            learningSection.querySelector(".suggested-questions > span");

        if (suggestedSpan) {
            suggestedSpan.textContent =
                t.tryAsking;
        }

        const suggestedButtons =
            learningSection.querySelectorAll(
                ".suggested-questions button"
            );

        if (suggestedButtons.length >= 4) {

            suggestedButtons[0].textContent =
                t.inflationQuestion;

            suggestedButtons[1].textContent =
                t.compoundQuestion;

            suggestedButtons[2].textContent =
                t.mutualQuestion;

            suggestedButtons[3].textContent =
                t.scamQuestion;
        }

        const placeholder =
            document.querySelector(".answer-placeholder");

        if (placeholder) {

            const h3 =
                placeholder.querySelector("h3");

            const p =
                placeholder.querySelector("p");

            if (h3) {
                h3.textContent =
                    t.answerPlaceholderTitle;
            }

            if (p) {
                p.textContent =
                    t.answerPlaceholderText;
            }
        }
    }


    /* MESSAGE CHECKER */

    const messageSection =
        document.querySelector(".message-section");

    if (messageSection) {

        const label =
            messageSection.querySelector(".section-label");

        const heading =
            messageSection.querySelector(".section-heading h2");

        const description =
            messageSection.querySelector(".section-heading p");

        const inputLabel =
            messageSection.querySelector("label");

        const textarea =
            document.getElementById("messageInput");

        const buttons =
            messageSection.querySelectorAll(".message-actions button");

        if (label) label.textContent = t.messageLabel;

        if (heading) heading.innerHTML = t.messageTitle;

        if (description)
            description.textContent = t.messageDescription;

        if (inputLabel)
            inputLabel.textContent = t.messageInputLabel;

        if (textarea)
            textarea.placeholder = t.messagePlaceholder;

        if (buttons.length >= 2) {
            buttons[0].textContent = t.analyzeMessage;
            buttons[1].textContent = t.tryExample;
        }
    }


    /* CLAIM CHECKER */

    const claimSection =
        document.querySelector(".claim-section");

    if (claimSection) {

        const label =
            claimSection.querySelector(".section-label");

        const heading =
            claimSection.querySelector(".section-heading h2");

        const description =
            claimSection.querySelector(".section-heading p");

        const inputLabel =
            claimSection.querySelector("label");

        const textarea =
            document.getElementById("claimInput");

        const button =
            claimSection.querySelector(".claim-actions button");

        if (label)
            label.textContent = t.claimLabel;

        if (heading)
            heading.innerHTML = t.claimTitle;

        if (description)
            description.textContent = t.claimDescription;

        if (inputLabel)
            inputLabel.textContent = t.claimInputLabel;

        if (textarea)
            textarea.placeholder = t.claimPlaceholder;

        if (button)
            button.textContent = t.checkClaim;
    }


    /* FINVOICE TOOLS */

    const featureSection =
        document.querySelector(".features-section");

    if (featureSection) {

        const label =
            featureSection.querySelector(".section-label");

        const heading =
            featureSection.querySelector(".section-heading h2");

        const description =
            featureSection.querySelector(".section-heading p");

        if (label)
            label.textContent = t.toolsLabel;

        if (heading)
            heading.innerHTML = t.toolsTitle;

        if (description)
            description.textContent = t.toolsDescription;


        const cards =
            featureSection.querySelectorAll(".feature-card");

        if (cards.length >= 3) {

            cards[0].querySelector("h3").textContent =
                t.learnFinance;

            cards[0].querySelector("p").textContent =
                t.learnFinanceText;

            cards[0].querySelector("button").textContent =
                t.learnConcept;


            cards[1].querySelector("h3").textContent =
                t.checkMessageCard;

            cards[1].querySelector("p").textContent =
                t.checkMessageText;

            cards[1].querySelector("button").textContent =
                t.checkMessageButton;


            cards[2].querySelector("h3").textContent =
                t.checkClaimCard;

            cards[2].querySelector("p").textContent =
                t.checkClaimText;

            cards[2].querySelector("button").textContent =
                t.checkClaimButton;
        }
    }


    /* HOW IT WORKS */

    const howSection =
        document.querySelector(".how-section");

    if (howSection) {

        const label =
            howSection.querySelector(".section-label");

        const heading =
            howSection.querySelector(".section-heading h2");

        const description =
            howSection.querySelector(".section-heading p");

        if (label)
            label.textContent = t.howLabel;

        if (heading)
            heading.textContent = t.howTitle;

        if (description)
            description.textContent = t.howDescription;


        const steps =
            howSection.querySelectorAll(".step");

        if (steps.length >= 3) {

            steps[0].querySelector("h3").textContent =
                t.askShare;

            steps[0].querySelector("p").textContent =
                t.askShareText;

            steps[1].querySelector("h3").textContent =
                t.understand;

            steps[1].querySelector("p").textContent =
                t.understandText;

            steps[2].querySelector("h3").textContent =
                t.verify;

            steps[2].querySelector("p").textContent =
                t.verifyText;
        }
    }


    /* ABOUT */

    const aboutSection =
        document.querySelector(".about-section");

    if (aboutSection) {

        const label =
            aboutSection.querySelector(".section-label");

        const heading =
            aboutSection.querySelector(".about-title h2");

        const paragraphs =
            aboutSection.querySelectorAll(".about-content > p");

        if (label)
            label.textContent = t.principleLabel;

        if (heading)
            heading.innerHTML = t.principleTitle;

        if (paragraphs.length >= 2) {
            paragraphs[0].textContent =
                t.aboutText1;

            paragraphs[1].textContent =
                t.aboutText2;
        }

        const principles =
            aboutSection.querySelectorAll(".principles span");

        if (principles.length >= 4) {

            principles[0].textContent =
                t.educationFirst;

            principles[1].textContent =
                t.privacyFocused;

            principles[2].textContent =
                t.clearExplanations;

            principles[3].textContent =
                t.noRecommendations;
        }
    }


    /* FOOTER */

    const footer =
        document.querySelector("footer");

    if (footer) {

        const footerSpan =
            footer.querySelector(".footer-brand span");

        const footerP =
            footer.querySelector("p");

        if (footerSpan)
            footerSpan.textContent =
                t.footerText;

        if (footerP)
            footerP.textContent =
                t.footerTagline;
    }
}


/* =========================================================
   OPEN LEARN FINANCE
========================================================= */

function openLearning() {

    const section =
        document.getElementById("learn");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

        setTimeout(() => {

            const input =
                document.getElementById("financeQuestion");

            if (input) {
                input.focus();
            }

        }, 700);
    }
}


/* =========================================================
   ASK FINANCE QUESTION
========================================================= */

function askFinanceQuestion() {

    const input =
        document.getElementById("financeQuestion");

    if (!input) return;

    const question =
        input.value.trim().toLowerCase();

    if (question === "") {
        input.focus();
        return;
    }

    findFinancialAnswer(question);
}


/* =========================================================
   SUGGESTED QUESTION
========================================================= */

function askSuggested(question) {

    const input =
        document.getElementById("financeQuestion");

    if (!input) return;

    input.value = question;

    findFinancialAnswer(
        question.toLowerCase()
    );
}


/* =========================================================
   ENTER KEY
========================================================= */

function handleEnter(event) {

    if (event.key === "Enter") {
        askFinanceQuestion();
    }
}


/* =========================================================
   FIND FINANCIAL ANSWER
========================================================= */

function findFinancialAnswer(question) {

    let result = null;

    for (const keyword in financeData) {

        if (question.includes(keyword)) {

            result =
                financeData[keyword];

            break;
        }
    }

    displayAnswer(result);
}
/* =========================================================
   DISPLAY FINANCIAL ANSWER
========================================================= */

function displayAnswer(result) {

    const answerBox =
        document.getElementById("financeAnswer");

    if (!answerBox) return;


    /* =====================================================
       UNKNOWN QUESTION
    ===================================================== */

    if (!result) {

        const unknownText = {

            en: {
                title: "Let's try another question.",
                text:
                    "This prototype can currently explain common financial concepts such as:",
                examples:
                    "Inflation · Compound Interest · Mutual Funds · Financial Scams · Volatility · Investment · Risk · Savings"
            },

            te: {
                title: "మరొక ప్రశ్నను ప్రయత్నించండి.",
                text:
                    "ఈ ప్రోటోటైప్ ప్రస్తుతం ఈ సాధారణ ఆర్థిక అంశాలను వివరించగలదు:",
                examples:
                    "ద్రవ్యోల్బణం · చక్రవడ్డీ · మ్యూచువల్ ఫండ్స్ · ఆర్థిక మోసాలు · ధరల మార్పు · పెట్టుబడి · ప్రమాదం · పొదుపు"
            },

            hi: {
                title: "कोई दूसरा प्रश्न पूछें।",
                text:
                    "यह प्रोटोटाइप वर्तमान में इन सामान्य वित्तीय विषयों को समझा सकता है:",
                examples:
                    "महंगाई · चक्रवृद्धि ब्याज · म्यूचुअल फंड · वित्तीय धोखाधड़ी · अस्थिरता · निवेश · जोखिम · बचत"
            }
        };

        const text =
            unknownText[currentLanguage] ||
            unknownText.en;

        answerBox.innerHTML = `

            <div class="answer-content">

                <div class="answer-title">
                    <span>F</span>
                    <strong>FinVoice</strong>
                </div>

                <h3>${text.title}</h3>

                <p>${text.text}</p>

                <div class="example-box">
                    <p>${text.examples}</p>
                </div>

            </div>
        `;

        return;
    }


    /* =====================================================
       LOCALIZED RESULT
    ===================================================== */

    const localizedResult =
        result[currentLanguage] ||
        result.en;


    const speechText =
        `${localizedResult.title}. ${localizedResult.explanation}`;


    /* BUTTON TEXT */

    const listenText =
        currentLanguage === "te"
            ? "వినండి"
            : currentLanguage === "hi"
                ? "सुनें"
                : "Listen";


    const simpleExample =
        currentLanguage === "te"
            ? "సులభమైన ఉదాహరణ"
            : currentLanguage === "hi"
                ? "सरल उदाहरण"
                : "SIMPLE EXAMPLE";


    /* =====================================================
       CREATE ANSWER
    ===================================================== */

    answerBox.innerHTML = `

        <div class="answer-content">

            <div class="answer-title">

                <span>F</span>

                <strong>
                    FinVoice
                </strong>

            </div>

            <h3>
                ${localizedResult.title}
            </h3>

            <p>
                ${localizedResult.explanation}
            </p>

            <div class="example-box">

                <small>
                    ${simpleExample}
                </small>

                <p>
                    ${localizedResult.example}
                </p>

            </div>

            <button
                type="button"
                class="listen-btn"
                id="listenAnswerButton"
            >
                ▶ ${listenText}
            </button>

        </div>
    `;


    /* =====================================================
       LISTEN BUTTON
       USE EVENT LISTENER INSTEAD OF INLINE ONCLICK
    ===================================================== */

    const listenButton =
        document.getElementById(
            "listenAnswerButton"
        );


    if (listenButton) {

        listenButton.addEventListener(
            "click",
            () => {

                playVoice(speechText);

            }
        );
    }
}

/* =========================================================
   VOICE
========================================================= */

function playVoice(text) {

    /* Browser support check */

    if (!("speechSynthesis" in window)) {

        alert(
            "Voice playback is not supported by this browser."
        );

        return;
    }


    /* Stop previous speech */

    window.speechSynthesis.cancel();


    /* Create speech */

    const speech =
        new SpeechSynthesisUtterance(text);


    /* =====================================================
       LANGUAGE
    ===================================================== */

    if (currentLanguage === "te") {

        speech.lang = "te-IN";

    } else if (currentLanguage === "hi") {

        speech.lang = "hi-IN";

    } else {

        speech.lang = "en-IN";
    }


    /* =====================================================
       SPEECH SETTINGS
    ===================================================== */

    speech.rate = 0.85;
    speech.pitch = 1;
    speech.volume = 1;


    /* =====================================================
       GET AVAILABLE VOICES
    ===================================================== */

    const voices =
        window.speechSynthesis.getVoices();


    let selectedVoice = null;


    if (currentLanguage === "te") {

        selectedVoice =
            voices.find(
                voice =>
                    voice.lang.toLowerCase() === "te-in"
            ) ||
            voices.find(
                voice =>
                    voice.lang.toLowerCase().startsWith("te")
            );
    }


    if (currentLanguage === "hi") {

        selectedVoice =
            voices.find(
                voice =>
                    voice.lang.toLowerCase() === "hi-in"
            ) ||
            voices.find(
                voice =>
                    voice.lang.toLowerCase().startsWith("hi")
            );
    }


    if (currentLanguage === "en") {

        selectedVoice =
            voices.find(
                voice =>
                    voice.lang.toLowerCase() === "en-in"
            ) ||
            voices.find(
                voice =>
                    voice.lang.toLowerCase().startsWith("en")
            );
    }


    /* Use the matching voice if available */

    if (selectedVoice) {

        speech.voice =
            selectedVoice;
    }


    /* =====================================================
       SPEECH EVENTS
    ===================================================== */

    speech.onstart = () => {

        console.log(
            "FinVoice voice started:",
            speech.lang
        );

    };


    speech.onend = () => {

        console.log(
            "FinVoice voice finished."
        );

    };


    speech.onerror = (event) => {

        console.error(
            "Speech synthesis error:",
            event
        );

    };


    /* =====================================================
       PLAY
    ===================================================== */

    window.speechSynthesis.speak(
        speech
    );
}
/* =========================================================
   LOAD BROWSER VOICES
========================================================= */

if ("speechSynthesis" in window) {

    window.speechSynthesis.onvoiceschanged = () => {

        const voices =
            window.speechSynthesis.getVoices();

        console.log(
            "Available voices:",
            voices
        );
    };
}


/* =========================================================
   OPEN MESSAGE CHECKER
========================================================= */

function openMessageChecker() {

    const section =
        document.getElementById("message-checker");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

        setTimeout(() => {

            const input =
                document.getElementById("messageInput");

            if (input) input.focus();

        }, 700);
    }
}


/* =========================================================
   MESSAGE CHECKER LANGUAGE
========================================================= */

const messageCheckerText = {

    en: {

        emptyTitle: "Please enter a message",

        emptyText:
            "Paste the financial message you want to check.",

        warningTitle:
            "Potential warning signs",

        verifyTitle:
            "What should you verify?",

        verifyItems: [
            "Verify who sent the message.",
            "Check the organization using its official website or app.",
            "Do not share OTPs, passwords, PINs or other sensitive credentials.",
            "Verify important financial claims independently.",
            "Do not send money or pay fees before independent verification.",
            "Do not act under pressure."
        ],

        warnings: {

            guaranteed:
                "Claims that returns are guaranteed should be checked carefully.",

            highReturn:
                "Large return claims should be independently verified before taking action.",

            investment:
                "The message is promoting or encouraging a financial opportunity that should be independently checked.",

            contact:
                "Verify the identity and organization of anyone asking you to take financial action.",

            social:
                "Financial requests received through messaging or social platforms should be independently verified.",

            urgency:
                "Urgency can discourage independent verification.",

            sensitive:
                "Never share OTPs, PINs, passwords, CVVs or other confidential credentials.",

            payment:
                "Verify who is requesting the payment and why before sending money.",

            account:
                "Threats about account closure can be used to pressure users into acting quickly.",

            reward:
                "Unexpected rewards should be verified independently before sharing information or making payments.",

            link:
                "Do not assume that a link is genuine. Open the organization's official website independently.",

            authority:
                "Mentioning an official organization does not prove that the message actually came from that organization.",

            safe:
                "This does not prove that the message is genuine. Verify the sender and important information independently."
        }
    },


    te: {

        emptyTitle:
            "దయచేసి ఒక సందేశాన్ని నమోదు చేయండి",

        emptyText:
            "మీరు తనిఖీ చేయాలనుకుంటున్న ఆర్థిక సందేశాన్ని ఇక్కడ పెట్టండి.",

        warningTitle:
            "సంభావ్య హెచ్చరికలు",

        verifyTitle:
            "మీరు ఏమి ధృవీకరించాలి?",

        verifyItems: [
            "సందేశాన్ని ఎవరు పంపారో ధృవీకరించండి.",
            "అధికారిక వెబ్‌సైట్ లేదా యాప్ ద్వారా సంస్థను తనిఖీ చేయండి.",
            "OTPలు, పాస్‌వర్డ్‌లు, PINలు లేదా ఇతర సున్నితమైన సమాచారాన్ని పంచుకోవద్దు.",
            "ముఖ్యమైన ఆర్థిక క్లెయిమ్‌లను స్వతంత్రంగా ధృవీకరించండి.",
            "స్వతంత్ర ధృవీకరణకు ముందు డబ్బు పంపవద్దు లేదా ఫీజు చెల్లించవద్దు.",
            "ఒత్తిడిలో చర్య తీసుకోవద్దు."
        ],

        warnings: {

            guaranteed:
                "రాబడి హామీ ఇస్తున్న క్లెయిమ్‌లను జాగ్రత్తగా తనిఖీ చేయాలి.",

            highReturn:
                "అధిక రాబడి క్లెయిమ్‌లను చర్య తీసుకునే ముందు స్వతంత్రంగా ధృవీకరించాలి.",

            investment:
                "ఈ సందేశం ఒక ఆర్థిక అవకాశాన్ని ప్రోత్సహిస్తోంది. దానిని స్వతంత్రంగా తనిఖీ చేయాలి.",

            contact:
                "ఆర్థిక చర్య తీసుకోవాలని అడుగుతున్న వ్యక్తి లేదా సంస్థను ధృవీకరించండి.",

            social:
                "మెసేజింగ్ లేదా సోషల్ మీడియా ద్వారా వచ్చిన ఆర్థిక అభ్యర్థనలను స్వతంత్రంగా ధృవీకరించాలి.",

            urgency:
                "అత్యవసరంగా చర్య తీసుకోవాలని చెప్పడం స్వతంత్ర ధృవీకరణను తగ్గించవచ్చు.",

            sensitive:
                "OTPలు, PINలు, పాస్‌వర్డ్‌లు, CVVలు లేదా ఇతర రహస్య సమాచారాన్ని ఎప్పుడూ పంచుకోవద్దు.",

            payment:
                "డబ్బు పంపే ముందు చెల్లింపు ఎవరు కోరుతున్నారు మరియు ఎందుకు కోరుతున్నారో ధృవీకరించండి.",

            account:
                "ఖాతా మూసివేస్తామని లేదా బ్లాక్ చేస్తామని చెప్పడం త్వరగా చర్య తీసుకునేలా ఒత్తిడి చేయవచ్చు.",

            reward:
                "అనుకోని బహుమతులు లేదా రివార్డులను సమాచారం పంచుకునే లేదా చెల్లింపు చేసే ముందు ధృవీకరించండి.",

            link:
                "ఒక లింక్ నిజమైనదని వెంటనే నమ్మవద్దు. సంస్థ యొక్క అధికారిక వెబ్‌సైట్‌ను స్వతంత్రంగా తెరవండి.",

            authority:
                "అధికారిక సంస్థ పేరు ఉండటం మాత్రమే ఆ సందేశం నిజంగా ఆ సంస్థ నుంచే వచ్చిందని నిరూపించదు.",

            safe:
                "దీనివల్ల సందేశం నిజమైనదని నిరూపించబడదు. పంపిన వ్యక్తి మరియు ముఖ్యమైన సమాచారాన్ని స్వతంత్రంగా ధృవీకరించండి."
        }
    },


    hi: {

        emptyTitle:
            "कृपया एक संदेश दर्ज करें",

        emptyText:
            "जिस वित्तीय संदेश की जाँच करनी है उसे यहाँ डालें।",

        warningTitle:
            "संभावित चेतावनी संकेत",

        verifyTitle:
            "आपको क्या सत्यापित करना चाहिए?",

        verifyItems: [
            "सत्यापित करें कि संदेश किसने भेजा है।",
            "आधिकारिक वेबसाइट या ऐप से संगठन की जाँच करें।",
            "OTP, पासवर्ड, PIN या अन्य संवेदनशील जानकारी साझा न करें।",
            "महत्वपूर्ण वित्तीय दावों की स्वतंत्र रूप से पुष्टि करें।",
            "स्वतंत्र सत्यापन से पहले पैसे न भेजें और शुल्क न दें।",
            "दबाव में आकर कार्रवाई न करें।"
        ],

        warnings: {

            guaranteed:
                "गारंटीड रिटर्न के दावों की सावधानीपूर्वक जाँच करनी चाहिए।",

            highReturn:
                "अधिक रिटर्न के दावों को कार्रवाई करने से पहले स्वतंत्र रूप से सत्यापित करें।",

            investment:
                "यह संदेश एक वित्तीय अवसर को बढ़ावा दे रहा है। इसकी स्वतंत्र रूप से जाँच करनी चाहिए।",

            contact:
                "वित्तीय कार्रवाई करने के लिए कहने वाले व्यक्ति या संगठन की पहचान सत्यापित करें।",

            social:
                "मैसेजिंग या सोशल मीडिया से प्राप्त वित्तीय अनुरोधों की स्वतंत्र रूप से जाँच करनी चाहिए।",

            urgency:
                "जल्दी कार्रवाई करने का दबाव स्वतंत्र सत्यापन को कम कर सकता है।",

            sensitive:
                "OTP, PIN, पासवर्ड, CVV या अन्य गोपनीय जानकारी कभी साझा न करें।",

            payment:
                "पैसे भेजने से पहले सत्यापित करें कि भुगतान कौन माँग रहा है और क्यों।",

            account:
                "खाता बंद या ब्लॉक करने की धमकी उपयोगकर्ता पर जल्दी कार्रवाई करने का दबाव डाल सकती है।",

            reward:
                "अचानक मिले पुरस्कार या रिवॉर्ड को जानकारी साझा करने या भुगतान करने से पहले सत्यापित करें।",

            link:
                "किसी लिंक को तुरंत असली न मानें। संगठन की आधिकारिक वेबसाइट स्वतंत्र रूप से खोलें।",

            authority:
                "किसी आधिकारिक संगठन का नाम होना यह साबित नहीं करता कि संदेश वास्तव में उसी संगठन से आया है।",

            safe:
                "इससे यह साबित नहीं होता कि संदेश वास्तविक है। भेजने वाले और महत्वपूर्ण जानकारी की स्वतंत्र रूप से पुष्टि करें।"
        }
    }
};


/* =========================================================
   ANALYZE MESSAGE
========================================================= */

function analyzeMessage() {

    const input =
        document.getElementById("messageInput");

    const result =
        document.getElementById("messageResult");

    if (!input || !result) return;

    const message =
        input.value.trim();

    const lang =
        messageCheckerText[currentLanguage] ||
        messageCheckerText.en;

    if (message === "") {

        result.innerHTML = `

            <div class="empty-message">

                <div class="message-icon">
                    !
                </div>

                <div>

                    <h3>
                        ${lang.emptyTitle}
                    </h3>

                    <p>
                        ${lang.emptyText}
                    </p>

                </div>

            </div>
        `;

        return;
    }


    const warningSigns = [];

    const lowerMessage =
        message.toLowerCase();


    /* GUARANTEED RETURNS */

    if (
        lowerMessage.includes("guaranteed") ||
        lowerMessage.includes("guarantee") ||
        lowerMessage.includes("fixed return")
    ) {

        warningSigns.push({
            key: "guaranteed"
        });
    }


    /* HIGH RETURNS */

    if (
        /\b\d{2,3}\s*%/.test(lowerMessage) ||
        lowerMessage.includes("huge profit") ||
        lowerMessage.includes("massive profit") ||
        lowerMessage.includes("double your money")
    ) {

        warningSigns.push({
            key: "highReturn"
        });
    }


    /* INVESTMENT */

    if (
        lowerMessage.includes("invest") ||
        lowerMessage.includes("investment opportunity") ||
        lowerMessage.includes("investment plan")
    ) {

        warningSigns.push({
            key: "investment"
        });
    }


    /* EXTERNAL CONTACT */

    if (
        lowerMessage.includes("contact us") ||
        lowerMessage.includes("contact me") ||
        lowerMessage.includes("call us") ||
        lowerMessage.includes("representative")
    ) {

        warningSigns.push({
            key: "contact"
        });
    }


    /* SOCIAL MEDIA */

    if (
        lowerMessage.includes("whatsapp") ||
        lowerMessage.includes("telegram") ||
        lowerMessage.includes("facebook") ||
        lowerMessage.includes("instagram")
    ) {

        warningSigns.push({
            key: "social"
        });
    }


    /* URGENCY */

    if (
        lowerMessage.includes("urgent") ||
        lowerMessage.includes("immediately") ||
        lowerMessage.includes("today") ||
        lowerMessage.includes("act now") ||
        lowerMessage.includes("limited time") ||
        lowerMessage.includes("hurry")
    ) {

        warningSigns.push({
            key: "urgency"
        });
    }


    /* SENSITIVE INFORMATION */

    if (
        lowerMessage.includes("otp") ||
        lowerMessage.includes("pin") ||
        lowerMessage.includes("password") ||
        lowerMessage.includes("cvv") ||
        lowerMessage.includes("verification code")
    ) {

        warningSigns.push({
            key: "sensitive"
        });
    }


    /* PAYMENT */

    if (
        lowerMessage.includes("send money") ||
        lowerMessage.includes("transfer money") ||
        lowerMessage.includes("pay now") ||
        lowerMessage.includes("pay a fee") ||
        lowerMessage.includes("processing fee") ||
        lowerMessage.includes("deposit money")
    ) {

        warningSigns.push({
            key: "payment"
        });
    }


    /* ACCOUNT THREAT */

    if (
        lowerMessage.includes("account blocked") ||
        lowerMessage.includes("account will be blocked") ||
        lowerMessage.includes("account suspended")
    ) {

        warningSigns.push({
            key: "account"
        });
    }


    /* REWARD */

    if (
        lowerMessage.includes("you won") ||
        lowerMessage.includes("reward") ||
        lowerMessage.includes("prize") ||
        lowerMessage.includes("cashback")
    ) {

        warningSigns.push({
            key: "reward"
        });
    }


    /* LINK */

    if (
        /https?:\/\/|www\.|\.com|\.in|\.org/i.test(
            lowerMessage
        )
    ) {

        warningSigns.push({
            key: "link"
        });
    }


    /* AUTHORITY */

    if (
        lowerMessage.includes("rbi") ||
        lowerMessage.includes("sebi") ||
        lowerMessage.includes("bank") ||
        lowerMessage.includes("government") ||
        lowerMessage.includes("official")
    ) {

        warningSigns.push({
            key: "authority"
        });
    }


    /* NO WARNING */

    if (warningSigns.length === 0) {

        warningSigns.push({
            key: "safe"
        });
    }


    let warningHTML = "";

    warningSigns.forEach(sign => {

        warningHTML += `

            <div class="warning-item">

                <strong>
                    ${lang.warnings[sign.key]}
                </strong>

            </div>
        `;
    });


    let verifyHTML = "";

    lang.verifyItems.forEach(item => {

        verifyHTML += `
            <li>
                ${item}
            </li>
        `;
    });


    result.innerHTML = `

        <h3>
            ${lang.warningTitle}
        </h3>

        <div class="claim-warnings">
            ${warningHTML}
        </div>

        <div class="verify-box">

            <h3>
                ${lang.verifyTitle}
            </h3>

            <ul>
                ${verifyHTML}
            </ul>

        </div>
    `;
}


/* =========================================================
   SAMPLE MESSAGE
========================================================= */

function loadSampleMessage() {

    const input =
        document.getElementById("messageInput");

    if (!input) return;

    input.value =
        "Invest ₹5,000 today and get guaranteed 30% returns. Act immediately and contact us through this link.";

    analyzeMessage();
}


/* =========================================================
   OPEN CLAIM CHECKER
========================================================= */

function openClaimChecker() {

    const section =
        document.getElementById("claim-checker");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

        setTimeout(() => {

            const input =
                document.getElementById("claimInput");

            if (input) input.focus();

        }, 700);
    }
}


/* =========================================================
   ESCAPE CLAIM TEXT
========================================================= */

function escapeClaimText(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   CLAIM CHECKER
   DETECTION LOGIC PRESERVED
========================================================= */

function analyzeClaim() {

    const input =
        document.getElementById("claimInput");

    const resultBox =
        document.getElementById("claimResult");

    if (!input || !resultBox) return;

    const claim =
        input.value.trim();

    const lang =
        claimCheckerText[currentLanguage] ||
        claimCheckerText.en;


    /* EMPTY CLAIM */

    if (!claim) {

        resultBox.innerHTML = `

            <div class="empty-result">

                <span>?</span>

                <div>

                    <strong>
                        ${lang.emptyTitle}
                    </strong>

                    <p>
                        ${lang.emptyText}
                    </p>

                </div>

            </div>
        `;

        return;
    }


    const lower =
        claim.toLowerCase();

    const warnings = [];

    const verificationKeys = [];


    /*
       IMPORTANT:
       Store an internal KEY instead of English status text.
    */

    let statusKey = "verify";

    let explanation =
        lang.explanationDefault;


    /* =====================================================
       1. GUARANTEED RETURNS
    ===================================================== */

    if (
        /guaranteed return|guaranteed returns|guaranteed profit|guaranteed profits|guarantee.*return|guarantee.*profit|assured return|assured profit|fixed return/i.test(lower)
    ) {

        warnings.push({
            key: "guaranteed"
        });

        verificationKeys.push(
            "guaranteed"
        );

        statusKey =
            "misleading";
    }


    /* =====================================================
       2. ZERO RISK
    ===================================================== */

    if (
        /zero risk|no risk|risk free|risk-free|without risk|no chance of losing|cannot lose|never lose|completely safe|100% safe|totally safe/i.test(lower)
    ) {

        warnings.push({
            key: "zeroRisk"
        });

        verificationKeys.push(
            "zeroRisk"
        );

        statusKey =
            "misleading";
    }


    /* =====================================================
       3. HIGH RETURNS
    ===================================================== */

    if (

        (
            /\b\d{2,3}\s*%/.test(lower) ||
            /\bdouble\b/.test(lower) ||
            /\bdoubles\b/.test(lower) ||
            /\btriple\b/.test(lower) ||
            /\btriples\b/.test(lower) ||
            /huge profit/i.test(lower) ||
            /massive profit/i.test(lower) ||
            /massive returns/i.test(lower) ||
            /huge returns/i.test(lower)
        )

        &&

        /return|profit|money|income|investment|invest|earn|wealth/i.test(lower)

    ) {

        warnings.push({
            key: "highReturn"
        });

        verificationKeys.push(
            "highReturn"
        );

        if (statusKey === "verify") {
            statusKey =
                "misleading";
        }
    }


    /* =====================================================
       4. CERTAIN FUTURE OUTCOME
    ===================================================== */

    if (

        (
            /definitely increase|definitely rise|definitely go up|will definitely|certain to increase|certain to rise|guaranteed to increase|guaranteed to rise|cannot fall|will make profit/i.test(lower)
        )

        &&

        /stock|share|investment|market|price|return|profit/i.test(lower)

    ) {

        warnings.push({
            key: "futureOutcome"
        });

        verificationKeys.push(
            "futureOutcome"
        );

        statusKey =
            "misleading";
    }


    /* =====================================================
       5. RECOMMENDATION
    ===================================================== */

    if (
        /everyone should invest|you should invest|invest now|buy now|buy this stock|everyone must invest|must invest|best investment|best stock|perfect investment/i.test(lower)
    ) {

        warnings.push({
            key: "recommendation"
        });

        verificationKeys.push(
            "recommendation"
        );
    }


    /* =====================================================
       6. GOVERNMENT APPROVAL
    ===================================================== */

    if (
        /government approved|government guaranteed|government backed|officially approved|official approval|rbi approved|sebi approved|nsdl approved|government certified|officially certified/i.test(lower)
    ) {

        warnings.push({
            key: "government"
        });

        verificationKeys.push(
            "government"
        );

        statusKey =
            "verify";
    }


    /* =====================================================
       7. STATISTICS
    ===================================================== */

    if (

        (
            /\b\d{1,3}\s*%\s*(of|of all|of investors|people|users)/i.test(lower) ||
            /most investors/i.test(lower) ||
            /almost everyone/i.test(lower) ||
            /everyone is making/i.test(lower) ||
            /95% of investors/i.test(lower)
        )

    ) {

        warnings.push({
            key: "statistics"
        });

        verificationKeys.push(
            "statistics"
        );

        statusKey =
            "verify";
    }


    /* =====================================================
       8. NEVER LOST
    ===================================================== */

    if (
        /never lost money|never loses money|always makes profit|always make profit|never failed|never failed to make profit|profits every time|profit every time/i.test(lower)
    ) {

        warnings.push({
            key: "neverLost"
        });

        verificationKeys.push(
            "neverLost"
        );

        statusKey =
            "misleading";
    }


    /* =====================================================
       9. URGENCY
    ===================================================== */

    if (
        /act now|invest today|limited time|limited offer|last chance|immediately|hurry|right now|expires today|don't miss/i.test(lower)
    ) {

        warnings.push({
            key: "urgency"
        });

        verificationKeys.push(
            "urgency"
        );
    }


    /* =====================================================
       10. PAYMENT
    ===================================================== */

    if (
        /send money|transfer money|pay now|pay a fee|processing fee|registration fee|activation fee|deposit money|send ₹|pay ₹|send rs|pay rs/i.test(lower)
    ) {

        warnings.push({
            key: "payment"
        });

        verificationKeys.push(
            "payment"
        );

        statusKey =
            "verify";
    }


    /* =====================================================
       11. SENSITIVE INFORMATION
    ===================================================== */

    if (
        /otp|password|pin|cvv|card number|bank details|account number|login details|verification code/i.test(lower)
    ) {

        warnings.push({
            key: "sensitive"
        });

        verificationKeys.push(
            "sensitive"
        );

        statusKey =
            "verify";
    }


    /* =====================================================
       12. SOURCE
    ===================================================== */

    const sourceMentioned =
        /according to|official website|official source|rbi|sebi|nsdl|government website|report|study|research|experts say|experts claim/i.test(lower);

    if (sourceMentioned) {

        warnings.push({
            key: "source"
        });

        verificationKeys.push(
            "source"
        );
    }


    /* =====================================================
       13. EDUCATIONAL CLAIM
    ===================================================== */

    const educationalClaim =

        /inflation means/i.test(lower) ||
        /inflation is/i.test(lower) ||
        /compound interest means/i.test(lower) ||
        /compound interest is/i.test(lower) ||
        /mutual fund is/i.test(lower) ||
        /mutual funds are/i.test(lower) ||
        /risk means/i.test(lower) ||
        /financial risk is/i.test(lower) ||
        /savings are/i.test(lower) ||
        /investment means/i.test(lower) ||
        /volatility means/i.test(lower);


    /* =====================================================
       14. NO SPECIFIC WARNING
    ===================================================== */

    if (
        warnings.length === 0 &&
        educationalClaim
    ) {

        statusKey =
            "safe";

        explanation =
            lang.explanationSafe;

        verificationKeys.push(
            "source"
        );
    }


    /* =====================================================
       15. COMPLETELY NEUTRAL CLAIM
    ===================================================== */

    if (
        warnings.length === 0 &&
        !educationalClaim
    ) {

        statusKey =
            "verify";

        explanation =
            lang.explanationNeutral;

        verificationKeys.push(
            "source"
        );
    }


    /* =====================================================
       REMOVE DUPLICATE WARNINGS
    ===================================================== */

    const uniqueWarnings = [];

    const seenWarningKeys =
        new Set();

    warnings.forEach(warning => {

        if (!seenWarningKeys.has(warning.key)) {

            seenWarningKeys.add(
                warning.key
            );

            uniqueWarnings.push(
                warning
            );
        }
    });


    /* =====================================================
       REMOVE DUPLICATE VERIFICATION KEYS
    ===================================================== */

    const uniqueVerificationKeys =
        [...new Set(verificationKeys)];


    /* =====================================================
       WARNING HTML
    ===================================================== */

    let warningHTML = "";

    uniqueWarnings.forEach(warning => {

        warningHTML += `

            <div class="warning-item">

                <strong>
                    ${lang.warnings[warning.key]}
                </strong>

            </div>
        `;
    });


    if (warningHTML === "") {

        warningHTML = `

            <div class="warning-item">

                <strong>
                    ${lang.statuses.safe}
                </strong>

            </div>
        `;
    }


    /* =====================================================
       VERIFICATION HTML
    ===================================================== */

    let verificationHTML = "";

    uniqueVerificationKeys.forEach(key => {

        if (lang.verifyItems[key]) {

            verificationHTML += `

                <li>
                    ${lang.verifyItems[key]}
                </li>
            `;
        }
    });


    if (verificationHTML === "") {

        verificationHTML = `

            <li>
                ${lang.source}
            </li>
        `;
    }


    /* =====================================================
       TRANSLATED STATUS
       THIS FIXES THE ENGLISH STATUS PROBLEM
    ===================================================== */

    const translatedStatus =
        lang.statuses[statusKey];


    /* =====================================================
       FINAL CLAIM RESULT
    ===================================================== */

    resultBox.innerHTML = `

        <div class="claim-analysis">

            <span class="claim-status">
                ${translatedStatus}
            </span>

            <h3>
                ${lang.detected}
            </h3>

            <p>

                <strong>
                    ${
                        currentLanguage === "te"
                            ? "క్లెయిమ్:"
                            : currentLanguage === "hi"
                                ? "दावा:"
                                : "Claim:"
                    }
                </strong>

                ${escapeClaimText(claim)}

            </p>

            <h4>
                ${lang.saying}
            </h4>

            <p>
                ${explanation}
            </p>

            <h4>
                ${lang.detectedWarnings}
            </h4>

            <div class="claim-warnings">
                ${warningHTML}
            </div>

            <h4>
                ${lang.verify}
            </h4>

            <ul class="claim-list">
                ${verificationHTML}
            </ul>

            <div class="claim-guidance">

                <strong>

                    ${
                        currentLanguage === "te"
                            ? "FinVoice మార్గదర్శకం"
                            : currentLanguage === "hi"
                                ? "FinVoice मार्गदर्शन"
                                : "FinVoice guidance"
                    }

                </strong>

                <p>
                    ${lang.guidance}
                </p>

            </div>

            <div class="claim-source">

                <strong>
                    ${lang.source}
                </strong>

            </div>

        </div>
    `;
}


/* =========================================================
   LANGUAGE CHANGE
========================================================= */

function changeLanguage() {

    const select =
        document.getElementById(
            "languageSelect"
        );

    if (!select) return;

    currentLanguage =
        select.value;


    /* UPDATE PAGE */

    applyPageLanguage();


    /* REFRESH FINANCE */

    const financeInput =
        document.getElementById(
            "financeQuestion"
        );

    if (
        financeInput &&
        financeInput.value.trim() !== ""
    ) {

        findFinancialAnswer(
            financeInput.value
                .trim()
                .toLowerCase()
        );
    }


    /* REFRESH MESSAGE */

    const messageInput =
        document.getElementById(
            "messageInput"
        );

    if (
        messageInput &&
        messageInput.value.trim() !== ""
    ) {

        analyzeMessage();
    }


    /* REFRESH CLAIM */

    const claimInput =
        document.getElementById(
            "claimInput"
        );

    if (
        claimInput &&
        claimInput.value.trim() !== ""
    ) {

        analyzeClaim();
    }
}


/* =========================================================
   STARTUP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        applyPageLanguage();

        console.log(
            "FinVoice Guardian is ready."
        );
    }
);