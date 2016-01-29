var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    Cart.find({}).populate("ware").exec(function(err,carts){
        if(err){
            res.status(500).json({msg:err});
        }else{
            res.json(carts);
        }
    });
});


router.post('/:_id',function(req,res){
    console.log(req.session.user,req.params._id);
    var userId = req.session.user._id;
    var wareId = req.params._id;

    Cart.findOne({user: userId, ware: wareId}, function (err, cart) {
        if (cart) {
            Cart.update({_id: cart._id}, {$inc: {quantity: 1}}, function (err, result) {
                if (err) {
                    res.status(500).json({msg: err});
                } else {
                    res.json(result);
                }
            });
        } else {
            new Cart({
                user: userId,
                ware: wareId
            }).save(function (err, cart) {
                if (err) {
                    res.status(500).json({msg: err});
                } else {
                    res.json(cart);
                }
            });
        }
    });
});

router.put('/:_id',function(req,res){
    Cart.update({_id:req.params._id},{$set:{quantity:req.body.quantity}},function(err,result){
        if(err){
            res.status(500).json({msg:err});
        }else{
            res.json(result);
        }
    });
});

module.exports = router;