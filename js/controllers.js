angular.module('app.controllers', [])

    .controller('summaryPageCtrl', function($scope) {
$scope.dd=function(){
	if($scope.clientIncome== undefined){$scope.clientIncome="33"}
	if($scope.clientOccupation== undefined){$scope.clientOccupation="Professional_new"}
	if($scope.clientPEP == undefined){$scope.clientPEP="N"}
	console.log($scope.clientIncome + " clientIncome");
	console.log($scope.clientPEP + " clientPEP");
	console.log($scope.clientOccupation + " clientOccupation");
	}
    })

    .controller('growthRateCtrl', function($scope,$rootScope) {
$scope.terms = function()
{
	//window.open('http://finozen.com/t&c.html','_self');
	var win = window.open( "http://finozen.com", "_system" );
win.addEventListener( "loadstop", function() {

        win.close();
});
	//window.open = cordova.InAppBrowser.open;
	//var ref = cordova.InAppBrowser.open('http://finozen.com/t&c.html', '_self', 'location=yes');
}
    })

    .controller('inviteCtrl', function($scope) {

    })
    .controller('termsCtrl', function($scope,$sessionStorage) {
if($sessionStorage.clientActive=="Y") {$scope.test=true;}
else{$scope.test=false;}
    })

    .controller('recentTransactionsCtrl', function($scope) {

    })
    .controller('pre_verificationCtrl', function($scope) {

    })

    .controller('AuthSignUpCtrl', function($scope, $state,signUpService,$sessionStorage,$ionicLoading) {

        $scope.signUp = function(form,searchText2,signupForm) {
$sessionStorage.SessionClientName=signupForm.fName+' '+signupForm.lName;
$sessionStorage.SessionMobNo=signupForm.mobileNumber;
            if(angular.equals(signupForm.pin,searchText2))
            {
                if( !angular.equals(signupForm.mobileNumber,signupForm.referral)) {
					if(form.$valid) {
						$ionicLoading.show({templateUrl:"templates/loadingNormal.html"});
						$sessionStorage.signUpData = (signupForm);
						$scope.addUserInfo();
					}
				}
				else{
					form.referral.$dirty=false;
					console.log( form.referral.$dirty+ " in cont");
					$scope.error_referal="Entered mobile number and referral number should be different";
				}
            }
            else{
                $scope.error_pin="Entered password didn't match";
            }
        }

        $scope.addUserInfo=function(){
            signUpService.sendSignUp($sessionStorage.signUpData).then(function(data){
				//$sessionStorage.

                if(data.responseCode!="Cali_SUC_1030"){
					$ionicLoading.hide();

					if(data.responseCode=="Cali_ERR_2050"){

						$scope.serverError="Mobile number in use";
					}
					else{
						$scope.serverError="Sign Up failed, please try again";
					}
				}
                else {
					//saving the signUp data with similar name convention as per sign in controller
					$sessionStorage.SessionPortfolio=(JSON.parse(data.jsonStr)).portfolioCode;
					$sessionStorage.SessionClientCode=(JSON.parse(data.jsonStr)).clientCode;

                    //$state.go('panVerify');    // new sign upflow
					$state.go('reference');
					$ionicLoading.hide();
                }
            },function(error){
				$ionicLoading.hide();
                $scope.serverError="Sign Up failed, please call us";

            });
        }
    })

    /*For Sign In*/

