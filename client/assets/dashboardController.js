app.controller('DashboardController', ['$scope', '$routeParams', 'storeFactory',function($scope, $routeParams, storeFactory){
  function getProducts(){
    storeFactory.getProduct(function(data){
      $scope.product=data;
    })
  }
  getProducts();
  function getOrders(){
    storeFactory.getOrder(function(data){
      $scope.order=data;
    })
  }
  getOrders();
  function getCustomers(){
    storeFactory.getUser(function(data){
      $scope.user=data;
    })
  }
  getCustomers();
  }])
