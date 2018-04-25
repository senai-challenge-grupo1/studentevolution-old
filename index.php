<!DOCTYPE html>
<html>
<head>
	<title>Student Evolution</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- jQuery -->
	<script type="text/javascript" src="dist/jquery-3.3.1/jquery.min.js"></script>

	<!-- Bootstrap -->
	<link rel="stylesheet" type="text/css" href="dist/bootstrap-4.0/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="dist/bootstrap-4.0/css/bootstrap-grid.min.css">
	<link rel="stylesheet" type="text/css" href="dist/bootstrap-4.0/css/bootstrap-reboot.min.css">
	<script type="text/javascript" src="dist/bootstrap-4.0/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="dist/bootstrap-4.0/js/bootstrap.bundle.js"></script>

	<!-- Angular JS -->
	<script src="dist/angularjs-1.6.9/angular.min.js"></script>
	<script src="dist/angularjs-1.6.9/angular-route.min.js"></script>

	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="dist/css/login.css">

	<!-- JavaScript -->
	<script type="text/javascript" src="dist/js/login.js"></script>

	<!-- Config -->
	<script type="text/javascript" src="dist/js/config/config.js"></script>

	<!-- Controller -->
	<script type="text/javascript" src="dist/js/controller/controller.js"></script>
</head>
<body ng-app="StudentEvolution">
	<div class="fluid-container">
		<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
		  <a class="navbar-brand" href="#">Student Evolution</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarContent">
		    <ul class="navbar-nav navbar-right">
		      <li class="nav-item">
		        <a class="nav-link" href="#!login">Login</a>
		      </li>
		    </ul>
		  </div>
		</nav>
		<div class="container"><ng-view></ng-view></div>
	</div>
</body>
</html>