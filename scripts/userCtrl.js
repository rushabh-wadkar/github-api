(function(){
	
	var userModule = angular.module("githubApp");
	
	userModule.controller("userCtrl", ["$scope", "$routeParams", "githubCall", "$location", function($scope, $routeParams, githubCall, $location){
		
		githubCall.getUser($routeParams.username).then(function(info){
			$scope.userInfo = info;
			githubCall.getRepo($scope.userInfo.repos_url).then(function(rep){
				$scope.repo = rep;
			});
		});
		
		$scope.gotoRepo = function(repositoryName){
			$location.path("/user/"+$routeParams.username+"/"+repositoryName);
		};
		
	}]);
	
})();