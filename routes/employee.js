var express = require('express');
var router = express.Router();
var employee_dal = require('../dal/employee_dal');


/*Get users listening. */
router.get('/all', function(req, res,next){
    employee_dal.viewAll(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('employee/employee_view_all', {result: result});
        }
    })
});


router.get('/add', function(req, res){
    employee_dal.getAll(function(err, result) {
        if(err) {
            res.send(err); }
        else {
            res.render('employee/employee_add', {result: result[0][0],address_result: result[1], comp_result: result[2]}
            );
        }
    });
});

router.get('/insert', function(req,res){
    employee_dal.insert(req.query, function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302, '/employee/all');
        }
    });
});

module.exports = router;