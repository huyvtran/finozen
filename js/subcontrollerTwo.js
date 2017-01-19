angular.module('app.subcontrollerTwo', [])


    .controller('changeCtrl', function(changePinService,$scope,$sessionStorage,$ionicPopup,$state,$ionicLoading){

        $scope.resetPin=function(changePinForm){

            changePinForm.clientCode=$sessionStorage.SessionClientCode;
            changePinForm=JSON.stringify(changePinForm);
            console.log(changePinForm + " form data");
//changePinService.changePin(changePinForm);
            changePinService.save(changePinForm,function(data){
				$ionicLoading.show({templateUrl:"templates/loading.html"});
                console.log(data);
                if(data.responseCode == "Cali_SUC_1030") {
$ionicLoading.hide();

                    var popup= $ionicPopup.alert({
                        title: 'Password Change status',
                        template: 'Password Changed Successfully'
                    });

                    popup.then(function(res) {
                        $state.go("account");
                    });
                }
                else {
					$ionicLoading.hide();
                    console.log("Error");
                    $ionicPopup.alert({
                        title: 'Password Change status',
                        template: 'Password Change Unsuccessful'
                    });
					popup.then(function(res) {
                        $state.go("account");
                    });
                }
            },function(error){
				$ionicLoading.hide();
                console.log("eror");

            });

        }

    })

        /*for sending the pan Image*/
        .controller('panImageCTRL',function(panImageService,$cordovaCamera,$scope,$sessionStorage,$state,$ionicPopup,$ionicLoading,$window,myService,proofRedirectFactory){
			$scope.diasbleSkip=$sessionStorage.disbledSkip;
//			$scope.addressRetake=function(){ window.location.reload(true);}
            $scope.selfieGo=function(){
				var nextSteps=myService.myFunction($sessionStorage.docStatus);
				var nextStepsUrl=proofRedirectFactory.name;
				$sessionStorage.stepCount=$sessionStorage.stepCount+1;
				var totalSteps=myService.myFunction($sessionStorage.docStatus).length;
				console.log($sessionStorage.stepCount + " next state    " +  totalSteps +"  total steps ");
				//if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
				//else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
				console.log(nextSteps[$sessionStorage.stepCount]  + " next state" );
					if(nextSteps[$sessionStorage.stepCount]==2 && nextSteps[$sessionStorage.stepCount+1]==3){$sessionStorage.stepCount=$sessionStorage.stepCount+1; $state.go('imageSelection');}
						else if(nextSteps[$sessionStorage.stepCount]==2 || nextSteps[$sessionStorage.stepCount]==3){$state.go('imageSelection');}
						else{
							console.log($sessionStorage.stepCount + " next state    " +  totalSteps +"  total steps ");
							if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
							else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
						}
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
        $ionicLoading.show({templateUrl:"templates/loadingImage.html",duration: 5000});
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

						var nextSteps=myService.myFunction($sessionStorage.docStatus);
						var nextStepsUrl=proofRedirectFactory.name;
						$sessionStorage.stepCount=$sessionStorage.stepCount+1;
						var totalSteps=myService.myFunction($sessionStorage.docStatus).length;
						console.log($sessionStorage.stepCount + " next state    " +  totalSteps +"  total steps ");
						//if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
						//else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
						console.log(nextSteps[$sessionStorage.stepCount]  + " next state" );
						if(nextSteps[$sessionStorage.stepCount]==2 && nextSteps[$sessionStorage.stepCount+1]==3){$sessionStorage.stepCount=$sessionStorage.stepCount+1; $state.go('imageSelection');}
						else if(nextSteps[$sessionStorage.stepCount]==2 || nextSteps[$sessionStorage.stepCount]==3){$state.go('imageSelection');}
						else{
							console.log($sessionStorage.stepCount + " next state    " +  totalSteps +"  total steps ");
							if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
							else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
						}
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
			$state.go('feedback');
			//$state.go(nextStepsUrl[5]);
		}
		$scope.signUpload = function() {
      $ionicLoading.show({templateUrl:"templates/loadingImage.html"});
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
					$state.go('feedback');
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
      $ionicLoading.show({templateUrl:"templates/loadingImage.html"});
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
				//	$state.go('ipv');			
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
    .controller('questionsCTRL',function($scope,myService,proofRedirectFactory,questionsService,$sessionStorage,$state,$ionicPopup,$ionicLoading,$window,ionicDatePicker,$filter,$http){
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
		$scope.clientPOB="India";
		
		
		
		
		
		
		

	   $scope.addressTypeOptions = [
		{ name: 'Residential', value: '2' },
		{ name: 'Bussiness', value: '3' },
		{ name: 'Registered Office', value: '4' },
		{ name: 'Residential or Bussiness', value: '1' }
		];
		$scope.clientAddressType = {type : $scope.addressTypeOptions[0].value};


	   $scope.SOWOptions = [
		{ name: 'Salary', value: '01' },
		{ name: 'Business Income', value: '02' },
		{ name: 'Gift', value: '03' },
		{ name: 'Ancestral Property', value: '04' },
		{ name: 'Rental Income', value: '05' },
		{ name: 'Prize Money', value: '06' },
		{ name: 'Royalty', value: '07' },
		{ name: 'Others', value: '08' }
		];

		$scope.clientSOW = {type : $scope.SOWOptions[0].value};


	   $scope.marriageStatusOptions = [
		{ name: 'Married', value: 'M' },
		{ name: 'Unmarried', value: 'U' }
		];

		$scope.marriageStatus = {type : $scope.marriageStatusOptions[1].value};


	   $scope.nationalityOptions = [
		{ name: 'Indian', value: 'I' },
		{ name: 'Others', value: 'O' }
		];

		$scope.clientNationality = {type : $scope.nationalityOptions[0].value};



$http.get('data/country.json').then(function(res){
  $scope.countryOptions = res.data;  
	$scope.clientCountry = {type : $scope.countryOptions[105].value};  
	$scope.taxRes = {type : $scope.countryOptions[105].value};
});


		$scope.question=function(){
			if($sessionStorage.SessionStatus=="T"){$state.go('activeClientStatus');}
			else if($sessionStorage.SessionStatus=="I" || $sessionStorage.SessionStatus==null || $sessionStorage.SessionStatus==undefined ){$state.go('inactiveClient');}
			else{$state.go('verifySuccess');}
		}
		
		//for datepicker
		$scope.selectedDate = new Date();
		dateof = $filter('date')($scope.selectedDate,'dd/MM/yyyy');
		console.log(dateof);
		$sessionStorage.dob=dateof;
    var ipObj1 = {
      callback: function (val) {  //Mandatory
        console.log('Return value from the datepicker modal is : ' + val, new Date(val));
		$scope.selectedDate = new Date(val);
		var dateof= val;
		dateof = $filter('date')(val,'dd/MM/yyyy');
		console.log(dateof);
		$sessionStorage.dob=dateof;
		console.log($sessionStorage.dob);
      },
      disabledDates: [            //Optional
        new Date(),
        new Date('Wednesday, August 12, 2015'),
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

    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    };
		
      $scope.questionUpload = function(){
		$ionicLoading.show({templateUrl:"templates/loading.html"});
		var questUpload=JSON.parse(JSON.stringify({}));
		questUpload.kyphCode = $sessionStorage.SessionClientCode;
		questUpload.income=$scope.clientIncome.type; // income level from 31-36
		questUpload.occup=$scope.clientOccupation.type; // for the occupation
		questUpload.pep=$scope.clientPEP.type; //for the pep status either Y or N
		questUpload.birthPlace=$scope.clientPOB; //for the pep status either Y or N
		questUpload.birthCountry=$scope.clientCountry.type; //for the pep status either Y or N
		questUpload.addressType=$scope.clientAddressType.type; //for the pep status either Y or N
		questUpload.taxResiCountry=$scope.taxRes.type; //for the pep status either Y or N
		questUpload.wealthSource=$scope.clientSOW.type; //for the pep status either Y or N
		questUpload.maritalStatus=$scope.marriageStatus.type; //for the pep status either Y or N
		questUpload.nationality=$scope.clientNationality.type; //for the pep status either Y or N
		questUpload.resStatus="Individual"; // for the resdential status hardcoding it to individual
		questUpload.dob=$sessionStorage.dob // for the client's date of birth
		questUpload = JSON.stringify(questUpload);
		console.log($scope.clientIncome.type + " clientIncome");
		console.log($scope.clientPEP.type + " clientPEP");
		console.log($scope.clientOccupation.type + " clientOccupation");
		console.log(questUpload + " questUpload");

        questionsService.save(questUpload,function(data){
				$ionicLoading.hide();
				// routing to bank
				/*if($sessionStorage.SessionStatus=="T"){$state.go('activeClientStatus');}
				else if($sessionStorage.SessionStatus=="I" || $sessionStorage.SessionStatus==null || $sessionStorage.SessionStatus==undefined ){$state.go('inactiveClient');}
				else{$state.go('verifySuccess');}*/
                $state.go('bank');
			//}
			},function(error){
				$ionicLoading.hide();			//comment this line if api is working
				
				// routing to bank
				
				//$state.go('signature');			//comment this line if api is working
				/*if($sessionStorage.SessionStatus=="T"){$state.go('activeClientStatus');}
				else if($sessionStorage.SessionStatus=="I" || $sessionStorage.SessionStatus==null || $sessionStorage.SessionStatus==undefined ){$state.go('inactiveClient');}
				else{$state.go('verifySuccess');}*/
				$state.go('bank');
                   
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
		var nextSteps=myService.myFunction($sessionStorage.docStatus);
		var nextStepsUrl=proofRedirectFactory.name;
		//$sessionStorage.stepCount=$sessionStorage.stepCount+1;
		var totalSteps=myService.myFunction($sessionStorage.docStatus).length;
		//if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
		//else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
		console.log(nextSteps[$sessionStorage.stepCount]  + " next state" );


		if(nextSteps[$sessionStorage.stepCount]==2 || nextSteps[$sessionStorage.stepCount]==3){
			$sessionStorage.stepCount=$sessionStorage.stepCount+1;
			if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
			else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
		}
		else{
				if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
			else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
		}

	}
	$scope.takeImage=function(){
		if($scope.choice!==undefined) {
		//console.log($scope.choice + "   selected choice");
		$sessionStorage.addressChoice=$scope.choice;
		$state.go('addressProofImageSingle');
		}
	}
})

	.controller('addressFrontCTRL',function(panImageService,myService,proofRedirectFactory,$cordovaCamera,$scope,$sessionStorage,$state,$ionicPopup,$ionicLoading,$window){
		$scope.diasbleSkip=$sessionStorage.disbledSkip;
		//console.log($sessionStorage.addressChoice + 'fromwhat page your coming');
				//$scope.addressRetake=function(){ window.location.reload(true);}
				$scope.bank=function(){
					$state.go('addressProofImage');
				}
				if($sessionStorage.addressChoice == 'AA'){$scope.cimageFront="img/AADHAR_FRONT.jpg"; $scope.cimageBack="img/AADHAR_BACK.jpg";}
				else if($sessionStorage.addressChoice == 'PP'){$scope.cimageFront="img/Passport_front.jpg"; }
				else if($sessionStorage.addressChoice == 'VO'){$scope.cimageFront="img/VOTER_FRONT.jpg";}
			    else if($sessionStorage.addressChoice == 'DL'){$scope.cimageFront="img/DL.jpg";}
				else if($sessionStorage.addressChoice == 'RC'){$scope.cimageFront="img/ration1.jpg";}
				else if($sessionStorage.addressChoice == 'GA'){$scope.cimageFront="img/sample.png";}

		//else{$scope.cimageFront="img/DL.jpg";}
		$scope.addressFrontImg=function(){
		//console.log($sessionStorage.addressChoice);
		//$scope.addressImage=$scope.cimageFront;
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
			$ionicLoading.show({templateUrl:"templates/loadingImage.html"});
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
						$state.go('addressProofImage');
						/*
						var nextSteps=myService.myFunction($sessionStorage.docStatus);
						var nextStepsUrl=proofRedirectFactory.name;
						$sessionStorage.stepCount=$sessionStorage.stepCount+1;
						var totalSteps=myService.myFunction($sessionStorage.docStatus).length;
				if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
						else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}*/
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


	.controller('addressBackCTRL',function(panImageService,myService,proofRedirectFactory,$cordovaCamera,$scope,$sessionStorage,$state,$ionicPopup,$ionicLoading,$window){
		//console.log($sessionStorage.addressChoice + 'fromwhat page your coming');
		$scope.bank=function(){
		var nextSteps=myService.myFunction($sessionStorage.docStatus);
		var nextStepsUrl=proofRedirectFactory.name;
		var totalSteps=myService.myFunction($sessionStorage.docStatus).length;
		console.log(nextSteps[$sessionStorage.stepCount-1]  + " previous state" );
		console.log(nextSteps[$sessionStorage.stepCount]  + " current state" );
		console.log(nextSteps[$sessionStorage.stepCount+1]  + " next state" );
		console.log(totalSteps + " totalSteps" );
		console.log($sessionStorage.stepCount + " $sessionStorage.stepCount" );
		$sessionStorage.stepCount=$sessionStorage.stepCount+1;
		if(nextSteps[$sessionStorage.stepCount]==3 || nextSteps[$sessionStorage.stepCount]==4 ){
			console.log(nextSteps[$sessionStorage.stepCount]  + " next state" );
				if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
			else{
				$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);

			}
		}
		else{
				if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
			else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
		}

		}
				if($sessionStorage.addressChoice == 'AA'){$scope.cimageBack="img/AADHAR_BACK.jpg";}
				else if($sessionStorage.addressChoice == 'PP'){$scope.cimageBack="img/Passport_back.jpg";}
				else if($sessionStorage.addressChoice == 'VO'){$scope.cimageBack="img/VOTER_BACK.jpg";}
			    else if($sessionStorage.addressChoice == 'DL'){$scope.cimageBack="img/DL_back.png";}
				else if($sessionStorage.addressChoice == 'RC'){ $scope.cimageBack="img/ration2.jpg";}
				else if($sessionStorage.addressChoice == 'GA'){$scope.cimageFront="img/sample.png";}

		$scope.addressBackImg=function(){
		//$scope.cimage2=$scope.cimageBack;
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
			$ionicLoading.show({templateUrl:"templates/loadingImage.html"});
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
				console.log(data);
                if(data.responseCode == "Cali_SUC_1030") {
                    $ionicLoading.hide();
					var nextSteps=myService.myFunction($sessionStorage.docStatus);
					var nextStepsUrl=proofRedirectFactory.name;
					var totalSteps=myService.myFunction($sessionStorage.docStatus).length;
					console.log(nextSteps[$sessionStorage.stepCount]  + " next state" );
					$sessionStorage.stepCount=$sessionStorage.stepCount+1;
					if(nextSteps[$sessionStorage.stepCount]==3 || nextSteps[$sessionStorage.stepCount]==4 ){
						console.log(nextSteps[$sessionStorage.stepCount]  + " next state" );
				if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
						else{
							$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);

						}
					}
					else{
				if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
						else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
					}
					/*
				if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
					else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}

					*/

					/*
					var nextSteps=myService.myFunction($sessionStorage.docStatus);
					var nextStepsUrl=proofRedirectFactory.name;
					$sessionStorage.stepCount=$sessionStorage.stepCount+1;
					var totalSteps=myService.myFunction($sessionStorage.docStatus).length;
				if(totalSteps==$sessionStorage.stepCount){confirmation=1; console.log("iam going");  $state.go('feedback');}
					else{$state.go(nextStepsUrl[nextSteps[$sessionStorage.stepCount]]);}
					*/
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
				
				//$state.go('login');
           //navigator.app.exitApp();
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

  .controller('bankDetailsCTRL',function($scope,$state,$sessionStorage,bankDetailsService,$ionicPopup,$ionicLoading,$window,proofRedirectFactory,myService,getZBFService,relianceInstantZBF,$location){
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
            bank.panNumber= $scope.panNo //pan number
            bank.bankAccNo= $scope.accNumber //bank account number
            bank.ifscCode= $scope.IFSC_code//ifsc Code
            bank.accountType= $scope.accountType.type//savings type either savings or personal
            bank.updateNach= "N" //either yes or no
            bank=JSON.stringify(bank);
			console.log(bank);
               bankDetailsService.save(bank,function(data){
                 if(data.responseCode == "Cali_SUC_1030") {
                   $ionicLoading.hide();
				  $sessionStorage.docStatus=data.jsonStr.docStatus; // document status received on bank submittion of bank details  (have to update value according to response)
				  $sessionStorage.SessionStatus=data.jsonStr.activeStatus;
				  console.log($sessionStorage.SessionStatus+ "   bank submit $sessionStorage.SessionStatus");
				  console.log($sessionStorage.docStatus+ "   bank submit $sessionStorage.docStatus");
								console.log($sessionStorage.SessionStatus + "    $sessionStorage.SessionStatus");
			if($sessionStorage.SessionStatus=="T"){$state.go('activeClientStatus');}
				  else if($sessionStorage.SessionStatus=="I" || $sessionStorage.SessionStatus==null || $sessionStorage.SessionStatus=="null" || $sessionStorage.SessionStatus==undefined ){$state.go('inactiveClient');}
				  else{$state.go('verifySuccess');}
				
                 }

                 else {
				 console.log(data.responseCode);
					$ionicLoading.hide();
					console.log("  response");
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

				 else if(error.data.responseCode == "Cali_ERR_2064"){
				   $ionicLoading.hide();
				   var bankdetails_error= $ionicPopup.alert({
					 title: 'PAN Number Invalid',
					 template: 'Please try again'
				   });

				   bankdetails_error.then(function(res) {
					 $window.location.reload(true)

				   });
				 }
				 else if(error.data.responseCode == "Cali_ERR_2065"){
				   $ionicLoading.hide();
				   var bankdetails_error= $ionicPopup.alert({
					 title: 'PAN Number Duplicate',
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
			console.log($sessionStorage.SessionStatus + "    $sessionStorage.SessionStatus");
			if($sessionStorage.SessionStatus=="T"){$state.go('activeClientStatus');}
				  else if($sessionStorage.SessionStatus=="I" || $sessionStorage.SessionStatus==null || $sessionStorage.SessionStatus=="null" || $sessionStorage.SessionStatus==undefined ){$state.go('inactiveClient');}
				  else{$state.go('verifySuccess');}
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
  /*forgot Password controller*/
    .controller('forgotPinCtrl', function($scope,$sessionStorage,$http,$state,$ionicPopup,$timeout,$ionicLoading) {
        $scope.resetPin=function(change,confirmNewPin) {
			console.log(change.newPassword);
			console.log(confirmNewPin);
			console.log(change.newPassword==confirmNewPin);
		}
        $scope.resetPin2=function(change,confirmNewPin) {
		  if(change.newPassword==confirmNewPin){
			  $ionicLoading.show({templateUrl:"templates/loading.html"});
          $scope.forget5 = JSON.parse(forgotPin2(change));
          $scope.forget5.mobileNumber = JSON.stringify($sessionStorage.forgotPinPhone);
          var forgotpinPass = JSON.stringify($scope.forget5);
          console.log(forgotpinPass + 'string');
          $http.post('https://finotrust.com/WealthWeb/ws/clientFcps/setNewPassword', forgotpinPass).success(function(data){
            console.log(data+'response');
            if(data.responseCode=="Cali_SUC_1030"){
			  $ionicLoading.hide();
              var popup= $ionicPopup.alert({
                title: 'Password Change status',
                template: 'Password Changed Successfully'
              });

              popup.then(function(res) {
                $state.go("login");
              });
            }
			else {
				$ionicLoading.hide();
				$ionicPopup.alert({
                title: 'Password Change status',
                template: 'Password Change UnSuccessful'
				});
				popup.then(function(res) {
                $state.go("login");
              });
			}


          }).error(function(data){
            {
              console.log("Error");
              $ionicPopup.alert({
                title: 'Password Change status',
                template: 'Password Changed UnSuccessfully'
              });
            }
          });
		  }
		  else{
		$timeout(function () {
         $scope.pinMatch="Entered password didn't match"
        }, 3000);
		  }
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
    'mfBuyOder', 'Fluffy Pink Bunnies', '0001', 'Reliance mutual fund', '100', '1', 'Rs'
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
      .controller('contactsCtrl',function($scope,$window,$ionicPopup,$cordovaContacts,$ionicLoading,$sessionStorage){
		  $ionicLoading.show({templateUrl:"templates/loading.html"});

        //hasPhoneNumber: true shows only the contacts who have a phone number

          $cordovaContacts.find({filter:'',hasPhoneNumber:true}).then(function(result){
			$ionicLoading.hide();
            $scope.contacts=result;
            console.log($scope.contacts.phoneNumbers+ "contacts");
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

		 /*
		     navigator.contactsPhoneNumbers.list(function(result) {
      console.log(result.length + ' contacts found');
      for(var i = 0; i < result.length; i++) {
         console.log(result[i].id + " - " + result[i].displayName);
         for(var j = 0; j < result[i].phoneNumbers.length; j++) {
            $scope.contacts = result[i].phoneNumbers[j];
            console.log("===> " + $scope.contacts.type + "  " + $scope.contacts.number + " (" + $scope.contacts.normalizedNumber+ ")");
         }
      }
   }, function(error) {
      console.error(error);
   });

   */

		  $scope.selectedIndex=function(valu){
			console.log($scope.contacts[valu].phoneNumbers[0].value + " contact value selected");

			window.plugins.socialsharing.shareViaSMS({'message':'Start investing at FinoZen with just Rs 500 and watch your money grow everyday. Use my phone number '+ $sessionStorage.SessionMobNo+' as referral code to earn Rs 100 after your 1st investment.', 'subject':'The subject', 'image':'https://www.google.nl/images/srpr/logo4w.png'}, $scope.contacts[valu].phoneNumbers[0].value, $scope.contacts[valu].phoneNumbers[0].value, function(msg) {console.log('ok: ' + msg)}, function(msg) {console.log('error: ' + msg)})
		  }

		  $scope.pickContact=function(pickUp){
					console.log('Error: ' + $scope.contacts.phoneNumbers);
					console.log('Error: ' + $scope.contacts.phoneNumbers);
			  navigator.contacts.pickContact(function(contact){
					console.log('The following contact has been selected:' + JSON.stringify(contact));
				},function(err){
					console.log('Error: ' + err);
				});
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
