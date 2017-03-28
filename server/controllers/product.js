var mongoose= require('mongoose');
var Product=mongoose.model('Product')
module.exports = {
  index: function(req,res){
    Product.find({}, function(err, data){
      if (err){
        res.status(400).send("Error Messageeee")
      }
      else {
        res.json(data);
      }
    })
  },
  create: function(req,res){
    var product= new Product(req.body);
    product.save(function(err,data){
      if (err){
        res.status(400).send("Product not saved into db")
      }
      else {
      res.status(200).send();
      }
    })
  },
  update: function(req,res){
    Product.update({_id:req.params.id}, req.body, function(err, data){
      if(err){
        res.status(400).send("Problem updating");
      }
      else{
    res.json(data);
    }
  })
  },
  delete: function(req,res){
    Product.findOne({_id:req.params.id}, function(err, data){
      if(data== null){
        res.status(400).send("No product Found");
      }
      data.remove();
      res.status(200).send('product was deleted');
    })
  },
  show: function(req,res){
    Product.findOne({_id:req.params.id}, function(err, data){
      if(data== null){
        res.status(400).send("No product Found")
      }
      else {
      res.json(data);
      }
    })
  }
}
