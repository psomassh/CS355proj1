var express = require('express');
var router = express.Router();
var employee_dal = require('../dal/employee_dal');


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


router.get('/edit', function(req, res){
    employee_dal.getinfo(req.query.emp_id, function(err, result) {
        if(err) {
            res.send(err); }
        else {
            res.render('employee/employeeUpdate',
                {result: result[0][0], address_result: result[1],company_result: result[2],  was_successful: true}
            );
        }
    });
});


router.get('/update', function(req, res) {
    employee_dal.update(req.query, function(err, result){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302, '/employee/all');
        }
    });
});


router.get('/delete', function(req,res){
    employee_dal.delete(req.query.emp_id, function(err,emp_id){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302, '/employee/all?emp_id=' + emp_id + '&was_successful=1');
        }
    });
});


module.exports = router;