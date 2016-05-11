angular.module('Controller', [])
	.controller('mainController', ['$log','$scope', '$http','Shortener', function($log, $scope, $http, Shortener){
		$log.debug("shorten button react");
		$scope.formData = {};
		$scope.UrlShortener = function(){
			if($scope.formData.text != undefined){
				Shortener.create($scope.formData).
				success(function(){
					$scope.formData = {};
					$log.debug("acqure long_url = " + $scope.formData.text);
				});
			}
		};
	}]);