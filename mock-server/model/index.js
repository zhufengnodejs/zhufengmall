var mongoose = require('mongoose');
global.User = mongoose.model('User', new mongoose.Schema({
    username:String
}));