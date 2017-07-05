var mongoose= require('mongoose');
var bcrypt = require('bcrypt');
var Schema= mongoose.Schema
var UserSchema= new mongoose.Schema({
  name:{type:String, required:true},
  email: {type: String, unique: true, required: true},
  password: {type: String, required:true},
  birthday: {type: Date,required: true},
}, {timestamps:true})
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    done();
});
var ProductSchema= new mongoose.Schema({
  name:{type:String, required:true},
  quantity:{type:Number, required:true},
  quality:{type:Number, required:true, min: 1, max: 5},
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
