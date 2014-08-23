angular.module('GeekCtrl', []).controller('GeekController', function($scope, Geek){
	$scope.tagline = 'The square root of life is pi!';
	Geek.get().success(function(data, status) {
		$scope.result = data;
	});
});