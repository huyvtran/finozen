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

    .controller('quotesCtrl', function($scope,$timeout,$interval) {
		$scope.headsUpData=[
		"\"An investment in knowledge pays the best interest.' - Benjamin Franklin",
		"\"The individual investor should act consistently as an investor and not as a speculator.\"",
		"\"Know what you own, and know why you own it.\" - Peter Lynch",
		"\"I would not pre-pay. I would invest instead and let the investments cover it.\"",
		"\"We will only do with your money what we would do with our own\"",
		"\"Do not save what is left after spending but spend what is left after saving\"",
		"\"You will either tell your money what to do or the lack of it will always manage you\"",
		"\"never depend on a single income. Make investments to create a second source\"",
		"\"Do not save what is left after spending but spend what is left after saving \""
		];
		$scope.textt =$scope.headsUpData[Math.floor(Math.random() * 9)];
		$scope.plzWait2=function(){
			$interval(function () {
				$scope.textt =$scope.headsUpData[Math.floor(Math.random() * 9)];
            }, 5000);
		}
	$scope.plzWait2();
		
	})
//FAQ controllers START
    .controller('FundsMethodCtrl', function($scope) {
        $scope.message = "In FinoZen, we have ensured that there is minimal risk to your investments with high returns and almost instantaneous liquidity. Your investments directly go to a pre-selected liquid mutual fund. FinoZen selection algorithm is based on following parameters –";
        $scope.groups = [];
        $scope.groups["0"] = {name: "A. Net Assets of Liquid Fund", items: ["We give high weightage to the Net Amount Invested in a fund, and only those funds with greater than Rs. 2,000 Cr. in net assets are considered. This ensures that there is no liquidity crunch."] };
        $scope.groups["1"] = {name: "B. Size of Asset Management Company" , items: ["Size of Asset Management Company is given due importance and only top 10 fund houses are selected by us."] };
        //$scope.groups["2"] = {name: "C. Expense Ratio" , items: ["The expense ratio of a stock or asset fund is the total percentage of fund assets used for administrative, management, advertising and all other expenses. We select only the funds with very low expense ratio to ensure higher returns."] };
        $scope.groups["2"] = {name: "C. Average Credit Quality" , items: ["To ensure safety of investments, we select only those funds which invest in short term AAA or AA rated securities, ensuring that funds are extremely low risk."] };
        $scope.groups["3"] = {name: "D. Technical Indicators" , items: ["Our algorithm takes into factors 5 important technical indicators – Standard Deviation, Sharpe Ratio, Alpha, Beta and R-Squared to benchmark liquid funds. This ensures high returns with lowest risk."] };


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
		//console.log($localStorage.language + " language selected");
		$scope.changeLan=function(){$translate.use("1");}
		
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
        $scope.groups["0"] = {name: "Where does my money go?",items: ["FinoZen channels your money to the selected liquid mutual fund. You will have full visibility and control of your money at all times. You can choose to Add or withdraw money anytime, anywhere with no penalties applicable. "] };
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
	.controller('calculatorCtrl', function($scope) {
		$scope.errorInputs="";
		$scope.calculateValues=function(){
			var count=0;
			var investAmount=$scope.investmentAmount;
			var returnsAmount=$scope.returnsAmount;
			var totalDays=$scope.totalDays;
			var constant=8.3/(365*100);
			if(investAmount==undefined){count++}
			if(returnsAmount==undefined){count++}
			if(totalDays==undefined){count++}
			if(count>=2){
				$scope.errorInputs="You should enter atleast two inputs";
			}
			else{
				$scope.errorInputs="";
				if(investAmount==undefined && returnsAmount!=undefined && totalDays!=undefined){
					investAmount= Math.ceil((returnsAmount)/(totalDays*constant));
					console.log("calculate investment amount");$scope.investmentAmount=investAmount;
				}
				else if(investAmount!=undefined && returnsAmount==undefined && totalDays!=undefined){
					returnsAmount=(Math.ceil(investAmount*constant*totalDays*100))/100;
					console.log("calculate returns amount");$scope.returnsAmount=returnsAmount;
				}
				else if(investAmount!=undefined && returnsAmount!=undefined && totalDays==undefined){
					totalDays=Math.ceil(returnsAmount/(investAmount*constant) );
					console.log("calculate no of days to invest");$scope.totalDays=totalDays;
				}
				
				console.log( $scope.investmentAmount + "  " + $scope.returnsAmount+ "  " + $scope.totalDays);
			}
		}

	})
	.controller('withdrawCtrl', function($scope,$sessionStorage,$ionicLoading,getReportService,$ionicHistory,ionicToast,$ionicPlatform,$state,$interval,$rootScope) {
	if($sessionStorage.clientType=="GO"){
		$scope.schemeNamep = "GOLD";
	}
	else if($sessionStorage.clientType=="PL") {
		$scope.schemeNamep = "PLATINUM";
  }
	
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
	else if($sessionStorage.xirr <= 6.5){return 6.5;}
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
  $interval(function () {
		$rootScope.$broadcast('flip',{});
		},3000);
    })

 // NAV Calculator controller
.controller('sampleCtrl', function ($scope,$state,mfOrderUrlService,$sessionStorage,dateService,$ionicPopup,$ionicLoading,$ionicPlatform) {
		 
  var finalComputedVal;
  	if($sessionStorage.clientType=="GO"){
		console.log($sessionStorage.clientType+ "  gold")
		$scope.schemePlan="RELIANCE LIQUID FUND-CASH PLAN-GROWTH";
		$scope.averageRate=7.5;
	}
	  else if($sessionStorage.clientType=="PL") {
	  console.log($sessionStorage.clientType+ "  platinum")
      $scope.schemePlan="RELIANCE LIQUID FUND - TREASURY PLAN - IP - Growth";
	  $scope.averageRate=8.3;
    }
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
		  console.log($sessionStorage.clientActive + " clientActive status in add money page");
            if(form.$valid && $scope.initial>=100) {
				if($sessionStorage.allTransactions > 0 && $sessionStorage.SessionFolioNums==0){
					$ionicPopup.alert({
					title: 'Transaction In-Progress',
					template: 'Your first transaction is in progress. For next transaction, we request you to wait till the first investment reflects in your FinoZen account.'
				  });
				  }
				  // comment this part for nachStatus
				  /*
				  $ionicLoading.show({templateUrl:"templates/loading.html"});
          console.log('its entering the nach mandate');
          $scope.sendMfOrder()
				  */
				  // till here
				  
				  //Nach status redirection
				  
				else if($sessionStorage.nachStatus !='A'){
				        $ionicLoading.show({templateUrl:"templates/loading.html"});
						  console.log('its entering the nach mandate');
						  if($sessionStorage.clientActive=="P" ){
							  if($scope.initial<=1000){$scope.sendMfOrder();}
							  else{
								  $ionicLoading.hide();
								  var log=$ionicPopup.alert({
										title: 'Acctivate account',
										template: 'You are not allowed to Invest more than Rs.1000 untill you submit all documents'
									  });
								    log.then(function(res) {
										state.go("invest");
									});
							  }
							}
							else{
							  $scope.sendMfOrder();
							}
						}
						else{
						  $ionicLoading.show({templateUrl:"templates/loading.html"});
						  $scope.nach();
						}
            }
        }

        $scope.sendMfOrder=function() {
            var date=dateService.getDate();
            mfOrderUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode": $sessionStorage.amcCode,"rtaCode":$sessionStorage.rtaCode,"orderTxnDate": date,"amount": finalComputedVal,"folioNo":$sessionStorage.folioNums},function(data){
                if(data.responseCode=="Cali_SUC_1030"){
					$ionicLoading.hide();
                    window.open('https://finotrust.com/WealthWeb/ws/pymt/pymtView?mfOrderId='+data.id,'_self');
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
					ionic.Platform.exitApp();
				  });
				$scope.mess="Enter a value";
            });
        };

  //nach status
  $scope.nach=function() {
    var date=dateService.getDate();
    mfOrderUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode": $sessionStorage.amcCode,"rtaCode":$sessionStorage.rtaCode,"orderTxnDate": date,"amount": finalComputedVal,"folioNo":$sessionStorage.folioNums,"paymentMode" : "a"},function(data){
      if(data.responseCode=="Cali_SUC_1030"){
        $ionicLoading.hide();
		
       $state.go('invest_success');
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
        ionic.Platform.exitApp();
      });
      $scope.mess="Enter a value";
    });
  };
        var mid=$sessionStorage.orderId;//dynamic id
    })
