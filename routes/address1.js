var express = require('express');
var router = express.Router();
var address1_dal = require('../dal/address1_dal');


/*Get users listening. */
router.get('/all', function(req, res,next){
    address1_dal.viewAll(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('address1/address1_view_all', {result: result});
        }
    });
});

router.get('/add', function(req,res){
    address1_dal.getAll(function (err,result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('address1/address1_add', {result: result[0]});
        }
    });
});

router.get('/insert', function(req,res){
   address1_dal.insert(req.query, function(err,result){
       if(err){
           console.log(err);
           res.send(err);
       }
       else{
           res.redirect(302, '/address1/all');
       }
   })
});



router.get('/edit', function(req, res){
    address1_dal.getinfo(req.query.address_id, function(err, result) {
        if(err) {
            res.send(err); }
        else {
            res.render('address1/address1Update',
                {address: result[0][0], was_successful: true} //result: result[1]
            );
        }
    });
});

router.get('/update', function(req, res) {
    address1_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/address1/all');
        }
    });
});


router.get('/delete', function(req,res){
    address1_dal.delete(req.query.address_id, function(err,address_id){
        if(err){
            res.send(err);
        }
        else{

            res.redirect(302, '/address1/all?address_id=' + address_id + '&was_successful=1');
        }
    });
});

module.exports = router;