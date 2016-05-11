angular.module('Controller', [])
	.controller('mainController', ['$scope', '$http','Shortener', function($scope, $http, Shortener){

		$scope.shortener = function(){
			Short.create($scope.formData);
		};
	}]);