.controller('AuthSigninCtrl', function($scope,$state,$sessionStorage,$http,loginInfoService,$ionicLoading,$localStorage) {
 //$state.go('tabsController.summaryPage');
 $scope.mobileNumber=$localStorage.loginData;
  $scope.signIn = function(form,loginForm) {

    if(form.$valid) {
		if($scope.rememberMe){ $localStorage.loginData=$scope.mobileNumber;}
		else{$localStorage.loginData='';}
$ionicLoading.show({templateUrl:"templates/loadingNormal.html"});
$scope.loginDetails=JSON.parse(JSON.stringify({}));
$scope.loginDetails.login=$scope.mobileNumber;
$scope.loginDetails.password=$scope.digitPin;
console.log($scope.loginDetails);
      $sessionStorage.loginData=$scope.loginDetails;

	  console.log($localStorage.loginData);
       $scope.sendSignIn();
        }
		else{$ionicLoading.hide();}
      }
    $scope.forgotPin=function(signinformData){
		console.log(signinformData);
  if(signinformData.$valid){
    $sessionStorage.forgotPinPhone = $scope.mobileNumber;
    var ph=$sessionStorage.forgotPinPhone;

    $http.get('http://205.147.99.55:8080/WealthWeb/ws/clientFcps/forgotPassword?mobileNumber='+ph); //sending the otp to the phone number
    $state.go('forgot_pin');
    }
    else{
      $scope.message="Please enter your mobile number to reset PIN";
    }
  }

  $scope.sendSignIn=function() {
    loginInfoService.getJsonId($sessionStorage.loginData).then(function(data){

      if(data.responseCode=="Cali_SUC_1030"){
        $sessionStorage.SessionIdstorage = data.msg;
        $sessionStorage.SessionPortfolio =data.jsonStr[0].pfolioCode;
        $sessionStorage.SessionStatus =data.jsonStr[0].activeStatus;
        $sessionStorage.SessionClientName =data.jsonStr[0].clientName;
        $sessionStorage.SessionClientCode =data.jsonStr[0].clientCode;
        $sessionStorage.SessionMobNo =data.jsonStr[0].mobileNo;
        $sessionStorage.SessionFolioNums =(data.jsonStr[0].folioNums).length;
        $sessionStorage.clientActive = data.jsonStr[0].clientActive;
        $sessionStorage.nachStatus=data.jsonStr[0].nachStatus;
        console.log($sessionStorage.SessionFolioNums);
        $sessionStorage.folioNums = data.jsonStr[0].folioNums[0];
        $state.go('tabsController.summaryPage');
        $ionicLoading.hide();
        }
        else if(data.responseCode=="Cali_ERR_9002") {
        $ionicLoading.hide();
        $scope.serverError="Password not valid";
       }

        },function(error){
      $ionicLoading.hide();
        $scope.serverError = "Entered Credentials did not validate";
    });

  }
  $ionicLoading.hide();
    })


  /*add money page check*/
    .controller('transactionAccessCtrl', function($scope,$sessionStorage){
if($sessionStorage.clientActive=="Y") {
     $scope.withdrawUrl="#/withdraw";
      $scope.investUrl="#/invest";
  }
  else {
    $scope.withdrawUrl="#/status";
    $scope.investUrl="#/status";
  }
    })





