angular.module('Controller', [])
	.controller('mainController', ['$log','$scope', '$http','Shortener', function($log, $scope, $http, Shortener){
		
		$scope.UrlShortener = function(){
			$log.debug("acqure long_url = " + $scope.long_URL.url);
			
			if($scope.long_URL.url != undefined){
				Shortener.create($scope.long_URL)
					.success(function(){
						$log.debug("call Shortener success");
						$log.debug("long_URL = " + $scope.long_URL.url);
					})
			}
		};
	}]);