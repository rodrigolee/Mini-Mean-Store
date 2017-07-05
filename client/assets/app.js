var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl:'partials/home.html',
  })
  .when('/dashboard', {
    templateUrl:'partials/dashboard.html',
    controller:'DashboardController'
  })
  .when('/customers', {
    templateUrl:'partials/customers.html',
    controller:'CustomerController'
  })
  .when('/products', {
    templateUrl:'partials/products.html',
    controller:'ProductController'
  })
  .when('/products/add',{
    templateUrl:'semis/addproducts.html',
    controller:'ProductController'
  })
  .when('/orders', {
    templateUrl:'partials/orders.html',
    controller:'OrderController'
  })
  .when('/settings',{
    templateUrl:'partials/settings.html'
  })
  .when('/login',{
    templateUrl:'semis/loginandreg.html',
    controller:'LoginController'
  })
  .when('/contact',{
    templateUrl:'partials/settings.html'
  })
  .when('/delivery',{
    templateUrl:'partials/settings.html'
  })
})
