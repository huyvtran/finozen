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
		"\"Never depend on a single income. Make investments to create a second source\"",
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
        $scope.message = "In FinoZen, we have ensured that there is minimal risk to your investments with high returns and almost instantaneous liquidity. Your Investments directly go to a pre-selected liquid/ultra-short term debt fund. FinoZen selection algorithm is based on following parameters –";
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


$scope.policy = function()
{
	//window.open('http://finozen.com/policy.html','_self');
	var rel=cordova.InAppBrowser.open('https://finotrust.com/policy.html','_blank', 'location=no');
  rel.addEventListener('loadstart', function(event) {
					navigator.notification.activityStart("Please Wait", "Its loading.....");
				});
				rel.addEventListener('loadstop', function() {
				navigator.notification.activityStop();
				});
  //$ionicHistory.goBack(-1);
}
$scope.terms = function()
{
	//window.open('http://finozen.com/t&c.html','_self');
	var tc=cordova.InAppBrowser.open('https://finotrust.com/terms.html','_blank', 'location=no');
  //$ionicHistory.goBack(-1);
	tc.addEventListener('loadstart', function(event) {
					navigator.notification.activityStart("Please Wait", "Its loading.....");
				});
				tc.addEventListener('loadstop', function() {
				navigator.notification.activityStop();
				});
}

    })

    .controller('languageCtrl', function($scope,$translate,$state,$localStorage) {
		//console.log($localStorage.language + " language selected");
		$scope.changeLan=function(){$translate.use("1");}

	})
    .controller('AccountfaqCtrl', function($scope) {
        $scope.groups = [];
        $scope.groups["0"] = {name: "What is FinoZen?",items: ["FinoZen is a mobile app where you can watch your money grow, literally! It enables you to invest and withdraw in just a click while your money grows at an expected rate of 7.0 – 8.5% p.a."] };
        $scope.groups["1"] = {name: "How does FinoZen work?" , items: ["FinoZen channels your money to the selected liquid/ultra-short term debt mutual fund which gives the best return at lowest risk. You will have full visibility and control of your money at all times. You can choose to Add or withdraw money anytime, anywhere with no penalties applicable."] };
        $scope.groups["2"] = {name: "Who is FinoZen meant for?" , items: ["FinoZen is meant for anyone who has excess money parked in their bank account. If you wish to make your money work for you and earn you interest to the tune of 7.0-8.5% p.a. in just a click, then FinoZen is meant for you.  You should be an Indian National, NRI or an Indian Company investing in personal capacity. "] };
        $scope.groups["4"] = {name: "Why should I use Finozen over other options like savings accounts, fixed deposits?" , items: ["If your money is in Savings account, you get low returns at best quarterly.  Fixed Deposits and other saving instruments will have higher returns but have a lock in period. With FinoZen, your returns are usually 7.0-8.5%, returns get credited in your account everyday, and you can add or withdraw any time!"] };
        $scope.groups["3"] = {name: "How does FinoZen make money?",items: ["FinoZen earns 0.05% - 0.25% per annum for investments made through its app i.e. if you invest Rs. 10,000 through FinoZen and keep it for a year, FinoZen gets anywhere between Rs. 5 to Rs. 25. This commission is paid to FinoZen by the Mutual Fund company."] };


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
            "  1) Account Activation: Please enter your PAN No. and Bank Account No. to instantly activate your account. ",
            "  2) Account Activation: Additional Documents (Optional): Depending on your KYC Status we will request you for additional documents. If you are already KYC Verified, we don’t need any further information from you.",
            "  3) Start Investing: Post activation of account, you can click on “Add Money” and start investing ",
            "  4) Welcome to FinoZen family, now you can watch your money grow!"
        ] };
        $scope.groups["1"] = {name: "Why are these documents required?",items: [" These requirements are specified by SEBI (Securities and Exchange Board of India) and other regulatory bodies. We submit these documents to the Mutual fund for account creation."] };

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
        $scope.groups["0"] = {name: "Where does my money go?",items: ["FinoZen channels your money to the selected liquid/ultra-short term debt mutual fund which gives the best return at lowest risk. You will have full visibility and control of your money at all times. You can choose to Add or withdraw money anytime, anywhere with no penalties applicable.  "] };
        $scope.groups["1"] = {name: "How soon can I start investing?",items: ["Please enter your PAN No. and Bank Account No. to instantly activate your account, post which you can start investing."] };
        $scope.groups["2"] = {name: "How often can I invest/Add money or withdraw?",items: ["You can invest/add money or withdraw as often as you want. There are no restrictions on the frequency of your transactions. Also, there are no penalties or charges applicable when you withdraw your money."] };
        $scope.groups["3"] = {name: "How soon will my investments reflect on FinoZen?",items: ["All Investments will be processed on next working day and will reflect in your FinoZen account at 11:30 am on next day of processing.","Working days are Monday to Friday except Bank Holidays.", "For ex: An investment done on Sunday, will be processed on Monday and will reflect in your FinoZen account on 11:30 am Tuesday."] };
        $scope.groups["4"] = {name: "Where does my money go once I withdraw?",items: ["Your money will be deposited back to the bank account you registered with us at the time of your account opening."] };
        $scope.groups["5"] = {name: "How soon can I access my withdrawn money?",items: ["If you opt for Instant Withdrawal, you can withdraw your investments in less than 30 mins. For normal withdrawal, schedule of deposit is mentioned on Withdraw page"] }; //add a table
        $scope.groups["6"] = {name: "How much can I invest at a time? Is there a minimum or a maximum?",items: ["You can invest any amount from a minimum of INR 500."] };
        $scope.groups["7"] = {name: "How long do I need to stay invested? Is there a lock-in period?",items: ["There is no minimum period or lock-in. You have the option to withdraw your money anytime. "] };
        $scope.groups["8"] = {name: "Can I invest through cash/cheque?",items: ["No. You can invest only through app or FinoZen website through Netbanking or Debit Card.  "] };


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
        $scope.groups["1"] = {name: "How can I reach you in case of any questions?",items: ["You can call us Monday to Friday 10am to 8 pm by using the dialer icon on the top right corner on any page of the app. ","You can also reach us via email at support@finozen.com. We will respond to your queries within 1 business days. ","You can also send us your feedback by going to the “Contact Us” section on the left menu panel of the app."] };


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
	.controller('calculatorCtrl', function($scope,$timeout,$sessionStorage) {
		$scope.returnsAmount=0;
		$scope.errorInputs="";
		$scope.clearValues=function(){
			$scope.investmentAmount='';
			$scope.returnsAmount='';
			$scope.totalDays='';
		}
		$scope.calculateValues=function(){
			var count=0;
			var investAmount=$scope.investmentAmount;
			var returnsAmount=$scope.returnsAmount;
			var totalDays=$scope.totalDays;
			console.log(returnsAmount , investAmount);
			
  	if($sessionStorage.clientType=="GO"){
		$scope.averageRate=7.5;
	}
	  else if($sessionStorage.clientType=="PL") {
	  $scope.averageRate=8.3;
    }
			var constant=$scope.averageRate/(365*100);
			if(investAmount==undefined){count++}
			if(totalDays==undefined){count++}
			if(count>=2){
				$scope.errorInputs="You should enter atleast two inputs";
					$timeout(function(){
						$scope.errorInputs="";
					},5000)
			}
			else{
				$scope.errorInputs="";

					returnsAmount=(Math.ceil(investAmount*constant*totalDays*100))/100;
					console.log("calculate returns amount");$scope.returnsAmount=returnsAmount;
				console.log( $scope.investmentAmount + "  " + $scope.returnsAmount+ "  " + $scope.totalDays);
			}
		}

	})
	.controller('withdrawCtrl', function($scope,$sessionStorage,$ionicLoading,getReportService,$ionicHistory,ionicToast,$ionicPlatform,$state,$interval,$rootScope,$timeout) {
	if($sessionStorage.clientType=="GO"){
		$scope.schemeNamep = "GOLD";
	}
	else if($sessionStorage.clientType=="PL") {
		$scope.schemeNamep = "PLATINUM";
  }

$scope.faq = function(){$state.go('faq')}
$scope.policy = function()
{
	//window.open('http://finozen.com/policy.html','_self');
	var ref = cordova.InAppBrowser.open('https://finotrust.com/policy.html','_blank');
	
  //$ionicHistory.goBack(-1);
}
$scope.terms = function()
{
	//window.open('http://finozen.com/t&c.html','_self');
	var ref = cordova.InAppBrowser.open('https://finotrust.com/terms.html','_blank');
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
			$timeout(function(){
				$rootScope.$broadcast('flip',{});
			},4000)
			
		},5000);
    })

 // NAV Calculator controller
