angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('accessUrlService', ['$resource',function($resource){
	var postRequest= $resource('http://205.147.99.55:8080/WealthWeb/ws/login/restLogin',{},{
		save:{
			method:'POST',			
			headers:{
				'X-Requested-With':'05173DAB80610F314F510E2FB48D85AC'
			} 
		},
	});
	return postRequest;
}])

.service('BlankService', [function(){

}]);

