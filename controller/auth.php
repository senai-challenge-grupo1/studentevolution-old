<?php
	session_start();
	if(isset($_SESSION['login'])) {
		echo '{
			"id": "'.$_SESSION['id'].'",
			"nome": "'.$_SESSION['nome'].'",
			"login": "'.$_SESSION['login'].'",
			"email": "'.$_SESSION['email'].'",
			"dataNascimento": "'.$_SESSION['data_nascimento'].'"
		}';
	} else {
		echo '1';
	}
?>