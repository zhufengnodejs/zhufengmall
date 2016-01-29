var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;
global.User = mongoose.model('User', new mongoose.Schema({
    username:String
}));

global.Category = mongoose.model('Category', new mongoose.Schema({
    name:String
}));

global.Ware = mongoose.model('Ware', new mongoose.Schema({
    name:String,
    category:{type:ObjectId,ref:'Category'},
    price:Number
}));


global.Cart =  mongoose.model('Cart', new mongoose.Schema({
    user:{type:ObjectId,ref:'User'},
    ware:{type:ObjectId,ref:'Ware'},
    quantity:{type:Number,default:1}
}));