.controller('sampleCtrl', function ($scope,$state,mfOrderUrlService,$sessionStorage,dateService,$ionicPopup,$ionicLoading,$ionicPlatform,$timeout,relianceInstantAmountAPI) {

  var finalComputedVal;
  	if($sessionStorage.clientType=="GO"){
		console.log($sessionStorage.clientType+ "  gold")
		$scope.schemePlan="RELIANCE LIQUID FUND - TREASURY PLAN - IP - Growth";
		$scope.averageRate=7.5;
		$scope.minInv=500;
	}
	  else if($sessionStorage.clientType=="PL") {
		console.log($sessionStorage.clientType+ "  platinum")
		$scope.schemePlan="Reliance Money Manager Fund – Growth Plan"; //money managaer needs to come here
		$scope.averageRate=8.3;
		$scope.minInv=500;
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
						  if($sessionStorage.SessionStatus=="P" ||  $sessionStorage.SessionStatus=="U"){
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
					if(data.jsonStr==null){
						  var ref = cordova.InAppBrowser.open('https://finotrust.com/WealthWeb/ws/pymt/pymtView?mfOrderId='+data.id,'_blank', 'location=no');
						  ref.addEventListener('loadstart', function(event) {
					navigator.notification.activityStart("Please Wait", "Redirecting to a secure payment gateway");
				});
						    ref.addEventListener('loadstop', function() {
								navigator.notification.activityStop();
							  });
							ref.addEventListener('loadstop', function(event) { if( event.url.match('pymt/bdesk') ){
								$timeout(function () {
									ref.close();
								},20000);
							;} });
					$timeout(function () {
							$state.go('tabsController.recentTransactions');
						},1000);
						
					}
					else{
						console.log(data.jsonStr.ihno);
						var rel= cordova.InAppBrowser.open('https://investeasy.reliancemutual.com/online/CampaingLink/InvestorCampaign?IHNO='+data.jsonStr.ihno,'_blank','location=no');
							  rel.addEventListener('loadstart', function(event) {
					navigator.notification.activityStart("Please Wait", "Redirecting to a secure payment gateway");
				});
						rel.addEventListener('loadstop', function() {
							navigator.notification.activityStop();
						  });
						rel.addEventListener('loadstop', function(event) { if( event.url.match('https://investeasy.reliancemutual.com/online/Payments/PaymentConfirmation_DIT.aspx') ){
							rel.executeScript({ file: "https://finotrust.com/inject/counter.js" });
							rel.insertCSS({file:"https://finotrust.com/inject/inject.css"});
							$timeout(function () {
								rel.close();
							},20000);
					;} });
					$timeout(function () {
							$state.go('tabsController.recentTransactions');
						},1000);
						
						
					}
                  //clevertap charging notification
                  clevertap.event.push("Charged", {
                    "Amount": finalComputedVal, //amount entered
                    "Fund Name": $sessionStorage.rtaCode, //reliance code
                    "Charged ID":data.id ,  // important to avoid duplicate transactions due to network failure

                  });
                    

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
.controller('statusPageCtrl', function($scope ,$sessionStorage,$state,proofRedirectFactory,myService){




	if($sessionStorage.docStatus=='11111'){
		$scope.para1="We have received your details and they are being verified. We will update you within 12 hours on status of your account activation.";
		$scope.para2="However, you can start investing right away. Happy Investing!";
		$scope.docstatus=true;
		$scope.notNow="Start Investing";
	}
	else{
		$scope.para1="Congratulations you can start investing. However, we will need additional details to process your investments, Please click on 'Activate Now' to provide these details.";
		$scope.para2="We will update you once your account is ready for transactions. Happy Investing!";
		$scope.docstatus=false;
		$scope.notNow="Not Now";
	}
	if($sessionStorage.SessionStatus=='I'){
		$scope.investNowFunction= function(){$state.go('invest');}
		$scope.withdrawNowFunction= function(){$state.go('withdraw');}
		$scope.notnowFunction= function(){
			var nextStepsUrl=proofRedirectFactory.name;
			var totalSteps=myService.myFunction($sessionStorage.docStatus).length;
	//		var nextSteps=myService.myFunction($sessionStorage.docStatus);
			$sessionStorage.stepCount=0;
			$state.go(nextStepsUrl[$scope.nextSteps[$sessionStorage.stepCount]]);
		}
		$scope.docsToSubmit=['Photo of your PAN card ', 'Your selfie with PAN Card', 'Photo of your Address Proof Front', 'Photo of your Address Proof back', 'Your Signature'];
		$scope.nextSteps=myService.myFunction($sessionStorage.docStatus);
		console.log($scope.nextSteps);
	}
	else{
		$scope.investNowFunction= function(){$state.go('invest');}
		$scope.withdrawNowFunction= function(){$state.go('withdraw');}
		$scope.notnowFunction= function(){
			var nextStepsUrl=proofRedirectFactory.name;
			var totalSteps=myService.myFunction($sessionStorage.docStatus).length;
	//		var nextSteps=myService.myFunction($sessionStorage.docStatus);
			$sessionStorage.stepCount=0;
			$state.go(nextStepsUrl[$scope.nextSteps[$sessionStorage.stepCount]]);
		}
		$scope.docsToSubmit=['Photo of your PAN card ', 'Your selfie with PAN Card', 'Photo of your Address Proof Front', 'Photo of your Address Proof Back', 'Your Signature'];
		$scope.nextSteps=myService.myFunction($sessionStorage.docStatus);
		console.log($scope.nextSteps);
	}
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

    .controller('panVerifyCtrl', function($scope,$state) {
		$scope.kycdone=function(){$state.go('panImage');}
		$scope.kycnotdone=function(){$state.go('aadhar');}
		$scope.otpdone=function(){$state.go('confirm');}
		$scope.otpnotdone=function(){
			$state.go('pre_verification');
			}
		$scope.withdrawSuccess = function() {console.log("here"); $state.go('tabsController.summaryPage');}
    })

.controller('schemeText', function($scope,$sessionStorage) {
	/*{
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
	}*/
	if($sessionStorage.clientType=='GO'){
		$scope.schemeName="Reliance Liquid Fund Treasury Plan (IP) – G";
		$scope.schemeBody="Reliance Liquid Fund ensure that your investments are very low risk, no-lock in on withdrawl and generate stable returns. This fund primarily invests in money market instruments of public sector banks and undertakings such as HUDCO, L&T and Tata Steel  making it ultra-safe (almost as safe as your savings bank deposits) to invest your money.";
		$scope.returnsOneM="7.1%";
		$scope.returnsThreeM="7.1%";
		$scope.returnsSixM="7.46%";
		$scope.returnsNineM="7.65%";
		$scope.returnsOneY="7.84%";
		$scope.returnsThreeY="8.56%";
		$scope.currentAUM=" INR 20,722 Crores";
		$scope.TaxBenifits=" Unlike FD, there is no TDS for investments in this fund. Also, for investments more than 3 years, tax payout becomes negligible as there is indexation benefits. However for investments less than 3 years, you will have to declare the returns from this investment at the time of tax filing and pay tax as per your salary bracket.";
		$scope.schemeLink="https://www.valueresearchonline.com/funds/newsnapshot.asp?schemecode=519";
		$scope.schemeLinkText=" to read more about Reliance Liquid Fund Treasury Plan (IP) – G on moneycontrol.";
		$scope.starText="Sep 2016";
	}
	else{
		$scope.schemeName="Reliance Money Manager Fund – Growth Plan";
		$scope.schemeBody="Reliance Money Manager Fund ensures that your investments are at low risk, no lock-in on withdrawal and generate stable returns. This fund primarily invests in money market instruments and NCDs of public sector banks and AAA rated companies like Axis Bank, ICICI Bank, HDFC Ltd. etc. making it a safe option to park your surplus bank balance.";
		$scope.returnsOneM="7.80%";
		$scope.returnsThreeM="9.04%";
		$scope.returnsSixM="9.26%";
		$scope.returnsNineM="8.77%";
		$scope.returnsOneY="8.63%";
		$scope.returnsThreeY="8.88%";
		$scope.currentAUM=" INR 17,024 Crores";
		$scope.TaxBenifits=" Unlike FD, there is no TDS for investments in this fund. Also, for investments more than 3 years, tax payout becomes negligible as there is indexation benefit. However, for investments less than 3 years, you will have to declare the interest accrued from this investment at the time of tax filing and pay tax as per your salary bracket.";
		$scope.schemeLink="https://www.valueresearchonline.com/funds/newsnapshot.asp?schemecode=4547";
		$scope.schemeLinkText=" to read more about Reliance Money Manager Fund – Growth Plan";
		$scope.starText="Sep 2016";
	}
})

.controller('verifySuccessCtrl', function($scope,$sessionStorage,$state,myService,proofRedirectFactory,$timeout,$window) {
console.log($sessionStorage.SessionStatus+"   $sessionStorage.SessionStatus verifySuccessCtrl");
	$timeout(function(){
		//$window.location.reload(true)
		$scope.initial();
	},3000)
	$scope.notnowFunction= function(){
	if(confirmation==1){$state.go("tour");}
	else{
		if ($sessionStorage.SessionStatus=='I' || $sessionStorage.SessionStatus=='N' || $sessionStorage.SessionStatus==null ){
			$state.go("tour");
		}
		else if ($sessionStorage.SessionStatus=='T'){
			$state.go("tour");
		}
		else if ($sessionStorage.SessionStatus=='P' || $sessionStorage.SessionStatus=='Q' ){
			if($sessionStorage.docStatus !="11111"){
				$sessionStorage.disbledSkip=true;
				console.log($sessionStorage.docStatus + " I am here")
				var nextStepsUrl=proofRedirectFactory.name;
				var totalSteps=myService.myFunction($sessionStorage.docStatus).length;
				$sessionStorage.stepCount=-1;  var nextSteps=myService.myFunction($sessionStorage.docStatus);
				$sessionStorage.stepCount=$sessionStorage.stepCount+1;
				console.log($sessionStorage.stepCount + "step count");
				console.log(nextSteps + "next step");
				console.log(nextStepsUrl[1] + "next step url");
				console.log(nextStepsUrl[nextSteps[$sessionStorage.stepCount]] + "next state");
				if(nextSteps[$sessionStorage.stepCount]==2 && nextSteps[$sessionStorage.stepCount+1]==3){$sessionStorage.stepCount=$sessionStorage.stepCount+1; $state.go('imageSelection');}
				else if(nextSteps[$sessionStorage.stepCount]==2 || nextSteps[$sessionStorage.stepCount]==3){$state.go('imageSelection');}
				else{
				if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
					else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
				}
			}
		}
	}
}
	$scope.investNowFunction= function(){
		if(confirmation==1){$state.go("tour");}
		else{
			if ($sessionStorage.SessionStatus=='I' || $sessionStorage.SessionStatus=='N' || $sessionStorage.SessionStatus==null ){
				$state.go("bank");
			}
			else if ($sessionStorage.SessionStatus=='T'){
				$state.go("tour");
			}
			else if ($sessionStorage.SessionStatus=='P' || $sessionStorage.SessionStatus=='Q' ){
				$state.go("tour");
			}
		}
}
	$scope.initial= function(){
		$scope.features=true;
		if(confirmation==1){
			$scope.disbledSkip=true;
			$scope.statusImage="img/steplast.jpg";
			$scope.para1="We have received your details, we will update you within 12 hours on account activation";
			$scope.para2="You can start investing now. Happy Investing!";
			$scope.notNow="Know more";
			$scope.startInvesting="Start Investing";
		}
		else{
			if ($sessionStorage.SessionStatus=='I' || $sessionStorage.SessionStatus=='N' || $sessionStorage.SessionStatus== null ){
				$scope.disbledSkip=true;
				$scope.statusImage="img/step1.jpg";
				$scope.para1="Your FinoZen account is currently inactive. Do you wish to start saving and growing your money everyday?";
				$scope.para2="If yes, please click on “Activate Now” and submit your PAN Number and Bank Details. We will activate your account instantaneously!";
				$scope.notNow ="Not Now";
				$scope.startInvesting="Activate Now";
			}
			else if ($sessionStorage.SessionStatus=='T'){
				$scope.disbledSkip=false;
				$scope.statusImage="img/steplast.jpg";
				$scope.para1="We have received and verified your details and as you are already KYC registered, your FinoZen account is now active.";
				$scope.para2="You can start investing now. Happy Investing!";
				$scope.startInvesting="Start Investing";
				$scope.notNow="Activate Now";
			}
			else if ($sessionStorage.SessionStatus=='P'){
				$scope.disbledSkip=false;
				$scope.statusImage="img/step1.jpg";
				$scope.para1="We have received and verified your details and you can start investing.";
				$scope.para2="However, we will need additional details to process your investments, Please click on 'Complete Activatation' to provide these details";
				$scope.para3="Pan Card";
				$scope.para4="Address proof (Aadhar/ Driving Licence/ Voter ID/ Passport/ Ration Card)";
				//$scope.para2="We will update you within 12 hours on account activation. Happy Investing!";
				$scope.notNow="Complete Activation";
				$scope.startInvesting="Start Investing";
			}
			else if ($sessionStorage.SessionStatus=='Q'){
				if ($sessionStorage.docStatus=='11111'){
					$scope.disbledSkip=true;
					$scope.statusImage="img/steplast.jpg";
					$scope.para1="We have received your details, we will update you within 12 hours on account activation";
					$scope.para2="You can start investing now. Happy Investing!";
					$scope.notNow="Know more";
					$scope.startInvesting="Start Investing";
				}
				else{
					$scope.disbledSkip=false;
					$scope.statusImage="img/step3.jpg";
					$scope.para1="One of your details is pending for account activation.";
					$scope.para2="Please click on 'Activate Now' to provide that detail.";
					$scope.notNow="Activate Now";
					$scope.startInvesting="Start Investing";
				}
			}
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
