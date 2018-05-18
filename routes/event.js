var express = require('express');
var router = express.Router();
var event_dal = require('../dal/event_dal');


router.get('/all', function(req, res,next){
    event_dal.viewAll(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('event/event_view_all',
                {result: result});
        }
    })
});


router.get('/add', function(req, res){
    event_dal.getAll(function(err, result) {
        if(err) {
            res.send(err);  }
        else {
            res.render('event/event_add',
                {result: result[0][0],
                address_result: result[1],
                comp_result: result[2],
                cust_result: result[3]}
            );
        }
    });
});


router.get('/insert', function(req,res){
    event_dal.insert(req.query, function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302, '/event/all');
        }
    });
});


router.get('/edit', function(req, res){
    event_dal.getinfo(req.query.event_id, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.render('event/eventUpdate',
                {result: result[0][0],
                    address_result: result[1],
                    company_result: result[2],
                    customer_result: result[3],
                    was_successful: true}
            );
        }
    });
});


router.get('/update', function(req, res) {
    event_dal.update(req.query, function(err, result){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302, '/event/all');
        }
    });
});


router.get('/delete', function(req,res){
    event_dal.delete(req.query.event_id, function(err,event_id){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302, '/event/all?event_id=' + event_id + '&was_successful=1');
        }
    });
});


module.exports = router;