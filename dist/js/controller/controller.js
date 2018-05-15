angular.module("StudentEvolution")
.controller("navbarCtrl", function($scope) {
	$scope.user;

	$scope.logar = function() {
    $.confirm({
	  	title: "Login",
	  	titleClass: "alert-title",
	  	type: "dark",
	  	typeAnimated: true,
	  	columnClass: 'col-md-5 col-md-offset-7',
	    content: "url:view/login.html",
	    controller: "loginCtrl",
	    closeIcon: true,
	    buttons: {
	    	Cancelar: {
	    		keys: ['esc']
	    	},
	    	forgot: {
	    		text: "Esqueceu sua senha?",
	    		action: function() {
	    			$.alert("Funcionou!");
	    		}
	    	},
	    	Entrar: {
	    		keys: ['enter'],
	    		action: function () {
	    			$.alert("Logou");
          }
	    	}
	    }
    });
  };
})

.controller("loginCtrl", function($scope) {
	$scope.login = function() {
		$.alert("Teste");
	};
})

.controller("cadastroCtrl", function($scope) {
	$scope.cadastrar = "";
})

.controller("homeCtrl", function($scope) {
	$scope.msg = "Home";
});