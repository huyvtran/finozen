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
    .controller('signoutCtrl',function($scope,$state,$ionicHistory,$timeout){

        $scope.signOut = function(){
            $state.go('login')
            $timeout(function () {
                $ionicHistory.clearCache();
                $ionicHistory.clearHistory();
            },100)
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
console.log(data);
        }
        var  forgotPin2 = function(change2){
            return JSON.stringify(change2)
        }
    })

    .controller('EventsCtrl', function($scope, Idle) {
    $scope.events = [];

    $scope.$on('IdleStart', function() {
        // the user appears to have gone idle
    });

    $scope.$on('IdleWarn', function(e, countdown) {
        // follows after the IdleStart event, but includes a countdown until the user is considered timed out
        // the countdown arg is the number of seconds remaining until then.
        // you can change the title or display a warning dialog from here.
        // you can let them resume their session by calling Idle.watch()
    });

    $scope.$on('IdleTimeout', function() {
        // the user has timed out (meaning idleDuration + timeout has passed without any activity)
        // this is where you'd log them
    });

    $scope.$on('IdleEnd', function() {
        // the user has come back from AFK and is doing stuff. if you are warning them, you can use this to hide the dialog
    });

    $scope.$on('Keepalive', function() {
        // do something to keep the user's session alive
    });

})

