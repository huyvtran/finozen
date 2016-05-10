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
      BUTTON_LANG_FORGOT:'Forgot Pin?',
      BUTTON_LANG_SIGNUP:'or Create an account ',
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
	proof4:'IFSC Code of your Bank account'
  });
  $translateProvider.translations('1', {
	selectedLanguage:'Select your desired Language Bengali',
	tabTitle1:'সংক্ষিপ্তসার',
	tabTitle2:'বৃদ্ধির হার',
	tabTitle3:'লেনদেন',
    BUTTON_LANG_FORGOT:'ভুলে গেছি পিন?',
    BUTTON_LANG_SIGNUP:'অথবা একটি অ্যাকাউন্ট তৈরি ',
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
	proof4:'আপনার ব্যাংক অ্যাকাউন্টের IFSC কোড'
  });
    $translateProvider.translations('3', {
	selectedLanguage:'Select your desired Language Gujarati',
	tabTitle1:'SUMMARY',
	tabTitle2:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
      BUTTON_LANG_FORGOT:'ભૂલી ગયા છો પિન?',
      BUTTON_LANG_SIGNUP:'અથવા એક એકાઉન્ટ બનાવો',
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
	proof4:'તમારી બેંક એકાઉન્ટ IFSC કોડ'
  });
  $translateProvider.translations('4', {
	selectedLanguage:'अपनी इच्छित भाषा का चयन करें',
	tabTitle1:'सारांश',
	tabTitle2:'विकास दर',
	tabTitle3:'लेनदेन',
    BUTTON_LANG_FORGOT:'भूल गया पिन?',
    BUTTON_LANG_SIGNUP:'या खाता बनाना',
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
	proof4:'अपने बैंक खाते का IFSC कोड'
  });
    $translateProvider.translations('5', {
	selectedLanguage:'Select your desired Language kannada',
	tabTitle1:'SUMMARY',
	tabTitle2:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
      BUTTON_LANG_FORGOT:'ಮರೆತು ಪಿನ್?',
      BUTTON_LANG_SIGNUP:'ಅಥವಾ ಖಾತೆಯನ್ನು ರಚಿಸಿ ',
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
	proof4:'ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಯ IFSC ಕೋಡ್'
  });
    $translateProvider.translations('6', {
	selectedLanguage:'Select your desired Language Malyalam',
	tabTitle1:'SUMMARY',
	tabTitle2:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
      BUTTON_LANG_FORGOT:'പിൻ മറന്നോ್?',
      BUTTON_LANG_SIGNUP:'അല്ലെങ്കിൽ ഒരു അക്കൗണ്ട് സൃഷ്ടിക്കുക ',
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
	proof4:'നിങ്ങളുടെ ബാങ്ക് അക്കൗണ്ട് IFSC കോഡ്'
  });
    $translateProvider.translations('7', {
	selectedLanguage:'Select your desired Language Marathi',
	tabTitle1:'SUMMARY',
	tabTitle2:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
      BUTTON_LANG_FORGOT:'विसरले पिन?',
      BUTTON_LANG_SIGNUP:'किंवा एक खाते तयार करा ',
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
	proof4:'आपल्या बँक खाते IFSC कोड'
  });
    $translateProvider.translations('8', {
	selectedLanguage:'Select your desired Language Tamil',
	tabTitle1:'SUMMARY',
	tabTitle2:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
      BUTTON_LANG_FORGOT:'மறந்துவிட்டேன் முள?',
      BUTTON_LANG_SIGNUP:'அல்லது ஒரு கணக்கை உருவாக்க',
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
	proof4:'உங்கள் வங்கி கணக்கு Code என்ன குறியீடு'
  });
    $translateProvider.translations('9', {
	selectedLanguage:'Select your desired Language Telgu',
	tabTitle1:'SUMMARY',
	tabTitle2:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
      BUTTON_LANG_FORGOT:'మర్చిపోయాను పిన్?',
      BUTTON_LANG_SIGNUP:'లేదా ఖాతా సృష్టించుకోండి',
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
	proof4:'మీ బ్యాంక్ ఖాతా యొక్క IFSC కోడ్'
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
            $timeout(function(){backbutton=0;},5000);
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

