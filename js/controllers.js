angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('summaryPageCtrl', function($scope) {

})
      
.controller('growthRateCtrl', function($scope) {

})     
.controller('termsCtrl', function($scope) {

})
   
.controller('recentTransactionsCtrl', function($scope) {

})
  .controller('pre_verificationCtrl', function($scope) {

})
  .controller('inviteCtrl', function($scope) {

})
    
.controller('accountCtrl', function($scope) {

})
.controller('popupController', function($scope, $ionicPopup) {
     // Triggered on a button click, or some other target
 $scope.showPopup = function() {

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     title: 'Please have a look at the FAQ before placing a call',
     buttons: [
       { text: 'Call',
          onTap:function(e){
         window.location.href="tel:+91 9886098860";
       }

        },  

       {
         text: '<b>Faq</b>',
         type: 'button-positive',
         onTap: function(e) {
             //don't allow the user to close unless he enters wifi password
              window.location.href="#/faq";            
        
         }
       },
     ]
   });


  };

  //

})

.controller('faqCtrl', function($scope) {
  $scope.groups = [];
    $scope.groups["0"] = {name: "What is FinoZen?",items: ["FinoZen is a mobile app where you can watch your money grow, literally! It enables you to invest and withdraw in just a click while your money grows at an expected rate of 7.5 – 8.5% p.a."] };
    $scope.groups["1"] = {name: "How does FinoZen work?",items: ["FinoZen is a channel to connect your bank account to a specific selected mutual fund where your money grows.  The money moves directly from your account to the Mutual Fund and you will have full visibility and control of your money at all times. You can choose to Add or withdraw money anytime, anywhere with no penalties applicable."] };
    $scope.groups["2"] = {name: "Where does my money go?",items: ["Finozen channels your money to Reliance <>.  Reliance <> is a Mutual fund that invests your money in <Add details here> . The investment is made in your name, implying that you can always directly connect with the AMC should any such need arise. However, FinoZen provides you with an easy to use, simple platform to control and watch your money."] };
    $scope.groups["3"] = {name: "Who is FinoZen meant for?",items: ["FinoZen is meant for anyone who has excess money parked in their bank account. If you wish to make your money work for you and earn you interest to the tune of 7.5-8.5% p.a. in just a click, then FinoZen is meant for you.  You should be an Indian National investing in individual capacity. FinoZen is not available for companies, firms, trusts etc."] };
    $scope.groups["4"] = {name: "Why should I use FinoZen over other options like Banks, financial planners, other websites/apps ?",items: ["FinoZen is meant for anyone who has excess money parked in their bank account. We channel your money to a pre-selected mutual fund so you do not have to worry about comparison with other funds. We also ensure that you can add and withdraw at anytime as per your convenience to ensure that you do not have to commit long term. "] };
 
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
})
.controller('privacyCtrl', function($scope) {

})
.controller('sidemenuCtrl', function($scope) {

})
.controller('investCtrl', function($scope, $ionicPopover) {

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
  scope: $scope
  });
})
.controller('withdrawCtrl', function($scope) {

})
.controller('tourCtrl', function($scope) {

})
.controller('feedbackCtrl', function($scope) {

})

.controller('transListController',['$http', function($http){
//var lisst=[{amount:"Azurite1",transactionId:12545,date:"Mon, 25 Jan, 2016"},{amount:"Azurite2",transactionId:12545,date:"Mon, 26 Jan, 2017"},{amount:"Azurite3",transactionId:12545,date:"Mon, 27 Jan, 2018"}]
  //this.products=lisst;
var tList=this;
tList.products=[];

$http.get('data/transactiondata.json').success(function(data){
 tList.products=data;
});

}])

.controller('popOverController',function($scope,$ionicPopover ){

 var template =  '<ion-popover-view class="fit"><ion-content scroll="false"><div class="list"><a class="item" href="http://learn.ionicframework.com/" target="_blank">Learn Ionic</a> </div></ion-content>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });


})




.controller('slideCtrl', function($scope, $ionicSlideBoxDelegate) {
	    $scope.goForward = function () {
       $ionicSlideBoxDelegate.next();
    }

    $scope.goBack = function () {
       $ionicSlideBoxDelegate.previous();
    }
   $scope.nextSlide = function() {
      $ionicSlideBoxDelegate.next();
   }
});