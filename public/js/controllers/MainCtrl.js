angular.module('MainCtrl', [])
	.controller('MainController', function($scope) {
		$scope.tagline = 'example string';
		console.log('test1');
		// Bear.get().success(function(data, status) {
		// 	console.log('wszedl do GET');
		// 	$scope.result = data;
		// 	console.log($scope.result);
		// });
	});