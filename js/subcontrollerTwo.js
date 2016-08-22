angular.module('app.subcontrollerTwo', [])


    .controller('changeCtrl', function(changePinService,$scope,$sessionStorage,$ionicPopup,$state){

        $scope.resetPin=function(changePinForm){

            changePinForm.clientCode=$sessionStorage.SessionClientCode;
            changePinForm=JSON.stringify(changePinForm);
            console.log(changePinForm + " form data");
//changePinService.changePin(changePinForm);
            changePinService.save(changePinForm,function(data){
                console.log(data);
                if(data.responseCode == "Cali_SUC_1030") {


                    var popup= $ionicPopup.alert({
                        title: 'PIN Change status',
                        template: 'PIN Changed Successfully'
                    });

                    popup.then(function(res) {
                        $state.go("account");
                    });
                }
                else {
                    console.log("Error");
                    $ionicPopup.alert({
                        title: 'PIN Change status',
                        template: 'PIN Change Unsuccessful'
                    });
					popup.then(function(res) {
                        $state.go("account");
                    });
                }
            },function(error){
                console.log("eror");

            });

        }

    })

        /*for sending the pan Image*/
        .controller('panImageCTRL',function(panImageService,$cordovaCamera,$scope,$sessionStorage,$state,$ionicPopup,$ionicLoading,$window,myService,proofRedirectFactory){
			$scope.diasbleSkip=$sessionStorage.disbledSkip;
//			$scope.addressRetake=function(){ window.location.reload(true);}
            $scope.selfieGo=function(){
				$sessionStorage.stepCount=0;
				
		var nextSteps=myService.myFunction(00001);
		var nextStepsUrl=proofRedirectFactory.name;
		$sessionStorage.stepCount=$sessionStorage.stepCount+1;
		console.log($sessionStorage.stepCount + "step count");
		console.log(nextSteps + "next step");
		console.log(nextStepsUrl[1] + "next step url");
		console.log(nextStepsUrl[nextSteps[$sessionStorage.stepCount]] + "next state");
		var totalSteps=myService.myFunction(00001).length;
		if(totalSteps==$sessionStorage.stepCount){$sessionStorage.clientResponse=2;$state.go(nextStepsUrl[6]);}
			else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
						 
					
				//$state.go('selfie');
			}
			$scope.takeit1=function(){
			//$scope.cimage1="img/Pancard.jpg";
			  document.addEventListener("deviceready", function () {
				var options = {
				  quality: 90,
				  destinationType: Camera.DestinationType.DATA_URL,
				  sourceType: Camera.PictureSourceType.CAMERA,
				  allowEdit: false,
				  encodingType: Camera.EncodingType.JPEG,
				  cameraDirection:1,
					targetWidth: 700,
				    targetHeight: 500,
				  popoverOptions: CameraPopoverOptions,
				  saveToPhotoAlbum: false,
				  correctOrientation:false
				};

				$cordovaCamera.getPicture(options).then(function(imageData) {
				  $scope.panData = imageData;
				  $scope.pan = "data:image/jpeg;base64," + imageData;
				  $scope.cimage1 = "data:image/jpeg;base64," + imageData;
				  $sessionStorage.panimage=imageData;
				}, function(err) {
				  $state.go('panImage');
				});
			  }, false);
			}
			$scope.PanImage = function() {
        $ionicLoading.show({templateUrl:"templates/loading.html",duration: 5000});
				$scope.uploadPan=JSON.parse(JSON.stringify({}));
                $scope.uploadPan.kyphCode = $sessionStorage.SessionClientCode;
				console.log($sessionStorage.SessionClientCode+ 'clientCode');
                //$scope.uploadPan.kyphCode = "CRN24178";
                $scope.uploadPan.imageData = $scope.pan;//replace with session storage of pan
                //$scope.uploadPan.imageData = "fffd";//replace with session storage of pan
                $scope.uploadPan.imageType = 'PA';
                $scope.uploadPan.addressType = '';
                $scope.uploadPan = JSON.stringify($scope.uploadPan);
                console.log($scope.uploadPan + 'pan json data');
                panImageService.save($scope.uploadPan,function(data){
                  console.log(data.responseCode);
                    if(data.responseCode != "Cali_SUC_1030") {
                      $ionicLoading.hide();
                      var refer=  $ionicPopup.alert({
                            title: 'Upload Error',
                            template: 'Please try again'
                        });
                      refer.then(function(res){
                        $window.location.reload(true)
                      })
                    }
                    else {
                      $ionicLoading.hide();
                          confirmation++;
                      console.log(confirmation+'the value of the click is');
                        // $state.go("selfie");
						 		
		var nextSteps=myService.myFunction(10111);
		var nextStepsUrl=proofRedirectFactory.name;
		$sessionStorage.stepCount=$sessionStorage.stepCount+1;
		console.log($sessionStorage.stepCount + "step count");
		var totalSteps=myService.myFunction(00001).length;
		if(totalSteps==$sessionStorage.stepCount){$sessionStorage.clientResponse=2;$state.go(nextStepsUrl[6]);}
			else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
						 
						 
                    }
                },function(error){
                  $ionicLoading.hide();
                  var refersh = $ionicPopup.alert({
                        title: 'Please try again',
                   template: 'Unable to submit request'
                    });
                  refersh.then(function(res){
                    console.log('this is happening correctly');
                    $window.location.reload(true)
                  })


                });
            }
})

            /*for signature image*/
    .controller('signImageCTRL',function(panImageService,myService,proofRedirectFactory,$cordovaCamera,$scope,$sessionStorage,$state,$ionicPopup,$ionicLoading,$window){
		$scope.diasbleSkip=$sessionStorage.disbledSkip;
        var canvas = document.getElementById('signatureCanvas');
		var signaturePad = new SignaturePad(canvas);
		$scope.clearCanvas = function() {
			signaturePad.clear();
		}
		$scope.saveCanvas = function() {
			var sigImg = signaturePad.toDataURL();
			$scope.signature = sigImg;
		}
		$scope.signatureFunction=function(){
			$sessionStorage.clientActive="Q";
			//$state.go('verifySuccess');
			
		var nextSteps=myService.myFunction(00001);
		var totalSteps=myService.myFunction(00001).length;
		var nextStepsUrl=proofRedirectFactory.name;
		$sessionStorage.stepCount=$sessionStorage.stepCount+1;
		console.log($sessionStorage.stepCount + "    step count");
		console.log(nextSteps + "    next step");
		console.log(nextStepsUrl + "    next step url");		
		var totalSteps=myService.myFunction(00001).length;
		if(totalSteps==$sessionStorage.stepCount){$sessionStorage.clientResponse=2;$state.go(nextStepsUrl[6]);}
			else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
			}
		$scope.signUpload = function() {
      $ionicLoading.show({templateUrl:"templates/loading.html"});
			var uploadsign=JSON.parse(JSON.stringify({}));
            uploadsign.kyphCode = $sessionStorage.SessionClientCode;
            //uploadsign.kyphCode = "CRN23919";;
            uploadsign.imageData = $scope.signature;//replace with session storage of sign
            uploadsign.imageType = 'SI';
            uploadsign.addressType = '';
            uploadsign = JSON.stringify(uploadsign);
            console.log(uploadsign + 'pan json data');
            panImageService.save(uploadsign,function(data){
                console.log(data);
                if(data.responseCode != "Cali_SUC_1030") {
                    $ionicLoading.hide();

                  var refer=$ionicPopup.alert({
                    title: 'Upload Error',
                    template: 'Please try again'
                  });
                  refer.then(function(res) {
                    $window.location.reload(true)
                  });
                }
                else {
                  $ionicLoading.hide();
                  confirmation++;
				  if(confirmation>=7){
					$sessionStorage.clientActive="Q";
					$state.go("verifySuccess");//after sign image
				  }
				  else{
					$sessionStorage.clientActive="Q";
					$state.go("verifySuccess");
				  }
                }
            },function(error){
              $ionicLoading.hide();
              var referesh= $ionicPopup.alert({
                   title: 'Please try again',
                   template: 'Unable to submit request'
                });
              referesh.then(function(res) {
                  $window.location.reload(true)
                });

            });
        }
    })

    /*for selfie image*/
    .controller('selfieImageCTRL',function(panImageService,myService,proofRedirectFactory,$cordovaCamera,$scope,$sessionStorage,$state,$ionicPopup,$ionicLoading,$window){
		$scope.diasbleSkip=$sessionStorage.disbledSkip;
		$scope.addressSelect=function(){
			//$state.go('imageSelection'); 
		var nextSteps=myService.myFunction(00001);
		var nextStepsUrl=proofRedirectFactory.name;
		$sessionStorage.stepCount=$sessionStorage.stepCount+1;
		var totalSteps=myService.myFunction(00001).length;
		if(totalSteps==$sessionStorage.stepCount){$sessionStorage.clientResponse=2;$state.go(nextStepsUrl[6]);}
			else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
		}
		$scope.selfieImage=function(){
		//$scope.selfie="img/no_leaves.png";
		  document.addEventListener("deviceready", function () {
			$scope.options = {
			  quality: 70,
			  destinationType: Camera.DestinationType.DATA_URL,
			  sourceType: Camera.PictureSourceType.CAMERA,
			  allowEdit: true,
			  encodingType: Camera.EncodingType.JPEG,
			  targetWidth: 300,
			  cameraDirection:1,
			  targetHeight: 500,
			  popoverOptions: CameraPopoverOptions,
			  saveToPhotoAlbum: false,
			  correctOrientation:true
			};

			$cordovaCamera.getPicture($scope.options).then(function(imageData) {
			  //$scope.selfieData = imageData;
			  $scope.selfie = "data:image/jpeg;base64," + imageData;
			}, function(err) {
			  // error
			});

		  }, false);
		}

		$scope.selfieUpload = function() {
      $ionicLoading.show({templateUrl:"templates/loading.html"});
			var uploadselfie=JSON.parse(JSON.stringify({}));
            uploadselfie.kyphCode = $sessionStorage.SessionClientCode;
            //uploadselfie.kyphCode = "CRN24178";
            uploadselfie.imageData = $scope.selfie;//replace with session storage of selfie
            //uploadselfie.imageData = "test";//replace with session storage of selfie
            uploadselfie.imageType = 'PH';
            uploadselfie.addressType = '';
            uploadselfie = JSON.stringify(uploadselfie);
            console.log(uploadselfie + 'pan json data');
            panImageService.save(uploadselfie,function(data){
                console.log(data);
                if(data.responseCode !== "Cali_SUC_1030") {
                  $ionicLoading.hide();
                  var refer=$ionicPopup.alert({
                    title: 'Upload Error',
                    template: 'Please try again'
                  });
                  refer.then(function(res) {
                    $window.location.reload(true)
                  });
                }
                else {
                  $ionicLoading.hide();
                  confirmation++;
                  console.log(confirmation+'value for submit check');
                  $state.go("imageSelection");//after selfie image
                }
            },function(error){
              $ionicLoading.hide();
              var refresh=$ionicPopup.alert({
                  title: 'Please try again',
                   template: 'Unable to submit request'
                });
              refresh.then(function(res) {
                  $window.location.reload(true)
                });

            });
        }
    })

      /*for question's*/
    .controller('questionsCTRL',function($scope,myService,proofRedirectFactory,questionsService,$sessionStorage,$state,$ionicPopup,$ionicLoading,$window){
$scope.diasbleSkip=$sessionStorage.disbledSkip;
	   $scope.clientIncomeOptions = [
    { name: 'Below 1 Lakh', value: '31' },
    { name: '1 - 5 Lakh', value: '32' },
    { name: '5 - 10 Lakh', value: '33' },
    { name: '10 - 25 Lakh', value: '34' },
    { name: '25 Lakh – 1 Cr', value: '35' },
    { name: 'Above 1 Cr', value: '36' }
    ];
    $scope.clientIncome = {type : $scope.clientIncomeOptions[2].value};

	   $scope.clientOccupationOptions = [
    { name: 'Business', value: 'Business_New' },
    { name: 'Professional', value: 'Professional_New' },
    { name: 'Public Sector', value: 'Service_New' },
    { name: 'Private Sector', value: 'Professional_New' },
    { name: 'Government Service', value: 'Service_New' },
    { name: 'Agriculturist', value: 'Farmer_New' },
    { name: 'Housewife', value: 'Household_New' },
    { name: 'Student', value: 'Student_New' },
    { name: 'Retired', value: 'Retired_New' },
    { name: 'Others', value: 'Others_New' }
    ];

    $scope.clientOccupation = {type : $scope.clientOccupationOptions[3].value};

	   $scope.clientPEPOptions = [
    { name: 'Not Applicable', value: 'N' },
    { name: 'Politically Exposed Person', value: 'Y' },
    { name: 'Related to Politically Exposed Person', value: 'R' }
    ];

    $scope.clientPEP = {type : $scope.clientPEPOptions[0].value};


		$scope.question=function(){
			//$state.go('signature');
		var nextSteps=myService.myFunction(00001);
		var nextStepsUrl=proofRedirectFactory.name;
		$sessionStorage.stepCount=$sessionStorage.stepCount+1;
		var totalSteps=myService.myFunction(00001).length;
		if(totalSteps==$sessionStorage.stepCount){$sessionStorage.clientResponse=2;$state.go(nextStepsUrl[6]);}
			else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
		}
      $scope.questionUpload = function(){
		$ionicLoading.show({templateUrl:"templates/loading.html"});
        var questUpload=JSON.parse(JSON.stringify({}));
		questUpload.kyphCode = $sessionStorage.SessionClientCode;
        //questUpload.kyphCode="CRN23911";
        questUpload.income=$scope.clientIncome.type; // income level from 31-36
        questUpload.occup=$scope.clientOccupation.type; // for the occupation
        questUpload.pep=$scope.clientPEP.type; //for the pep status either Y or N
        questUpload.resStatus="Individual"; // for the resdential status hardcoding it to individual
        questUpload = JSON.stringify(questUpload);
	console.log($scope.clientIncome.type + " clientIncome");
	console.log($scope.clientPEP.type + " clientPEP");
	console.log($scope.clientOccupation.type + " clientOccupation");
	console.log(questUpload + " questUpload");

        questionsService.save(questUpload,function(data){
			$ionicLoading.hide();
			$state.go('signature');
		/*	if(data.responseCode !== "Cali_SUC_1030") {
				$ionicLoading.hide();
				var refer=$ionicPopup.alert({
					title: 'Upload Error',
					template: 'Please try again'
				});
					refer.then(function(res) {
					$window.location.reload(true)
				});
			}
			else{
				$ionicLoading.hide();
				$state.go('signature');
			}*/
			},function(error){
				$ionicLoading.hide();
				$state.go('signature');
				/*var refresh=$ionicPopup.alert({
                  title: 'Please try again',
                   template: 'Unable to submit request'
                });
              refresh.then(function(res) {
                  $window.location.reload(true)

			});*/
          });
        }
      }
    )

    /*for address proof image*/
    .controller('addressImageSelectionCTRL',function(panImageService,myService,proofRedirectFactory,$cordovaCamera,$scope,$sessionStorage,$state,$ionicPopup,$ionicLoading){
		$scope.diasbleSkip=$sessionStorage.disbledSkip;
				$scope.takeImageSkip=function(){
					//$state.go('bank');
		var nextSteps=myService.myFunction(00001);
		var nextStepsUrl=proofRedirectFactory.name;
		$sessionStorage.stepCount=$sessionStorage.stepCount+1;
		var totalSteps=myService.myFunction(00001).length;
		if(totalSteps==$sessionStorage.stepCount){$sessionStorage.clientResponse=2;$state.go(nextStepsUrl[6]);}
			else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
					
					}
		$scope.takeImage=function(){
			if($scope.choice!==undefined) {
			//console.log($scope.choice + "   selected choice");
			$sessionStorage.addressChoice=$scope.choice;
			$state.go('addressProofImageSingle');
			}
		}
	})

	.controller('addressFrontCTRL',function(panImageService,$cordovaCamera,$scope,$sessionStorage,$state,$ionicPopup,$ionicLoading,$window){
		$scope.diasbleSkip=$sessionStorage.disbledSkip;
		//console.log($sessionStorage.addressChoice + 'fromwhat page your coming');
				//$scope.addressRetake=function(){ window.location.reload(true);}
				$scope.bank=function(){$state.go('bank');}
				if($sessionStorage.addressChoice == 'AA'){$scope.cimageFront="img/AADHAR_FRONT.jpg"; $scope.cimageBack="img/AADHAR_BACK.jpg";}
				else if($sessionStorage.addressChoice == 'PP'){$scope.cimageFront="img/Passport_front.jpg"; }
				else if($sessionStorage.addressChoice == 'VO'){$scope.cimageFront="img/VOTER_FRONT.jpg";}
			    else if($sessionStorage.addressChoice == 'DL'){$scope.cimageFront="img/DL.jpg";}
				else if($sessionStorage.addressChoice == 'RC'){$scope.cimageFront="img/ration1.jpg";}
				else if($sessionStorage.addressChoice == 'GA'){$scope.cimageFront="img/sample.png";}

		//else{$scope.cimageFront="img/DL.jpg";}
		$scope.addressFrontImg=function(){
		//console.log($sessionStorage.addressChoice);
		$scope.addressImage=$scope.cimageFront;
		document.addEventListener("deviceready", function () {
					var options = {
					  quality: 90,
					  destinationType: Camera.DestinationType.DATA_URL,
					  sourceType: Camera.PictureSourceType.CAMERA,
					  allowEdit: false,
					  encodingType: Camera.EncodingType.JPEG,
					  targetWidth: 700,
					  targetHeight: 500,
					  popoverOptions: CameraPopoverOptions,
					  saveToPhotoAlbum: false,
					  correctOrientation:true
					};
			console.log(options);



			$cordovaCamera.getPicture(options).then(function(imageData) {
			  //$scope.addressImageData = imageData;
			  $scope.addressImage = "data:image/jpeg;base64," + imageData;
			}, function(err) {
			  // error
			});

		  }, false);
		}

		$scope.addressFrontSubmit = function() {
			$ionicLoading.show({templateUrl:"templates/loading.html"});
			var uploadaddress=JSON.parse(JSON.stringify({}));
            uploadaddress.kyphCode = $sessionStorage.SessionClientCode;
            //uploadaddress.kyphCode = "CRN23919";;
            uploadaddress.imageData = $scope.addressImage;//replace with session storage of selfie
            //uploadaddress.imageData = "fffd";//replace with session storage of selfie
            uploadaddress.imageType = 'AF';
            uploadaddress.addressType = $sessionStorage.addressChoice; //sessionstorage of addressType
            uploadaddress = JSON.stringify(uploadaddress);
            console.log(uploadaddress + 'pan json data');
            panImageService.save(uploadaddress,function(data){
                console.log(data);

                if(data.responseCode == "Cali_SUC_1030") {
                    $ionicLoading.hide();
					if($sessionStorage.addressChoice == 'GA' ){
						$state.go('bank');
					}
					else{
						$state.go('addressProofImage');
					}
                }
                else {
                    console.log("Error");
                  var refer= $ionicPopup.alert({
                        title: 'Upload Error',
                        template: 'Please try again'
                    });
                    $ionicLoading.hide();
                  refer.then(function(res) {
                        //$state.go(""); //selfie sign page
                    });
                }
            },function(error){
                $ionicLoading.hide();
              var refeesher= $ionicPopup.alert({
                   title: 'Please try again',
                   template: 'Unable to submit request.'
                });
              refeesher.then(function(res) {
                    $state.go(""); //selfie sign page
                });

            });
        }

})


	.controller('addressBackCTRL',function(panImageService,$cordovaCamera,$scope,$sessionStorage,$state,$ionicPopup,$ionicLoading,$window){
		//console.log($sessionStorage.addressChoice + 'fromwhat page your coming');
		$scope.bank=function(){$state.go('bank');}
				if($sessionStorage.addressChoice == 'AA'){$scope.cimageBack="img/AADHAR_BACK.jpg";}
				else if($sessionStorage.addressChoice == 'PP'){$scope.cimageBack="img/Passport_back.jpg";}
				else if($sessionStorage.addressChoice == 'VO'){$scope.cimageBack="img/VOTER_BACK.jpg";}
			    else if($sessionStorage.addressChoice == 'DL'){$scope.cimageBack="img/DL_back.png";}
				else if($sessionStorage.addressChoice == 'RC'){ $scope.cimageBack="img/ration2.jpg";}
				else if($sessionStorage.addressChoice == 'GA'){$scope.cimageFront="img/sample.png";}

		$scope.addressBackImg=function(){
		$scope.cimage2=$scope.cimageBack;
		//$scope.addressFront();
		  document.addEventListener("deviceready", function () {
			var options = {
			  quality: 90,
			  destinationType: Camera.DestinationType.DATA_URL,
			  sourceType: Camera.PictureSourceType.CAMERA,
			  allowEdit: false,
			  targetWidth: 700,
			  targetHeight: 500,
			  encodingType: Camera.EncodingType.JPEG,
			  popoverOptions: CameraPopoverOptions,
			  saveToPhotoAlbum: false,
			  correctOrientation:true
			};

			console.log(options);



			$cordovaCamera.getPicture(options).then(function(imageData) {
			  //$scope.addressBackData = imageData;
			  $scope.cimage2 = "data:image/jpeg;base64," + imageData;
			  $sessionStorage.panimage=imageData;
			}, function(err) {
			  // error
			});

		  }, false);
		}

        $scope.addressBackSubmit = function() {
			$ionicLoading.show({templateUrl:"templates/loading.html"});
			var uploabackdaddress=JSON.parse(JSON.stringify({}));
            uploabackdaddress.kyphCode = $sessionStorage.SessionClientCode;
            //uploabackdaddress.kyphCode = "CRN23919";;
            uploabackdaddress.imageData = $scope.cimage2;
            //uploabackdaddress.imageData = "fffd";//replace with session storage of selfie
            uploabackdaddress.imageType = 'AB';
            uploabackdaddress.addressType = $sessionStorage.addressChoice; //sessionstorage of addressType
            uploabackdaddress = JSON.stringify(uploabackdaddress);
            console.log(uploabackdaddress + 'pan json data');
            panImageService.save(uploabackdaddress,function(data){
                if(data.responseCode == "Cali_SUC_1030") {

                    $ionicLoading.hide();
					$state.go("bank");
                }
                else {
                  $ionicLoading.hide();

                    console.log("Error");
                  var refer= $ionicPopup.alert({
                        title: 'Upload Error',
                        template: 'Please try again'
                    });
                    $ionicLoading.hide();
                  refer.then(function(res) {
						 $window.location.reload(true)
                    });
                }
            },function(error){
                $ionicLoading.hide();
              var refersher= $ionicPopup.alert({
                   title: 'Please try again',
                   template: 'Unable to submit request'
                });
              refersher.then(function(res) {
                  //  $state.go(""); //selfie sign page
				   $window.location.reload(true)
                });

            });
        }
    })

    /*for destroying the session storage*/
    .controller('signoutCtrl',function($scope,$state,$ionicHistory,$rootScope,$ionicPlatform){

        $ionicPlatform.ready(function(){
          $scope.signOut = function(){
           // navigator.app.exitApp();
            ionic.Platform.exitApp();
          }
        })
        /*$scope.signOut = function(){

            $timeout(function () {
                sessionStorage.clear();
               $ionicHistory.clearHistory();
              $ionicHistory.clearCache().then(function(){ $state.go('login') })
            },100)
             //$state.go('login');
        }*/
    })

