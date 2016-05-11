// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var confirmation = 0;
angular.module('app', ['ionic','ionic.service.core','ionic.service.analytics', 'app.controllers', 'app.subcontrollerOne','pascalprecht.translate','app.subcontrollerTwo' , 'app.routes', 'app.services', 'app.directives','ngResource', 'ngMessages','ngStorage','ngIdle','ngCordova', 'ionic-toast'])

/*.constant('$ionicLoadingConfig', {
  template: '<ion-spinner icon="android"></ion-spinner>',
  showBackdrop: true,
})

*/
.config(function ($translateProvider) {

    $translateProvider.translations('2', {
	selectedLanguage:'Select your desired Language English',
	tabTitle1:'SUMMARY',
	tabTitle2:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
	TEXT_LANG_BALANCE:'Current Balance',
	TEXT_LANG_NETGAIN:'Net Gains',
	TEXT_LANG_NETGAINTODAY:'Net Gains Today',
	TEXT_LANG_INVEST:'Net Investment',
	BUTTON_LANG_WITH:"WITHDRAW",
	BUTTON_LANG_FORGOT:'Forgot Pin?',
	BUTTON_LANG_SIGNUP:'or Create an account ',
	TEXT_LANG_HEADER:'ADD Money',
	TEXT_LANG_INVEST_L:'How much would you like to add ?',
	TEXT_LANG_INVEST1:'To optimize returns, we will add',
	TEXT_LANG_INVEST12:'to your investments',
	TEXT_LANG_EXPECTEDVALUE:'Expected Value in a year :',
	BUTTON_LANG_EN: ' Secure Login',
	signUpTitle:'Sign Up',
	firstName:'First Name',
	lastName:'Last Name',
	mobileNo:'Mobile Number',
	setPIN:'Set digit PIN ',
	confirmPin:'Confirm 4 digit PIN',
	referralCode:'Referral code(optional)',
	activationText:'You will now need to activate your account. Please keep the following documents ready.',
	notNow:'NOT NOW',
	activateAcc:'ACTIVATE ACCOUNT',
	proof1:'PAN Card',
	proof2:'Address Proof',
	proof3:'Net Banking enabled Banc Account No',
	proof4:'IFSC Code of your Bank account',
      TEXT_LANG_INVEST_TERMS_1:'By clicking ADD MONEY you agree to have read',
      TEXT_LANG_INVEST_TERMS_2:'before making the investment',
      TranscationID:'Transaction ID',
      TEXT_CURRENT_BALANCE:'CURRENT BALANCE :',
      TEXT_WIHTDRAW_BALANCE:'How much would you like to withdraw ?',
      TEXT_WITHDRAW_COMPLETEBALANCE:'withdraw my complete balance',
      TEXT_WITHDRAW_SCHEDULE_TEXT:'Schedule for deposit to your registered bank account',
      noTxnMsg1:'There are no transactions to display,',
      noTxnMsg12:'START INVESTING NOW',
      TEXT_INVITE_HEADER:'INVITE FRIENDS',
      TEXT_INVITE_HEADER2:'Invite Your Friends',
      TEXT_INVITE_MESSAGE1:'Invite now and get INR 100 for every referral, your friend will also get INR 100',
      TEXT_INVITE_MESSAGE2:'Your friend has to invest a minimum of INR 100 and keep it invested for atleast 10 days for both of you to be eligible for referral pay out',
      TEXT_INVITE_MESSAGE3:'Please contact us for any queries.',
      TEXT_INVITE_BUTTON:'Start Inviting',
      TEXT_LANG_MENU1:'Invite & Earn',
      TEXT_LANG_MENU2:'FAQ',
      TEXT_LANG_MENU3:'contact us',
      TEXT_LANG_MENU4:'About us',
      TEXT_LANG_MENU5:'Activate account',
      TEXT_LANG_MENU6:'Sign Out'
  });
  $translateProvider.translations('1', {
	selectedLanguage:'Select your desired Language Bengali',
	tabTitle1:'সংক্ষিপ্ত',
	tabTitle2:'বৃদ্ধির হার',
	tabTitle3:'লেনদেন',
    TEXT_LANG_BALANCE:'বর্তমান হিসাব',
    TEXT_LANG_INVEST:'নেট বিনিয়োগ',
    TEXT_LANG_NETGAIN:'নেট লাভ',
    TEXT_LANG_NETGAINTODAY:'আজ নেট লাভ',
    BUTTON_LANG_FORGOT:'ভুলে গেছি পিন?',
    BUTTON_LANG_WITH:"প্রত্যাহার",
    BUTTON_LANG_SIGNUP:'অথবা একটি অ্যাকাউন্ট তৈরি ',
    TEXT_LANG_HEADER:'টাকা যোগ',
    TEXT_LANG_INVEST_L:'আপনি কত যোগ করতে চাই  ?',
    TEXT_LANG_EXPECTEDVALUE:'বছরে প্রত্যাশিত মান :',
    TEXT_LANG_INVEST1:'আয় নিখুত , আমরা যোগ হবে',
    TEXT_LANG_INVEST12:'আপনার বিনিয়োগে',
    BUTTON_LANG_EN: ' সিকিউর লগইন',
	signUpTitle:'নিবন্ধন করুন',
	firstName:'প্রথম নাম',
	lastName:'নামের শেষাংশ',
	mobileNo:'মোবাইল নম্বর',
	setPIN:'ডিজিটের পিন সেট',
	confirmPin:'চার অঙ্ক পিন নিশ্চিত',
	referralCode:'রেফারেল কোড (ঐচ্ছিক)',
	activationText:'এখন আপনি আপনার অ্যাকাউন্ট সক্রিয় করার জন্য প্রয়োজন হবে. অনুগ্রহ করে নিম্নলিখিত কাগজপত্র প্রস্তুত রাখা.',
	notNow:'এখন না',
	activateAcc:'অ্যাকাউন্ট সক্রিয়',
	proof1:'PAN কার্ড',
	proof2:'ঠিকানার প্রমাণ দলিল',
	proof3:'নেট ব্যাংকিং সক্রিয় ব্যাঙ্ক অ্যাকাউন্ট নম্বর',
	proof4:'আপনার ব্যাংক অ্যাকাউন্টের IFSC কোড',
    TEXT_LANG_INVEST_TERMS_1:'টাকা যোগ এ ক্লিক করে আপনি পড়া আছে সম্মত হন',
    TEXT_LANG_INVEST_TERMS_2:'বিনিয়োগ করার আগে',
    TranscationID:'লেনদেন নাম্বার',
    TEXT_CURRENT_BALANCE:'বর্তমান হিসাব :',
    TEXT_WIHTDRAW_BALANCE:'কত আপনি উঠাতে চান?',
    TEXT_WITHDRAW_COMPLETEBALANCE:'আমার সম্পূর্ণ ভারসাম্য প্রত্যাহার',
    TEXT_WITHDRAW_SCHEDULE_TEXT:'আপনার রেজিস্টার্ড ব্যাংক অ্যাকাউন্টে ডিপোজিট জন্য সূচি',
    noTxnMsg1:'প্রদর্শনের জন্য কোন লেনদেন আছে ,',
    noTxnMsg12:'এখন বিনিয়োগ শুরু করুন',
    TEXT_INVITE_HEADER:'বন্ধুদের আমন্ত্রণ',
    TEXT_INVITE_HEADER2:'আপনার বন্ধুদের আমন্ত্রণ জানান',
    TEXT_INVITE_MESSAGE1:'এখন আমন্ত্রণ এবং প্রতি রেফারেল জন্য আইএনআর 100 পেতে , আপনার বন্ধু এছাড়াও আইএনআর 100 পেতে হবে',
    TEXT_INVITE_HEADER3:'আপনার বন্ধু রেফারেল জন্য আউট পরিশোধ যোগ্য হতে আইএনআর 100 একটি সর্বনিম্ন বিনিয়োগ এবং এটা অন্তত 10 দিনের জন্য বিনিয়োগ রাখা আপনাদের উভয়ের জন্য রয়েছে',
    TEXT_INVITE_MESSAGE3:'যে কোন প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন .',
    TEXT_INVITE_BUTTON:'আমন্ত্রণ জানানো হচ্ছে শুরু',
    TEXT_LANG_MENU1:'আমন্ত্রণ ও রোজগার',
    TEXT_LANG_MENU2:'অনবরত জিজ্ঞাসিত প্রশ্ন',
    TEXT_LANG_MENU3:'আমাদের সাথে যোগাযোগ করুন',
    TEXT_LANG_MENU4:'আমাদের সম্পর্কে',
    TEXT_LANG_MENU5:'অ্যাকাউন্ট সক্রিয়',
    TEXT_LANG_MENU6:'সাইন আউট'
  });
    $translateProvider.translations('3', {
	selectedLanguage:'Select your desired Language Gujarati',
	tabTitle1:'સારાંશ',
	tabTitle2:'વિકાસ દર',
	tabTitle3:'વ્યવહારો',
	TEXT_LANG_BALANCE:'વર્તમાન રકમ',
	TEXT_LANG_INVEST:'ચોખ્ખું રોકાણ',
	TEXT_LANG_NETGAIN:'નેટ લાભો',
	TEXT_LANG_NETGAINTODAY:'આજે ચોખ્ખી ગેઇન',
	BUTTON_LANG_WITH:"પાછી ખેંચી",
	BUTTON_LANG_FORGOT:'ભૂલી ગયા છો પિન?',
	BUTTON_LANG_SIGNUP:'અથવા એક એકાઉન્ટ બનાવો',
	TEXT_LANG_HEADER:'નાણાં ઉમેરો',
	TEXT_LANG_INVEST_L:'કેટલી તમે ઉમેરવા માંગો છો ?',
	TEXT_LANG_EXPECTEDVALUE:'એક વર્ષમાં અપેક્ષિત કિંમત :',
	TEXT_LANG_INVEST1:'વળતર ઑપ્ટિમાઇઝ કરવા માટે, અમે ઉમેરશે',
	TEXT_LANG_INVEST12:'તમારા રોકાણના',
	BUTTON_LANG_EN: ' સુરક્ષિત લૉગિન',
	signUpTitle:'સાઇન અપ કરો',
	firstName:'પ્રથમ નામ',
	lastName:'છેલ્લું નામ',
	mobileNo:'મોબાઇલ નંબર',
	setPIN:'અંકની PIN સેટ',
	confirmPin:'PIN ખાતરી',
	referralCode:'રેફરલ કોડ (વૈકલ્પિક)',
	activationText:'હવે તમે તમારું એકાઉન્ટ સક્રિય કરવાની જરૂર પડશે. કૃપા કરીને નીચેના દસ્તાવેજો તૈયાર રાખો.',
	notNow:'અત્યારે નહિ',
	activateAcc:'એકાઉન્ટ સક્રિય',
	proof1:'PAN પત્તાની',
	proof2:'એડ્રેસ પ્રૂફ દસ્તાવેજ',
	proof3:'નેટ બેન્કિંગ સક્ષમ બૅન્ક એકાઉન્ટ નંબર',
	proof4:'તમારી બેંક એકાઉન્ટ IFSC કોડ',
      TEXT_LANG_INVEST_TERMS_1:'પૈસા ઉમેરો પર ક્લિક કરીને તમે વાંચી છે સંમત',
      TEXT_LANG_INVEST_TERMS_2:'રોકાણ કરતા પહેલા',
      TranscationID:'ટ્રાન્ઝેક્શન આઈડી',
      TEXT_CURRENT_BALANCE:'વર્તમાન રકમ :',
      TEXT_WIHTDRAW_BALANCE:'કેટલી તમે પાછી ખેંચી કરવા માંગો છો?',
      TEXT_WITHDRAW_COMPLETEBALANCE:'મારી સંપૂર્ણ સંતુલન પાછી ખેંચી',
      TEXT_WITHDRAW_SCHEDULE_TEXT:'તમારી રજીસ્ટર બેંક એકાઉન્ટમાં ડિપોઝિટ માટે સુનિશ્ચિત',
      noTxnMsg1:'પ્રદર્શિત કરવા માટે કોઈ વ્યવહારો છે,',
      noTxnMsg12:'હવે રોકાણ શરૂ કરો',
      TEXT_INVITE_HEADER:'મિત્રોને આમંત્રિત કરો',
      TEXT_INVITE_HEADER2:'તમારા મિત્રોને આમંત્રણ આપો',
      TEXT_INVITE_MESSAGE1:'હવે આમંત્રણ આપો અને દરેક રેફરલ માટે રૂ 100 મેળવવા માટે, તમારા મિત્ર પણ રૂપિયા 100 મળશે',
      TEXT_INVITE_HEADER3:'તમારા મિત્ર રેફરલ માટે ચૂકવણી પાત્ર થવા માટે રૂ 100 ઓછામાં ઓછા રોકાણ અને તે ઓછામાં ઓછા 10 દિવસ માટે રોકાણ રાખવા તમે બંને માટે છે',
      TEXT_INVITE_MESSAGE3:'કોઈપણ પ્રશ્નો માટે અમને સંપર્ક કરો.',
      TEXT_INVITE_BUTTON:'આમંત્રિત શરૂ',
      TEXT_LANG_MENU1:'આમંત્રણ આપો અને કમાઓ',
      TEXT_LANG_MENU2:'FAQ',
      TEXT_LANG_MENU3:'અમારો સંપર્ક કરો',
      TEXT_LANG_MENU4:'અમારા વિશે',
      TEXT_LANG_MENU5:'એકાઉન્ટ સક્રિય',
      TEXT_LANG_MENU6:'સાઇન આઉટ કરો'
  });
  $translateProvider.translations('4', {
	selectedLanguage:'अपनी इच्छित भाषा का चयन करें',
	tabTitle1:'सारांश',
	tabTitle2:'विकास दर',
	tabTitle3:'लेनदेन',
    TEXT_LANG_BALANCE:'वर्तमान शेष',
    TEXT_LANG_INVEST:'शुद्ध निवेश',
    TEXT_LANG_NETGAIN:'शुद्ध लाभ',
    TEXT_LANG_NETGAINTODAY:'आज शुद्ध लाभ',
    BUTTON_LANG_WITH:"निकालना",
    BUTTON_LANG_FORGOT:'भूल गया पिन?',
    BUTTON_LANG_SIGNUP:'या खाता बनाना',
    TEXT_LANG_HEADER:'पैसे जोड़ें',
    TEXT_LANG_INVEST_L:'आप कितना निवेश करना चाहते हैं ?',
    TEXT_LANG_EXPECTEDVALUE:'एक साल में होने की उम्मीद मूल्य:',
    TEXT_LANG_INVEST1:'रिटर्न का अनुकूलन करने के लिए , हम जोड़ देगा',
    TEXT_LANG_INVEST12:'अपने निवेश के लिए',
    BUTTON_LANG_EN: ' सुरक्षित लॉगइन',
	signUpTitle:'साइन अप करें',
	firstName:'पहला नाम',
	lastName:'अंतिम नाम',
	mobileNo:'मोबाइल नंबर',
	setPIN:'अंकों का पिन सेट',
	confirmPin:'पिन की पुष्टि',
	referralCode:'रेफरल कोड (वैकल्पिक)',
	activationText:'अब आप अपने खाते को सक्रिय करने की आवश्यकता होगी। कृपया निम्नलिखित दस्तावेजों के लिए तैयार रहते हैं।',
	notNow:'अभी नहीं',
	activateAcc:'खाते को सक्रिय करें',
	proof1:'PAN कार्ड',
	proof2:'पता प्रमाण दस्तावेजों',
	proof3:'नेट बैंकिंग सक्षम बैंक खाता संख्या',
	proof4:'अपने बैंक खाते का IFSC कोड',
    TEXT_LANG_INVEST_TERMS_1:'पैसा जोड़ें पर क्लिक करके आप पढ़ लिया है के लिए सहमत',
    TEXT_LANG_INVEST_TERMS_2:'निवेश करने से पहले',
    TranscationID:'लेनदेन आईडी',
    TEXT_CURRENT_BALANCE:'वर्तमान शेष :',
    TEXT_WIHTDRAW_BALANCE:'तुम कितना वापस लेने के लिए चाहते हैं?',
    TEXT_WITHDRAW_COMPLETEBALANCE:'मेरा पूरा संतुलन को वापस लेने',
    TEXT_WITHDRAW_SCHEDULE_TEXT:'अपने पंजीकृत बैंक खाते में जमा करने के लिए अनुसूची',
    noTxnMsg1:'प्रदर्शित करने के लिए कोई लेनदेन नहीं कर रहे हैं,',
    noTxnMsg12:'अब निवेश शुरू करें',
    TEXT_INVITE_HEADER:'मित्रों को आमंत्रित करें',
    TEXT_INVITE_HEADER2:'अपने दोस्तों को आमंत्रित करें',
    TEXT_INVITE_MESSAGE1:'अब आमंत्रित करें और हर सिफ़ारिश के लिए INR 100 मिलता है, अपने दोस्त भी INR 100 मिल जाएगा',
    TEXT_INVITE_HEADER3:'आपके मित्र सिफ़ारिश के लिए बाहर का भुगतान पात्र होने के लिए INR 100 का एक न्यूनतम निवेश करते हैं और यह कम से कम 10 दिनों के लिए निवेश रखने के लिए आप दोनों के लिए करना पड़ता है',
    TEXT_INVITE_MESSAGE3:'कृपया किसी भी जानकारी के लिए हमसे संपर्क करें।',
    TEXT_INVITE_BUTTON:'आमंत्रित करना प्रारंभ',
    TEXT_LANG_MENU1:'आमंत्रित करें और कमाने के लिए',
    TEXT_LANG_MENU2:'सामान्य प्रश्न',
    TEXT_LANG_MENU3:'हमसे संपर्क करें',
    TEXT_LANG_MENU4:'हमारे बारे में',
    TEXT_LANG_MENU5:'खाते को सक्रिय करें',
    TEXT_LANG_MENU6:'साइन आउट'
  });
    $translateProvider.translations('5', {
	selectedLanguage:'Select your desired Language kannada',
	tabTitle1:'ಸಾರಾಂಶ',
	tabTitle2:'ಬೆಳವಣಿಗೆ ದರ',
	tabTitle3:'ವ್ಯವಹಾರ',
	TEXT_LANG_BALANCE:'ಪ್ರಸ್ತುತ ಸಮತೋಲನ',
	TEXT_LANG_INVEST:'ನಿವ್ವಳ ಬಂಡವಾಳ',
	TEXT_LANG_NETGAIN:'ನಿವ್ವಳ ಲಾಭದ',
	TEXT_LANG_NETGAINTODAY:'ಇಂದು ನಿವ್ವಳ ಲಾಭ',
	BUTTON_LANG_WITH:"ಹಿಂದಕ್ಕೆ",
	BUTTON_LANG_FORGOT:'ಮರೆತು ಪಿನ್?',
	BUTTON_LANG_SIGNUP:'ಅಥವಾ ಖಾತೆಯನ್ನು ರಚಿಸಿ ',
	TEXT_LANG_HEADER:'ಹಣ ಸೇರಿಸಬಹುದು',
	TEXT_LANG_INVEST_L:'ಎಷ್ಟು ನೀವು ಹೂಡಿಕೆ ಮಾಡಲು ಬಯಸುತ್ತೀರಿ?',
	TEXT_LANG_EXPECTEDVALUE:'ಒಂದು ವರ್ಷದಲ್ಲಿ ನಿರೀಕ್ಷೆಗಿಂತ ಮೌಲ್ಯ:',
	TEXT_LANG_INVEST1:'ಆದಾಯ ಅತ್ಯುತ್ತಮಗೊಳಿಸಲು , ನಾವು ಸೇರಿಸುತ್ತದೆ',
	TEXT_LANG_INVEST12:'ನಿಮ್ಮ ಹೂಡಿಕೆ',
    BUTTON_LANG_EN: ' ಸುರಕ್ಷಿತ ಲಾಗಿನ್',
	signUpTitle:'ಸೈನ್ ಅಪ್',
	firstName:'ಮೊದಲ ಹೆಸರು',
	lastName:'ಕೊನೆಯ ಹೆಸರು',
	mobileNo:'ಮೊಬೈಲ್ ನಂಬರ',
	setPIN:'4 ಅಂಕಿಯ PIN ಅನ್ನು',
	confirmPin:'ನಾಲ್ಕು ಅಂಕಿಯ ಪಿನ್ ಖಚಿತಪಡಿಸಿ',
	referralCode:'ಉಲ್ಲೇಖಿತ ಕೋಡ್ (ಐಚ್ಛಿಕ)',
	activationText:'ನೀವು ಈಗ ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ಅಗತ್ಯವಿದೆ. ದಯವಿಟ್ಟು ಕೆಳಗಿನ ದಾಖಲೆಗಳನ್ನು ಸಿದ್ಧ ಇರಿಸಿಕೊಳ್ಳಲು.',
	notNow:'ಈಗ ಸಾಧ್ಯವಿಲ್ಲ',
	activateAcc:'ಖಾತೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು',
	proof1:'PAN ಕಾರ್ಡ್',
	proof2:'ವಿಳಾಸ ಪುರಾವೆ ದಾಖಲೆಗಳನ್ನು',
	proof3:'ನನೆಟ್ ಬ್ಯಾಂಕಿಂಗ್ ಶಕ್ತಗೊಂಡ ಬ್ಯಾಂಕ್ ಖಾತೆ ಸಂಖ್ಯೆ',
	proof4:'ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಯ IFSC ಕೋಡ್',
      TEXT_LANG_INVEST_TERMS_1:'ಹಣ ಸೇರಿಸು ಗುಂಡಿ ಒತ್ತುವುದರ ಮೂಲಕ ನೀವು ಓದಲು ಒಪ್ಪುತ್ತೀರಿ',
      TEXT_LANG_INVEST_TERMS_2:'ಹೂಡಿಕೆ ಮಾಡುವ ಮೊದಲು',
      TranscationID:'ವ್ಯವಹಾರ ಐಡಿ',
      TEXT_CURRENT_BALANCE:'ಪ್ರಸ್ತುತ ಬಾಕಿ:',
      TEXT_WIHTDRAW_BALANCE:'ಎಷ್ಟು ನೀವು ಹಿಂದಕ್ಕೆ ಬಯಸುತ್ತೀರಿ?',
      TEXT_WITHDRAW_COMPLETEBALANCE:'ನನ್ನ ಸಂಪೂರ್ಣ ಸಮತೋಲನ ಹಿಂದಕ್ಕೆ',
      TEXT_WITHDRAW_SCHEDULE_TEXT:'ನಿಮ್ಮ ನೋಂದಾಯಿತ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಠೇವಣಿ ವೇಳಾಪಟ್ಟಿ',
      noTxnMsg1:'ಪ್ರದರ್ಶಿಸಲು ಯಾವುದೇ ವ್ಯವಹಾರ ಇವೆ,',
      noTxnMsg12:'ಈಗ ಹೂಡಿಕೆ ಆರಂಭಿಸಲು',
      TEXT_INVITE_HEADER:'ಸ್ನೇಹಿತರನ್ನು ಆಹ್ವಾನಿಸಿ',
      TEXT_INVITE_HEADER2:'ನಿಮ್ಮ ಸ್ನೇಹಿತರನ್ನು ಆಹ್ವಾನಿಸಿ',
      TEXT_INVITE_MESSAGE1:'ಈಗ ಆಹ್ವಾನಿಸಿ ಮತ್ತು ಪ್ರತಿ ಉಲ್ಲೇಖಿತ ರೂಪಾಯಿ 100 , ನಿಮ್ಮ ಸ್ನೇಹಿತ ಕೂಡ ರೂಪಾಯಿ 100 ಪಡೆಯುತ್ತಾನೆ',
      TEXT_INVITE_HEADER3:'ನಿಮ್ಮ ಸ್ನೇಹಿತನ ಉಲ್ಲೇಖಿತ ಪಾವತಿ ಅರ್ಹವಾಗಿರುತ್ತವೆ ರೂಪಾಯಿ 100 ಕನಿಷ್ಠ ಹೂಡಿಕೆ ಮತ್ತು ನೀವು ಎರಡೂ ಇದು ಕನಿಷ್ಠ 10 ದಿನಗಳ ಹೂಡಿಕೆ ಇರಿಸಿಕೊಳ್ಳಲು ಹೊಂದಿದೆ',
      TEXT_INVITE_MESSAGE3:'ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳನ್ನು ನಮಗೆ ಸಂಪರ್ಕಿಸಿ.',
      TEXT_INVITE_BUTTON:'ಆಹ್ವಾನಿಸುವ ಪ್ರಾರಂಭಿಸಿ',
      TEXT_LANG_MENU1:'ಆಹ್ವಾನಿಸಿ & ಗಳಿಸಿ',
      TEXT_LANG_MENU2:'ಎಫ್ಎಕ್ಯೂ',
      TEXT_LANG_MENU3:'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
      TEXT_LANG_MENU4:'ನಮ್ಮ ಬಗ್ಗೆ',
      TEXT_LANG_MENU5:'ಖಾತೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ',
      TEXT_LANG_MENU6:'ಸೈನ್ ಔಟ್'
  });
    $translateProvider.translations('6', {
	selectedLanguage:'Select your desired Language Malyalam',
	tabTitle1:'സംഗ്രഹം',
	tabTitle2:'വളർച്ച നിരക്ക്',
	tabTitle3:'ഇടപാടുകൾ',
	TEXT_LANG_BALANCE:'നിലവിലെ ബാലൻസ്',
	TEXT_LANG_INVEST:'അറ്റ നിക്ഷേപം',
	TEXT_LANG_NETGAIN:'വല നേട്ടം',
	TEXT_LANG_NETGAINTODAY:'ഇന്ന് വല ഗെയ്ൻ',
	BUTTON_LANG_WITH:"പിൻവലിക്കാൻ",
	BUTTON_LANG_FORGOT:'പിൻ മറന്നോ್?',
	BUTTON_LANG_SIGNUP:'അല്ലെങ്കിൽ ഒരു അക്കൗണ്ട് സൃഷ്ടിക്കുക ',
	TEXT_LANG_HEADER:'പണം ചേർക്കുക',
	TEXT_LANG_INVEST_L:'എത്ര നിക്ഷേപിക്കാൻ ആഗ്രഹിക്കുന്നത്?',
	TEXT_LANG_EXPECTEDVALUE:'ഒരു വർഷം പ്രതീക്ഷിക്കുന്ന മൂല്യം:',
	TEXT_LANG_INVEST1:'റിട്ടേണുകൾ ഒപ്റ്റിമൈസുചെയ്യുന്നതിനായി , ഞങ്ങൾ ചേർക്കും',
	TEXT_LANG_INVEST12:'നിങ്ങളുടെ നിക്ഷേപങ്ങൾക്ക്',
	BUTTON_LANG_EN: ' സുരക്ഷിത ലോഗിൻ',
	signUpTitle:'സൈൻ അപ്പ് ചെയ്യുക',
	firstName:'പേരിന്റെ ആദ്യഭാഗം',
	lastName:'പേരിന്റെ അവസാന ഭാഗം',
	mobileNo:'മൊബൈൽ നമ്പർ',
	setPIN:'4 അക്ക PIN സജ്ജമാക്കുക',
	confirmPin:'നാലക്ക പിൻ സ്ഥിരീകരിക്കുക',
	referralCode:'റഫറൽ കോഡ് (ഓപ്ഷണൽ)',
	activationText:'നിങ്ങൾ ഇപ്പോൾ നിങ്ങളുടെ അക്കൗണ്ട് സജീവമാക്കാൻ ആവശ്യമാണ്. താഴെ പ്രമാണങ്ങൾ തയ്യാറാണ് സൂക്ഷിക്കുക.',
	notNow:'ഇപ്പോൾ വേണ്ട',
	activateAcc:'അക്കൗണ്ട് സജീവമാക്കുക',
	proof1:'PAN കാർഡ്',
	proof2:'മേൽവിലാസം പ്രമാണങ്ങൾ',
	proof3:'നെറ്റ് ബാങ്കിങ് പ്രാപ്തമാക്കി ബാങ്ക് അക്കൗണ്ട് നമ്പർ',
	proof4:'നിങ്ങളുടെ ബാങ്ക് അക്കൗണ്ട് IFSC കോഡ്',
      TEXT_LANG_INVEST_TERMS_1:'പണം ചേർക്കുക ക്ലിക്കുചെയ്യുന്നതിലൂടെ നിങ്ങൾ വായിക്കുകയും അംഗീകരിക്കുന്നു',
      TEXT_LANG_INVEST_TERMS_2:'നിക്ഷേപം നടത്തുന്നതിന് മുമ്പ്',
      TranscationID:'ഇടപാട് ഐഡി',
      TEXT_CURRENT_BALANCE:'वर्तमान शिल्लक:',
      TEXT_WIHTDRAW_BALANCE:'നിങ്ങളുടെ എത്രത്തോളം പിൻവലിക്കാൻ ആഗ്രഹിക്കുന്നത്?',
      TEXT_WITHDRAW_COMPLETEBALANCE:'എന്റെ പൂർണ്ണമായ ബാലൻസ് പിൻവലിക്കാൻ',
      TEXT_WITHDRAW_SCHEDULE_TEXT:'നിങ്ങളുടെ രജിസ്റ്റർ ബാങ്ക് അക്കൗണ്ടിലേക്ക് ഡെപ്പോസിറ്റ് പട്ടിക',
      noTxnMsg1:'പ്രദർശിപ്പിക്കുന്നതിന് ഇടപാടുകൾ ഉണ്ട്,',
      noTxnMsg12:'ഇപ്പോൾ മുടക്കുന്ന START',
      TEXT_INVITE_HEADER:'സുഹൃത്തുക്കളെ ക്ഷണിക്കുക',
      TEXT_INVITE_HEADER2:'നിങ്ങളുടെ സുഹൃത്തുക്കളെ ക്ഷണിക്കുക',
      TEXT_INVITE_MESSAGE1:'ഇപ്പോൾ ക്ഷണിക്കുക ഒപ്പം രൂപ 100 നേടുകയും ഓരോ റഫറൽ , നിങ്ങളുടെ സുഹൃത്ത് പുറമേ രൂപ 100 ലഭിക്കും',
      TEXT_INVITE_HEADER3:'നിങ്ങളുടെ സുഹൃത്ത് രൂപ 100 മിനിമം നിക്ഷേപം അതു റഫറൽ അടക്കാൻ യോഗ്യത നിങ്ങൾക്കു രണ്ടുപേർക്കും കുറയാതെ 10 ദിവസം നിക്ഷേപിക്കാനും മാറ്റി നിർത്തുകയും',
      TEXT_INVITE_MESSAGE3:'എല്ലാ ചോദ്യങ്ങളിലും ഞങ്ങളെ ബന്ധപ്പെടുക.',
      TEXT_INVITE_BUTTON:'ക്ഷണിക്കുന്നു ആരംഭിക്കുക',
      TEXT_LANG_MENU1:'ക്ഷണിക്കുക & നേടുക',
      TEXT_LANG_MENU2:'പതിവുചോദ്യങ്ങൾ',
      TEXT_LANG_MENU3:'ഞങ്ങളെ സമീപിക്കുക',
      TEXT_LANG_MENU4:'ഞങ്ങളേക്കുറിച്ച്',
      TEXT_LANG_MENU5:'അക്കൗണ്ട് സജീവമാക്കുക',
      TEXT_LANG_MENU6:'സൈൻ ഔട്ട്'
  });
    $translateProvider.translations('7', {
	selectedLanguage:'Select your desired Language Marathi',
	tabTitle1:'सारांश',
	tabTitle2:'वाढीचा दर',
	tabTitle3:'व्यवहार',
	TEXT_LANG_BALANCE:'चालू शिल्लक',
	TEXT_LANG_INVEST:'निव्वळ गुंतवणूक',
	TEXT_LANG_NETGAIN:'निव्वळ नफ्यावर',
	TEXT_LANG_NETGAINTODAY:'आज निव्वळ नफा मिळविला',
	BUTTON_LANG_WITH:"मागे",
	BUTTON_LANG_FORGOT:'विसरले पिन?',
	BUTTON_LANG_SIGNUP:'किंवा एक खाते तयार करा ',
	TEXT_LANG_HEADER:'पैसा जोडा',
	TEXT_LANG_INVEST_L:'किती गुंतवणूक करायला आवडेल?',
	TEXT_LANG_EXPECTEDVALUE:'एक वर्ष अपेक्षित मूल्य:',
	TEXT_LANG_INVEST1:'परतावा अनुकूल , आम्ही जोडेल',
	TEXT_LANG_INVEST12:'तुमच्या गुंतवणुकीमध्ये',
    BUTTON_LANG_EN: ' सुरक्षित लॉग-इन',
	signUpTitle:'साइन अप',
	firstName:'पहिले नाव',
	lastName:'आडनाव',
	mobileNo:'मोबाइल क्रमांक',
	setPIN:'4 अंकी पिन सेट करा',
	confirmPin:'चार अंकी पिन पुष्टी',
	referralCode:'रेफरल कोड (पर्यायी)',
	activationText:'आपण आता आपले खाते सक्रिय करण्यासाठी आवश्यक आहे. कृपया खालील कागदपत्रे तयार ठेवा.',
	notNow:'आत्ता नको',
	activateAcc:'खाते सक्रिय',
	proof1:'PAN कार्ड',
	proof2:'पुरावा',
	proof3:'नेट बँकिंग सक्षम बँक खाते क्रमांक',
	proof4:'आपल्या बँक खाते IFSC कोड',
      TEXT_LANG_INVEST_TERMS_1:'मनी जोडा क्लिक करून आपण वाचले आहे सहमत',
      TEXT_LANG_INVEST_TERMS_2:'गुंतवणूक करण्यापूर्वी',
      TranscationID:'व्यवहार आयडी',
      TEXT_CURRENT_BALANCE:'वर्तमान शिल्लक:',
      TEXT_WIHTDRAW_BALANCE:'आपण किती मागे आवडेल?',
      TEXT_WITHDRAW_COMPLETEBALANCE:'माझे पूर्ण शिल्लक मागे',
      TEXT_WITHDRAW_SCHEDULE_TEXT:'आपले नोंदणीकृत बँक खात्यात जमा वेळापत्रक',
      noTxnMsg1:'प्रदर्शित करण्यासाठी कोणतीही व्यवहार आहेत,',
      noTxnMsg12:'आता गुंतवणूक सुरू',
      TEXT_INVITE_HEADER:'मित्रांना आमंत्रित',
      TEXT_INVITE_HEADER2:'आपल्या मित्रांना आमंत्रित करा',
      TEXT_INVITE_MESSAGE1:'ഇപ്പോൾ ക്ഷണിക്കുക ഒപ്പം രൂപ 100 നേടുകയും ഓരോ റഫറൽ , നിങ്ങളുടെ സുഹൃത്ത് പുറമേ രൂപ 100 ലഭിക്കും',
      TEXT_INVITE_HEADER3:'आपले मित्र संदर्भ बाहेर द्या पात्र रुपये 100 किमान गुंतवणूक आणि आपण दोन्ही तो किमान 10 दिवस गुंतवणूक ठेवणे आहे',
      TEXT_INVITE_MESSAGE3:'काही शंका आमच्याशी संपर्क साधा .',
      TEXT_INVITE_BUTTON:'आमंत्रित करत आहे प्रारंभ',
      TEXT_LANG_MENU1:'आमंत्रित करा & कमवा',
      TEXT_LANG_MENU2:'नेहमी विचारले जाणारे प्रश्न',
      TEXT_LANG_MENU3:'आमच्याशी संपर्क',
      TEXT_LANG_MENU4:'आमच्या विषयी',
      TEXT_LANG_MENU5:'खाते सक्रिय',
      TEXT_LANG_MENU6:'साइन आउट'
  });
    $translateProvider.translations('8', {
	selectedLanguage:'Select your desired Language Tamil',
	tabTitle1:'சுருக்கம்',
	tabTitle2:'வளர்ச்சி விகிதம்',
	tabTitle3:'பரிவர்த்தனைகள்',
	TEXT_LANG_BALANCE:'தற்போதைய இருப்பு',
	TEXT_LANG_INVEST:'நிகர முதலீடு',
	TEXT_LANG_NETGAIN:'நிகர இலாபமாக',
	TEXT_LANG_NETGAINTODAY:'இன்று நிகர லாபம்',
	BUTTON_LANG_WITH:"வாபஸ்",
	BUTTON_LANG_FORGOT:'மறந்துவிட்டேன் முள?',
	BUTTON_LANG_SIGNUP:'அல்லது ஒரு கணக்கை உருவாக்க',
	TEXT_LANG_HEADER:'பணம் சேர்க்க',
	TEXT_LANG_INVEST_L:'எவ்வளவு நீங்கள் முதலீடு செய்ய விரும்புகிறீர்கள்?',
	TEXT_LANG_EXPECTEDVALUE:'ஒரு வருடம் எதிர்பார்க்கும் மதிப்பு :',
	TEXT_LANG_INVEST1:'வருமானத்தை மேம்படுத்த , நாம் சேர்க்க வேண்டும்',
	TEXT_LANG_INVEST12:'உங்கள் முதலீடுகளுக்கு',
    BUTTON_LANG_EN: ' பாதுகாப்பான தேதி',
	signUpTitle:'பதிவு',
	firstName:'முதல் பெயர்',
	lastName:'கடைசி பெயர்',
	mobileNo:'மொபைல் எண்',
	setPIN:'4 இலக்க PIN அமைக்க',
	confirmPin:'4 ஐக்கிய பின்னை உறுதிப்படுத்தவும்',
	referralCode:'பரிந்துரை குறியீடு (விரும்பினால்)',
	activationText:'நீங்கள் இப்போது உங்கள் கணக்கை செயல்படுத்த வேண்டும். பின்வரும் ஆவணங்களை தயாராக வைத்து கொள்ளவும்.',
	notNow:'இப்போது இல்லை',
	activateAcc:'செயல்படுத்த',
	proof1:'PAN அட்டை',
	proof2:'முகவரி சான்று',
	proof3:'நெட் பேங்கிங் செயல்படுத்தப்படும் வங்கி கணக்கு எண்',
	proof4:'உங்கள் வங்கி கணக்கு Code என்ன குறியீடு',
      TEXT_LANG_INVEST_TERMS_1:'பணம் சேர்க்க கிளிக் செய்வதன் மூலம் நீங்கள் படிக்க ஒப்புக்கொள்கிறேன்பை',
      TEXT_LANG_INVEST_TERMS_2:'முதலீடு செய்யும் முன்',
      TranscationID:'பரிவர்த்தனை ஐடி',
      TEXT_CURRENT_BALANCE:'தற்போதைய இருப்பு :',
      TEXT_WIHTDRAW_BALANCE:'நீங்கள் எவ்வளவு திரும்பப் பெற வேண்டும் என்று விரும்புகிறீர்கள்?',
      TEXT_WITHDRAW_COMPLETEBALANCE:'எனது முழு சமநிலை வாபஸ்',
      TEXT_WITHDRAW_SCHEDULE_TEXT:'உங்கள் பதிவு வங்கி கணக்கில் வைப்பு அட்டவணை',
      noTxnMsg1:'காண்பிக்க எந்த பரிமாற்றங்கள் உள்ளன ,',
      noTxnMsg12:'இப்போது முதலீடு தொடங்க',
      TEXT_INVITE_HEADER:'நண்பர்களை அழைக்க',
      TEXT_INVITE_HEADER2:'உனது நண்பர்களை அழை',
      TEXT_INVITE_MESSAGE1:'இப்போது அழை மற்றும் ரூபாய் 100 கிடைக்கும் ஒவ்வொரு குறிப்பு , உங்கள் நண்பர் கூட இந்திய ரூபாய் 100 பெறுவார்கள்',
      TEXT_INVITE_HEADER3:'உங்கள் நண்பர் குறிப்பு அவுட் கொடுக்க தகுதி பெற இந்திய ரூபாய் 100 ஒரு குறைந்தபட்ச முதலீடு மற்றும் நீங்கள் இருவரும் அதை குறைந்தது 10 நாட்களுக்கு முதலீடு வைத்திருக்க வேண்டும்',
      TEXT_INVITE_MESSAGE3:'எந்த கேள்விகள் எங்களை தொடர்பு கொள்ளவும்.',
      TEXT_INVITE_BUTTON:'அழைப்பதால் தொடக்கம்',
      TEXT_LANG_MENU1:'அழை & சம்பாதிக்க',
      TEXT_LANG_MENU2:'கேள்விகள்',
      TEXT_LANG_MENU3:'எங்களை தொடர்பு',
      TEXT_LANG_MENU4:'எங்களை பற்றி',
      TEXT_LANG_MENU5:'கணக்கு செயல்படுத்தவும்',
      TEXT_LANG_MENU6:'வெளியேறு'
  });
    $translateProvider.translations('9', {
	selectedLanguage:'Select your desired Language Telgu',
	tabTitle1:'సారాంశం',
	tabTitle2:'వృద్ధి రేటు',
	tabTitle3:'లావాదేవీలు',
	TEXT_LANG_BALANCE:'ప్రస్తుత నిల్వ',
	TEXT_LANG_INVEST:'నికర పెట్టుబడి',
	TEXT_LANG_NETGAIN:'నికర లాభాలు',
	TEXT_LANG_NETGAINTODAY:'నికర లాభం నేటి',
	BUTTON_LANG_WITH:"వెనక్కి",
	BUTTON_LANG_FORGOT:'మర్చిపోయాను పిన్?',
	BUTTON_LANG_SIGNUP:'లేదా ఖాతా సృష్టించుకోండి',
	TEXT_LANG_HEADER:'డబ్బు జోడించడానికి',
	TEXT_LANG_INVEST_L:'మీరు ఎంత పెట్టుబడి చేయాలనుకుంటున్నారు?',
	TEXT_LANG_EXPECTEDVALUE:'ఒక సంవత్సరంలో అంచనా విలువ:',
	TEXT_LANG_INVEST1:'తిరిగి ఆప్టిమైజ్ , మేము జోడిస్తుంది',
	TEXT_LANG_INVEST12:'మీ పెట్టుబడులను',
	BUTTON_LANG_EN: 'సురక్షిత లాగిన్',
	signUpTitle:'సృష్టించండి',
	firstName:'మొదటి పేరు',
	lastName:'చివరి పేరు',
	mobileNo:'మొబైల్ నంబర్',
	setPIN:'4 అంకెల PIN సృష్టించుకోండి',
	confirmPin:'4 అంకెల PIN ను నిర్ధారించండి',
	referralCode:'రెఫరల్ కోడ్(Optional)',
	activationText:'మీరు ఇప్పుడు మీ ఖాతాను సక్రియం చేయాలి. దయచేసి కింది పత్రాలు  సిద్ధంగా ఉంచండి.',
	notNow:'ఇప్పుడు కాదు',
	activateAcc:'ఖాతాను సక్రియం',
	proof1:'PAN కార్డ్',
	proof2:'చిరునామా నిరూపణ పత్రం',
	proof3:'నెట్ బ్యాంకింగ్ కలిగి ఉన్న బ్యాంక్ ఖాతా సంఖ్య',
	proof4:'మీ బ్యాంక్ ఖాతా యొక్క IFSC కోడ్',
      TEXT_LANG_INVEST_TERMS_1:'డబ్బు ADD క్లిక్ చేయడం ద్వారా మీరు చదివి అంగీకరిస్తున్నారు',
      TEXT_LANG_INVEST_TERMS_2:'పెట్టుబడి చేయడానికి ముందు',
      TranscationID:'లావాదేవి ఐడి',
      TEXT_CURRENT_BALANCE:'ప్రస్తుత నిల్వ :',
      TEXT_WIHTDRAW_BALANCE:'మీరు ఎంత వెనక్కి చేయాలనుకుంటున్నారు?',
      TEXT_WITHDRAW_COMPLETEBALANCE:'నా పూర్తి సంతులనం ఉపసంహరించుకోవాలని',
      TEXT_WITHDRAW_SCHEDULE_TEXT:'మీ నమోదిత బ్యాంకు ఖాతాకు జమ షెడ్యూల్',
      noTxnMsg1:'ప్రదర్శించడానికి ఏ లావాదేవీలు ఉన్నాయి,',
      noTxnMsg12:'ఇప్పుడు ఇన్వెస్టింగ్',
      TEXT_INVITE_HEADER:'స్నేహితులను ఆహ్వానించండి',
      TEXT_INVITE_HEADER2:'మీ స్నేహితులను ఆహ్వానించండి',
      TEXT_INVITE_MESSAGE1:'ఇప్పుడు ఆహ్వానించు మరియు ప్రతి రిఫెరల్ కోసం INR 100 ను మీ స్నేహితుడు కూడా INR 100 పొందుతారు',
      TEXT_INVITE_HEADER3:'మీ స్నేహితుడు చెల్లించాలి నివేదన అర్హులు అవుతారు INR 100 కనీసం పెట్టుబడి మరియు మీరు రెండు కోసం ఇది కనీసం 10 రోజులు పెట్టుబడి ఉంచడానికి ఉంది',
      TEXT_INVITE_MESSAGE3:'ఏ ప్రశ్నలు కోసం దయచేసి మమ్మల్ని సంప్రదించండి.',
      TEXT_INVITE_BUTTON:'ఆహ్వానిస్తోంది ప్రారంభం',
      TEXT_LANG_MENU1:'ఆహ్వానం & సంపాదించండి',
      TEXT_LANG_MENU2:'ఎఫ్ ఎ క్యూ',
      TEXT_LANG_MENU3:'మమ్మల్ని సంప్రదించండి',
      TEXT_LANG_MENU4:'మా గురించి',
      TEXT_LANG_MENU5:'ఖాతాను సక్రియం',
      TEXT_LANG_MENU6:'సైన్ ఔట్'
  });
  //con
  //console.log($sessionStorage.LanguageSession);
  $translateProvider.preferredLanguage('2');
})

