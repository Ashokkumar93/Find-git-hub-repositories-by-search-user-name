var app = angular.module("myApp",[]);
    app.controller('myCtrl',function($scope, $http){
      $scope.getGitInfo = function () {
         $scope.userNotFound = false;
         $scope.display = false;

         $http.get("https://api.github.com/users/" + $scope.username)
               .success(function (data) {
                  $scope.display = true;

                  if (data.name == ""){ 
                        data.name = data.login;
                  }

                  $scope.user = data;
               })
               .error(function () {
                  $scope.userNotFound = true;
               });
         $http.get("https://api.github.com/users/" + $scope.username + "/repos")
         .success(function (data) {
            $scope.repos = data;
            $scope.reposFound = $scope.username.length > 0;
         });
      }
    });