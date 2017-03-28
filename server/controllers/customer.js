var mongoose= require('mongoose');
var User=mongoose.model('User')
/***///ask how to export product into functions///****
module.exports = {
  index: function(req,res){
    User.find({}, function(err, data){
      if (err){
        res.status(400).send("Error Messageeee")
      }
      else {
        res.json(data);
      }
    })
  },
  create: function(req,res){
    var user= new User(req.body);
    user.save(function(err,data){
      if (err){
        res.status(400).send("User not saved into db")
      }
      else {
      res.status(200).send();
      }
    })
  },
  update: function(req,res){
    User.update({_id:req.params.id}, req.body, function(err, data){
      if(err){
        res.status(400).send("Problem updating");
      }
      else{
    res.json(data);
    }
  })
  },
  delete: function(req,res){
    User.findOne({_id:req.params.id}, function(err, data){
      if(data== null){
        res.status(400).send("No User Found");
      }
      data.remove();
      res.status(200).send('User was deleted');
    })
  },
  show: function(req,res){
    User.findOne({_id:req.params.id}, function(err, data){
      if(data== null){
        res.status(400).send("No User Found")
      }
      else {
      res.json(data);
      }
    })
  }
}
