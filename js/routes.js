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
    })
    .state('selectLanguage', {
      url: '/selectLanguage',
	  templateUrl: 'templates/selectLanguage.html',
    })
     
     .state('sliders', {
		url: '/sliders',
		templateUrl: 'templates/slides.html',
		controller: ''
    })
         
     .state('pre_verification', {
		url: '/pre_verification',
		templateUrl: 'templates/pre_verification.html',
		controller: 'pre_verificationCtrl'
    })
        
         
     .state('invite', {
		url: '/invite',
		templateUrl: 'templates/invite.html'
    })     
     .state('contact', {
		url: '/contact',
		templateUrl: 'templates/contact.html',
		controller: 'inviteCtrl'
    })    
     .state('change_password', {
		url: '/change_pin',
		templateUrl: 'templates/change_password.html',
		controller: 'forgotPinCtrl'
    })   
     .state('forgot_pin', {
		url: '/forgot_pin',
		templateUrl: 'templates/forgot_password.html',
		controller: 'forgotPinCtrl'
    })
     .state('terms', {
		url: '/terms',
		templateUrl: 'templates/terms.html',
		controller: 'termsCtrl'
    })
     .state('invest_success', {
		url: '/investSuccess',
		templateUrl: 'templates/invest_success.html',
		controller: ''
    })
     .state('successPage', {
		url: '/success',
		templateUrl: 'templates/payment_success.html'
    })
                
    .state('signup', {
      url: '/page8',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
                
    .state('inviteContacts', {
      url: '/inviteContacts',
      templateUrl: 'templates/inviteContacts.html',
      controller: 'contactsCtrl'
    })     
    .state('referral', {
      url: '/referral',
      templateUrl: 'templates/referral.html',
      controller: 'referralCtrl'
    })

    .state('status', {
      url: '/status',
      templateUrl: 'templates/status.html',
    })
        
    .state('tabsController.summaryPage', {
      url: '/page15',
      views: {
        'tab7': {
          templateUrl: 'templates/summaryPage.html'
		  }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page14',
      abstract:true,
      templateUrl: 'templates/tabsController.html',
	  controller: 'withdrawCtrl'
    })
      
    
      
        
    .state('tabsController.growthRate', {
      url: '/page9',
      views: {
        'tab8': {
          templateUrl: 'templates/growthRate.html',
            controller:'updateTransactionCTRL'
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
        
      
    
             .state('signature', {
      url: '/signature',         
          templateUrl: 'templates/signature.html',
          controller: ''     
    })  
    
             .state('ipv', {
      url: '/ipv',         
          templateUrl: 'templates/ipv.html',
          controller: ''     
    })    
             .state('aboutUs', {
      url: '/aboutUs',         
          templateUrl: 'templates/aboutUs.html',
          controller: ''     
    })
             .state('selfie', {
      url: '/selfie',         
          templateUrl: 'templates/selfi.html',
          controller: ''     
    })
             .state('reference', {
      url: '/reference',         
          templateUrl: 'templates/reference.html',
          controller: ''     
    })
             .state('addressProofImageSingle', {
      url: '/addressProofImageSingle',         
          templateUrl: 'templates/addressProofImageSingle.html',
          controller: ''     
    })
             .state('addressProofImage', {
      url: '/addressProofImage',         
          templateUrl: 'templates/addressProofImage.html',
          controller: ''     
    })
             .state('imageSelection', {
      url: '/imageSelection',         
          templateUrl: 'templates/imageSelection.html',
          controller: ''     
    })
    
             .state('questions', {
      url: '/questions',         
          templateUrl: 'templates/questions.html',
          controller: ''     
    })
    

             .state('confirm', {
      url: '/confirm',         
          templateUrl: 'templates/confirm.html'
    })
	
             .state('inactiveClient', {
      url: '/inactiveClient',         
          templateUrl: 'templates/inactiveClient.html'
    })
	
             .state('verifySuccess', {
      url: '/verifySuccess',         
          templateUrl: 'templates/success.html'
    })
             .state('account', {
      url: '/account',         
          templateUrl: 'templates/account.html',
          controller: ''     
    })
        .state('bank', {
		url: '/bank',         
        templateUrl: 'templates/bank.html',
        controller: ''     
    }) 
        .state('panVerify', {
		url: '/panVerify',         
        templateUrl: 'templates/panVerify.html',
        controller: ''     
    }) 
        .state('reportgen', {
		url: '/reportgen',         
        templateUrl: 'templates/reportgen.html'     
    })    
        .state('panImage', {
		url: '/panImage',         
        templateUrl: 'templates/panImage.html',
        controller: ''     
    })    
             .state('mutualFund', {
      url: '/mutualFund',         
          templateUrl: 'templates/mutualFund.html',
          controller: ''     
    })    
             .state('aadhar', {
      url: '/aadhar',         
          templateUrl: 'templates/aadhar.html',
          controller: ''     
    })     

          .state('faq', {
      url: '/faq',         
          templateUrl: 'templates/faq.html',
          controller: ''     
    })
          .state('faq5', {
      url: '/faq_fundsMethods',         
          templateUrl: 'templates/faq5.html',
          controller: 'FundsMethodCtrl'     
    })
          .state('faq1', {
      url: '/faq_account',         
          templateUrl: 'templates/faq1.html',
          controller: 'AccountfaqCtrl'     
    })
          .state('faq2', {
      url: '/faq_add',         
          templateUrl: 'templates/faq2.html',
          controller: 'AddMoneyCtrl'     
    })
          .state('faq3', {
      url: '/faq_withdraw',         
          templateUrl: 'templates/faq3.html',
          controller: 'WithdrawMoneyCtrl'     
    })
          .state('faq4', {
      url: '/faq_others',         
          templateUrl: 'templates/faq4.html',
          controller: 'OthersCtrl'     
    })  


    .state('activeClientStatus', {
      url: '/activeClientStatus',         
          templateUrl: 'templates/activeClientStatus.html'

    })  
    .state('invest', {
      url: '/invest',         
          templateUrl: 'templates/invest.html'

    })  

    .state('withdraw', {
      url: '/withdraw',         
          templateUrl: 'templates/withdraw.html',
          controller: 'withdrawCtrl'     
    }) 
    .state('tour', {
      url: '/tour',         
          templateUrl: 'templates/tour.html'  
    })  
    .state('feedback', {
      url: '/feedback',         
          templateUrl: 'templates/feedback.html'   
    })  
 
   
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page7');

});
