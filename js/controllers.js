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

    })

    .controller('inviteCtrl', function($scope,getNAVService) {

    })
    .controller('termsCtrl', function($scope,$sessionStorage,$state,myService,proofRedirectFactory) {
		console.log($sessionStorage.clientActive +"$sessionStorage.clientActive");
		console.log($sessionStorage.docStatus +"$sessionStorage.docStatus");
		$scope.test=false;
		if($sessionStorage.docStatus!="11111"){
			if($sessionStorage.clientActive=="Q" || $sessionStorage.clientActive=="P" ){$scope.test=false;}
			else{$scope.test=true;}
		}
		

$scope.activateAcc= function(){
	$scope.test=false;
	if($sessionStorage.docStatus=="11111"){}
	else{
	if($sessionStorage.clientActive=="I" || $sessionStorage.clientActive=="N" ||  $sessionStorage.clientActive==null){$state.go('bank');}
	else{
	console.log($sessionStorage.docStatus);
	$sessionStorage.stepCount=-1;
	var nextSteps=myService.myFunction($sessionStorage.docStatus);
	var nextStepsUrl=proofRedirectFactory.name;
	$sessionStorage.stepCount=$sessionStorage.stepCount+1;
	var totalSteps=myService.myFunction($sessionStorage.docStatus).length;
	//if(totalSteps==$sessionStorage.stepCount){confirmation=1;   $state.go(nextStepsUrl[5]);}
	//else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
	
	if(nextSteps[$sessionStorage.stepCount]==2 && nextSteps[$sessionStorage.stepCount+1]==3){$sessionStorage.stepCount=$sessionStorage.stepCount+1; $state.go('imageSelection');}
	else if(nextSteps[$sessionStorage.stepCount]==2 || nextSteps[$sessionStorage.stepCount]==3){$state.go('imageSelection');}
	else{
		if(totalSteps==$sessionStorage.stepCount){$state.go("feedback");}
		else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
	}	
	}

}

}
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
                if( signupForm.mobileNumber==signupForm.referral) {
					console.log("same number");
					form.referral.$dirty=false;
					console.log( form.referral.$dirty+ " in cont");
					$scope.error_referal="Entered mobile number and referral number should be different";
				}
				else{
					
					if(form.$valid) {
						console.log("not same number");
						//$ionicLoading.show({templateUrl:"templates/loadingNormal.html"});
						$sessionStorage.signUpData = (signupForm);
						$scope.addUserInfo();
					}
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

					if(data.responseCode=="Cali_ERR_2050" || data.responseCode=="Cali_ERR_2066" ){

						$scope.mobileError="Mobile number in use";
					}
					else if(data.responseCode=="Cali_ERR_1838" || data.responseCode=="Cali_ERR_1838" ){
						$scope.serverError="Please enter your full name";
					}
					else{
						$scope.serverError="Sign Up failed, please try again";
					}
				}
                else {
					//saving the signUp data with similar name convention as per sign in controller
					$sessionStorage.SessionPortfolio=(JSON.parse(data.jsonStr)).portfolioCode;
					$sessionStorage.SessionClientCode=(JSON.parse(data.jsonStr)).clientCode;
					$sessionStorage.clientType=(JSON.parse(data.jsonStr)).clientType;
					$sessionStorage.stepCount=0;
					$sessionStorage.disbledSkip=false;
                    $state.go('sliders');    // new sign upflow
					//$state.go('reference');
					$ionicLoading.hide();
                }
            },function(error){
				$ionicLoading.hide();
				console.log(data.responseCode + "hdfdhskjhkjh");
                $scope.serverError="Sign Up failed, please call us";

            });
        }
    })

    /*For Sign In*/

