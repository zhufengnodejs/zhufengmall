var mongoose = require('mongoose');
global.User = mongoose.model('User', new mongoose.Schema({
    username:String
}));

global.Category = mongoose.model('Category', new mongoose.Schema({
    name:String
}));