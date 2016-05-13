angular.module('app.subcontrollerOne', [])
    .controller('signupCtrl', function($scope,$ionicHistory,$sessionStorage) {
/*
	$scope.terms=function(){
	$ionicHistory.clearHistory();
	$ionicHistory.clearCache();
	console.log($sessionStorage.SessionPortfolio + "before clearing");
	sessionStorage.clear();
	delete $sessionStorage.SessionPortfolio;
	delete $sessionStorage.gainMonth;
	console.log($sessionStorage.SessionPortfolio + "after clearing");
	history.go(-(history.length - 1));
	console.log("cleared");
}*/
    })

//FAQ controllers START
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

    .controller('languageCtrl', function($scope,$translate,$state,$localStorage) {
		console.log($localStorage.language + " language selected");
		$translate.use($localStorage.language);
	})
    .controller('AccountfaqCtrl', function($scope) {
        $scope.groups = [];
        $scope.groups["0"] = {name: "What is FinoZen?",items: ["FinoZen is a mobile app where you can watch your money grow, literally! It enables you to invest and withdraw in just a click while your money grows at an expected rate of 7.5 – 8.5% p.a."] };
        $scope.groups["1"] = {name: "How does FinoZen work?" , items: ["FinoZen channels your money to the selected liquid mutual fund which gives the best return at lowest risk. You will have full visibility and control of your money at all times. You can choose to Add or withdraw money anytime, anywhere with no penalties applicable. "] };
        $scope.groups["2"] = {name: "Who is FinoZen meant for?" , items: ["FinoZen is meant for anyone who has excess money parked in their bank account. If you wish to make your money work for you and earn you interest to the tune of 7.5-8.5% p.a. in just a click, then FinoZen is meant for you.  You should be an Indian National investing in individual capacity.FinoZen is not available for NRIs, companies, firms, trusts etc."] };
        $scope.groups["3"] = {name: "Why should I use Finozen over other options like savings accounts, fixed deposits?" , items: ["If your money is in Savings account, you get low returns at best quarterly.  Fixed Deposits  and other saving instruments will have higher returns but have a lock in period. With FinoZen, your returns are usually 7.5-8.5%, returns get credited in your account everyday, and you can add or withdraw any time!"] };


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
        $scope.groups["0"] = {name: "I have signed up, what happens next?",items: ["Congratulations and welcome to Finozen! Here are the next steps:",
            "  1) Welcome Call: We will call you shortly (during office hours) and introduce FinoZen to you. Our executive will answer all your queries and will request you to proceed for Account Activation.",
            "  2) Account Activation: It’s a 6 step process which takes around 3 mins to complete. After you have submitted the necessary details, It will take us 5 mins. to activate your account (during office hours).  We will get in touch with you to inform you about the activation. ",
            "  3) Start Investing: Post activation of account, you can click on “Add Money” and start investing through netbanking.",
            "  4) Welcome to FinoZen family, now you can watch your money grow! "
        ] };
        $scope.groups["1"] = {name: "Why are these documents required?",items: ["  These requirements are specified by SEBI (Securities and Exchange Board of India) and other regulatore bodies. We submit these documents to the Mutual fund for account creation."] };

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
        $scope.groups["0"] = {name: "Where does my money go?",items: ["FinoZen channels your money to the selected liquid mutual fund which gives the best return at lowest risk. You will have full visibility and control of your money at all times. You can choose to Add or withdraw money anytime, anywhere with no penalties applicable. "] };
        $scope.groups["1"] = {name: "How soon can I start investing?",items: ["It will take us 5 mins to activate your account post you provide your documents to us. We will notify you once your account is activated. Once activated, you can start investing immediately."] };
        $scope.groups["2"] = {name: "How often can I invest/Add money or withdraw?",items: ["You can invest/add money or withdraw as often as you want. There are no restrictions on the frequency of your transactions. Also, there are no penalties or charges applicable when you withdraw your money."] };
        $scope.groups["3"] = {name: "How soon will my investments reflect on FinoZen?",items: ["All Investments will be processed on next working day and will reflect in your FinoZen account at 11:30 am on next day of processing.","Working days are Monday to Friday except Bank Holidays.", "For example: An investment done on Sunday, will be processed on Monday and will reflect in your FinoZen account on 11:30 am Tuesday."] };
        $scope.groups["4"] = {name: "Where does my money go once I withdraw?",items: ["Your money will be deposited back to the same bank account which you have registered with us at the time of account creation on FinoZen."] };
        $scope.groups["5"] = {name: "How soon can I access my withdrawn money?",items: ["Mon - Thur, before 2 p.m. : Next day 10 a.m.","Mon - Thur, after 2 p.m. : Day after next 10 a.m.","Fri before 2 p.m. : Monday 10 a.m.","Fri after 2 p.m, Sat and Sun. : Tuesday 10 a.m."] };
        $scope.groups["6"] = {name: "How much can I invest at a time? Is there a minimum or a maximum?",items: ["You can invest any amount from a minimum of INR 100."] };
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
        $scope.groups["0"] = {name: "Where is your office?",items: ["Our office is located at:","25, 18th Cross,","9th Main, Behind McDonald,","HSR Layout,Sector 7, ","Bengaluru, 560102 Karnataka","Our business hours are Monday to Friday 10 am to 8 pm."] };
        $scope.groups["1"] = {name: "How can I reach you in case of any questions?",items: ["You can call us Monday to Friday 10am to 8 pm by using the dialer icon on the top right corner on any page of the app.","You can also reach us via email at support@finozen.com. We will respond to your queries within 1 business day.","You can also send us your feedback by going to the “Contact Us” section on the left menu panel of the app."] };


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
//FAQ controllers END
//TAB's DATA controller
	.controller('withdrawCtrl', function($scope,$sessionStorage,$ionicLoading,getReportService,$ionicHistory,ionicToast,$ionicPlatform,$state) {

$scope.faq = function(){$state.go('faq')}
$scope.policy = function()
{
	window.open('http://finozen.com/policy.html','_self');
  //$ionicHistory.goBack(-1);
}
$scope.terms = function()
{
	window.open('http://finozen.com/t&c.html','_self');
  //$ionicHistory.goBack(-1);

}

  $scope.clientName= $sessionStorage.SessionClientName;
  $scope.clientMobile= $sessionStorage.SessionMobNo;
$scope.xirrRate= function(){

	if($sessionStorage.xirr == null){return 0;}
	else if($sessionStorage.xirr <= 0){return 0;}
	else if($sessionStorage.xirr >= 15){return 15;}
	else if($sessionStorage.xirr <= 7.5){return 7.5;}
	else{return $sessionStorage.xirr;}
}
  $scope.balance= function() {
    if ($sessionStorage.mktValue == null) {
      return 0;
    }
    else {
      return $sessionStorage.mktValue;
    }
  }
    $scope.investAmount= function(){
    if($sessionStorage.netInv == null){return 0;}

    else {return $sessionStorage.netInv;
    }
  }
/*  this is to be removed
$scope.growthRate= $sessionStorage.xirr;
$scope.growthRate= function(){
	console.log("growth");
	if($scope.growth != null)
	 {
		if($scope.growth <= 0){return 0;}
			if($scope.growth >= 10){return 10;}
			else if($scope.growth <= 7.5){return 7.5;}
			else{return $scope.growth;}
	}
	else{return 7.5;}
}
  */

        $scope.gainToday=function(){
            if($sessionStorage.gainToday == null){return 0;}
            else {return $sessionStorage.gainToday;
            }
        }
        $scope.netGain=function(){
            if($sessionStorage.gainTotal == null){return 0;}
            else {return $scope.balance()-$scope.investAmount();
            }
        }
        $scope.gainMonth=function(){
            if($sessionStorage.gainMonth == null){return 0;}
            else {return $sessionStorage.gainMonth;
            }
        }
        console.log('entered');
        $ionicLoading.show({
      template: 'Loading...'
    });

         var Report = getReportService.get();
         Report.$promise.then(function(data){
         if(data.responseCode=="Cali_SUC_1030"){
         $scope.products=data.jsonStr;
         }
         })
        $ionicLoading.hide();

    })

 // NAV Calculator controller
.controller('sampleCtrl', function ($scope,$state,mfOrderUrlService,$sessionStorage,dateService,$ionicPopup,$ionicLoading) {
  var finalComputedVal;
    $scope.schemeName=$sessionStorage.schemeName;
    if($scope.schemeName=="RELIANCE LIQUID FUND - TREASURY PLAN - GROWTH PLAN - GROWTH OPTION - G"){
		$scope.schemeLink="http://www.moneycontrol.com/mutual-funds/nav/reliance-liquid-fund-treasury-plan-ip/MRC046";
	}
  else{
      $scope.schemeLink="http://www.google.com";
    }
	// to be changed
	var dayNow = new Date().getDay();
	console.log(dayNow);
	if(dayNow >=1 && dayNow <5){$scope.nav=$sessionStorage.nav*(1+ 0.0002);}
	else if(dayNow ==5) {$scope.nav=$sessionStorage.nav*(Math.pow((1+ 0.0002),3));}
	else if(dayNow ==6) {$scope.nav=$sessionStorage.nav*(Math.pow((1+ 0.0002),2));}
	else if(dayNow ==0) {$scope.nav=$sessionStorage.nav;}

	console.log($scope.nav);
	// till here

    $scope.final=function(initial,nav,suggest){
		console.log($scope.nav + "nav");
    var theory=initial/nav ;
    var rounded= Math.round(theory * 1000)/1000;
    //loss=theory-rounded;
    var diff=rounded*nav-initial;
    if(initial>0){
    if(diff>0){
    finalComputedVal=initial;
    return suggest;
    }
    else{
    return $scope.test(initial,nav,suggest);
    }
    }
    else{return 0;}
	}
    $scope.test=function(initial,nav,suggest){
    suggest++;
    initial=initial+1;
            return $scope.final(initial,nav,suggest);
        }

	  $scope.Invest = function(form) {
            if(form.$valid && $scope.initial>=100) {
				if($sessionStorage.allTransactions > 0 && $sessionStorage.SessionFolioNums==0){
					$ionicPopup.alert({
					title: 'Transaction In-Progress',
					template: 'Your first transaction is in progress. For next transaction, we request you to wait till the first investment reflects in your FinoZen account.'
				  });
				  }
				else if($sessionStorage.nachStatus !='Y'){
				        $ionicLoading.show({templateUrl:"templates/loadingNormal.html"});
          console.log('its entering the nach mandate');
          $scope.sendMfOrder();
				}
              else{
          $ionicLoading.show({templateUrl:"templates/loadingNormal.html"});
          $scope.nach();
        }
            }
        }

        $scope.sendMfOrder=function() {
            var date=dateService.getDate();
            mfOrderUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode": $sessionStorage.amcCode,"rtaCode":$sessionStorage.rtaCode,"orderTxnDate": date,"amount": finalComputedVal,"folioNo":$sessionStorage.folioNums},function(data){
                if(data.responseCode=="Cali_SUC_1030"){
					$ionicLoading.hide();
                    window.open('http://205.147.99.55:8080/WealthWeb/ws/pymt/pymtView?mfOrderId='+data.id,'_self');
                }
				else{
					$ionicLoading.hide();
				}

            },function(error){
				$ionicLoading.hide();
				var log=$ionicPopup.alert({
					title: 'Sorry for the inconvenience',
					template: 'Please Login again'
				  });
              log.then(function(res) {
					$state.go("login");
				  });
				$scope.mess="Enter a value";
            });
        };

  //nach status
  $scope.nach=function() {
    var date=dateService.getDate();
    mfOrderUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode": $sessionStorage.amcCode,"rtaCode":$sessionStorage.rtaCode,"orderTxnDate": date,"amount": finalComputedVal,"folioNo":$sessionStorage.folioNums},function(data){
      if(data.responseCode=="Cali_SUC_1030"){
        $ionicLoading.hide();
       $state.go('tabsController.summaryPage');
      }
      else{
        $ionicLoading.hide();
      }

    },function(error){
      $ionicLoading.hide();
      var log=$ionicPopup.alert({
        title: 'Sorry for the inconvenience',
        template: 'Please Login again'
      });
      log.then(function(res) {
        $state.go("login");
      });
      $scope.mess="Enter a value";
    });
  };
        var mid=$sessionStorage.orderId;//dynamic id
    })
