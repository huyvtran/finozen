angular.module('app.controllers', [])

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

.controller('AuthSignUpCtrl', function($scope, $state,signUpService,$sessionStorage) {

  $scope.signIn = function(form,searchText2,signupForm) {
	  console.log(angular.equals(signupForm.pin,searchText2)+ " searchText" );
	  console.log(searchText2+ " searchText2" );
      	if(angular.equals(signupForm.pin,searchText2))
      	{
        		if(form.$valid) {
              $sessionStorage.signUpData = (signupForm);
              $scope.addUserInfo();
        	}
      	}
      	else{
          $scope.error="Entered password didn't matched";

        }
        }

  $scope.addUserInfo=function(){
    signUpService.sendSignUp($sessionStorage.signUpData).then(function(data){
        if(data.responseCode!="Cali_SUC_1030"){
        $scope.serverError="Sign Up failed, please try again";
        }
        else {
          $state.go('pre_verification');
        }
    },function(error){
       $scope.serverError="Sign Up failed, please call us";
     
    });
  }
})

/*For Sign In*/

.controller('AuthSigninCtrl', function($scope,$state,$sessionStorage,$http,loginInfoService,getTransactionService) {
 //$state.go('tabsController.summaryPage');
  $scope.signIn = function(form,loginForm) {
    if(form.$valid) {
      $sessionStorage.loginData=loginForm;
       $scope.sendSignIn();

    }
  }
    $scope.forgotPin=function(signinformData){
console.log($scope.authorization.login);		
console.log(signinformData);		
	if(signinformData.$valid){
    console.log('phone number'+signinformData);

    $sessionStorage.forgotPinPhone = signinformData;


    $http.get('http://205.147.99.55:8080/WealthWeb/ws/clientFcps/forgotPassword?mobileNumber='+ph); //sending the otp to the phone number
    console.log('success');
	$state.go('forgot_pin');
	}
	else{
		$scope.message="Please enter your mobile number to reset PIN";
	}
	}

  $scope.sendSignIn=function() {
  loginInfoService.getJsonId($sessionStorage.loginData).then(function(data){

      if(data.responseCode!="Cali_SUC_1030"){
        $scope.serverError="Entered Credentials did not validate";
        }
        else {
          $sessionStorage.SessionIdstorage = data.msg;
          var datajson=JSON.parse(data.jsonStr);
          $sessionStorage.SessionPortfolio =datajson[0].pfolioCode;
          $sessionStorage.SessionStatus =datajson[0].activeStatus;
          $sessionStorage.SessionClientName =datajson[0].clientName;
          $sessionStorage.SessionClientCode =datajson[0].clientCode;
          $sessionStorage.SessionMobNo =datajson[0].mobileNo;
          //console.log( $sessionStorage.SessionStatus,$sessionStorage.SessionClientCode,$sessionStorage.SessionMobNo,$sessionStorage.SessionClientName);
         $state.go('tabsController.summaryPage');
       }
        },function(error){
          
          $scope.serverError="Entered Credentials did not validate";
        });
  }

})

.controller('transactAccessCtrl', function($scope,$sessionStorage){

  if($sessionStorage.SessionStatus!="A") {
    $scope.withdrawUrl="#/status";
    $scope.investUrl="#/status";
  }
  else {
     $scope.withdrawUrl="#/withdraw";
      $scope.investUrl="#/invest";
  }
  
})


.controller('forgotPinCtrl', function($scope,loginInfoService,$sessionStorage) {
  $scope.resetPin=function(change){
	$scope.forget5 = JSON.parse(forgotPin2(change));
	$scope.forget5.clientCode="CRN23878";
	$scope.forgotPinUrl='http://205.147.99.55:8080/'+ $scope.forget5.push +'/ws/pymt/pymtView?cid=Microsoft&bucks=2.00';

loginInfoService.getJsonId().then(function(data){
    $sessionStorage.Jsonstorage = data.jsessionId;
    console.log($sessionStorage.Jsonstorage + "Session");
  });


		console.log(JSON.stringify($scope.forget5)   + "forget5");
    console.log($scope.forgotPinUrl + "url");
}
var  forgotPin2 = function(change2){
	return JSON.stringify(change2)
}
})


/*
  .controller('forgotPinCtrl', function($scope,loginInfoService,$sessionStorage) {

	$scope.forgotPin=function(forgotPinForm){
		console.log(" inside dunction" );
		$sessionStorage.forgotPinData=forgotPinForm;
		loginInfoService.getJsonId().then(function(data){
			$sessionStorage.Jsonstorage = data.jsessionId;
			//console.log($sessionStorage.Jsonstorage + "Session");
		  }
		console.log($sessionStorage.forgotPinData + " forgotPinForm" );
		console.log($sessionStorage.Jsonstorage + " before function" );
		}
		// nnjn



		  loginInfoService.getJsonId().then(function(data){
    $sessionStorage.Jsonstorage = data.jsessionId;
    console.log($sessionStorage.Jsonstorage + "Session");
  },function(error){
    console.log(error + " Error" );
  });

})*/
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
/**/
.controller('InvesturlCtrl', function($scope) {
var mid="87";
$scope.investUrl='http://205.147.99.55:8080/WealthWeb/ws/pymt/pymtView?mfOrderId='+mid;
})


