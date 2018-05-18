var express = require('express');
var router = express.Router();
var customer_dal = require('../dal/customer_dal');
var address1_dal = require('../dal/address1_dal');


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


router.get('/edit', function(req, res){
    customer_dal.getinfo(req.query.cust_id, function(err, result) {
        if(err) {
            res.send(err); }
        else {
            res.render('customer/customerUpdate',
                {customer: result[0][0], address_result: result[1], was_successful: true}
            );
        }
    });
});


router.get('/update', function(req, res) {
    customer_dal.update(req.query, function(err, result){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302, '/customer/all');
        }
    });
});


router.get('/delete', function(req,res){
    customer_dal.delete(req.query.cust_id, function(err,cust_id){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302, '/customer/all?cust_id=' + cust_id + '&was_successful=1');
        }
    });
});




module.exports = router;