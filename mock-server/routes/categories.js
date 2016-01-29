var express = require('express');
var router = express.Router('/ca');

router.get('/', function(req, res, next) {
  Category.find({},function(err,categories){
    if(err){
      res.status(500).json({msg:err});
    }else{
      res.json(categories);
    }
  });
});

router.post('/', function(req, res, next) {
  Category.findOne({name:req.body.name},function(err,category){
    if(err){
      res.status(500).json({msg:err});
    }else{
      if(category){
        res.status(500).json({msg:'此分类已经存在'});
      }else{
        Category.create({name:req.body.name},function(err,category){
          if(err){
            res.status(500).json({msg:err});
          }else{
            res.json(category);
          }
        });
      }
    }
  });s
});

router.delete('/:_id',function(req, res, next){
  Category.remove({_id:req.params._id},function(err,category){
    if(err){
      res.status(500).json({msg:err});
    }else{
      res.json(category);
    }
  });
});

router.put('/:_id',function(req, res, next){
  Category.update({_id:req.params._id},{$set:{name:req.body.name}},function(err,category){
    if(err){
      res.status(500).json({msg:err});
    }else{
      res.json(category);
    }
  });
});

module.exports = router;
