app.controller('OrderController', ['$scope', 'storeFactory','$routeParams',function($scope, storeFactory,$routeParams){
  function getCustomers(){
    storeFactory.getUser(function(data){
      $scope.user=data;
    })
  }
  function getProducts(){
    storeFactory.getProduct(function(data){
      $scope.product=data;
    })
  }
  function getOrders(){
    storeFactory.getOrder(function(data){
      $scope.order=data;
    })
  }

  getCustomers();
  getProducts();
  $scope.addOrder=function(order) {
    console.log(order)
    storeFactory.newOrder(order, function(output){
      console.log(output);

      if(output.status == 200){
        getOrders();
      }
    });
    $scope.newOrder={};
}
}])