.controller('popupController', function($scope, $ionicPopup,$window) {
     // Triggered on a button click, or some other target
 $scope.showPopup = function() {

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                content: 'Please have a look at the FAQ before placing a call',
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


    .controller('transListController',function($scope,$sessionStorage,getPerformanceService,getNAVService,$ionicLoading,getReportService,$timeout) {
var timeNow = new Date().getUTCHours();
/*$ionicLoading.show({
            template:
'<div class="loading visible active" style="margin-left: -53px; margin-top: 76px"><span><img style="max-height:50px" src="img/loading.gif"></img><br/>Custom Loading...</span></div>',
            noBackdrop: true
        });*/
	$ionicLoading.show({templateUrl:"templates/loadingNormal.html"});
var reportDate = getPerformanceService.get();
reportDate.$promise.then(function(data){
 if (data.responseCode == "Cali_SUC_1030") {

$sessionStorage.amcCode=data.jsonStr.amcCode;
$sessionStorage.gainMonth=data.jsonStr.gainMonth;
$sessionStorage.gainToday=data.jsonStr.gainToday;
$sessionStorage.gainTotal=data.jsonStr.gainTotal;
$sessionStorage.list=data.jsonStr.list;
$sessionStorage.mktValue=data.jsonStr.mktValue;
$sessionStorage.msg=data.jsonStr.msg;
$sessionStorage.netInv=data.jsonStr.netInv;
$sessionStorage.paymentMode=data.jsonStr.paymentMode;
$sessionStorage.quantity=data.jsonStr.quantity;
$sessionStorage.rtaCode=data.jsonStr.rtaCode;
$sessionStorage.xirr=data.jsonStr.xirr;
 }
})

  var Report = getReportService.get();
  Report.$promise.then(function(data){
    if(data.responseCode=="Cali_SUC_1030"){
	$sessionStorage.allTransactions=(data.jsonStr).length ;
	console.log($sessionStorage.allTransactions + "total number of transactions");
    $scope.products=data.jsonStr;
	if((data.jsonStr).length <= 0){console.log(window.Connection + "connection");
	$scope.noTxnIcon="img/no_leaves.png";
    }
    }
  })


  var navDate = getNAVService.get();
  navDate.$promise.then(function(data){
    if(data.responseCode=="Cali_SUC_1030"){
    for(var i = 0; i < (data.jsonStr).length; i++) {
      if(data.jsonStr[i].recco=="Accumulate"){
        $sessionStorage.schemeName=data.jsonStr[i].schemeName;
        $sessionStorage.nav=data.jsonStr[i].nav;
        $sessionStorage.rtaCode=data.jsonStr[i].rtaCode;
        $sessionStorage.amcCode=data.jsonStr[i].amcCode;
      }

    }
    $ionicLoading.hide();
    }
  },function(error){
    console.log("error");
    $ionicLoading.hide();
  })




  $scope.doRefresh=function() {
   $timeout(function(){
   var Report = getReportService.get();
   Report.$promise.then(function (data) {
       if (data.responseCode == "Cali_SUC_1030") {
           $scope.products = data.jsonStr;
           for (var i = 0; i < (data.jsonStr).length; i++) {
               if (data.jsonStr[i].txnTypeStr == "Buy") {
                   $scope.txnStatusClass = "success";
               }
               else if (data.jsonStr[i].txnTypeStr == "Sell") {
                   $scope.txnStatusClass = "failed";
               }
           }
       }
   })
$scope.$broadcast("scroll.refreshComplete");
},2000)
}

        /*var tList=this;
         tList.products=[];

         $http.get('data/transactiondata.json').success(function(data){
         tList.products=data;
         });*/

    })

    .controller('popOverController',function($scope,$ionicPopover ){

        var template =  '<ion-popover-view class="fit"><ion-content scroll="false"><div class="list"><a class="item pop_up" href="#" target="_blank">Estimated annual returns for your investments till date, and should not be construed as projected returns or actual performance.</a> </div></ion-content>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });


    })

    .controller('PEPpopOverController',function($scope,$ionicPopover ){

        var template =  '<ion-popover-view class="fit"><ion-content scroll="false"><div class="list"><a class="item pop_up" href="#" target="_blank">Individuals holding any prominent public function for ex: Head of State or Govt, Senior Politicians etc.</a> </div></ion-content>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });


    })


    .controller('showhistoryController', function($scope,$ionicHistory){

        $ionicHistory.clearHistory();
    })

    .controller('navhistoryController', function($scope,$ionicHistory){

        $ionicHistory.goBack(-2);
    })

    /*For social sharing*/
    .controller('socialShareController', function($scope,$cordovaSocialSharing,$sessionStorage){


$scope.shareViaTwitter=function(){
	window.plugins.socialsharing.share('Watch your money grow at FinoZen with just INR 100. Earn INR 100 for every referral. Use my phone number '+ $sessionStorage.SessionMobNo+' as referral code',null,null,'https://goo.gl/uAkHRa');
}
     })


    .controller('AuthWithdrawlCtrl', function($scope, $state,mfSellUrlService,dateService,$sessionStorage,$ionicPopup) {
        $scope.Withdrawl = function(form) {
console.log($scope.amount);
console.log($scope.checked_withdraw );
console.log(($scope.amount!=undefined || $scope.checked_withdraw) );
            var date=dateService.getDate();
            if(form.$valid) {
            if(($scope.amount!=undefined || $scope.checked_withdraw) && ($scope.amount>0 || $scope.checked_withdraw)) {
			if($scope.checked_withdraw == true){
				 var confirmPopup = $ionicPopup.confirm({
					title: "Confirm",
					content: "Withdraw complete balance?"
				});
				confirmPopup.then(function(result) {
					if(result) {
						mfSellUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode": $sessionStorage.amcCode,"rtaCode":$sessionStorage.rtaCode,"orderTxnDate": date,"allUnits":"Y","folioNo":$sessionStorage.folioNums},function(data){
                        console.log(data.responseCode);
						if(data.responseCode=="Cali_SUC_1030") {
                            $state.go('successPage');
                        }
						else
						{
							$scope.withdraw_Networkerror="Please try again";
						}
                    },function(error){

						$scope.withdraw_Networkerror="Please try again";
                    });
					}
				});
			}
			else{
				 var confirmPopup =$ionicPopup.confirm({
					title: "Confirm",
					content: "Withdraw INR "+ $scope.amount +" ?"
				});
				confirmPopup.then(function(result) {
					if(result) {
					mfSellUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode":$sessionStorage.amcCode,"rtaCode":$sessionStorage.rtaCode,"orderTxnDate": date,"amount":$scope.amount,"folioNo":$sessionStorage.folioNums},function(data){
							console.log(data.responseCode);
							if(data.responseCode!="Cali_SUC_1030") {
								console.log("failed");
								$scope.withdraw_Networkerror="Unable to accept request. Please re-login and try again";
							}
							else
							{
								console.log("success");
								$state.go('successPage');
							}
						},function(error){
							$scope.withdraw_Networkerror="Unable to accept request. Please re-login and try again";
						});
					}
				});
			}
                //$state.go('successPage');
/*
                if($scope.checked_withdraw == true){

                    mfSellUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode": $sessionStorage.amcCode,"rtaCode":$sessionStorage.rtaCode,"orderTxnDate": date,"allUnits":"Y","folioNo":$sessionStorage.folioNums},function(data){
                        if(data.responseCode=="Cali_SUC_1030") {
                            $ionicPopup.alert({
                                title: 'Request has been successfully accepted',
                                template: 'Success'
                            });

                        }
						else
						{
							console.log("failed");
							$ionicPopup.alert({
                            title: 'Request has failed',
                            template: 'Failed'
                        });
						$scope.withdraw_error="Please try again";
						}
                    },function(error){
                        $scope.withdraw_error="Unable to accept request, please try again"
                        $ionicPopup.alert({
                            title: 'Request has failed',
                            template: 'Please try again'
                        });
$scope.withdraw_error="Please try again";
                    });
                }
                else{

                    mfSellUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode":$sessionStorage.amcCode,"rtaCode":$sessionStorage.rtaCode,"orderTxnDate": date,"amount":$scope.amount,"folioNo":$sessionStorage.folioNums},function(data){
                        console.log(data.responseCode);
						if(data.responseCode!="Cali_SUC_1030") {
							console.log("failed");
                            $scope.withdraw_error="Unable to accept request, please try again";
                            $ionicPopup.alert({
                                title: 'Request has failed',
                                template: 'Please try again'
                            });
                        }
						else
						{
							console.log("success");
							$ionicPopup.alert({
                            title: 'Request has been successfully accepted',
                            template: 'Success'
                        });
						}
                    },function(error){
						console.log("errorr");
                        $scope.withdraw_error="Unable to accept request, please try again";
                    });

                }*/

            }
			else{
				$scope.withdraw_error="Please enter a valid amount.";
			}
		}

        };

        $scope.amountClear= function() {
            $scope.amount='';
        }

    })
