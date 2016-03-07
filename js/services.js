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

/*For Sign up*/
.factory('SignUpUrlService', ['$resource',function($resource){
	return $resource('http://205.147.99.55:8080/WealthWeb/ws/clientFcps/clientFcp');
}])

.factory('getTransactionService', ['$resource',function($resource){
	return $resource('http://205.147.99.55:8080//WealthWeb/ws/clientRepos/getPerfomRepo?pfolioCode=CRN23840E16920&endDate=07/03/2016&noOfDays=50');
	//http://205.147.99.55:8080/WealthWeb/ws/clientRepos/getOrders?pfolioCode=CRN23840E16920&noOfOrders=2
}])


/*Get data*/
.factory('loginInfoService', ['accessUrlService','$q',function(accessUrlService,$q){
	return  {
	getJsonId: function(loginData) {  
		var deferred = $q.defer();
		accessUrlService.save(loginData,function(data){
		deferred.resolve(data); 
		},function(error){
			console.log("eror");
			deferred.reject(error);
		}); 
		return deferred.promise;
		}
	}

}])

/*Sign up Service*/
.factory('signUpService', ['SignUpUrlService','$q',function(SignUpUrlService,$q){

	return  {
	sendSignUp: function(formdata) {  
		var deferred = $q.defer();
		SignUpUrlService.save(formdata,function(data){
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
.factory('GetTransactionService', ['$q,getTransactionService', function(getTransactionService,$q){
	return {

		
	};
}])