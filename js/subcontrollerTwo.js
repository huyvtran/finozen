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
                        title: 'Password Change status',
                        template: 'Password Changed Successfully'
                    });

                    popup.then(function(res) {
                        $state.go("account");
                    });

                    //



                }
                else {
                    console.log("Error");
                    $ionicPopup.alert({
                        title: 'Password Change status',
                        template: 'Password Changed UnSuccessfully'
                    });
                }
            },function(error){
                console.log("eror");

            });

        }

    })

    /*for destroying the session storage*/
    .controller('signoutCtrl',function($scope,$sessionStorage,$state){
        $scope.signOut = function(){
            console.log('session destroyed');
            $localStorage.$reset();
            console.log('SessionIdstorage');
            $state.go('login');
        }

    })


    .controller('forgotPinCtrl', function($scope,$sessionStorage,$http) {
        $scope.resetPin=function(change){
            $scope.forget5 = JSON.parse(forgotPin2(change));
            $scope.forget5.forgotpin=$sessionStorage.forgotPinPhone;
            console.log($scope.forget5);
            var forgotpinPass=JSON.stringify($scope.forget5);
            console.log(forgotpinPass+'string');
            $http.post('http://205.147.99.55:8080/WealthWeb/ws/secure/clientFcps/setNewPassword','forgotpinPass');

        }
        var  forgotPin2 = function(change2){
            return JSON.stringify(change2)
        }
    })
