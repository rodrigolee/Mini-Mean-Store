var mongoose= require('mongoose');
var Order=mongoose.model('Order');
var Product=mongoose.model('Product');
var User=mongoose.model('User');
/***///ask how to export product into functions///****
module.exports = {
  getOrder: function(req, res){
    Order.find({}).populate('user').populate('product').exec(function (err, data){
      if (err){
        res.status(400).send(err);
        console.log(err)
      }
      else{
        res.json(data);
      }
    })
  },
  addOrder: function(req,res){
    var order = new Order(req.body);
    order.save(function(err, data){
      if (err){
        res.status(400).send(err)
        console.log("right here is the error")
      }
      else{
        Product.update({_id:data.product},{$inc: {quantity: -data.quantity}}, function (err, product){
            if (err){
              res.status(400).send(err)
            }
            else{
              res.sendStatus(200);
            }
          })
        }
      })
    }
  }
