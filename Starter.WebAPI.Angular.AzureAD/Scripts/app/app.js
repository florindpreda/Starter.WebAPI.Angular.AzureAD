(function () {

	var app = angular.module("app", ["ui.router", "AdalAngular"]);

	app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "adalAuthenticationServiceProvider", function ($stateProvider, $urlRouterProvider, $httpProvider, adalAuthenticationServiceProvider) {

		$urlRouterProvider.otherwise("/home");

		$stateProvider
			.state("home", {
				url: "/home",
				templateUrl: "Scripts/app/views/home.html",
				controller: "HomeController"
			})
			.state("values", {
				url: "/values",
				templateUrl: "Scripts/app/views/values.html",
				controller: "ValuesController",
				requireADLogin: true
			})
			.state("about", {
				url: "/about",
				templateUrl: "Scripts/app/views/about.html"
			});

		adalAuthenticationServiceProvider.init(
        {
        	instance: 'https://login.microsoftonline.com/',
        	tenant: 'replacethiswithtenantname.onmicrosoft.com',
        	clientId: 'replacethiswithclientid',
        	extraQueryParameter: 'nux=1',
        	//cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
			$httpProvider
        );
	}]);

}());