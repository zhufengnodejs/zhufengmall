var mongoose = require('mongoose');
global.User = mongoose.model('User', new mongoose.Schema({
    username:String
}));

global.Category = mongoose.model('Category', new mongoose.Schema({
    name:String
}));

global.Ware = mongoose.model('Ware', new mongoose.Schema({
    name:String,
    category:{type:mongoose.Schema.Types.ObjectId,ref:'Category'},
    price:Number
}));