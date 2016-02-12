angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('summaryPageCtrl', function($scope) {

})
      
.controller('growthRateCtrl', function($scope) {

})
   
.controller('recentTransactionsCtrl', function($scope) {

})
  .controller('pre_verificationCtrl', function($scope) {

})
  .controller('post_verificationCtrl', function($scope) {

})
    
.controller('accountCtrl', function($scope) {

})
.controller('faqCtrl', function($scope) {
  $scope.groups = [];
    $scope.groups["0"] = {name: "What is FinoZen?",items: ["It's simple. You can invest through your online banking in a one-step process."] };
    $scope.groups["1"] = {name: "How do I Invest in FinoZen?",items: ["It's simple. You can invest through your online banking in a one-step process."] };
    $scope.groups["2"] = {name: "How much can i Invest?",items: ["It's simple. You can invest through your online banking in a one-step process."] };
    $scope.groups["3"] = {name: "Why should i trust you?",items: ["It's simple. You can invest through your online banking in a one-step process."] };
    $scope.groups["4"] = {name: "At what rate do my money grow?",items: [""] };
    $scope.groups["5"] = {name: "Is it dependent on market fluctuations?",items: [""] };
    $scope.groups["6"] = {name: "Will I loose my money it market goes down?",items: [""] };
    $scope.groups["7"] = {name: "What is the withdraw limit?",items: [""] };
  
  
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

.controller('transListController',['$http', function($http){
//var lisst=[{amount:"Azurite1",transactionId:12545,date:"Mon, 25 Jan, 2016"},{amount:"Azurite2",transactionId:12545,date:"Mon, 26 Jan, 2017"},{amount:"Azurite3",transactionId:12545,date:"Mon, 27 Jan, 2018"}]
  //this.products=lisst;
var tList=this;
tList.products=[];

$http.get('data/transactiondata.json').success(function(data){
 tList.products=data;
});

}])



.controller('MyCtrl_swipe', function ($scope, $ionicTabsDelegate) {

    $scope.goForward = function () {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1) {
            $ionicTabsDelegate.select(selected + 1);
			 $ionicTabsDelegate.$getByHandle('mainScroll').scrollTop();
        }
    }

    $scope.goBack = function () {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1 && selected != 0) {
            $ionicTabsDelegate.select(selected - 1);
			 $ionicTabsDelegate.$getByHandle('mainScroll').scrollTop();
        }
    }
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
