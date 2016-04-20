angular.module('app.subcontrollerTwo', [])

    .controller('changeCtrl', function(changePinService,$scope,$sessionStorage,$ionicPopup,$state){

        $scope.forgotPin=function(changePinForm){

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
        .controller('panImageCTRL',function(panImageService,$cordovaCamera,$scope,$sessionStorage,$state,$ionicPopup){
            $scope.selfieGo=function(){$state.go('selfie');}

			$scope.takeit1=function(){
			$scope.cimage1="img/no_leaves.png";
			  document.addEventListener("deviceready", function () {
				var options = {
				  quality: 50,
				  destinationType: Camera.DestinationType.DATA_URL,
				  sourceType: Camera.PictureSourceType.CAMERA,
				  allowEdit: true,
				  encodingType: Camera.EncodingType.JPEG,
				  targetWidth: 300,
				  targetHeight: 400,
				  cameraDirection:1,
				  popoverOptions: CameraPopoverOptions,
				  saveToPhotoAlbum: false,
				  correctOrientation:true
				};

				$cordovaCamera.getPicture(options).then(function(imageData) {
				  $scope.panData = "data:image/jpeg;base64," + imageData;
				  $scope.pan = "data:image/jpeg;base64," + imageData;
				  $scope.cimage1 = "data:image/jpeg;base64," + imageData;
				  $sessionStorage.panimage=imageData;
				}, function(err) {
				  // error
				});

			  }, false);
			}
			$scope.PanImage = function() {
				$scope.uploadPan=JSON.parse(JSON.stringify({}));
                //$scope.uploadPan.kyphCode = $sessionStorage.SessionClientCode;
                $scope.uploadPan.kyphCode = "CRN23919";
                $scope.uploadPan.imageData = $scope.panData ;//replace with session storage of pan
                //$scope.uploadPan.imageData = "fffd";//replace with session storage of pan
                $scope.uploadPan.imageType = 'PA';
                $scope.uploadPan.addressType = '';
                $scope.uploadPan = JSON.stringify($scope.uploadPan);
                console.log($scope.uploadPan + 'pan json data');
                panImageService.save($scope.uploadPan,function(data){
                    console.log(data);
                    if(data.responseCode == "Cali_SUC_1030") {


console.log("success");

                            $state.go("selfie");//after pan image

                    }
                    else {
                        console.log("Error");
                        $ionicPopup.alert({
                            title: 'Upload Error',
                            template: 'Please try again'
                        });
                        popup.then(function(res) {
                            $state.go(""); //pan image page
                        });
                    }
                },function(error){
                    $ionicPopup.alert({
                        title: 'Your floating away',
                        template: 'Please try again'
                    });
                    popup.then(function(res) {
                        $state.go(""); //pan image page
                    });

                });
            }
        })


            /*for signature image*/
    .controller('signImageCTRL',function(panImageService,$cordovaCamera,$scope,$sessionStorage,$state,$ionicPopup){
        var canvas = document.getElementById('signatureCanvas');
		var signaturePad = new SignaturePad(canvas);

		$scope.clearCanvas = function() {
			signaturePad.clear();
		}

		$scope.saveCanvas = function() {
			var sigImg = signaturePad.toDataURL();
			$scope.signature = sigImg;
		}
		$scope.signatureFunction=function(){$state.go('verifySuccess');}


		$scope.signUpload = function() {
			var uploadsign=JSON.parse(JSON.stringify({}));
            //uploadsign.kyphCode = $sessionStorage.SessionClientCode;
            uploadsign.kyphCode = "CRN23919";;
            uploadsign.imageData = $scope.signature;//replace with session storage of sign
            uploadsign.imageType = 'SI';
            uploadsign.addressType = '';
            uploadsign = JSON.stringify(uploadsign);
            console.log(uploadsign + 'pan json data');
            panImageService.save(uploadsign,function(data){
                console.log(data);
                if(data.responseCode == "Cali_SUC_1030") {
					$state.go("verifySuccess");//after sign image

                }
                else {
                    console.log("Error");
                    $ionicPopup.alert({
                        title: 'Upload Error',
                        template: 'Please try again'
                    });
                    popup.then(function(res) {
                        $state.go(""); // sign page
                    });
                }
            },function(error){
                $ionicPopup.alert({
                    title: 'Your floating away',
                    template: 'Please try again'
                });
                popup.then(function(res) {
                    $state.go(""); // sign page
                });

            });
        }
    })

    /*for selfie image*/
    .controller('selfieImageCTRL',function(panImageService,$cordovaCamera,$scope,$sessionStorage,$state,$ionicPopup){
		$scope.addressSelect=function(){$state.go('imageSelection'); }
		$scope.selfieImage=function(){
		$scope.selfie="img/no_leaves.png";
		  document.addEventListener("deviceready", function () {
			$scope.options = {
			  quality: 100,
			  destinationType: Camera.DestinationType.DATA_URL,
			  sourceType: Camera.PictureSourceType.CAMERA,
			  allowEdit: true,
			  encodingType: Camera.EncodingType.JPEG,
			  targetWidth: 300,
			  targetHeight: 400,
			  popoverOptions: CameraPopoverOptions,
			  saveToPhotoAlbum: false,
			  correctOrientation:true
			};

			$cordovaCamera.getPicture($scope.options).then(function(imageData) {
			  $scope.selfieData = imageData;
			  $scope.selfie = "data:image/jpeg;base64," + imageData;
			}, function(err) {
			  // error
			});

		  }, false);
		}

		$scope.selfieUpload = function() {
			var uploadselfie=JSON.parse(JSON.stringify({}));
            //uploadselfie.kyphCode = $sessionStorage.SessionClientCode;
            uploadselfie.kyphCode = "CRN23919";
            uploadselfie.imageData = $scope.selfieData;//replace with session storage of selfie
            //uploadselfie.imageData = "test";//replace with session storage of selfie
            uploadselfie.imageType = 'PH';
            uploadselfie.addressType = '';
            uploadselfie = JSON.stringify(uploadselfie);
            console.log(uploadselfie + 'pan json data');
            panImageService.save(uploadselfie,function(data){
                console.log(data);
                if(data.responseCode == "Cali_SUC_1030") {
					$state.go("imageSelection");//after selfie image

                }
                else {
                    console.log("Error");
                    $ionicPopup.alert({
                        title: 'Upload Error',
                        template: 'Please try again'
                    });
                    popup.then(function(res) {
                        $state.go(""); //selfie sign page
                    });
                }
            },function(error){
                $ionicPopup.alert({
                    title: 'Your floating away',
                    template: 'Please try again'
                });
                popup.then(function(res) {
                    $state.go(""); //selfie sign page
                });

            });
        }
    })

      /*for question's*/
    .controller('questionsCTRL',function(questionsService,$sessionStorage,$state,$ionicPopup,$ionicLoading)
    {
      $scope.questions = function(){
        var questUpload=JSON.parse(({}));
        questUpload.kyphCode=$sessionStorage.clientCode;
        questUpload.income=$sessionStorage.clientActive; // income level from 31-36
        questUpload.occup=$sessionStorage; // for the occupation
        questUpload.pep=$sessionStorage; //for the pep status either Y or N
        questUpload.resStatus="Individual"; // for the resdential status hardcoding it to individual
        questUpload = JSON.stringify(questUpload);

        questionsService.save(questUpload,function(){

          $ionicLoading.show();
          if(data.responseCode == "Cali_SUC_1030") {
            $ionicLoading.hide();
          }
          else {
            console.log("Error");
            $ionicPopup.alert({
              title: 'Upload Error',
              template: 'Please try again'
            });
            $ionicLoading.hide();
            popup.then(function (res) {
              //$state.go(""); // question page
            });
          }
          },function(error){
            $ionicLoading.hide();
            $ionicPopup.alert({
              title: 'Your floating away',
              template: 'Please try again'
            });
            popup.then(function(res) {
              $state.go(""); //question's sign page
            });

          });
        }
      }
    )

    /*for address proof image*/
    .controller('addressImageCTRL',function(panImageService,$cordovaCamera,$scope,$sessionStorage,$state,$ionicPopup,$ionicLoading){
		$scope.takeImageSkip=function(){$state.go('addressProofImage');$sessionStorage.addressChoice=$scope.choice}
		$scope.takeImage=function(){if($scope.choice!==undefined) {$state.go('addressProofImage');$sessionStorage.addressChoice=$scope.choice} }

		$scope.bank=function(){$state.go('bank');}
		$scope.addressFrontImg=function(){
		console.log($sessionStorage.addressChoice);
		$scope.addressImage="img/no_leaves.png";
		document.addEventListener("deviceready", function () {
			var options = {
			  quality: 100,
			  destinationType: Camera.DestinationType.DATA_URL,
			  sourceType: Camera.PictureSourceType.CAMERA,
			  allowEdit: true,
			  encodingType: Camera.EncodingType.JPEG,
			  targetWidth: 300,
			  targetHeight: 400,
			  popoverOptions: CameraPopoverOptions,
			  saveToPhotoAlbum: false,
			  correctOrientation:true
			};

			$cordovaCamera.getPicture(options).then(function(imageData) {
			  $scope.addressImageData = imageData;
			  $scope.addressImage = "data:image/jpeg;base64," + imageData;
			}, function(err) {
			  // error
			});

		  }, false);
		}
		$scope.addressBackImg=function(){
		$scope.addressFront();
		$scope.cimage2="img/no_leaves.png";
		  document.addEventListener("deviceready", function () {
			var options = {
			  quality: 50,
			  destinationType: Camera.DestinationType.DATA_URL,
			  sourceType: Camera.PictureSourceType.CAMERA,
			  allowEdit: true,
			  encodingType: Camera.EncodingType.JPEG,
			  targetWidth: 300,
			  targetHeight: 400,
			  cameraDirection:1,
			  popoverOptions: CameraPopoverOptions,
			  saveToPhotoAlbum: false,
			  correctOrientation:true
			};

			$cordovaCamera.getPicture(options).then(function(imageData) {
			  $scope.addressBackData = imageData;
			  $scope.cimage2 = "data:image/jpeg;base64," + imageData;
			  $sessionStorage.panimage=imageData;
			}, function(err) {
			  // error
			});

		  }, false);
		}

		$scope.addressFront = function() {
			var uploadaddress=JSON.parse(JSON.stringify({}));
            //uploadaddress.kyphCode = $sessionStorage.SessionClientCode;
            uploadaddress.kyphCode = "CRN23919";;
            uploadaddress.imageData = $scope.addressImageData;//replace with session storage of selfie
            //uploadaddress.imageData = "fffd";//replace with session storage of selfie
            uploadaddress.imageType = 'AF';
            uploadaddress.addressType = $sessionStorage.addressChoice; //sessionstorage of addressType
            uploadaddress = JSON.stringify(uploadaddress);
            console.log(uploadaddress + 'pan json data');
            panImageService.save(uploadaddress,function(data){
                console.log(data);
                $ionicLoading.show();
                if(data.responseCode == "Cali_SUC_1030") {
                    $ionicLoading.hide();
                }
                else {
                    console.log("Error");
                    $ionicPopup.alert({
                        title: 'Upload Error',
                        template: 'Please try again'
                    });
                    $ionicLoading.hide();
                    popup.then(function(res) {
                        //$state.go(""); //selfie sign page
                    });
                }
            },function(error){
                $ionicLoading.hide();
                $ionicPopup.alert({
                    title: 'Your floating away',
                    template: 'Please try again'
                });
                popup.then(function(res) {
                    $state.go(""); //selfie sign page
                });

            });
        }

        $scope.addressBack = function() {
			var uploabackdaddress=JSON.parse(JSON.stringify({}));
            //uploabackdaddress.kyphCode = $sessionStorage.SessionClientCode;
            uploabackdaddress.kyphCode = "CRN23919";;
            uploabackdaddress.imageData = $scope.addressBackData;//replace with session storage of selfie
            //uploabackdaddress.imageData = "fffd";//replace with session storage of selfie
            uploabackdaddress.imageType = 'AB';
            uploabackdaddress.addressType = $sessionStorage.addressChoice; //sessionstorage of addressType
            uploabackdaddress = JSON.stringify(uploabackdaddress);
            console.log(uploabackdaddress + 'pan json data');
            panImageService.save(uploabackdaddress,function(data){
                console.log(data);
                $ionicLoading.show();
                if(data.responseCode == "Cali_SUC_1030") {
					$state.go("bank");//after selfie image
                    $ionicLoading.hide();
                }
                else {
                    console.log("Error");
                    $ionicPopup.alert({
                        title: 'Upload Error',
                        template: 'Please try again'
                    });
                    $ionicLoading.hide();
                    popup.then(function(res) {
                        $state.go(""); //selfie sign page
                    });
                }
            },function(error){
                $ionicLoading.hide();
                $ionicPopup.alert({
                    title: 'Your floating away',
                    template: 'Please try again'
                });
                popup.then(function(res) {
                    $state.go(""); //selfie sign page
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
  .controller('bankDetailsCTRL',function($scope,$state,$sessionStorage,bankDetailsService,$ionicPopup,$ionicLoading){

    $scope.bankUpload=function(){
		if($scope.accountType==undefined){$scope.accountType="savings";}
        var bank = JSON.parse(JSON.stringify({}));
            //bank.kyphCode=$sessionStorage.clientCode;
            bank.clientCode="CRN23919";
            bank.bankAccNo= $scope.accNumber //bank account number
            bank.ifscCode= $scope.IFSC_code//ifsc Code
            bank.accountType= $scope.accountType//savings type either savings or personal
            bank.updateNach= "N" //either yes or no
            bank=JSON.stringify(bank);
			console.log(bank)
               bankDetailsService.save(bank,function(data){
                 console.log(data);
                 $ionicLoading.show();
                 if(data.responseCode == "Cali_SUC_1030") {




                   $state.go("questions");//after selfie image
                   $ionicLoading.hide();
                 }
                 else {
                   console.log("Error");
                   $ionicPopup.alert({
                     title: 'Upload Error',
                     template: 'Please try again'
                   });
                   $ionicLoading.hide();
                   popup.then(function(res) {
                     $state.go("questions"); //selfie sign page
                   });
                 }
               },function(error){
                 $ionicLoading.hide();
                 $ionicPopup.alert({
                   title: 'Your floating away',
                   template: 'Please try again'
                 });
                 popup.then(function(res) {
                   $state.go("questions"); //selfie sign page
                 });

               });
             }
		$scope.bankSkip=function(){
			$state.go('questions');

		}
    })

  .controller('adhaarCTRL',function($scope,$http,$ionicPopup,$sessionStorage){
    var adhaarFunc=function(){
      $sessionStorage.adhaar= //data from the page where it is coming from
      $http.post('http://205.147.99.55:8080/WealthWeb/ws/clientFcps/setNewPassword', adhaar).success(function(data){
        console.log(data+'response');
        if(data.responseCode=="Cali_SUC_1030"){

          var popup= $ionicPopup.alert({
            title: 'adhaar Change status',
            template: 'adhaar Changed Successfully'
          });

          popup.then(function(res) {
           // $state.go("login");
          });
        }
        else {
          $ionicPopup.alert({
            title: 'adhaar Change status',
            template: 'adhaar Changed UnSuccessfully'
          });
          popup.then(function(res) {
           // $state.go("login");
          });
        }


      }).error(function(data){
        {
          console.log("Error");
          $ionicPopup.alert({
            title: 'adhaar Change status',
            template: 'adhaar Changed UnSuccessfully'
          });
        }
      });

    }
  })

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

  .controller('adhaarVerification',function($scope,$sessionStorage,$http,$ionicPopup){

    var adhaarVerify=function(){
      $scope.adhaar= JSON.stringify($sessionStorage.adhaar);
      $scope.adhaar= JSON.stringify(otp);
      $http.post('http://205.147.99.55:8080/WealthWeb/ws/clientFcps/setNewPassword', adhaar).success(function(data){
        if(data.responseCode=="Cali_SUC_1030"){

          var popup= $ionicPopup.alert({
            title: 'Verification status',
            template: 'Verification done Successfully'
          });

          popup.then(function(res) {
            //$state.go("login");welcome page
          });
        }
        else {
          $ionicPopup.alert({
            title: 'Verification status',
            template: 'Verification was UnSuccessful'
          });
          popup.then(function(res) {
          });
        }
      }).error(function(data){
        {
          console.log("Error");
          $ionicPopup.alert({
            title: 'Verification status',
            template: 'Their was a problem please try again'
            //$state.go('signup'); give the path name for the last page before welcome page
          });
        }
      });

    }
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


