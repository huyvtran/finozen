angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('userInfo', ['$resource',function($resource){
	return $resource('http://205.147.99.55:8080/WealthWeb/ws/clientFcps/clientFcp');
}])

.service('BlankService', [function(){

}]);

