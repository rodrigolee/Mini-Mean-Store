var mongoose= require('mongoose');
var Schema= mongoose.Schema
var UserSchema= new mongoose.Schema({
  name:{type:String, required:true},
}, {timestamps:true})
var ProductSchema= new mongoose.Schema({
  name:{type:String, required:true},
  quantity:{type:Number, required:true},
  description:{type:String, required:true},
}, {timestamps:true})
var OrderSchema= new mongoose.Schema({
  user:{type:Schema.Types.ObjectId, ref:'User'},
  product:{type:Schema.Types.ObjectId, ref:'Product'},
  quantity:{type:Number, required:true}
}, {timestamps:true})
mongoose.model('User', UserSchema)
mongoose.model('Product', ProductSchema)
mongoose.model('Order' , OrderSchema)
