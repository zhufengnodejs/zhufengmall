var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  Ware.find({}).populate('category').exec(function(err,wares){
    if(err){
      res.status(500).json({msg:err});
    }else{
      res.json(wares);
    }
  });
});

router.post('/', function(req, res, next) {

  Ware.findOne({name:req.body.name},function(err,ware){
    if(err){
      res.status(500).json({msg:err});
    }else{
      if(ware){
        res.status(500).json({msg:'此商品已经存在'});
      }else{
        Ware.create(req.body,function(err,ware){
          if(err){
            res.status(500).json({msg:err});
          }else{
            res.json(ware);
          }
        });
      }
    }
  });
});

router.delete('/:_id',function(req, res, next){
  Ware.remove({_id:req.params._id},function(err,ware){
    if(err){
      res.status(500).json({msg:err});
    }else{
      res.json(ware);
    }
  });
});

router.put('/:_id',function(req, res, next){
  delete req.body._id;
  Ware.update({_id:req.params._id},{$set:req.body},function(err,ware){
    if(err){
      res.status(500).json({msg:err});
    }else{
      res.json(ware);
    }
  });
});

module.exports = router;