/*for uploading the bank details*/

  .controller('bankDetailsCTRL',function($scope,$state,$sessionStorage,bankDetailsService,$ionicPopup,$ionicLoading,$window,proofRedirectFactory,myService){
	 $scope.diasbleSkip=$sessionStorage.disbledSkip;
    $scope.accountTypeOptions = [
    { name: 'Savings', value: 'SB_New' },
    { name: 'Current', value: 'CA_new' }
    ];

    $scope.accountType = {type : $scope.accountTypeOptions[0].value};

    $scope.pastInvestmentsOptions = [
    { name: 'Yes', value: 'SB_New' },
    { name: 'No', value: 'CA_new' }
    ];

    $scope.pastInvestments = {type : $scope.pastInvestmentsOptions[0].value};


    $scope.bankUpload=function(bankData){
		if(bankData.$valid){
        var bank = JSON.parse(JSON.stringify({}));
		$ionicLoading.show({templateUrl:"templates/loading.html"});
            bank.clientCode=$sessionStorage.SessionClientCode;
            //bank.kyphCode="CRN23919";
            bank.bankAccNo= $scope.accNumber //bank account number
            bank.ifscCode= $scope.IFSC_code//ifsc Code
            bank.accountType= $scope.accountType.type//savings type either savings or personal
            bank.updateNach= "N" //either yes or no
            bank=JSON.stringify(bank);
			console.log(bank);
               bankDetailsService.save(bank,function(data){
                 if(data.responseCode == "Cali_SUC_1030") {
                   $ionicLoading.hide();
				//   $sessionStorage.documentStatus=data.; // document status received on bank submittion of bank details  (have to update value according to response)
				
				   
                   $state.go('verifySuccess');//after selfie image
                 }

                 else {
				 console.log(data.responseCode);
					$ionicLoading.hide();
                   var refer= $ionicPopup.alert({
                     title: 'Upload Error',
                     template: 'Please try again'
                   });

                   refer.then(function(res) {
                     $window.location.reload(true)

                   });
                 }

               },function(error){

                 $ionicLoading.hide();
				 if(error.data.responseCode == "Cali_ERR_2021"){
					$ionicLoading.hide();
                   var ifsc_error= $ionicPopup.alert({
                     title: 'IFSC Code invalid',
                     template: 'Please try again'
                   });

                   ifsc_error.then(function(res) {
                     $window.location.reload(true)

                   });
                 }
				 else if(error.data.responseCode == "Cali_ERR_2035"){
           $ionicLoading.hide();
           var bankdetails_error= $ionicPopup.alert({
             title: 'Account Number Duplicate',
             template: 'Please try again'
           });

           bankdetails_error.then(function(res) {
             $window.location.reload(true)

           });
         }
         else{
				$ionicLoading.hide();
                 var referesh= $ionicPopup.alert({
                   title: 'Please try again',
                   template: 'Unable to submit request'
                 });
                 referesh.then(function(res) {
                   //$state.go("questions"); //selfie sign page
				   $window.location.reload(true)
                 });
				 }

               });
	}
             }
		$scope.bankSkip=function(){
			//console.log( "service return")	;
		    
			$sessionStorage.clientResponse=1;
			$state.go('verifySuccess');

		}
		$scope.bankTest=function(){
			totalSteps=(myService.myFunction(00001) ).length;
			console.log(totalSteps + "service return")	;
			$sessionStorage.clientResponse=3;
			$state.go('verifySuccess');

		}
    })



