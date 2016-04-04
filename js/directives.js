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

.directive('growthRate', [function(){
	return {
		restrict:"E",
		templateUrl: 'templates/growthRate.html',
	};
}]);

