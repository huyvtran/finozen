// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var confirmation = 0;
angular.module('app', ['ionic','ionic.service.core','app.controllers', 'app.subcontrollerOne','pascalprecht.translate','app.subcontrollerTwo' , 'app.routes', 'app.services', 'app.directives','ngResource', 'ngMessages','ngStorage','ngIdle','ngCordova', 'ionic-toast'])
/*.constant('$ionicLoadingConfig', {
  template: '<ion-spinner icon="android"></ion-spinner>',
  showBackdrop: true,
})

*/
.config(function ($translateProvider) {


    $translateProvider.translations('2', {
	selectedLanguage:'Select your desired Language English',
	tabTitle1:'SUMMARY',
	tabTitle2:'CALCULATOR',
	tabTitleFlip:'GROWTH RATE',
	tabTitle3:'TRANSACTIONS',
	TEXT_LANG_BALANCE:'CURRENT BALANCE',
	TEXT_LANG_NETGAIN:'Net Gains',
	TEXT_LANG_NETGAINTODAY:'Net Gains Today',
	TEXT_LANG_INVEST:'Net Investment',
	BUTTON_LANG_WITH:"WITHDRAW",
	BUTTON_LANG_FORGOT:'Forgot Pin?',
	BUTTON_LANG_SIGNUP:'or create an account ',
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
	setPIN:'Set 4 digit PIN as password',
	confirmPin:'Confirm 4 digit PIN',
	referralCode:'Referral code(Optional)',
	activationText:'You will now need to activate your account. Please keep the following documents ready.',
	notNow:'NOT NOW',
	activateAcc:'ACTIVATE ACCOUNT',
	proof1:'PAN Card',
	proof2:'Address Proof',
	proof3:'Net Banking enabled Bank Account No',
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
      TEXT_INVITE_MESSAGE2:'Post 1st investment by your referral, both you and your friend will be eligible for INR 100 referral incentive. Incentive will be deposited directly in your respective bank accounts (within 3 days).Please contact us for any queries.',
      TEXT_INVITE_BUTTON:'Start Inviting',
      TEXT_LANG_MENU1:'Invite & Earn',
      TEXT_LANG_MENU2:'FAQ',
      TEXT_LANG_MENU3:'contact us',
      TEXT_LANG_MENU4:'About us',
      TEXT_LANG_MENU5:'Activate account',
      TEXT_LANG_MENU6:'Sign Out',
      TEXT_POPOVER:'Estimated annual returns for your investments till date, and should not be construed as projected returns or actual performance.',
	withdrawlTimeBefore:'before 2pm',
	withdrawlTimeAfter:'after 2pm',
	dayAfter:'Next day',
	dayAfterNext:'Day after next',
	andText:'and',
	withdrawl:'Withdrawl',
	deposit:'Deposit',
	withdrawBottomLine:'Working days Mon-Fri. If the day of deposit is a Bank Holiday, money will be deposited the next working day.',
	rememberMe:'Remember Me',
	fieldEmpty:'You did not enter a field',
	passwordInvalid:'Entered PIN didn\'t match',
	passwordLength:'Enter 4 digit PIN',
	mobileInvalid:'Enter valid mobile number',
	mobileLength:'Mobile number must be 10 digits.',
	credentialsInvalid:'Entered Credentials did not validate',
	resetPinError:'Please enter your mobile number to reset PIN',
	digitsOnly:'Enter digits only',
	signUpError:'Sign Up failed, please try again',
	mobileError:'Mobile number in use',
	statusHead:'status',
	statusRequest:'REQUEST STATUS',
	statusThanks:'Thank you',
	paymentSuccess1:'Your request has been accepted.',
	paymentSuccess2:'Schedule for deposit to your registered bank account',
	paymentSuccess3:'If the day of deposit is a Bank Holiday, money will be deposited the next working day.',
	paymentSuccessDone:'Done',
	investSuccess1:'Your request for investment has been accepted',
	alphaOnly:'Enter Alphabets only'
  });

  $translateProvider.preferredLanguage('2');
})

.config(function(IdleProvider, KeepaliveProvider) {
    // configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(5); // in seconds
    KeepaliveProvider.interval(2); // in seconds
})

.run(function($ionicPlatform, $rootScope, $ionicLoading,Idle, $ionicHistory,$cordovaKeyboard,$cordovaSocialSharing,$state,$ionicPopup,$sessionStorage,ionicToast,$timeout,$localStorage) {
  $ionicPlatform.ready(function() {

$rootScope.$watch(function() {
return $cordovaKeyboard.isVisible();
}, function(value) {
	console.log(value);
$rootScope.keyboardOpen = value;
});
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

	var backbutton = 0;
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
/*
 var notificationOpenedCallback = function(jsonData) {
   console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
 };  window.plugins.OneSignal.init("7b688632-6872-22f5-a33d-6f51b80af61b",
                                {googleProjectNumber: "745760472440"},
                                notificationOpenedCallback);
 OneSignal.init();
 window.plugins.OneSignal.enableInAppAlertNotification(true);
 window.plugins.OneSignal.enableVibrate(true);
window.plugins.OneSignal.getTags(function(tags){
  console.log('Tags Received: ' + JSON.stringify(tags));
    })
	
	*/
	
	//mo-enage start
/*	var moe = new MoECordova.init();
	moe.setExistingUser(true);

*/
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }



if(typeof analytics !== undefined) {
                analytics.startTrackerWithId("UA-78900035-2");
				analytics.trackView("tracking the google analytics ");
  analytics.trackView("controller.js");
    analytics.trackView('invest');
  analytics.trackView('withdraw');
  analytics.trackView('tabsController');
  analytics.setUserId('userName');
  analytics.setApplicationIconBadgeNumber('username');

				//ga('set', 'userId', {{USER_ID}}); // Set the user ID using signed-in user_id.
            } else {
                console.log("Google Analytics Unavailable");
            }
  });
})

