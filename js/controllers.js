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
.controller('AuthCtrl', function($scope, $state) {
  
  $scope.signIn = function(form) {
    if(form.$valid) {
      $state.go('tabsController.summaryPage');
    }
  }
  var mid="WealthWeb";

  $scope.url='http://205.147.99.55:8080/'+mid+'/ws/pymt/pymtView?cid=XamMicro&bucks=3.00';


})
.controller('AuthCtrl2', function($scope, $state) {
  
  $scope.signIn = function(form) {
    if(form.$valid) {
      $state.go('pre_verification');
    }
  };  

})

  .controller('inviteCtrl', function($scope) {

})
  .controller('successCtrl', function($scope) {
	  var transactionStatus=[];
	  transactionStatus[0]={
		  stats: "Transaction Successful",
		  message: "Thank You",
		  amount: "10000",
		  date: "23.02.2016",
		  id: "2252254",
		  iconClass: "ion-ios-checkmark-outline"
	  };
	  transactionStatus[1]={
		  stats: "Transaction Failed",
		  message: "Oops.....",
		  amount: "10000",
		  date: "23.02.2016",
		  id: "2252254",
		  iconClass: "ion-ios-close-outline"
	  }
$scope.transactionStatus=transactionStatus;
})
    
.controller('accountCtrl', function($scope) {

})
.controller('popupController', function($scope, $ionicPopup,$window) {
     // Triggered on a button click, or some other target
 $scope.showPopup = function() {

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     title: 'Please have a look at the FAQ before placing a call',
     buttons: [
       { text: 'Call',
          onTap:function(e){
         window.location.href="tel:080-41245883";
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



  

})

.controller('openwinController', function($scope) {


    
  
})

.controller('addUserController', function($scope,$http,accessUrlService) {

  $scope.addUserInfo = function () {
     accessUrlService.save({"login":"admin","password":"rupeelog","role":"Admin"},function(data){
      var userAuth=data;
      console.log(userAuth.jsessionId);

     }, function(error) {
      console.log(error + "Failed");
     }
     );
  };

/*$scope.getUser= function (){
   $scope.User=accessUrlService.query();
   console.log("data");
 };*/
 
})


.controller('AccountfaqCtrl', function($scope) {
  $scope.groups = [];
    $scope.groups["0"] = {name: "What is FinoZen?",items: ["FinoZen is a mobile app where you can watch your money grow, literally! It enables you to invest and withdraw in just a click while your money grows at an expected rate of 7.5 – 8.5% p.a."] };
    $scope.groups["1"] = {name: "How does FinoZen work?" , items: ["FinoZen is a channel to connect your bank account to a specific selected mutual fund where your money grows.  The money moves directly from your account to the Mutual Fund and you will have full visibility and control of your money at all times. You can choose to Add or withdraw money anytime, anywhere with no penalties applicable. "] };
    $scope.groups["2"] = {name: "Where does my money go?" , items: ["FinoZen channels your money to the selected liquid mutual fund which gives the best return at lowest risk. The investment is made in your name, and we will always be available just a call or message away. "] };
    $scope.groups["3"] = {name: "Who is FinoZen meant for?" , items: ["FinoZen is meant for anyone who has excess money parked in their bank account. If you wish to make your money work for you and earn you interest to the tune of 7.5-8.5% p.a. in just a click, then FinoZen is meant for you.  You should be an Indian National investing in individual capacity. FinoZen is not available for NRIs, companies, firms, trusts etc."] };
    $scope.groups["4"] = {name: "Why should I use Finozen over other options like savings accounts, fixed deposits?" , items: ["If your money is in Savings account, you get low returns at best quarterly.  Fixed Deposits  and other saving instruments will have higher returns but have a lock in period. With FinoZen, your returns are usually 7.5-8.5%, returns get credited in your account everyday, and you can add or withdraw any time!"] };
 
  
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
.controller('AddMoneyCtrl', function($scope) {
  $scope.groups = [];
    $scope.groups["0"] = {name: "I have signed up, what happens next?",items: ["Congratulations and welcome to Finozen! Here are the next steps:","Welcome call -> Visit -> Processing ->Done Watch your money grow!",
							"  1) Welcome Call: We will call you shortly and collect your personal details like address, email ID, PAN no. and fix an appointment to collect your documents. Our executive will answer all your queries and help you understand the exact document requirement. ",
							"  2) Visit: Our executive will visit you at the decided time and location to collect the required documents as discussed over the call.  ",
							"  3) Processing: It can take as little as 4 hours to a maximum of 3 days to process your documents and activate your account. Our executive will inform you about the exact time required during the visit.",
							"  4) Start Investing and watch your money grow!  "
							] };
    $scope.groups["1"] = {name: "Why are these documents required?",items: ["  Some of these requirements are specified by SEBI (Securities and Exchange Board of India). We submit these documents to the Mutual fund for account creation.", "  Others have been included by us in order to simplify the registration process for the majority of investors."] };

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

.controller('WithdrawCtrl', function($scope) {
  $scope.groups = [];
    $scope.groups["0"] = {name: "Where does my money go?",items: ["FinoZen channels your money to the selected liquid mutual fund which gives the best return at lowest risk. The investment is made in your name, and we will always be available just a call or message away. "] };
    $scope.groups["1"] = {name: "How soon can I start investing?",items: ["It can take as little as 4 hours to a maximum of 3 days to process your documents and activate your account. Our executive who visits you will inform you about the exact time required to activate it. We will notify you once your account is activated via a Push notification. Once activated, you can start investing immediately."] };
    $scope.groups["2"] = {name: "How often can I invest/Add money or withdraw?",items: ["You can invest/add money or withdraw as often as you want. There are no restrictions on the frequency of your transactions. Also, there are no penalties or charges applicable when you withdraw your money."] };
    $scope.groups["3"] = {name: "How soon will my investments reflect on FinoZen?",items: ["All investments made before 1pm Monday to Saturday will reflect on the next business day at 12 noon.","e.g. Investment made at 12:30 pm on Wednesday will reflect on Thursday at 12 noon.. ","All investments made after 1pm Monday to Saturday will reflect after 2 working days. ","e.g. Investment made at 1:30 pm on Wednesday will reflect on Friday at 12 noon."] };
    $scope.groups["4"] = {name: "Where does my money go once I withdraw?",items: ["Your money will be sent to the same bank account from which you have invested once you withdraw on FinoZen."] };
    $scope.groups["5"] = {name: "How soon can I access my withdrawn money?",items: ["All withdrawals made before 1pm Monday to Saturday will reflect in your bank account on the next business day. "] };
    $scope.groups["6"] = {name: "How much can I invest at a time? Is there a minimum or a maximum?",items: ["You can invest any amount from a minimum of INR 1,000 up to a maximum of INR 10,00,000."] };
    $scope.groups["7"] = {name: "How long do I need to stay invested? Is there a lock-in period?",items: ["There is no minimum period or lock-in. You have the option to withdraw your money anytime. Your money will grow from the very next day that you have invested, irrespective. "] };
    $scope.groups["8"] = {name: "Can I invest through cash/cheque?",items: ["No. You can invest only through app from the bank account that you have declared at the time of registration.  When you invest via the app, you will be automatically re-directed to the net-banking page of your chosen bank. "] };

  
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

.controller('OthersCtrl', function($scope) {
  $scope.groups = [];
    $scope.groups["0"] = {name: "Where is your office?",items: ["Our office is located at:","25, 18th Cross,","9th Main, Behind McDonald,","HSR Layout,Sector 7, ","Bengaluru, 560102 Karnataka","Our business hours are Monday to Friday 10 am to 7 pm."] };
    $scope.groups["1"] = {name: "How can I reach you in case of any questions?",items: ["You can call us Monday to Friday 10am to 7 pm by using the dialer icon on the top right corner on any page of the app. "] };

  
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
  $scope.balance="1000";
})
.controller('withdrawCtrl', function($scope) {
$scope.balance="1000";
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

.controller('showhistoryController', function($scope,$ionicHistory){
    /*console.log($ionicHistory.currentStateName()  + "vviewHistory");
    console.log($ionicHistory.backTitle() + "back");*/
    $ionicHistory.clearHistory();
})

.controller('navhistoryController', function($scope,$ionicHistory){
    /*console.log($ionicHistory.currentStateName()  + "vviewHistory");
    console.log($ionicHistory.backTitle() + "back");*/
    $ionicHistory.goBack(-2);
})

/*For social sharing*/
/*.controller('socialShareController', function($scope,$cordovaSocialSharing){
   $scope.share = function(){
   $scope.shareViaWhatsApp('Hi my money just grew by 2.8%. Try this awesome app','null','http://finotrust.com/');
   }
})*/


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