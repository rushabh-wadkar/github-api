(function(){
	
	var searchModule = angular.module("githubApp");
	
	searchModule.controller("mainCtrl", ["$scope", "githubCall", "$location", function($scope, githubCall, $location){
		
		$scope.search = function(){
				githubCall.getUser($scope.searchUser).then(function(data){
					$location.path("/user/" + data.login);
				});
		};
		
		
	}]);
	
})();