.config(function(IdleProvider, KeepaliveProvider) {
    // configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(5); // in seconds
    KeepaliveProvider.interval(2); // in seconds
})

.run(function($ionicPlatform, $ionicAnalytics, $rootScope, $ionicLoading,Idle, $ionicHistory,$cordovaSocialSharing,$state,$ionicPopup,$sessionStorage,ionicToast,$timeout,$localStorage) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

//var userName = $bindTo($scope.$sessionStorage.mobileNumber);
 //     console.log(userName);
      Idle.watch();
//$localStorage.language=0;
                if(!navigator.onLine) {
console.log(navigator.onLine + "  connection state");
					$ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device."
                    })
                    .then(function(result) {
                        if(result) {
                            ionic.Platform.exitApp();
                        }
                    });
				}
				else{console.log(navigator.onLine + "  connection state");}
    $ionicAnalytics.register();
    var io=Ionic.io();
/*
if(typeof analytics !== undefined) {
                analytics.startTrackerWithId("UA-76016305-1");
				analytics.trackView("tracking the google analytics ");
  analytics.trackView("controller.js");
    analytics.trackView('invest');
  analytics.trackView('withdraw');
  analytics.trackView('tabsController');
  analytics.setUserId('userName');

				//ga('set', 'userId', {{USER_ID}}); // Set the user ID using signed-in user_id.
            } else {
                console.log("Google Analytics Unavailable");
            }
	*/var backbutton = 0;
	$ionicPlatform.registerBackButtonAction(function (event) {
     if ($ionicHistory.currentStateName() == 'invest'){
		 console.log("inv");
		$state.go('tabsController.summaryPage');

      }

     else if ($ionicHistory.currentStateName() == 'verifySuccess'){
		event.preventDefault();
      }

     else if ($ionicHistory.currentStateName() == 'tabsController.summaryPage'){
		/*var showToast = function(){
		//ionicToast.show(message, position, stick, time);
		  ionicToast.show('This is a toast at the top.', 'bottom', false, 2500);
		};*/
		if(backbutton==0){
            backbutton++;
            window.plugins.toast.showShortBottom('Press back again to exit');
            $timeout(function(){backbutton=0;},3000);
        }else{
            navigator.app.exitApp();
        }

      }
	   else if ($ionicHistory.currentStateName() == 'login'){
		navigator.app.exitApp();
      }

	  else {
		console.log($ionicHistory.currentStateName());
        history.go(-1);
      }
    }, 100);


    /*Urban Air ship integration*/

    UAirship.getChannelID(function (channelID) {
      console.log("Channel: " + channelID)
    })

    UAirship.setUserNotificationsEnabled(true);
    /*
      $ionicPlatform.registerBackButtonAction(function(event) {
          $ionicPopup.confirm({
          title: 'System warning',
          template: 'are you sure you want to exit?'
          }).then(function(res) {
          if (res) {
          ionic.Platform.exitApp();
          }
          })
      }, 100);*/




    /*var push=new Ionic.Push({
      "onNotification": function(notification) {
    var payload = notification.payload;
    console.log(notification, payload);
  },
  "onRegister": function(data) {
    console.log(data.token);
  },
      "pluginConfig":{
        "android":{
          "iconColor":"#0000FF",
          "icon":"icon"
        }
      }
    });*/

     // Enable to debug issues.
 // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

 var notificationOpenedCallback = function(jsonData) {
   console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
 };  window.plugins.OneSignal.init("7b688632-6872-22f5-a33d-6f51b80af61b",
                                {googleProjectNumber: "745760472440"},
                                notificationOpenedCallback);
 OneSignal.init();
 // Show an alert box if a notification comes in when the user is in your app.
   if($sessionStorage.clientActive!="y"){
     window.plugins.OneSignal.sendTag('activeState','true');
   }
    else {
     window.plugins.OneSignal.sendTag('notActiveState','true');
   }
 window.plugins.OneSignal.enableInAppAlertNotification(true);
 window.plugins.OneSignal.enableVibrate(true);
window.plugins.OneSignal.getTags(function(tags){
  console.log('Tags Received: ' + JSON.stringify(tags));
    })



    var user=Ionic.User.current();
    if (!user.id) {
      user.id=Ionic.User.anonymousId();
    }
    user.set('name','Fnozen runner app');
    user.set('bio','this is me again');
    user.save();
    var callback=function(){
      push.addTokenToUser(user);
      user.save();

    };
    push.register(callback);

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

