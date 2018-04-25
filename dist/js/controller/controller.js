angular.module("StudentEvolution")
.controller("loginCtrl", function($scope) {
	$scope.logar = function() {
		alert("Login: " + $scope.login + ", Senha: " + $scope.senha);
	};
})
.controller("homeCtrl", function($scope) {
	
});