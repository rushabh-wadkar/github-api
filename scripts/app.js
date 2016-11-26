(function(){
		
		var app = angular.module("githubApp", ["ngRoute"]);
	
		app.config(function($routeProvider) {
			$routeProvider
				.when("/search", {
					templateUrl: "views/search.html",
					controller: "mainCtrl"
				})
				.when("/user/:username", {
					templateUrl: "views/user.html",
					controller: "userCtrl"
				})
				.when("/user/:username/:repo_name", {
					templateUrl: "views/repository.html",
					controller: "repositoryCtrl"
				})
				.otherwise({ redirectTo: "/search" });
		});
	
		app.factory("githubCall", ["$http", function($http) {
			
			var getUser = function(username) {
				return $http.get("https://api.github.com/users/" + username)
						  .then(function(success){
					return success.data;
				}, function(error){
					return error;
				});
			};
			var getRepo = function(account) {
				return $http.get(account)
						  .then(function(success){
					return success.data;
				}, function(error){
					return error;
				});
			};
			var getCollab = function(username, reponame) {
				return $http.get("https://api.github.com/repos/" + username + "/" + reponame + "/contributors")
							.then(function(success){
					return success.data;
				}, function(error){
					return error;
				});
			}
			return {
				getUser: getUser,
				getRepo: getRepo,
				getCollab: getCollab
			};
			
		}]);
})();