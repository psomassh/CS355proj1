var express = require('express');
var router = express.Router();
var company1_dal = require('../dal/company1_dal');
var address1_dal = require('../dal/address1_dal');


/*Get users listening. */
router.get('/all', function(req, res,next){
    company1_dal.viewAll(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('company1/company1_view_all', {result: result});
        }
    })
});

router.get('/add', function(req, res){
    // passing all the query parameters (req.query) to the insert function instead of each individually
    address1_dal.getAll(function(err,result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('company1/company1_add', {result: result[0]});
        }
    });
});

router.get('/insert', function(req,res){
    company1_dal.insert(req.query, function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302, '/company1/all');
        }
    });
});

router.get('/edit', function(req, res){
    company1_dal.getinfo(req.query.comp_id, function(err, result) {
        if(err) {
            res.send(err); }
        else {
            res.render('company1/company1Update',
                {company1: result[0][0], address_result: result[1], was_successful: true}
            );
        }
    });
});


router.get('/update', function(req, res) {
    company1_dal.update(req.query, function(err, result){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302, '/company1/all');
        }
    });
});


router.get('/delete', function(req,res){
    company1_dal.delete(req.query.comp_id, function(err,comp_id){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302, '/company1/all?comp_id=' + comp_id + '&was_successful=1');
        }
    });
});
module.exports = router;