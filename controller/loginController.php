<?php
	include_once("../model/database/conexao.php");

	$conexao = new Conexao();

	$login = $_POST['login'];
	$senha = md5($_POST['senha']);

	try {
		$array = array("login"=>$login, "senha"=>$senha);
		$sql = "SELECT id FROM user WHERE login=:login and senha=:senha;";
		$stmt = $conexao->getCon()->prepare($sql);
		$stmt->execute($array);

		$linha = null;
		foreach($stmt as $value) {
			$linha = $value;
		}

		if($linha != null) {
			$array = array("id"=>$linha['id']);
			$sql = "SELECT * FROM user WHERE id=:id;";
			$stmt = $conexao->getCon()->prepare($sql);
			$stmt->execute($array);

			$linha = null;
			foreach($stmt as $value) {
				$linha = $value;
			}

			if($linha != null) {
				session_start();
				
				$_SESSION['nome'] = $linha['nome'];
				$_SESSION['login'] = $linha['login'];
				$_SESSION['email'] = $linha['email'];
				$_SESSION['data_nascimento'] = $linha['data_nascimento'];
			}
		} else {
			echo "Login ou senha incorretos!";
		}
	} catch(PDOException $e) {
		echo $e;
	}

?>