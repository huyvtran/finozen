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

.directive('growthRate', [function(){
	return {
		restrict:"E",
		templateUrl: 'templates/growthRate.html',
	};
}]);

