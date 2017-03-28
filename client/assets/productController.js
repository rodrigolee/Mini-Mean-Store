app.controller('ProductController', ['$scope', 'storeFactory', '$routeParams' ,function($scope, storeFactory, $routeParams){
  $scope.addProduct = function(product) {
      console.log(product)
      storeFactory.newProduct(product, function(output){
        console.log(output);

        if(output.status == 200){
          getProducts();
        }
      });
      $scope.newProduct={};
  }
  function getProducts(){
    storeFactory.getProduct(function(data){
      $scope.product=data;
    })
  }
  getProducts();
  $scope.delete=function(id, callback){
    storeFactory.deleteProduct(id, getProducts);
  }
}])