.controller('AuthSigninCtrl', function($scope,$state,$sessionStorage,$http,loginInfoService,$ionicLoading,$localStorage,$translate,$ionicPopup,$timeout) {
/*
	$scope.clientLanguageOptions = [
			{ name: 'বাঙালি', value: '1' },
			{ name: 'English', value: '2' },
			{ name: 'ગુજરાતી', value: '3' },
			{ name: 'हिन्दी', value: '4' },
			{ name: 'ಕನ್ನಡ', value: '5' },
			{ name: 'മലയാളം', value: '6' },
			{ name: 'मराठी', value: '7' },
			{ name: 'தமிழ்', value: '8' },
			{ name: 'తెలుగు', value: '9' }
			];
	$scope.clientLanguage = {type : $scope.clientLanguageOptions[$localStorage.language].value};
		console.log($localStorage.language+"  localStorage selected");
        //if ($localStorage.language == undefined ) {
        if ($localStorage.language || $localStorage.language==undefined) {
          var myPopup = $ionicPopup.show({
            template:
			'<label class = "item item-input item-select item-light popUpSelect">'+
				'<select ng-model="clientLanguage.type" required ng-options="option.value as option.name for option in clientLanguageOptions"></select>'+
			'</label>',
            title: 'Please select your language',
            scope: $scope,
            buttons: [

              {
                text: '<b>OK</b>',
                type: 'button-positive',
                onTap: function(e) {
                  if (!$scope.clientLanguage.type) {
                    //don't allow the user to close unless he enters wifi password
                    e.preventDefault();
				    console.log($scope.clientLanguage.type+"not selected");

                  } else {
                    console.log($scope.clientLanguage.type+"  language selected");
					$localStorage.language = $scope.clientLanguage.type;
                    console.log($localStorage.language+"  localStorage");
					$translate.use($localStorage.language);
                    //return $scope.clientLanguage.type;
					//$state.go("login");
                  }
                }
              }
            ]
          });
        }*/

		if($localStorage.language== undefined){
			$localStorage.language="2";
			$translate.use($localStorage.language);
		}
		else{
			$translate.use($localStorage.language);
		}

            //$state.go("login");
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
    $http.get('https://finotrust.com/WealthWeb/ws/clientFcps/forgotPassword?mobileNumber='+ph); //sending the otp to the phone number
    $state.go('forgot_pin');
    }
    else{
		$scope.message="Please enter your mobile number to reset PIN";
	$timeout(function(){
		$scope.message="";
	},3000)

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
        $sessionStorage.clientType= data.jsonStr[0].clientType;
		$sessionStorage.docStatus=data.jsonStr[0].docStatus;
		console.log($sessionStorage.docStatus + "docStatus");
        $state.go('tabsController.summaryPage');
        $ionicLoading.hide();
        }
        else if(data.responseCode=="Cali_ERR_9002") {
        $ionicLoading.hide();
        $scope.passwordError="Password not valid";
		$timeout(function(){
		$scope.passwordError="";
	},3000)
       }

        },function(error){
      $ionicLoading.hide();
        $scope.serverError = "Entered Credentials did not validate";
		$timeout(function(){
		$scope.serverError="";
	},3000)
    });

  }
  $ionicLoading.hide();
    })


  /*add money page check*/
