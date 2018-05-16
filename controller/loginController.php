<?php
	include_once("../model/database/conexao.php");

	$conexao = new Conexao();

	$login = $_POST['login'];
	$senha = md5($_POST['senha']);

	try {
		$array = array("login"=>$login, "senha"=>$senha);
		$sql = "SELECT * FROM user WHERE login=:login and senha=:senha;";
		$stmt = $conexao->getCon()->prepare($sql);
		$stmt->execute($array);

		$linha = null;
		foreach($stmt as $value) {
			$linha = $value;
		}

		if($linha != null) {
			session_start();
			
			$_SESSION['id'] = $linha['id'];
			$_SESSION['nome'] = $linha['nome'];
			$_SESSION['login'] = $linha['login'];
			$_SESSION['email'] = $linha['email'];

			$data = explode('-', $linha['data_nascimento']);
			$_SESSION['data_nascimento'] = $data[0].'/'.$data[1].'/'.$data[2];

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
	} catch(PDOException $e) {
		echo '2';
	}

?>