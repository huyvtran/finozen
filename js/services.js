angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])



// .service('loginService', [function(){

// }]);


/*.factory('accessUrlService', ['$resource',function($resource){
	var postRequest= $resource('http://205.147.99.55:8080/WealthWeb/ws/login/restLogin',{},{
		save:{
			method:'POST',			
			headers:{
				'X-AUTH-TOKEN':'05173DAB80610F314F510E2FB48D85AC',
				'content-tyoe'/: UTF-8, JSON
			} 
		},
	});
	return postRequest;
}])*/


.factory('accessUrlService', ['$resource',function($resource){
	return $resource('http://205.147.99.55:8080/WealthWeb/ws/login/restLogin');
}])

/*Get data*/
.factory('loginInfoService', ['accessUrlService','$q',function(accessUrlService,$q){

	return  {
	getJsonId: function() {  
		var deferred = $q.defer();
		accessUrlService.save({"login":"admin","password":"rupeelog","role":"Admin"},function(data){
		deferred.resolve(data); 
		},function(error){
			console.log("eror");
			deferred.reject(error);
		}); 
		return deferred.promise;
		}
	}

}])

/*send MF orders*/
.factory('mfOrderUrlService', ['$resource',function($resource){
	var mfOrderRequest= $resource('http://205.147.99.55:8080/WealthWeb/ws/clientOrders/clientOrderMfBuy',{},{
		save:{
			method:'POST',	
		},
	});
	return mfOrderRequest;
}])