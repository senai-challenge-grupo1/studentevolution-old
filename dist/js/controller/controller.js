angular.module("StudentEvolution")

.run(['$rootScope', function($rootScope) {
	$rootScope.user;

	$rootScope.auth = false;

	$.ajax({
		url: 'controller/auth.php',
		method: 'get',
		success: function(html) {
			if(html == '1') $rootScope.auth = false;
			else {
				$rootScope.auth = true;
				$rootScope.user = JSON.parse(html);
				$rootScope.$apply();
			}
		},
		error: function(xhr, status, error) {
			$rootScope.auth = false;
		}
	});

	$rootScope.signin = function() {
		$.confirm({
	  	title: "Login",
	  	titleClass: "alert-title",
	  	type: "dark",
	  	typeAnimated: true,
	  	columnClass: 'col-md-5 col-md-offset-7',
	    content: "url:view/login.html",
	    controller: "loginCtrl",
	    closeIcon: true,
	    backgroundDismiss: true,
	    buttons: {
	    	forgot: {
	    		text: "Esqueceu sua senha?",
	    		btnClass: 'btn btn-primary',
	    		action: function() {
	    			$.alert("Que pena!");
	    		}
	    	},
	    	Entrar: {
	    		keys: ['enter'],
	    		btnClass: 'btn btn-success',
	    		action: function() {
	    			var login = $('input[name="login"]').val();
	    			var senha = $('input[name="senha"]').val();

	    			$.ajax({
	    				url: 'controller/loginController.php',
	    				cache: false,
	    				method: 'post',
	    				data: {login: login, senha: senha},
	    				success: function(html) {
	    					if(html == "1") {
	    						$.alert('Login ou senha incorretos!');
	    					} else if(html == "2") {
	    						$.alert('Erro inesperado, contate o administrador!');
	    					}
	    					else {
	    						$rootScope.auth = true;
	    						$rootScope.user = JSON.parse(html);
	    						$rootScope.$apply();
	    					}
	    				},
	    				error: function(xhr, status, error) {
	    					$.alert(xhr.responseText);
	    				}
	    			});
          }
	    	}
	    }
    });
  };

  $rootScope.signup = function() {
    $.confirm({
	  	title: "Cadastro",
	  	titleClass: "alert-title",
	  	type: "dark",
	  	typeAnimated: true,
	  	columnClass: 'col-md-5 col-md-offset-7',
	    content: "url:view/cadastro.html",
	    closeIcon: true,
	    backgroundDismiss: true,
	    buttons: {
	    	Cadastrar: {
	    		keys: ['enter'],
	    		btnClass: 'btn btn-success',
	    		action: function() {
	    			var nome = $('input[name="nome"]').val();
	    			var login = $('input[name="login"]').val();
	    			var email = $('input[name="email"]').val();
	    			var senha = $('input[name="senha"]').val();
	    			var dataNascimento = $('input[name="dataNascimento"]').val();

	    			var dados = {nome: nome, login: login, email: email, senha: senha, dataNascimento: dataNascimento};
	    			
	    			$.ajax({
	    				url: 'controller/cadastroController.php',
	    				cache: false,
	    				method: 'POST',
	    				data: dados,
	    				// closeIcon: function(){
    //     return false; // to prevent close the modal.
    //     // or
    //     return 'aRandomButton'; // set a button handler, 'aRandomButton' prevents close.
    // },
    // // or
    // closeIcon: 'aRandomButton', // set a button handler
	    				success: function(html) {
	    					if(html == '0') {
	    						$.alert('Nome já existente!');
	    					} else if(html == '1') {
	    						$.alert('Login já existente!');
	    					} else if(html == '2') {
	    						$.alert('Erro inesperado, contate o administrador!');
	    					}
	    					else {
		    					$rootScope.auth = true;
		    					$rootScope.user = JSON.parse(html);
		    					$rootScope.$apply();
	    					}
	    				},
	    				error: function(xhr, status, error) {
	    					$.alert(xhr.responseText);
	    				}
	    			});
          }
	    	},
	    	close: function() {}
	    }
    });
  };

  $rootScope.signout = function() {
  	$.ajax({
  		url: 'controller/logoutController.php',
  		success: function(html) {
  			$rootScope.auth = false;
  			$rootScope.$apply();
  		}
  	});
  };
}])

.controller("homeCtrl", function($scope) {
	
});