/*for uploading the bank details*/
/*  Old sign up flow
  .controller('bankDetailsCTRL',function($scope,$state,$sessionStorage,bankDetailsService,$ionicPopup,$ionicLoading,$window){
    $scope.accountTypeOptions = [
    { name: 'Savings', value: 'SB_New' },
    { name: 'Current', value: 'CA_new' }
    ];

    $scope.accountType = {type : $scope.accountTypeOptions[0].value};

    $scope.test=function(dData){
		console.log(dData);
		console.log(dData.ifsc);
		console.log(dData.accNo);
		}
    $scope.bankUpload=function(bankData){
		if(bankData.$valid){
        var bank = JSON.parse(JSON.stringify({}));
		$ionicLoading.show({templateUrl:"templates/loading.html"});
            bank.clientCode=$sessionStorage.SessionClientCode;
            //bank.kyphCode="CRN23919";
            bank.bankAccNo= $scope.accNumber //bank account number
            bank.ifscCode= $scope.IFSC_code//ifsc Code
            bank.accountType= $scope.accountType.type//savings type either savings or personal
            bank.updateNach= "N" //either yes or no
            bank=JSON.stringify(bank);
			console.log(bank);
               bankDetailsService.save(bank,function(data){
                 if(data.responseCode == "Cali_SUC_1030") {
                   $ionicLoading.hide();
                   $state.go("questions");//after selfie image
                 }

                 else {
				 console.log(data.responseCode);
					$ionicLoading.hide();
                   var refer= $ionicPopup.alert({
                     title: 'Upload Error',
                     template: 'Please try again'
                   });

                   refer.then(function(res) {
                     $window.location.reload(true)

                   });
                 }

               },function(error){

                 $ionicLoading.hide();
				 if(error.data.responseCode == "Cali_ERR_2021"){
					$ionicLoading.hide();
                   var ifsc_error= $ionicPopup.alert({
                     title: 'IFSC Code invalid',
                     template: 'Please try again'
                   });

                   ifsc_error.then(function(res) {
                     $window.location.reload(true)

                   });
                 }
				 else if(error.data.responseCode == "Cali_ERR_2035"){
           $ionicLoading.hide();
           var bankdetails_error= $ionicPopup.alert({
             title: 'Account Number Duplicate',
             template: 'Please try again'
           });

           bankdetails_error.then(function(res) {
             $window.location.reload(true)

           });
         }
         else{
				$ionicLoading.hide();
                 var referesh= $ionicPopup.alert({
                   title: 'Please try again',
                   template: 'Unable to submit request'
                 });
                 referesh.then(function(res) {
                   //$state.go("questions"); //selfie sign page
				   $window.location.reload(true)
                 });
				 }

               });
	}
             }
		$scope.bankSkip=function(){
			$state.go('questions');

		}
    })
*/
  /*forgot pin controller*/
    .controller('forgotPinCtrl', function($scope,$sessionStorage,$http,$state,$ionicPopup) {
        $scope.resetPin=function(change) {
          $scope.forget5 = JSON.parse(forgotPin2(change));
          $scope.forget5.mobileNumber = JSON.stringify($sessionStorage.forgotPinPhone);
          var forgotpinPass = JSON.stringify($scope.forget5);
          console.log(forgotpinPass + 'string');
          $http.post('http://205.147.99.55:8080/WealthWeb/ws/clientFcps/setNewPassword', forgotpinPass).success(function(data){
            console.log(data+'response');
            if(data.responseCode=="Cali_SUC_1030"){

              var popup= $ionicPopup.alert({
                title: 'PIN Change status',
                template: 'PIN Changed Successfully'
              });

              popup.then(function(res) {
                $state.go("login");
              });
            }
			else {
				$ionicPopup.alert({
                title: 'PIN Change status',
                template: 'PIN Change UnSuccessful'
				});
				popup.then(function(res) {
                $state.go("login");
              });
			}


          }).error(function(data){
            {
              console.log("Error");
              $ionicPopup.alert({
                title: 'PIN Change status',
                template: 'PIN Changed UnSuccessfully'
              });
            }
          });

        }
        var  forgotPin2 = function(change2){
            return JSON.stringify(change2)
        }



})
/*For session timeout*/
    .controller('EventsCtrl', function($scope, Idle,$ionicPopup) {
    $scope.events = [];

    $scope.$on('IdleStart', function() {
        // the user appears to have gone idle
        console.log("Start");
    });

    $scope.$on('IdleWarn', function(e, countdown) {
        console.log("Warning");
        // follows after the IdleStart event, but includes a countdown until the user is considered timed out
        // the countdown arg is the number of seconds remaining until then.
        // you can change the title or display a warning dialog from here.
        // you can let them resume their session by calling Idle.watch()
        alert('You are about to be logged out');
        Idle.watch();
    });

    $scope.$on('IdleTimeout', function() {
        // the user has timed out (meaning idleDuration + timeout has passed without any activity)
        // this is where you'd log them
        console.log("Signout");
        $ionicPopup.alert({
                        title: 'Timeout',
                        template: 'You will be logged out'
                    });
    });

    $scope.$on('IdleEnd', function() {
        // the user has come back from AFK and is doing stuff. if you are warning them, you can use this to hide the dialog
    });

    $scope.$on('Keepalive', function() {
        // do something to keep the user's session alive
    });

})