.controller('goOneStep', function($scope,$ionicHistory ){
	$scope.goOneStepback=function(){
		history.go(-1);
	}

})

  /*for testing only*/
.controller('openBrowser', function($scope,$cordovaInAppBrowser,$rootScope,$state) {
   var options = {
      location: 'no',
      clearcache: 'yes',
      toolbar: 'no'
    };


    $scope.openBrowser = function() {
console.log("enter");
   document.addEventListener('deviceready',function () {
    $cordovaInAppBrowser.open('http://ngcordova.com', '_system', options)
      .then(function(event) {
        // success
		console.log("success");
      })
      .catch(function(event) {
        // error
		console.log("error");
      });
    $cordovaInAppBrowser.close();

  }, false);
     $rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event){
console.log("success");
  });

   }



   $scope.closeBrowser= function() {
    //$cordovaInAppBrowser.close();
$state.go('addressProofImage');
   }



   $scope.closeBrowser2= function() {
    //$cordovaInAppBrowser.close();
$state.go('reference');
   }




    //
})

    .controller('panVerifyCtrl', function($scope,$state) {
		$scope.kycdone=function(){$state.go('panImage');}
		$scope.kycnotdone=function(){$state.go('aadhar');}
		$scope.otpdone=function(){$state.go('confirm');}
		$scope.otpnotdone=function(){
			$state.go('pre_verification');
			}
		$scope.withdrawSuccess = function() {console.log("here"); history.go(-2);}
    })