.controller('goOneStep', function($scope,$ionicHistory ,$sessionStorage){
	$scope.goOneStepback=function(){
		history.go(-1);
	}
	$scope.goOneStepbacktoAddress=function(){
		$sessionStorage.stepCount=$sessionStorage.stepCount-1;
		
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
.controller('verifySuccessCtrl', function($scope,$sessionStorage,$state,myService,proofRedirectFactory) {
	
	$scope.initial1= function(){
		$sessionStorage.clientResponse=Math.floor(Math.random() * 2)+2;
		$scope.initial();
	}
	$scope.notnowFunction= function(){
		//$sessionStorage.clientResponse=Math.floor(Math.random() * 3)+1;
		console.log($sessionStorage.clientResponse);
	if ($sessionStorage.clientResponse==1){
		$state.go("sliders");
	}	
	else if ($sessionStorage.clientResponse==2){
		$state.go("sliders");
	}
	else if ($sessionStorage.clientResponse==3){
		$sessionStorage.disbledSkip=true;
		var nextStepsUrl=proofRedirectFactory.name;
		var totalSteps=myService.myFunction(00001).length;
		if($sessionStorage.stepCount==undefined){$state.go(nextStepsUrl[1]);}
		else{$sessionStorage.stepCount=-1;  var nextSteps=myService.myFunction(00001);
		$sessionStorage.stepCount=$sessionStorage.stepCount+1;
		console.log($sessionStorage.stepCount + "step count");
		console.log(nextSteps + "next step");
		console.log(nextStepsUrl[1] + "next step url");
		console.log(nextStepsUrl[nextSteps[$sessionStorage.stepCount]] + "next state");
		if(totalSteps==$sessionStorage.stepCount){$state.go(nextStepsUrl[6]);}
	else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}}
	}
}
	$scope.investNowFunction= function(){
		//$sessionStorage.clientResponse=Math.floor(Math.random() * 3)+1;
		console.log($sessionStorage.clientResponse);
	if ($sessionStorage.clientResponse==1){
		$state.go("bank");
	}	
	else if ($sessionStorage.clientResponse==2){
		$state.go("sliders");
	}
	else if ($sessionStorage.clientResponse==3){
		$sessionStorage.disbledSkip=true;
		$state.go("sliders");
	}
}
	$scope.initial= function(){
		//$sessionStorage.clientResponse=Math.floor(Math.random() * 3)+1;
		console.log($sessionStorage.clientResponse);
	if ($sessionStorage.clientResponse==1){
		
		$scope.statusImage="img/step1.jpg";
		$scope.para1="In active add text here";
		$scope.clientType="In active";
		$scope.notNow ="Not Now";
		$scope.startInvesting="Activate Now";
	}	
	else if ($sessionStorage.clientResponse==2){
		$scope.statusImage="img/step3.jpg";
		$scope.para1="Partial active  add text here";
		$scope.clientType="active";
		$scope.startInvesting="Start Investing";
		$scope.notNow="Know more";
	}
	else if ($sessionStorage.clientResponse==3){
		$sessionStorage.disbledSkip=true;
		$scope.statusImage="img/step3.jpg";
		$scope.para1="Under process  add text here";
		$scope.clientType="Under process";
		$scope.notNow="Activate Now";
		$scope.startInvesting="Start Investing";
	}
}

$scope.initial();
		
})
.controller('menuOverlay', function($scope, $window, $ionicSideMenuDelegate) {

  $scope.width = function () {
    return $window.innerWidth;
  };

  $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleRight(true);
  };
})