/*google analytics for all pages including trackview,trackevent and transaction*/
.controller('googleanalytics',function($scope){
  /*$cordovaGoogleAnalytics.setUserId('finoZen');
  $cordovaGoogleAnalytics.trackView('login');
  $cordovaGoogleAnalytics.trackView('invite');
  $cordovaGoogleAnalytics.trackView('terms');
  $cordovaGoogleAnalytics.trackView('tabsController');
  $cordovaGoogleAnalytics.trackView('tabsController.recentTransactions');
  $cordovaGoogleAnalytics.trackView('faq');
  $cordovaGoogleAnalytics.trackView('invest');
  $cordovaGoogleAnalytics.trackView('withdraw');
  $cordovaGoogleAnalytics.trackView('inviteCtrl');
  $cordovaGoogleAnalytics.addTransactionItem(
    'mfBuyOder', 'Fluffy Pink Bunnies', '0001', 'Reliance mutual fund', '100', '1', 'INR'
  );
  //$cordovaGoogleAnalytics.trackEvent('swipe', 'Video Load Time', 'Gone With the Wind', 100);*/
})

/*Nach Mandate check*/
  .controller('nachCTRL',function($scope,$sessionStorage,$state,$timeout){
    console.log('entered');
    $scope.nach=function(){
      if ($sessionStorage.nachStatus == 'Y') {
        $state.go('tabsController.recentTransactions'); //success page$timeout
        $timeout(function () {
          $state.go('tabsController.summaryPage')
        }, 5000);
      }
      else {
        console.log('this is working');
      }
    }
  })
    .controller('selectedLanguageCtrl', function($scope,$translate,$state,$localStorage,$ionicLoading,$window) {
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
	$scope.clientLanguage = {type : $scope.clientLanguageOptions[$localStorage.language-1].value};
			$scope.changeLang=function(){
				console.log($scope.clientLanguage.type);
				$localStorage.language = $scope.clientLanguage.type;
				$translate.use($localStorage.language);
				$ionicLoading.show();
				//$state.go('tabsController.recentTransactions', {}, {reload: true});
				//$window.location.reload(true);
				history.go(-1);
				$ionicLoading.hide();
			}


    })

      //contacts
      .controller('contacts',function($scope,$window,$ionicPopup,$cordovaContacts){
        $scope.getcontacts=function(){
          $cordovaContacts.find({filter:''}).then(function(result){
            $scope.contacts=result;
            console.log(contacts+ "contacts");
          },
          function(error){
            var con=$ionicPopup.alert({
              title: 'Seems you need more fiends',
              template: 'Give it another try'
            });
            log.then(function(res) {
              $window.reload(true);
            });
          })
        }
      })


  //   language selection at pop up
    .controller('langCTRL',function($scope,$localStorage,$ionicPopup,$ionicPlatform,$state,$translate) {
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
	$scope.clientLanguage = {type : $scope.clientLanguageOptions[$localStorage.language-1].value};
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
        }
			$translate.use($localStorage.language);
            //$state.go("login");
    })
