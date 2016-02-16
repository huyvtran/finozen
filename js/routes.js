angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
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
	  controller: 'MyCtrl_swipe'
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
        
      
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
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

      .state('sidemenu', {
      url: '/sidemenu',         
          templateUrl: 'templates/sidemenu.html',
          controller: 'sidemenuCtrl'     
    })  
     
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page7');

});
