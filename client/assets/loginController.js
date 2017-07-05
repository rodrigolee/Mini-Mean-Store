app.controller('LoginController', ['$scope', 'usersFactory', function($scope, uF){

  $scope.register = function(){
//combine with customer controller
    register($scope.registration, function(data){
      if (data.data.errors){
        $scope.errors = data.data.errors;
      }
      else{
        $scope.user = data.data;
      }
    }, function(err){
      console.log("I am an error",err);
    })
  }
  $scope.login = function(){
    login(
      $scope.userLogin,
      function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else{
          $scope.user = data.data;
        }
      },
      function(err){
        console.log("I am an error",err);
      });
  }
}]);
