angular.module('app.subcontrollerTwo', [])

  .controller('TestCtrl', function($scope, $ionicLoading) {

   $scope.showLoading = function() {
      $ionicLoading.show();
   };

   $scope.hideLoading = function(){
      $ionicLoading.hide();
   };
});