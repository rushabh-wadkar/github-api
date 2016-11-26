(function(){
		
	var repositoryModule = angular.module("githubApp");
	
	repositoryModule.controller("repositoryCtrl", ["$scope", "$routeParams", "githubCall", function($scope, $routeParams, githubCall){
		
		$scope.repositoryName = $routeParams.repo_name;
		$scope.username = $routeParams.username;
		$scope.contributors = "";
		githubCall.getCollab($scope.username,$scope.repositoryName).then(function(data){
				$scope.contributors = data;
			console.log(data);
		});
	}]);
	
})();