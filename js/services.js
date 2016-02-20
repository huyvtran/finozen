angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('userInfo', ['$resource',function($resource){
	return $resource('http://jsonplaceholder.typicode.com/users');
}])

.service('BlankService', [function(){

}]);

