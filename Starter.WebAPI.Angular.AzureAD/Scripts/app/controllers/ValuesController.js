(function() {

	var app = angular.module("app");

	var ValuesController = function ($scope, $http) {
		$scope.message = "These are the values:";

		$scope.get = function () {
			$http.get("api/values")
				.success(function (response) {
					$scope.values = response;

					var emptyValue = { value: "", isNew: true };
					$scope.values.push(emptyValue);
				})
				.error(function (reason) {
					$scope.error = reason;
				});
		}

		$scope.add = function (value) {
			$http.post("api/values", value)
				.success(function (response) {
					$scope.get();
				})
				.error(function (reason) {

				})
		}

		$scope.update = function (value) {
			$http.put("api/values", value)
				.success(function (response) {

				})
				.error(function (reason) {

				})
		}

		$scope.delete = function (id) {
			$http.delete("api/values/" + id)
				.success(function (response) {
					$scope.get();
				})
				.error(function (reason) {

				})		
		}

		$scope.get();
	};

	app.controller("ValuesController", ["$scope", "$http", ValuesController]);

}());