(function () {

	var app = angular.module("app");

	var HomeController = function ($scope, adalAuthenticationService) {
		$scope.login = function () {
			adalAuthenticationService.login();
		};

		$scope.logout = function () {
			adalAuthenticationService.logOut();
		};
	}

	app.controller("HomeController", ["$scope", "adalAuthenticationService", HomeController]);
}())