var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  User.findOne({username:req.body.username},function(err,user){
    if(err){
      res.status(500).json({msg:err});
    }else{
      if(user){
        req.session.user = user;
        console.log(req.session.user);
        res.json(user);
      }else{
        User.create({username:req.body.username},function(err,user){
          if(err){
            res.status(500).json({msg:err});
          }else{
            req.session.user = user;
            console.log(req.session.user);
            res.json(user);
          }
        });
      }

    }
  });
});

module.exports = router;
