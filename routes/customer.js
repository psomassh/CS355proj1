var express = require('express');
var router = express.Router();
var customer_dal = require('../dal/customer_dal');
var address1_dal = require('../dal/address1_dal');


/*Get users listening. */
router.get('/all', function(req, res,next){
    customer_dal.getAll(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('customer/customer_view_all', {result: result});
        }
    })
});

router.get('/add', function(req,res){
    // passing all the query parameters (req.query) to the insert function instead of each individually
    address1_dal.getAll(function(err,result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('customer/customer_add', {address_result: result[0]});
        }
    });
});

router.get('/insert', function(req,res){
    customer_dal.insert(req.query, function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302, '/customer/all');
        }
    });
});

module.exports = router;