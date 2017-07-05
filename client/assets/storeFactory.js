app.factory('storeFactory', ['$location','$http', function($location, $http) {
  var factory = {};
  factory.getUser = function(callback) {
      //call this method if you want to update or set the friends variable
      $http({
        url:'/customers',
        method:'GET',
      }).then(function(res){
        callback(res.data);
      })
  }
  factory.newUser = function(users, callback){
      $http({
        url:'/customers',
        method:'POST',
        data:users
      }).then(function(res){
        callback(res);
      }, function(res){
        console.log(res);
      })
    }
  factory.deleteUser = function(id, callback) {
    $http({
      url:'/customers/' + id,
      method:"DELETE",
    }).then(function(res){
      callback();
    })
  }
  factory.getProduct = function(callback) {
      //call this method if you want to update or set the friends variable
      $http({
        url:'/products',
        method:'GET',
      }).then(function(res){
        callback(res.data);
      }, function(res){
        console.log(res)
      }
    )
  }
  factory.newProduct = function(products, callback){
      $http({
        url:'/products/add',
        method:'POST',
        data:products
      }).then(function(res){
        callback(res);
      }, function(res){
        console.log(res);
      })
    }
  factory.deleteProduct = function(id, callback) {
    $http({
      url:'/products/' + id,
      method:"DELETE",
    }).then(function(res){
      callback();
    })
  }
  factory.getOrder = function(callback) {
      $http({
        url:'/orders',
        method:'GET',
      }).then(function(res){
        callback(res.data);
      })
    }
  factory.newOrder = function(orders, callback){
      $http({
        url:'/orders',
        method:'POST',
        data:orders
      }).then(function(res){
        callback(res);
        console.log(res);
      }, function(res){
        console.log(res);
      })
    }
  factory.deleteOrder = function(id, callback) {
    $http({
      url:'/orders/' + id,
      method:"DELETE",
    }).then(function(res){
      callback();
    })
  }
  return factory
}])
