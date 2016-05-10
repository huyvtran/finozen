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

  $translateProvider.translations('1', {
	selectedLanguage:'Select your desired Language Bengali',
	tabTitle1:'সংক্ষিপ্তসার',
	tabTitle2:'বৃদ্ধির হার',
	tabTitle3:'লেনদেন',
    BUTTON_LANG_FORGOT:'ভুলে গেছি পিন?',
    BUTTON_LANG_SIGNUP:'অথবা একটি অ্যাকাউন্ট তৈরি ',
    BUTTON_LANG_EN: ' সিকিউর লগইন'
  });
    $translateProvider.translations('2', {
	selectedLanguage:'Select your desired Language English',
	tabTitle1:'SUMMARY',
	tabTitle2:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
      BUTTON_LANG_FORGOT:'Forgot Pin?',
      BUTTON_LANG_SIGNUP:'or Create an account ',
    BUTTON_LANG_EN: ' Secure Login'
  });
    $translateProvider.translations('3', {
	selectedLanguage:'Select your desired Language Gujarati',
	tabTitle1:'SUMMARY',
	tabTitle2:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
      BUTTON_LANG_FORGOT:'ભૂલી ગયા છો પિન?',
      BUTTON_LANG_SIGNUP:'અથવા એક એકાઉન્ટ બનાવો',
    BUTTON_LANG_EN: ' સુરક્ષિત લૉગિન'
  });
  $translateProvider.translations('4', {
	selectedLanguage:'अपनी इच्छित भाषा का चयन करें',
	tabTitle1:'सारांश',
	tabTitle2:'विकास दर',
	tabTitle3:'लेनदेन',
    BUTTON_LANG_FORGOT:'भूल गया पिन?',
    BUTTON_LANG_SIGNUP:'या खाता बनाना',
    BUTTON_LANG_EN: ' सुरक्षित लॉगइन'
  });
    $translateProvider.translations('5', {
	selectedLanguage:'Select your desired Language kannada',
	tabTitle1:'SUMMARY',
	tabTitle2:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
      BUTTON_LANG_FORGOT:'ಮರೆತು ಪಿನ್?',
      BUTTON_LANG_SIGNUP:'ಅಥವಾ ಖಾತೆಯನ್ನು ರಚಿಸಿ ',
    BUTTON_LANG_EN: ' ಸುರಕ್ಷಿತ ಲಾಗಿನ್'
  });
    $translateProvider.translations('6', {
	selectedLanguage:'Select your desired Language Malyalam',
	tabTitle1:'SUMMARY',
	tabTitle2:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
      BUTTON_LANG_FORGOT:'പിൻ മറന്നോ್?',
      BUTTON_LANG_SIGNUP:'അല്ലെങ്കിൽ ഒരു അക്കൗണ്ട് സൃഷ്ടിക്കുക ',
    BUTTON_LANG_EN: ' സുരക്ഷിത ലോഗിൻ'
  });
    $translateProvider.translations('7', {
	selectedLanguage:'Select your desired Language Marathi',
	tabTitle1:'SUMMARY',
	tabTitle2:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
      BUTTON_LANG_FORGOT:'विसरले पिन?',
      BUTTON_LANG_SIGNUP:'किंवा एक खाते तयार करा ',
    BUTTON_LANG_EN: ' सुरक्षित लॉग-इन'
  });
    $translateProvider.translations('8', {
	selectedLanguage:'Select your desired Language Tamil',
	tabTitle1:'SUMMARY',
	tabTitle2:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
      BUTTON_LANG_FORGOT:'மறந்துவிட்டேன் முள?',
      BUTTON_LANG_SIGNUP:'அல்லது ஒரு கணக்கை உருவாக்க',
    BUTTON_LANG_EN: ' பாதுகாப்பான தேதி'
  });
    $translateProvider.translations('9', {
	selectedLanguage:'Select your desired Language Telgu',
	tabTitle1:'SUMMARY',
	tabTitle2:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
      BUTTON_LANG_FORGOT:'మర్చిపోయాను పిన్?',
      BUTTON_LANG_SIGNUP:'లేదా ఖాతా సృష్టించుకోండి',
    BUTTON_LANG_EN: 'సురక్షిత లాగిన్'
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

