app.controller('CustomerController', ['$scope', 'storeFactory', '$routeParams',function($scope, storeFactory, $routeParams){
//implement into logincontroller
  $scope.addUser = function(user) {
      console.log(user)
      storeFactory.newUser(user, function(output){
        console.log(output);

        if(output.status == 200){
          getCustomers();
        }

      });
      $scope.newUser={};
  }
  function getCustomers(){
    storeFactory.getUser(function(data){
      $scope.user=data;
    })
  }
  getCustomers();
  $scope.delete=function(id, callback){
    storeFactory.deleteUser(id, getCustomers);
  }
}])
