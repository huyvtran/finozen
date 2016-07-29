angular.module('app.directives', [])

.directive('blankDirective', [function(){

}])

.directive('summaryPage', [function(){
	return {
		restrict:"E",
		templateUrl: 'templates/summaryPage.html',
	};

}])

.directive('recentTransact', [function(){
	return {
		restrict:"E",
		templateUrl: 'templates/recentTransactions.html',
	};
}])
/*
.directive('format', function ($filter) {
        'use strict';

        return {
            require: '?ngModel',
            link: function (scope, elem, attrs, ctrl) {
                if (!ctrl) {
                    return;
                }

                ctrl.$formatters.unshift(function () {
                    return $filter('number')(ctrl.$modelValue);
                });

                ctrl.$parsers.unshift(function (viewValue) {
                    var plainNumber = viewValue.replace(/[\,\.]/g, ''),
                        b = $filter('number')(plainNumber);

                    elem.val(b);

                    return plainNumber;
                });
            }
        };
    })
*/
.directive('growthRate', [function(){
	return {
		restrict:"E",
		templateUrl: 'templates/growthRate.html',
	};
}])

.directive('fader', function ($timeout, $ionicGesture, $ionicSideMenuDelegate) {
  return {
    restrict: 'E',
    require: '^ionSideMenus',
    scope: true,
    link: function($scope, $element, $attr, sideMenuCtrl) {
      $ionicGesture.on('tap', function(e) {
        $ionicSideMenuDelegate.toggleRight(true);
      }, $element);
      $ionicGesture.on('release', function(e) {
        sideMenuCtrl._endDrag(e);
      }, $element);
      $scope.sideMenuDelegate = $ionicSideMenuDelegate;
      $scope.$watch('sideMenuDelegate.getOpenRatio()', function(ratio) {
        if (Math.abs(ratio)<1) {
          $element[0].style.zIndex = "1";
          $element[0].style.opacity = 0.7-Math.abs(ratio);
        } else {
          $element[0].style.zIndex = "-1";
        }
      });
    }
  }
})

.directive('flipContainer1', function() {
 	return {
 		restrict: 'C',
 		link: function($scope, $elem, $attrs) {
 			$scope.flip1 = function() {
 				$elem.toggleClass('flip');
 			}
			$scope.$on('flip',function(event, data){
             $scope.flip1()
         });
		 
 		}
 	};
 })
.directive('flipContainer2', function() {
 	return {
 		restrict: 'C',
 		link: function($scope, $elem, $attrs) {
 			$scope.flip2 = function() {
 				$elem.toggleClass('flip');
 			}
			$scope.$on('flip',function(event, data){
             $scope.flip2()
         });
 		}
 	};
 });