.controller('transactionAccessCtrl', function($scope,$sessionStorage,$state){
	$scope.investCheck=function(){
	console.log($sessionStorage.clientActive + " add money");
	console.log($sessionStorage.clientActive + " add money");
	if($sessionStorage.clientActive=="N" || $sessionStorage.clientActive=="I" || $sessionStorage.clientActive== 'null' ||$sessionStorage.clientActive==undefined ){
		$state.go("verifySuccess");
	}
	else{
		  if($sessionStorage.clientActive=="P" || $sessionStorage.clientActive=="Q") {
			$state.go("status");
		  }
		  else {
			$state.go("invest");
		  }
	}
		
	}
	$scope.withdrawCheck=function(){
	console.log($sessionStorage.clientActive + " add money");
	if($sessionStorage.clientActive=="N" || $sessionStorage.clientActive=="I" || $sessionStorage.clientActive== 'null' ||$sessionStorage.clientActive==undefined ){
		$state.go("verifySuccess");
	}
	else{
		  if($sessionStorage.clientActive=="P" || $sessionStorage.clientActive=="Q") {
			$state.go("status");
		  }
		  else {
			$state.go("withdraw");
		  }
	}
			
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
                            window.location.href="tel:07899825545";
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

$sessionStorage.gainMonth=data.jsonStr.gainMonth;
$sessionStorage.gainToday=data.jsonStr.gainToday;
$sessionStorage.gainTotal=data.jsonStr.gainTotal;
$sessionStorage.list=data.jsonStr.list;
$sessionStorage.mktValue=data.jsonStr.mktValue;
$sessionStorage.msg=data.jsonStr.msg;
$sessionStorage.netInv=data.jsonStr.netInv;
$sessionStorage.paymentMode=data.jsonStr.paymentMode;
$sessionStorage.quantity=data.jsonStr.quantity;
$sessionStorage.xirr=data.jsonStr.xirr;
 }
})

  var Report = getReportService.get();
  Report.$promise.then(function(data){
    if(data.responseCode=="Cali_SUC_1030"){
	$sessionStorage.allTransactions=(data.jsonStr).length ;
	console.log($sessionStorage.allTransactions + "total number of transactions");
    $scope.products=data.jsonStr;
	if((data.jsonStr).length <= 0){
	$scope.noTxnIcon="img/no_leaves.png";
    }
    }
  })


  var navDate = getNAVService.get();
  navDate.$promise.then(function(data){
    if(data.responseCode=="Cali_SUC_1030"){
    for(var i = 0; i < (data.jsonStr).length; i++) {
      if(data.jsonStr[i].recco=="Accumulate"){
		  console.log($sessionStorage.clientType+ "   client type");
		  if($sessionStorage.clientType ==="PL"){
			if(JSON.stringify(data.jsonStr[i].schemeName)[1]=="P"){
				console.log(JSON.stringify(data.jsonStr[i].schemeName)[1] +"   i am platinum");
				$sessionStorage.schemeName=data.jsonStr[i].schemeName;
				$sessionStorage.nav=data.jsonStr[i].nav;
				console.log($sessionStorage.nav + "  platinum");
				$sessionStorage.rtaCode=data.jsonStr[i].rtaCode;
				$sessionStorage.amcCode=data.jsonStr[i].amcCode;
			}
		  }
		  else if($sessionStorage.clientType  ==='GO'){
			  if(JSON.stringify(data.jsonStr[i].schemeName)[1]=="G"){
				console.log("i am gold");
				$sessionStorage.schemeName=data.jsonStr[i].schemeName;
				$sessionStorage.nav=data.jsonStr[i].nav;
				console.log($sessionStorage.nav + "  Gold");
				$sessionStorage.rtaCode=data.jsonStr[i].rtaCode;
				$sessionStorage.amcCode=data.jsonStr[i].amcCode;
			}

		  }
		 // else{console.log("not enteringg goo");}

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

    .controller('popOverController',function($scope,$ionicPopover,$translate ){

        var template =  '<ion-popover-view class="fit"><ion-content scroll="false"><div class="list"><a class="item pop_up" href="#" target="_blank" translate="TEXT_POPOVER"></a> </div></ion-content>';

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
    .controller('socialShareController', function($scope,$cordovaSocialSharing,$sessionStorage,$state){


		$scope.shareViaContacts=function(){
			$state.go('inviteContacts');	
		}
		$scope.shareViaTwitter=function(){
			window.plugins.socialsharing.share('Watch your money grow at FinoZen with just INR 100. Earn INR 100 for every referral. Use my phone number '+ $sessionStorage.SessionMobNo+' as referral code',null,null,'https://goo.gl/uAkHRa');
		}
     })


    .controller('AuthWithdrawlCtrl', function($scope, $state,mfSellUrlService,dateService,$sessionStorage,$ionicPopup,$ionicPlatform) {
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
								var log=$ionicPopup.alert({
									title: 'Sorry for the inconvenience',
									template: 'Please Login again'
								  });
							  log.then(function(res) {
									ionic.Platform.exitApp();
								  });
							}
							else
							{
								console.log("success");
								$state.go('successPage');
							}
						},function(error){
							$scope.withdraw_Networkerror="Unable to accept request. Please re-login and try again";
							var log=$ionicPopup.alert({
								title: 'Sorry for the inconvenience',
								template: 'Please Login again'
							  });
								log.then(function(res) {
								ionic.Platform.exitApp();
							  });
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
