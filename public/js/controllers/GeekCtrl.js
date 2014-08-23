angular.module('GeekCtrl', []).controller('GeekController', function($scope, Geek){
	$scope.tagline = 'The square root of life is pi!';
	Geek.get().success(function(data, status) {
		console.log('wszedl do GET');
		$scope.result = data;
		console.log($scope.result);
	});
});