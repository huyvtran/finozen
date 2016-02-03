angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('menu.login', {
      url: '/page7',
      views: {
        'side-menu21': {
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        }
      }
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
      templateUrl: 'templates/tabsController.html'
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
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu21/page7');

});