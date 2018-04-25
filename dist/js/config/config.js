angular.module("StudentEvolution", ["ngRoute"])
.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "view/home.php",
    controller: "homeCtrl"
  })
  .when("/login", {
    templateUrl: "view/login.php",
    controller: "loginCtrl"
  });
});