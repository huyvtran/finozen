angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider,$ionicAppProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
$ionicAppProvider.identify ({
  app_id:"83d34421",
  "api_key":"7b8cb9f2d3b2d000350e3da52e6493b995039c9c8f7fe8c9"
});
  $stateProvider
    
      
        
    .state('login', {
      url: '/page7',
	  templateUrl: 'templates/login.html',
	  controller: 'loginCtrl'
    })
        
     .state('sliders', {
		url: '/sliders',
		templateUrl: 'templates/slides.html',
		controller: 'slideCtrl'
    })
         
     .state('pre_verification', {
		url: '/pre_verification',
		templateUrl: 'templates/pre_verification.html',
		controller: 'pre_verificationCtrl'
    })
        
         
     .state('invite', {
		url: '/invite',
		templateUrl: 'templates/invite.html',
		controller: 'inviteCtrl'
    })     
     .state('contact', {
		url: '/contact',
		templateUrl: 'templates/contact.html',
		controller: 'inviteCtrl'
    })    
     .state('change_password', {
		url: '/change_pin',
		templateUrl: 'templates/change_password.html',
		controller: 'inviteCtrl'
    })   
     .state('forgot_pin', {
		url: '/forgot_pin',
		templateUrl: 'templates/forgot_password.html',
		controller: 'inviteCtrl'
    })
     .state('terms', {
		url: '/terms',
		templateUrl: 'templates/terms.html',
		controller: 'termsCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/page8',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('tabsController.summaryPage', {
      url: '/page15',
      views: {
        'tab7': {
          templateUrl: 'templates/summaryPage.html',
          controller: 'summaryPageCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page14',
      abstract:true,
      templateUrl: 'templates/tabsController.html',
	  controller: ''
    })
      
    
      
        
    .state('tabsController.growthRate', {
      url: '/page9',
      views: {
        'tab8': {
          templateUrl: 'templates/growthRate.html',
          controller: 'growthRateCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.recentTransactions', {
      url: '/page10',
      views: {
        'tab9': {
          templateUrl: 'templates/recentTransactions.html',
          controller: 'recentTransactionsCtrl'
        }
      }
    })
        
      
    
             .state('account', {
      url: '/account',         
          templateUrl: 'templates/account.html',
          controller: 'accountCtrl'     
    })     

          .state('faq', {
      url: '/faq',         
          templateUrl: 'templates/faq.html',
          controller: 'faqCtrl'     
    })
          .state('faq1', {
      url: '/faq_account',         
          templateUrl: 'templates/faq1.html',
          controller: 'faqCtrl'     
    })
          .state('faq2', {
      url: '/faq_add',         
          templateUrl: 'templates/faq2.html',
          controller: 'faqCtrl'     
    })
          .state('faq3', {
      url: '/faq_withdraw',         
          templateUrl: 'templates/faq3.html',
          controller: 'faqCtrl'     
    })
          .state('faq4', {
      url: '/faq_others',         
          templateUrl: 'templates/faq4.html',
          controller: 'faqCtrl'     
    })  

    .state('privacy', {
      url: '/privacy',         
          templateUrl: 'templates/privacy.html',
          controller: 'privacyCtrl'     
    })  

    .state('invest', {
      url: '/invest',         
          templateUrl: 'templates/invest.html',
          controller: 'investCtrl'     
    })  

    .state('withdraw', {
      url: '/withdraw',         
          templateUrl: 'templates/withdraw.html',
          controller: 'withdrawCtrl'     
    }) 
    .state('tour', {
      url: '/tour',         
          templateUrl: 'templates/tour.html',
          controller: 'tourCtrl'     
    })  

    .state('feedback', {
      url: '/feedback',         
          templateUrl: 'templates/feedback.html',
          controller: 'feedbackCtrl'     
    })  
 
     
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page7');

});
