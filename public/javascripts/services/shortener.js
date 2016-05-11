angular.module('shortService',[])
	.factory('Shortener', ['$http',function($http){
		return{
			create : function(Data){
				return $http.post('/api/shorten', Data);
			}
		}
	}]);