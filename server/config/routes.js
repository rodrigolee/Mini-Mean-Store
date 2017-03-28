var users= require('../controllers/customer.js');
var products= require('../controllers/product.js');
var orders= require('../controllers/order.js')
module.exports = function(app){
  app.get('/customers',  users.index);
  app.post('/customers',  users.create);
  app.delete('/customers/:id', users.delete);
  app.get('/products', products.index);
  app.post('/products', products.create);
  app.delete('/products/:id', products.delete);
  app.get('/orders', orders.getOrder);
  app.post('/orders', orders.addOrder)

}
