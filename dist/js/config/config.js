angular.module("StudentEvolution", ["ngRoute"])
.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "view/home.html",
    controller: "homeCtrl"
  })
  .when("/profile", {
    templateUrl: "view/perfil.html",
    controller: "perfilCtrl"
  })
  .when("/ajuda", {
    templateUrl: "view/ajuda.html",
    controller: "ajudaCtrl"
  });
});