angular.module("StudentEvolution")
.controller("loginCtrl", function($scope) {
	$scope.logar = function() {
		var resultado;
		$.ajax({
			method: "POST",
			url: "http://localhost:8000/api/usuarios",
			cache: false,
			data: {nome: $scope.nome, login: $scope.login, data_nascimento: $scope.data_nascimento, email: $scope.email, senha: md5($scope.senha)},
			success: function(result){
				this.resultado = result;
			}
		});
		alert(resultado);
		window.location.reload();
	};
})
.controller("homeCtrl", function($scope) {
	$scope.msg = "Home";
});