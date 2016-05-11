angular.module('shortService',[])
	.factory('Shortener', ['$http',function($http){
		return{
			create : function(target_data){
				return $http.post('/api/shorten', target_data);
			}
		}
	}]);