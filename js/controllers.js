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

    .controller('growthRateCtrl', function($scope,$rootScope,$ionicLoading,getZBFService,relianceInstantZBF,$location) {
		$scope.openC=function()
		{
			/*
			var rel= cordova.InAppBrowser.open('http://portal.acttv.in/web/blr/home','_blank','location=no');
				//for showing the ionic loader
				rel.addEventListener('loadstart', function(event) {
					navigator.notification.activityStart("Please Wait", "Its loading.....");
				});
				rel.addEventListener('exit', function(event) {
         ionicLoaderService.hide();
			});
			rel.addEventListener('loadstop', function() {
				navigator.notification.activityStop();
				rel.executeScript(
//					{code: "function create(htmlStr) {var frag = document.createDocumentFragment(),temp = document.createElement('p'); temp.innerHTML = htmlStr; while (temp.firstChild) {frag.appendChild(temp.firstChild); } return frag;} var fragment = create('<ul class=\"footer\"><li>gfgh</li></ul>');document.body.insertBefore(fragment, document.body.childNodes[1]);"}
					{file:"http://finozen.com/inject/header.js"}
				);
				rel.insertCSS({file:"http://finozen.com/inject/inject.css"})
			  });

		*/
		var zbf=getZBFService.get();
					    zbf.$promise.then(function(data)
						{
							$ionicLoading.hide()
						if(data.responseCode=="Cali_SUC_1030")
			{
							var rg = (data.jsonStr.rgResponse);
							var relzbf= cordova.InAppBrowser.open(rg,'_blank','location=no');
							 relzbf.addEventListener('loadstart', function(event) {
					navigator.notification.activityStart("Please Wait", "");
				});
							relzbf.addEventListener('loadstop', function(event)
							{
								navigator.notification.activityStop();
								if( event.url.match('Msg=Success') )
								{
									//add the js file which will call the html in return
									//relzbf.execScript({file:"inject.js"});
							var parser=document.createElement('a');
							parser.href=window.location;
							console.log(parser.href);
							parser1.href=event.url;
							console.log(event.url);
							//parser.href=window.location;
							console.log(parser.search);
							//sending data to the backend
							var folio={};
							folio.portfolioCode=$sessionStorage.SessionPortfolio;
							folio.schemeCode=$sessionStorage.rtaCode;
							folio.folioNumber=r;
							folio=JSON.stringify(folio);
							relianceInstantZBF.save(folio,function(data)
							{
								if(data.responseCode == "Cali_SUC_1030")
								{
									$state.go('activeStatus');
								}
							})
								$timeout(function () {
								relzbf.close();
								},10000);
								;}
							});


		}
		})
		}
    })

    .controller('inviteCtrl', function($scope) {

    })
    .controller('termsCtrl', function($scope,$sessionStorage,$state,myService,proofRedirectFactory) {
		$scope.test=true;
		if($sessionStorage.docStatus!="11111"){
			if($sessionStorage.SessionStatus=="Q" || $sessionStorage.SessionStatus=="U" || $sessionStorage.SessionStatus=="P" || $sessionStorage.SessionStatus=="I" || $sessionStorage.SessionStatus==null || $sessionStorage.SessionStatus==undefined){$scope.test=false;}
			else{$scope.test=true;}
		}


$scope.activateAcc= function(){
	$scope.test=false;
	if($sessionStorage.docStatus=="11111"){}
	else{
	if($sessionStorage.SessionStatus=="I" || $sessionStorage.SessionStatus=="N" ||  $sessionStorage.SessionStatus==null){$state.go('questions');}
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

    .controller('TransactionsReportCtrl', function($scope,TransRepoService,$sessionStorage,ionicDatePicker,$filter,$ionicPopup,$state,$ionicLoading) {
		///for datepicker
    var ipObj2 = {
      callback: function (val) {  //Mandatory
        console.log('Return value from the datepicker modal is : ' + val, new Date(val));
		$scope.selectedDate1 = new Date(val);
		var dateof= val;
		dateof = $filter('date')(val,'yyyy-MM-dd');
		$scope.startDate=dateof;
      },
      disabledDates: [            //Optional
        new Date(),
        new Date("08-16-2016"),
        new Date(1439676000000)
      ],
      from: new Date(1940, 1, 1), //Optional
      to: new Date(), 			  //Optional
      inputDate: new Date(),      //Optional
      mondayFirst: true,          //Optional
	  titleLabel: 'Select a Date',
	  setLabel: 'Set',
      disableWeekdays: [],       //Optional
      closeOnSelect: false,       //Optional
      templateType: 'modal'       //Optional
    };

    $scope.openReportStart = function(){
      ionicDatePicker.openDatePicker(ipObj2);
    };

	$scope.selectedDate1 = new Date();
	$scope.selectedDate = new Date();
	$scope.startDate = $filter('date')($scope.selectedDate,'yyyy-MM-dd');
	$scope.EndDate = $filter('date')($scope.selectedDate,'yyyy-MM-dd');
$scope.openReportEnd = function(){
		dateofEnd = $filter('date')($scope.selectedDate,'yyyy-MM-dd');
	var ipObj3 = {
      callback: function (valu) {  //Mandatory
        console.log('Return value from the datepicker modal is : ' + valu, new Date(valu));
		$scope.selectedDate = new Date(valu);
		var dateofEnd= valu;
		dateofEnd = $filter('date')(valu,'yyyy-MM-dd');
		$scope.EndDate=dateofEnd;
      },
      disabledDates: [            //Optional
        new Date(),
        new Date(1439676000000)
      ],
      from: new Date($scope.startDate), //Optional
      to: new Date(), 			  //Optional
      inputDate: new Date(),      //Optional
      mondayFirst: true,          //Optional
	  titleLabel: 'Select a Date',
	  setLabel: 'To',
      disableWeekdays: [],       //Optional
      closeOnSelect: false,       //Optional
      templateType: 'modal'       //Optional
    };
      ionicDatePicker.openDatePicker(ipObj3);
	  console.log($sessionStorage.EndDate+"    final date");
};

$scope.TranasctionUpload=function(){
	$ionicLoading.show({templateUrl:"templates/loading.html"});
	var TransUpload=JSON.parse(JSON.stringify({}));
	TransUpload.portfolioCode=$sessionStorage.SessionPortfolio;
	TransUpload.repo_code="Txn_Stmt";
	TransUpload.param1=$scope.startDate;
	TransUpload.param2=$scope.EndDate;
	TransUpload = JSON.stringify(TransUpload);
	console.log(TransUpload);
	TransRepoService.save(TransUpload,function(data){
		console.log($filter('date')(new Date(),'yyyy-MM-dd'));
		$ionicLoading.hide();
			clevertap.event.push("Report Request", {
                    "Name": $sessionStorage.SessionClientName, //Name of the client
                    "Phone Number": $sessionStorage.mobileNumber, //Mobile Number
                    "from date":$scope.startDate , //Starting request date
					"end date":$scope.EndDate,    //end date request date
					"Date of request":$filter('date')(new Date(),'yyyy-MM-dd'),                //date of request made
                  });
			var refer=  $ionicPopup.alert({
                            title: 'Thank You',
                            template: 'You will receive your transactions report on your registered email address within the next 5 minutes.'
                        });
                      refer.then(function(res){
                        $state.go("tabsController.summaryPage");
                      })
	},function(error){
				$ionicLoading.hide();

            });
	
}

    })
    .controller('ipvCtrl', function($scope,$window,$ionicLoading,$state,myService,proofRedirectFactory,$timeout,$sessionStorage) {
  $scope.showSubmit=false;
  $scope.AutoRecord=function(){
	 window.plugins.videocaptureplus.captureVideo(
      captureSuccess, // your success callback
      {
        limit: 1, // the nr of videos to record, default 1 (on iOS always 1)
        duration: 3, // max duration in seconds, default 0, which is 'forever'
        highquality: true, // set to true to override the default low quality setting
        frontcamera: true, // set to true to override the default backfacing camera setting. iOS: works fine, Android: YMMV (#18)
        // you'll want to sniff the useragent/device and pass the best overlay based on that.. assuming iphone here
        portraitOverlay: 'www/img/finotree.png', // put the png in your www folder
        landscapeOverlay: 'www/img/finotree.png', // not passing an overlay means no image is shown for the landscape orientation
        overlayText: 'Please rotate to landscape for the best result' // iOS only
      }
	 
  );
  }
  function captureSuccess(mediafiles){
		  
		  $scope.showSubmit=true;
	  }
	$scope.videoSumbit=function(){
		$ionicLoading.show({templateUrl:"templates/loadingNormal.html"});
		$timeout(function () {
			$ionicLoading.hide();
			var nextSteps=myService.myFunction($sessionStorage.docStatus);
			var nextStepsUrl=proofRedirectFactory.name;
			$sessionStorage.stepCount=$sessionStorage.stepCount+1;
			var totalSteps=myService.myFunction($sessionStorage.docStatus).length;
			//if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
			//else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
			console.log(nextSteps[$sessionStorage.stepCount]  + " next state" );
			if(nextSteps[$sessionStorage.stepCount]==2 && nextSteps[$sessionStorage.stepCount+1]==3){$sessionStorage.stepCount=$sessionStorage.stepCount+1; $state.go('imageSelection');}
			else if(nextSteps[$sessionStorage.stepCount]==2 || nextSteps[$sessionStorage.stepCount]==3){$state.go('imageSelection');}
			else{
				if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
				else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
			}
          
        }, 2000);
	}
    })
    .controller('pre_verificationCtrl', function($scope) {

    })
.controller('referralStatus', function($scope,getReferalStat,$ionicLoading,$sessionStorage,$state,$timeout) {
	$ionicLoading.show({templateUrl:"templates/loading.html"});
	var referralDate = getReferalStat.get();
	referralDate.$promise.then(function(data){
		if (data.responseCode == "Cali_SUC_1030") {
			$ionicLoading.hide();
			$scope.products=data.jsonStr;
			$scope.productsLen=(data.jsonStr).length;
			if((data.jsonStr).length==0){$scope.inviteShow=true;}
			else{$scope.inviteShow=false;}
			//console.log("test data    "+data.jsonStr[1].mobile);
		}
	})
})
.controller('referralCtrl', function($scope,getReferalStat,$ionicLoading,$sessionStorage,$state,$timeout) {
	$scope.referral= function(){
	$ionicLoading.show({templateUrl:"templates/loading.html"});
	var referralDate = getReferalStat.get();
	referralDate.$promise.then(function(data){
		if (data.responseCode == "Cali_SUC_1030") {
			$ionicLoading.hide();
			$scope.products=data.jsonStr;
			$scope.productsLen=(data.jsonStr).length;
			if($scope.productsLen == 0){
				$ionicLoading.hide();
				$scope.inviteShow=true;$state.go('invite');
				}
			else{
				$scope.inviteShow=false; 
				$ionicLoading.hide();
				$state.go('referral');
			}

			//console.log("test data    "+data.jsonStr[1].mobile);
		}
	})
	}
})
    .controller('AuthSignUpCtrl', function($scope, $state,signUpService,$sessionStorage,$ionicLoading,dateService) {

        $scope.signUp = function(form,searchText2,signupForm) {
			$sessionStorage.SessionClientName=signupForm.fName;
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
						$ionicLoading.show({templateUrl:"templates/loading.html"});
						$sessionStorage.signUpData = (signupForm);
						$scope.addUserInfo();

            //clevertap creating a new user profile
// if set, these populate demographic information in the Dashboard
         
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
				var date=dateService.getDate();
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
					
					 //clevertap creating a new user profile
					// if set, these populate demographic information in the Dashboard
				/*	
				  clevertap.profile.push("SignUp", {
                    "FirstName": signupForm.fName,             //string
                    "Email": signupForm.email,               // Email address of the user
                    "Phone": signupForm.mobileNumber,       // Phone (with the country code)
                    "Referral": signupForm.referral,      //referral number
                  });	*/
					
					//saving the signUp data with similar name convention as per sign in controller
					$sessionStorage.SessionPortfolio=(JSON.parse(data.jsonStr)).portfolioCode;
					$sessionStorage.SessionClientCode=(JSON.parse(data.jsonStr)).clientCode;
					$sessionStorage.clientType=(JSON.parse(data.jsonStr)).clientType;
					$sessionStorage.SessionStatus='I';
					$sessionStorage.stepCount=0;
					$sessionStorage.disbledSkip=false;
                    $state.go('sliders');    // new sign upflow
					//$state.go('reference');
						$ionicLoading.hide();
                }
            },function(error){
				$ionicLoading.hide();
                $scope.serverError="Sign Up failed, please call us";

            });
        }
    })

    /*For Sign In*/

.controller('AuthSigninCtrl', function($scope,$state,$sessionStorage,$http,loginInfoService,$ionicLoading,$localStorage,$translate,$ionicPopup,$timeout,$ionicPlatform,$window,$filter) {
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

		//for suspended client
		if($sessionStorage.SessionStatus=='S'){
			$ionicLoading.hide();
			var myPopup = $ionicPopup.show({
                content: 'Your account has been suspended',
                buttons: [
                    { text: 'Call',
                        onTap:function(e){
                            window.location.href="tel:09206073021";
                        }

                    },

                    {
                        text: '<b>Close</b>',
                        type: 'button-positive',
                        onTap: function(e) {


								 ionic.Platform.exitApp();
                        }
                    },
                ]
            });

		}
		else{
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

			//clever tap login.(if exsisting user update the user's values)
			var date= $filter('date')(date,'MM/dd/yyyy');
			 /*clevertap.onUserLogin.push("Login", {
                "Name": $sessionStorage.SessionClientName,            // String
				"ClientStatus": $sessionStorage.clientActive,        // string(char)
				"Phone":$sessionStorage.SessionMobNo,               // Phone
				"DocStatus":$sessionStorage.docStatus,             //string
				"ActiveStatus":$sessionStorage.SessionStatus,     //string
				"ClientType":$sessionStorage.clientType,         // string(char)
                  });*/
				  
				  clevertap.event.push("LOGIN", {
                    "Name": $sessionStorage.SessionClientName,            // String
					"ClientStatus": $sessionStorage.clientActive,        // string(char)
					"Phone":$sessionStorage.SessionMobNo,               // Phone
					"DocStatus":$sessionStorage.docStatus,             //string
					"ActiveStatus":$sessionStorage.SessionStatus,     //string
					"ClientType":$sessionStorage.clientType,
                  });		
			$ionicLoading.hide();
			$state.go('tabsController.summaryPage');
		}

        }
        else if(data.responseCode=="Cali_ERR_9002") {
        $ionicLoading.hide();
        $scope.passwordError="Password not valid";
		$timeout(function(){
			$scope.passwordError="";
		},3000)
       }
        else if(data.responseCode=="Cali_ERR_1969") {
        $ionicLoading.hide();
        $scope.passwordError="Password not valid";
		$timeout(function(){
			$scope.passwordError="";
		},3000)
       }
        else{
        $ionicLoading.hide();
        $scope.passwordError="Signin failed, Please try again later";
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
.controller('transactionAccessCtrl', function($scope,$sessionStorage,$state,relianceInstantAmountAPI,$ionicLoading,$ionicPopup,$timeout){
	$scope.investCheck=function(){
	if($sessionStorage.SessionStatus=="N" || $sessionStorage.SessionStatus=="I" || $sessionStorage.SessionStatus== 'null' ||$sessionStorage.SessionStatus==undefined ){
		$state.go("inactiveClient");
	}
	else{
		  if($sessionStorage.SessionStatus=="P" || $sessionStorage.SessionStatus=="U" || ($sessionStorage.SessionStatus=="Q" && $sessionStorage.docStatus!='11111')) {
			$state.go("status");
		  }
		  else {
			$state.go("invest");
		  }
	}

	}
	$scope.withdrawCheck=function(){
		$ionicLoading.show({templateUrl:"templates/loadingNormal.html"});
	if($sessionStorage.SessionStatus=="N" || $sessionStorage.SessionStatus=="I" || $sessionStorage.SessionStatus== 'null' || $sessionStorage.SessionStatus==undefined ){
		$ionicLoading.hide();
		$sessionStorage.instaAmount=0;
		$state.go("withdraw");
	}
	else{
			//for reliance instant amount
			var bankcall={};
				bankcall.gateWayType ="RG",
                bankcall.gateWayPayLoad= "https://online.reliancemf.com/rmf/mowblyserver/wsapi/rmf/prod/wsapi/RedemptionSchemeDetails?acno="+$sessionStorage.folioNums+"&scheme="+$sessionStorage.RelScheme+"&plan=IG&arncode=ARN-107100&branch=FP99&proxybranch=&deviceid=PARTNERAPI&appVersion=1.0.1&appName=FINOTRUST&apikey=c3d2f2f3-7d23-4f48-9fe6-82db5449a562"
				bankcall=JSON.stringify(bankcall);
				console.log(bankcall+"bank call");
				var bankedit;
				
				relianceInstantAmountAPI.save(bankcall,function(data){

				console.log(data);

				if(data.responseCode == "Cali_SUC_1030") {
					console.log(data.jsonStr.rgResponse[0]);
					//console.log(data.jsonStr.rgResponse.BankAccNo);
					console.log((JSON.parse(data.jsonStr.rgResponse)).Insta_Amount);
					$sessionStorage.instaAmount=(JSON.parse(data.jsonStr.rgResponse)).Insta_Amount;
					$scope.insta=$sessionStorage.instaAmount;
					$ionicLoading.hide();
					$state.go("withdraw");
				}
				else{
					$ionicLoading.hide();
				}
		  },function(error){
				$ionicLoading.hide();
				$sessionStorage.instaAmountError="Unable to retrive amount";
				$state.go("withdraw");
            })



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
                            window.location.href="tel:09206073021";
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


.controller('transListController',function($scope,$sessionStorage,getPerformanceService,getNAVService,$ionicLoading,getReportService,$timeout,relianceInstantAmountAPI) {
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
		console.log("no txn");
		$scope.noTxnIcon="img/no_leaves.png";
    }
    }
  })

  //reliance bank details
  var RelianceBank=function(){
				var bankcall={};
				bankcall.gateWayType ="RG",
                bankcall.gateWayPayLoad= "https://online.reliancemf.com/rmf/mowblyserver/wsapi/rmf/prod/wsapi/RedInvbankDetails_V1?arncode=ARN-107100&acno="+$sessionStorage.folioNums+"+&scheme="+$sessionStorage.RelScheme+"&plan=IG&deviceid=PARTNERAPI&appVersion=1.0.1&appName=FINOTRUST&apikey=c3d2f2f3-7d23-4f48-9fe6-82db5449a562"
				bankcall=JSON.stringify(bankcall);
				console.log(bankcall+"bank call");
				var bankedit;
				relianceInstantAmountAPI.save(bankcall,function(data){

				console.log(data);

				if(data.responseCode == "Cali_SUC_1030") {
					console.log(data.jsonStr.rgResponse);
				//console.log(data.jsonStr.rgResponse.BankAccNo);
				console.log((JSON.parse(data.jsonStr.rgResponse))[0].BankAccNo);
				$sessionStorage.bankName=(JSON.parse(data.jsonStr.rgResponse))[0].BankAccNo;
				$sessionStorage.bankAccNo=(JSON.parse(data.jsonStr.rgResponse))[0].BankName;

              }
		  },function(error){
				$ionicLoading.hide();
				$sessionStorage.instaAmountError="Unable to retrieve amount";
				//$state.go("withdraw");
            })
	  }


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

    .controller('AVGGainPopOverController',function($scope,$ionicPopover ){

        var template =  '<ion-popover-view class="fit"><ion-content scroll="false"><div class="list"><p class="item pop_up" href="#" target="_blank" >Average gains for last 7 days </p> </div></ion-content>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });


    })

    .controller('instaPopOverController',function($scope,$ionicPopover ){

        var template =  '<ion-popover-view class="fit"><ion-content scroll="false"><div class="list"><p class="item pop_up"  >Reliance Money Manager fund allows instant withdrawal (within 30 minutes). For more details call us at 09206073021.</p> </div></ion-content>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });


    })
    .controller('popOverController',function($scope,$ionicPopover,$translate ){

        var template =  '<ion-popover-view class="fit"><ion-content scroll="false"><div class="l ist"><p class="item pop_up" >Estimated annual returns for your investments till date, and should not be construed as projected returns .</p> </div></ion-content>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });


    })

    .controller('popOverTxnSuccess',function($scope,$ionicPopover,$translate ){

        var template =  '<ion-popover-view class="fit test"><ion-content scroll="false"><div class="l ist"><p class="item pop_up" >Your transaction is approved.</p> </div></ion-content>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });


    })
    .controller('popOverTxnInProgress',function($scope,$ionicPopover,$translate ){

        var template =  '<ion-popover-view class="fit test"><ion-content scroll="false"><div class="l ist"><p class="item pop_up" >Your transaction is safe and is in progress.</p> </div></ion-content>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });


    })
    .controller('popOverTxnFailed',function($scope,$ionicPopover,$translate ){

        var template =  '<ion-popover-view class="fit test"><ion-content scroll="false"><div class="l ist"><p class="item pop_up" >Your transaction has been declined.</p> </div></ion-content>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });


    })

    .controller('PEPpopOverController',function($scope,$ionicPopover ){

        var template =  '<ion-popover-view class="fit"><ion-content scroll="false"><div class="list"><a class="item pop_up" >Individuals holding any prominent public function for ex: Head of State or Govt, Senior Politicians etc.</a> </div></ion-content>';

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
			window.plugins.socialsharing.share('Start investing at FinoZen with just Rs 500 and watch your money grow everyday. Use my phone number '+ $sessionStorage.SessionMobNo+' as referral code to earn Rs 100 after your 1st investment.',null,null,'https://goo.gl/uAkHRa');
		}
     })


    .controller('AuthWithdrawlCtrl', function($scope, $state,mfSellUrlService,dateService,$http,$sessionStorage,$ionicPopup,$ionicLoading,relianceInstantAmountAPI,$timeout,$http,getZBFService,$location,relianceInstantZBF) {
if($sessionStorage.instaAmount>=0){$scope.insta=$sessionStorage.instaAmount;}
else{$scope.insta=0;}
if($sessionStorage.instaAmountError){
	$scope.instaError=$sessionStorage.instaAmountError;
}


	   $scope.Withdrawl = function(form) {
console.log($scope.amount);
console.log($scope.checked_withdraw );
console.log(($scope.amount!=undefined || $scope.checked_withdraw) );
            var date=dateService.getDate();
            if(form.$valid) {
            if(($scope.amount!=undefined || $scope.checked_withdraw) && ($scope.amount>0 || $scope.checked_withdraw)) {
			if($scope.checked_withdraw == true ){
				if($sessionStorage.mktValue>0 ){
					if($sessionStorage.bankAccNo==undefined || $sessionStorage.bankName==null ){
					 var confirmPopup =$ionicPopup.confirm({
						title: "Confirm",
						content: "Withdraw complete balance ?"
					});
					}
					else{
						if($sessionStorage.clientType ==="PL"){
							 var confirmPopup = $ionicPopup.confirm({
								title: "Confirm",
								content: "<p>Your amount will be credited to </p>" +"Account No:"+$sessionStorage.bankName+"<br/> Bank Name: "+$sessionStorage.bankAccNo + "<p><br/>Amount not eligible for instant withdrawal</p>"
							});
						}
						else{
							 var confirmPopup = $ionicPopup.confirm({
								title: "Withdraw complete balance?",
								content: "<p>Your amount will be credited to </p>" +"Account No:"+$sessionStorage.bankName+"<br/> Bank Name: "+$sessionStorage.bankAccNo
							});
						}
						confirmPopup.then(function(result) {
							if(result) {
								$ionicLoading.show({templateUrl:"templates/loadingNormal.html"});
								mfSellUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode": $sessionStorage.amcCode,"rtaCode":$sessionStorage.rtaCode,"orderTxnDate": date,"allUnits":"Y","folioNo":$sessionStorage.folioNums},function(data){
								console.log(data.responseCode);

								if(data.responseCode=="Cali_SUC_1030") {
									$ionicLoading.hide();
									$state.go('successPage');
								}
								else
								{
									$ionicLoading.hide();
									$scope.withdraw_Networkerror="Please try again";
								}
							},function(error){
								$ionicLoading.hide(); 
								$scope.withdraw_Networkerror="Please try again";
							});
							}
						});
					}
				}
				else{
					$ionicLoading.hide(); 
					$scope.withdraw_Networkerror="Amount should be greater than 0";
				}
			}
			else{
				if($sessionStorage.bankAccNo==undefined || $sessionStorage.bankName==null ){
					 var confirmPopup =$ionicPopup.confirm({
						title: "Confirm",
						content: "Withdraw Rs "+ $scope.amount +" ?"
					});
					confirmPopup.then(function(result) {
						if(result) {
						$ionicLoading.show({templateUrl:"templates/loadingNormal.html"});
						mfSellUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode":$sessionStorage.amcCode,"rtaCode":$sessionStorage.rtaCode,"orderTxnDate": date,"amount":$scope.amount,"folioNo":$sessionStorage.folioNums},function(data){
								console.log(data.responseCode);
								if(data.responseCode!="Cali_SUC_1030") {
									$ionicLoading.hide();
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
							clevertap.event.push("withdraw", {
                    "Amount": $scope.amount, //amount entered
                    "Fund Name": $sessionStorage.rtaCode, //reliance code
                    "folioNo":$sessionStorage.folioNums , //folio number for that client
					"date":date,
					"Invested Amount":$sessionStorage.netInv,
                  });
									$ionicLoading.hide();
									console.log("success");
									$state.go('successPage');
								}
							},function(error){
								$ionicLoading.hide();
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
				else{
					if($sessionStorage.clientType ==="PL"){
						if($scope.amount >= 500 &&  $scope.amount<=$scope.insta ){
							 var confirmPopup =$ionicPopup.confirm({
								content: "Account No: "+$sessionStorage.bankName+"<br/> Bank Name: "+$sessionStorage.bankAccNo+ "<p><br/>Amount will be credited within 30 minutes.</p>" ,
								title: "Withdraw Rs "+ $scope.amount +" ?"
							});
						}
						else {
							 var confirmPopup =$ionicPopup.confirm({
								content: "<p>Your amount will be credited to </p>" +"Account No:"+$sessionStorage.bankName+"<br/> Bank Name: "+$sessionStorage.bankAccNo + "<p><br/>Amount not eligible for instant withdrawal</p>" ,
								title: "Withdraw Rs "+ $scope.amount +" ?"
							});
						}
					}
					else{
						 var confirmPopup =$ionicPopup.confirm({
							content: "<p>Your amount will be credited to </p>" +"Account No:"+$sessionStorage.bankName+"<br/> Bank Name: "+$sessionStorage.bankAccNo ,
							title: "Withdraw Rs "+ $scope.amount +" ?"
						});
					}
					confirmPopup.then(function(result) {
						if(result) {
						$ionicLoading.show({templateUrl:"templates/loadingNormal.html"});
						mfSellUrlService.save({"portfolioCode": $sessionStorage.SessionPortfolio,"amcCode":$sessionStorage.amcCode,"rtaCode":$sessionStorage.rtaCode,"orderTxnDate": date,"amount":$scope.amount,"folioNo":$sessionStorage.folioNums},function(data){
								console.log(data.responseCode);
								if(data.responseCode!="Cali_SUC_1030") {
									$ionicLoading.hide();
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
									$ionicLoading.hide();
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


		//reliance bank api call

			  $scope.RelianceBank=function(){
				var bankcall={};
				bankcall.gateWayType ="RG",
                bankcall.gateWayPayLoad="https://online.reliancemf.com/rmf/mowblyserver/wsapi/rmf/prod/wsapi/RedInvbankDetails_V1?arncode=ARN-107100&acno="+$sessionStorage.folioNums+"+&scheme="+$sessionStorage.RelScheme+"&plan=IG&deviceid=PARTNERAPI&appVersion=1.0.1&appName=FINOTRUST&apikey=c3d2f2f3-7d23-4f48-9fe6-82db5449a562"  //(LF, IG) (LP,IG)
				bankcall=JSON.stringify(bankcall);
				console.log(bankcall+"bank call");
				var bankedit;
				relianceInstantAmountAPI.save(bankcall,function(data){

				console.log(data);
				$sessionStorage.instaAmountError=false;
				if(data.responseCode == "Cali_SUC_1030") {
				console.log((JSON.parse(data.jsonStr.rgResponse))[0].BankAccNo);
				$sessionStorage.bankName=(JSON.parse(data.jsonStr.rgResponse))[0].BankAccNo;
				$sessionStorage.bankAccNo=(JSON.parse(data.jsonStr.rgResponse))[0].BankName;

              }
		  },function(error){
				$ionicLoading.hide();
				$sessionStorage.instaAmountError=true;
				$sessionStorage.instaAmountError="Unable to retrieve amount";
				//$state.go("withdraw");
            })
	  }
	  //reliance InstaAmount Api call
	  $scope.RelianceInstaAmount=function(){
				$scope.processing=true;
				$sessionStorage.instaAmountError=false;
				console.log($sessionStorage.RelScheme);
				var bankcall={};
				bankcall.gateWayType ="RG",
                bankcall.gateWayPayLoad= "https://online.reliancemf.com/rmf/mowblyserver/wsapi/rmf/prod/wsapi/RedemptionSchemeDetails?acno="+$sessionStorage.folioNums+"&scheme="+$sessionStorage.RelScheme+"&plan=IG&arncode=ARN-107100&branch=FP99&proxybranch=&deviceid=PARTNERAPI&appVersion=1.0.1&appName=FINOTRUST&apikey=c3d2f2f3-7d23-4f48-9fe6-82db5449a562"
				bankcall=JSON.stringify(bankcall);
				console.log(bankcall+"bank call");
				var bankedit;
				relianceInstantAmountAPI.save(bankcall,function(data){

				console.log(data);

				if(data.responseCode == "Cali_SUC_1030") {
					$scope.processing=false;
					console.log(data.jsonStr.rgResponse[0]);
				//console.log(data.jsonStr.rgResponse.BankAccNo);
				console.log((JSON.parse(data.jsonStr.rgResponse)).Insta_Amount);
				$sessionStorage.instaAmount=(JSON.parse(data.jsonStr.rgResponse)).Insta_Amount;
				if($sessionStorage.instaAmount==null || $sessionStorage.instaAmount == undefined){$scope.insta=0;}
				else{$scope.insta=$sessionStorage.instaAmount;}
              }
			  else{
				  $sessionStorage.instaAmountError=true;
				  $scope.processing=false;
			  }
		  },function(error){
				$ionicLoading.hide();
				$scope.processing=false;
				$sessionStorage.instaAmountError=true;
				//$state.go("withdraw");
            })
	  }


    })

 // NAV Calculator controller
.controller('sampleCtrl', function ($scope,$state,mfOrderUrlService,$sessionStorage,dateService,$ionicPopup,$ionicLoading,$ionicPlatform,$timeout,relianceInstantAmountAPI,$location,$http,getReportService) {

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
		
   var Report = getReportService.get();
   Report.$promise.then(function (data) {
       if (data.responseCode == "Cali_SUC_1030") {
		   $sessionStorage.allTransactions=(data.jsonStr).length;
       }
	   else{console.log("error line 1286");}
   })
		
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
						rel.addEventListener('loadstop', function(event) { 
							navigator.notification.activityStop();
						  });
							rel.addEventListener('loadstop', function(event) { if( event.url.match('online/RMFShort/FetchInvData') ){
								console.log(event.url);
								var n= event.url;
								$http({
									method: 'GET',
									url: 'https://finotrust.com/WealthWeb/ws/clientOrders/updateIHNO?orderRefNo='+data.id+'&ihno='+n
										}).then(function successCallback(response) {
											
								}, function errorCallback(response) {
									 clevertap.event.push("Failed Transaction", {
										"Amount": finalComputedVal, //amount entered
										"Fund Name": $sessionStorage.rtaCode, //reliance code
										"Charged ID":data.id ,  // important to avoid duplicate transactions due to network failure
										"date":date,            //purchase date 
										"client Phone Number":$sessionStorage.mobileNumber, // client identification
									  });
								
								});		
							;} });
						rel.addEventListener('loadstop', function(event) { if( event.url.match('https://investeasy.reliancemutual.com/online/Payments/PaymentConfirmation') ){
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
				var log=$ionicPopup.alert({
					title: 'Sorry for the inconvenience',
					template: 'Please Login again'
				  });
              log.then(function(res) {
					ionic.Platform.exitApp();
				  });
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