.controller('schemeText', function($scope,$sessionStorage) {
	if($sessionStorage.clientType=='GO'){
		$scope.schemeName="Reliance Liquid Fund Cash Plan - Growth";
		$scope.schemeBody="Reliance Liquid Fund ensure that your investments are very low risk, no-lock in on withdrawl and generate stable returns. This fund primarily invests in money market instruments of public sector banks like Axis Bank, Kotak Mahindra Bank and undertakings such as Steel Authority of India, Idea Cellular, Tata Capital making it ultra-safe (almost as safe as your savings bank deposits) to invest your money. ";
		$scope.returnsOneM="7.2%";
		$scope.returnsThreeM="7.6%";
		$scope.returnsOneY="7.4%";
		$scope.returnsThreeY="8.1%";
		$scope.returnsFiveY="8.5%";
		$scope.currentAUM=" Rs. 3,775 Crores";
		$scope.TaxBenifits=" Unlike FD, there is no TDS for investments in this fund. Also, for investments more than 3 years, tax payout becomes negligible as there is indexation benefits. However for investments less than 3 years, you will have to declare the returns from this investment at the time of tax filing and pay tax as per your salary bracket.";
		$scope.schemeLink="http://www.moneycontrol.com/mutual-funds/nav/reliance-liquid-fund-cash-plan/MRC014";
		$scope.schemeLinkText=" to read more about Reliance Liquid Fund Cash Plan – Growth on moneycontrol.";
	}
	else{
		$scope.schemeName="Reliance Liquid Fund Treasury Plan (IP) – G";
		$scope.schemeBody="Reliance Liquid Fund ensure that your investments are very low risk, no-lock in on withdrawl and generate stable returns. This fund primarily invests in money market instruments of public sector banks and undertakings such as HUDCO, L&T and Tata Steel  making it ultra-safe (almost as safe as your savings bank deposits) to invest your money.";
		$scope.returnsOneM="9.48%";
		$scope.returnsThreeM="8.2%";
		$scope.returnsOneY="8.2%";
		$scope.returnsThreeY="8.84%";
		$scope.returnsFiveY="9.06%";
		$scope.currentAUM=" Rs. 14,469 Crores";
		$scope.TaxBenifits=" Unlike FD, there is no TDS for investments in this fund. Also, for investments more than 3 years, tax payout becomes negligible as there is indexation benefits. However for investments less than 3 years, you will have to declare the returns from this investment at the time of tax filing and pay tax as per your salary bracket.";
		$scope.schemeLink="http://www.moneycontrol.com/mutual-funds/nav/reliance-liquid-fund-treasury-plan-ip/MRC046";
		$scope.schemeLinkText=" to read more about Reliance Liquid Fund Treasury Plan (IP) – G on moneycontrol.";
	}
})
.controller('menuOverlay', function($scope, $window, $ionicSideMenuDelegate) {

  $scope.width = function () {
    return $window.innerWidth;
  };

  $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleRight(true);
  };
})
