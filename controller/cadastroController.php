<?php
	include_once("../model/database/conexao.php");

	$conexao = new Conexao();

	$nome = $_POST['nome'];
	$login = $_POST['login'];
	$email = $_POST['email'];
	$senha = md5($_POST['senha']);
	$data = explode('/', $_POST['dataNascimento']);
	$dataNascimento = $data[0].'-'.$data[1].'-'.$data[2];

	try {
		$array = array("nome"=>$nome);
		$sql = "SELECT nome FROM user WHERE nome=:nome;";
		$stmt = $conexao->getCon()->prepare($sql);
		$stmt->execute($array);

		$linha = null;
		foreach($stmt as $value) {
			$linha = $value;
		}

		if($linha != null)  {
			die('0');
		}

		$array = array("login"=>$login);
		$sql = "SELECT login FROM user WHERE login=:login;";
		$stmt = $conexao->getCon()->prepare($sql);
		$stmt->execute($array);

		$linha = null;
		foreach($stmt as $value) {
			$linha = $value;
		}

		if($linha != null)  {
			die('1');
		}
	} catch(PDOException $e) {
		echo '2';
	}

	try {
		$array = array("nome"=>$nome, "login"=>$login, "email"=>$email, "senha"=>$senha, "data_nascimento"=>$dataNascimento);
		$sql = "INSERT INTO user (nome, login, email, senha, data_nascimento) VALUES (:nome, :login, :email, :senha, :data_nascimento);";
		$stmt = $conexao->getCon()->prepare($sql);
		$stmt->execute($array);

		$array = array("login"=>$linha['login']);
		$sql = "SELECT * FROM user WHERE login=:login";
		$stmt = $conexao->getCon()->prepare($sql);
		$stmt->execute($array);

		$linha = null;
		foreach($stmt as $value) {
			$linha = $value;
		}

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
	} catch(PDOException $e) {
		echo '2';
	}
?>