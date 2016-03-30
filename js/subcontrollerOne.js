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
            "  1) Welcome Call: We will call you shortly and collect your personal details like address, email ID and PAN no.No.,Aadhar Card No. and Bank Account No.Our executive will answer all your queries and help you understand the exact document requirement. ",
            "  2)Account Activation: Post collection of necessary details, It will take us 5 mins. to activate your account. We will get in touch with you to inform you about the activation. ",
            "  3) Start Investing: Post activation of account, you can click on “Add Money” and start investing through netbanking",
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
        $scope.groups["3"] = {name: "How soon will my investments reflect on FinoZen?",items: ["All withdrawals made before 2 pm Monday to Friday will reflect in your bank account on the next working day morning before 11 am.","working day morning before 11 am.", "This is also subject to a working day being a Bank Holiday or non-transaction day (as per Mutual Fund Company)"] };
        $scope.groups["4"] = {name: "Where does my money go once I withdraw?",items: ["Your money will be deposited to the same bank account from which you have invested once you withdraw on FinoZen."] };
        $scope.groups["5"] = {name: "How soon can I access my withdrawn money?",items: ["All withdrawals made before 1pm Monday to Saturday will reflect in your bank account on the next business day. "] };
        $scope.groups["6"] = {name: "How much can I invest at a time? Is there a minimum or a maximum?",items: ["You can invest any amount from a minimum of INR 1,00"] };
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
	.controller('withdrawCtrl', function($scope,$sessionStorage,$ionicLoading,getReportService,$ionicHistory,ionicToast,$ionicPlatform) {
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
  //$scope.xirr=$sessionStorage.xirr;
$scope.xirrRate= function(){
	
	if($sessionStorage.xirr == null){return 0;}
	else if($sessionStorage.xirr <= 0){return 0;}
	else if($sessionStorage.xirr >= 10){return 10;}
	else if($sessionStorage.xirr <= 7.5){return 7.5;}
	else{return $sessionStorage.xirr;}
	
}
console.log($scope.xirrRate());

  $scope.balance= function(){
    if($sessionStorage.mktValue == null){return 0;}
    else {return $sessionStorage.mktValue;
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
        $ionicLoading.show();

         var Report = getReportService.get();
         Report.$promise.then(function(data){
         if(data.responseCode=="Cali_SUC_1030"){
         $scope.products=data.jsonStr;
         }
         })
        $ionicLoading.hide();
  $ionicPlatform.registerBackButtonAction(function (event) {
      if ($ionicHistory.currentStateName() == 'tabsController'){
        //event.preventDefault();
		//$state.go('tabsController.summaryPage');
		  $scope.showToast = function(){
		//ionicToast.show(message, position, stick, time); 
		  ionicToast.show('This is a toast at the top.', 'bottom', false, 2500);
		};
      } else {
        history.go(-1);
      }
    }, 100);
  
  
    })
 
 // NAV Calculator controller
.controller('sampleCtrl', function ($scope,$state,mfOrderUrlService,$sessionStorage,dateService,$ionicPopup) {
  var finalComputedVal;
    $scope.schemeName=$sessionStorage.schemeName;
    if($scope.schemeName=="RELIANCE LIQUID FUND - TREASURY PLAN - GROWTH PLAN - GROWTH OPTION - G"){
		$scope.schemeLink="http://www.moneycontrol.com/mutual-funds/nav/reliance-liquid-fund-treasury-plan-ip/MRC046";
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
    initial=initial+1;
            return $scope.final(initial,nav,suggest);
        }
        $scope.Invest = function(form) {
            if(form.$valid) {
                //$state.go('successPage');
                $scope.sendMfOrder();
            }
        }

        $scope.sendMfOrder=function() {
		console.log($sessionStorage.folioNums);
		console.log($sessionStorage.amcCode);
		console.log($sessionStorage.rtaCode);
            var date=dateService.getDate();
            mfOrderUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode": $sessionStorage.amcCode,"rtaCode":$sessionStorage.rtaCode,"orderTxnDate": date,"amount": finalComputedVal,"folioNo":$sessionStorage.folioNums},function(data){
                if(data.responseCode=="Cali_SUC_1030"){
                    window.open('http://205.147.99.55:8080/WealthWeb/ws/pymt/pymtView?mfOrderId='+data.id,'_self');
                }

            },function(error){
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
.controller('HomeCtrl', function($scope, ionicToast,ionicPlatform, ionicHistory) {
  //code here
  $ionicPlatform.registerBackButtonAction(function (event) {
      if ($ionicHistory.currentStateName() == 'tabsController'){
        //event.preventDefault();
		//$state.go('tabsController.summaryPage');
		  $scope.showToast = function(){
		//ionicToast.show(message, position, stick, time); 
		  ionicToast.show('This is a toast at the top.', 'bottom', false, 2500);
		};
      } else {
        history.go(-1);
      }
    }, 100);
  
  

})