.controller('FundsMethodCtrl', function($scope) {
  $scope.message = "In FinoZen, we have ensured that there is minimal risk to your investments with high returns and instantaneous liquidity. Your investments directly go to a pre-selected liquid mutual fund. We rank all the liquid fund internally and select the highest ranking liquid fund for you. FinoZen ranking algorithm is based on following parameters –";
  $scope.groups = [];
    $scope.groups["0"] = {name: "A. Net Assets of Liquid Fund", items: ["We give high weightage to the Net Amount Invested in a fund, and only those funds with greater than Rs. 5,000 Cr. in net assets are considered. This ensures that there is no liquidity crunch."] };
    $scope.groups["1"] = {name: "B. Size of Asset Management Company" , items: ["Size of Asset Management Company is given due importance and only top 10 fund houses are selected by us."] };
    $scope.groups["2"] = {name: "C. Expense Ratio" , items: ["The expense ratio of a stock or asset fund is the total percentage of fund assets used for administrative, management, advertising and all other expenses. We select only the funds with very low expense ratio to ensure higher returns."] };
    $scope.groups["3"] = {name: "D. Average Credit Quality" , items: ["To ensure safety of investments, we select only those funds which invest in short term AAA rated securities, ensuring that funds are extremely low risk."] };
    $scope.groups["4"] = {name: "E. Technical Indicators" , items: ["Our algorithm takes into factors 5 important technical indicators – Standard Deviation, Sharpe Ratio, Alpha, Beta and R-Squared to benchmark liquid funds. This ensures highest returns with lowest risk."] };


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

.controller('WithdrawMoneyCtrl', function($scope) {
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
    return $scope.shownGroFup === group;
  };

})

.controller('privacyCtrl', function($scope) {

})
.controller('sidemenuCtrl', function($scope) {

})

.controller('withdrawCtrl', function($scope,$sessionStorage) {
	$scope.clientName= $sessionStorage.SessionClientName;
	$scope.clientMobile= $sessionStorage.SessionMobNo;

$scope.balance="1100";
$scope.investAmount="1000";
$scope.growthRate="8.3";
$scope.netGainToday="2";
$scope.netGain="100";
})
.controller('tourCtrl', function($scope) {

})
.controller('feedbackCtrl', function($scope) {

})

.controller('transListController',function($scope,$http,$sessionStorage,$filter) {
    var date = new Date();
    date = $filter('date')(date,'dd/MM/yyyy');

 $http.get('http://205.147.99.55:8080/WealthWeb/ws/clientRepos/getPerfomRepo?pfolioCode='+$sessionStorage.SessionPortfolio+'&endDate='+date+'&noOfDays=40').success(function(data){
  //console.log(data);
 });

/*var tList=this;
tList.products=[];

$http.get('data/transactiondata.json').success(function(data){
 tList.products=data;
});*/

})

.controller('popOverController',function($scope,$ionicPopover ){

 var template =  '<ion-popover-view class="fit"><ion-content scroll="false"><div class="list"><a class="item pop_up" href="http://learn.ionicframework.com/" target="_blank">Actual annual growth rate till date of your money.</a> </div></ion-content>';

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
})


.controller('sampleCtrl', function ($scope,$state,mfOrderUrlService,$sessionStorage,dateService) {
	var finalComputedVal;
    $scope.nav=3656.5447;
    $scope.final=function(initial,nav,suggest){
    var theory=initial/nav ;
    var rounded= Math.round(theory * 1000)/1000;
    //loss=theory-rounded;
    var nav1=rounded*nav;
    var diff=nav1-initial;
    if(initial>0){
    if(diff>0){
    finalComputedVal=initial;
    return suggest;
    }
    else{
    return $scope.test(initial,nav,suggest);
    }
    }
    else{return 0;}}
    $scope.test=function(initial,nav,suggest){
    suggest++;
    initial=initial+suggest;

    return $scope.final(initial,nav,suggest);
    }

    $scope.Invest = function(form) {
        if(form.$valid) {
          //$state.go('successPage');
          $scope.sendMfOrder();
        }
      }

  $scope.sendMfOrder=function() {

    var date=dateService.getDate();
    //var orderData=JSON.parse("portfolioCode": $sessionStorage.SessionPortfolio,"amcCode": "Axis Mutual Fund","rtaCode":"128CFGP","orderTxnDate": date,"amount": finalComputedVal);
    mfOrderUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode": "Axis Mutual Fund","rtaCode":"128CFGP","orderTxnDate": date,"amount": finalComputedVal},function(data){
      if(data.responseCode=="Cali_SUC_1030"){
        window.open('http://205.147.99.55:8080/WealthWeb/ws/pymt/pymtView?mfOrderId='+data.id,'_self');
      }

    },function(error){
      console.log("Error");
    });
  };

    var mid=$sessionStorage.orderId;//dynamic id


})

.controller('AuthWithdrawlCtrl', function($scope, $state,mfSellUrlService,dateService,$sessionStorage) {

  $scope.Withdrawl = function(form) {
  
    var date=dateService.getDate();
    if(form.$valid) {
     //$state.go('successPage');
 
     if($scope.checked_withdraw == true){
      
        mfSellUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode": "KMMF","rtaCode":"K745","orderTxnDate": date,"allUnits":"Y","folioNo":"2023421/94"},function(data){
          if(data.responseCode!="Cali_SUC_1030") {
            $scope.withdraw_error="Error committing the transaction, please try again";
          }
        },function(error){
          $scope.withdraw_error="Error committing the transaction, please try again"
        });
     }
     else{
      
     mfSellUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode": "KMMF","rtaCode":"K745","orderTxnDate": date,"quantity":$scope.amount,"allUnits":"N","folioNo":"2023421/94"},function(data){
          if(data.responseCode!="Cali_SUC_1030") {
             $scope.withdraw_error="Error committing the transaction, please try again";
          }
        },function(error){
           $scope.withdraw_error="Error committing the transaction, please try again";
        });

     }

    }
   
  };

  $scope.amountClear= function() {
    $scope.amount='';
  }

})


