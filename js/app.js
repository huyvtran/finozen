// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ionic.service.core','ionic.service.analytics', 'app.controllers', 'app.subcontrollerOne','app.subcontrollerTwo' , 'app.routes', 'app.services', 'app.directives','ngResource', 'ngMessages','ngStorage','ngIdle','ngCordova', 'ionic-toast'])

/*.constant('$ionicLoadingConfig', {
  template: '<ion-spinner icon="android"></ion-spinner>',
  showBackdrop: true,
})
*/

.config(function(IdleProvider, KeepaliveProvider) {
    // configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(5); // in seconds
    KeepaliveProvider.interval(2); // in seconds
})





.run(function($ionicPlatform,$ionicAnalytics,$rootScope, $ionicLoading,Idle, $ionicHistory,$cordovaSocialSharing,$state,ionicToast) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

Idle.watch();
    if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device."
                    })
                    .then(function(result) {
                        if(!result) {
                            ionic.Platform.exitApp();
                        }
                    });
                }
            }

    $ionicAnalytics.register();
    var io=Ionic.io();

    /*disabling the hardware back button on invest page and withdraw page

    $ionicPlatform.registerBackButtonAction(function (event) {
      if ($ionicHistory.currentStateName() == 'invest'){
        event.preventDefault();
      } else {
        history.go(-1);
      }
    }, 100);      */
	$ionicPlatform.registerBackButtonAction(function (event) {
     if ($ionicHistory.currentStateName() == 'invest'){
        //event.preventDefault();
		
		$state.go('tabsController.summaryPage');
		
      }

     else if ($ionicHistory.currentStateName() == 'tabsController.summaryPage'){
        //event.preventDefault();
		//$state.go('tabsController.summaryPage');
		/*var showToast = function(){
		//ionicToast.show(message, position, stick, time); 
		  ionicToast.show('This is a toast at the top.', 'bottom', false, 2500);
		};*/
		navigator.app.exitApp();
      }

	  else {
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
 
 var notificationOpenedCallback = function(jsonData) {
   console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
 };  window.plugins.OneSignal.init("20dcc20d-87ea-434e-86b7-73e2c8448047",
                                {googleProjectNumber: "745760472440"},
                                notificationOpenedCallback);
 
 // Show an alert box if a notification comes in when the user is in your app.
 window.plugins.OneSignal.enableInAppAlertNotification(true);
 window.plugins.OneSignal.enableVibrate(true);




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
