angular.module('Controller', [])
	.controller('mainController', ['$log','$scope', '$http','Shortener', function($log, $scope, $http, Shortener){
		
		$scope.UrlShortener = function(){
			$log.debug("acqure long_url = " + $scope.long_URL.url);

//			$scope.ShortURL = {short: "http://broccoli.ecs.umass.edu"};

			if($scope.long_URL.url != undefined){
				$http.post('/api/shorten', $scope.long_URL)
					.success(function(data){
						$log.debug("call Shortener success");
						$log.debug("acquired short_URL = " + data.ShortURL);
						$scope.ShortURL = data;
					});
			}
		};
	}]);




	ShortURL.short