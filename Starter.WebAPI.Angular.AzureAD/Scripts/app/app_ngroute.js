(function () {

	var app = angular.module("app", ["ngRoute", "AdalAngular"]);

	app.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

		$routeProvider
			.when("/home", {				
				templateUrl: "Scripts/app/views/home.html",
				controller: "HomeController",
			})
			.when("/values", {				
				templateUrl: "Scripts/app/views/values.html",
				controller: "ValuesController",
				requireADLogin: true
			})
			.when("/about", {
				templateUrl: "Scripts/app/views/about.html"
			})
			.otherwise({
				redirectTo: "/home"
			});

		adalProvider.init(
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