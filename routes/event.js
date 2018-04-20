var express = require('express');
var router = express.Router();
var event_dal = require('../dal/event_dal');


/*Get users listening. */
router.get('/all', function(req, res,next){
    event_dal.viewAll(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('event/event_view_all', {result: result});
        }
    })
});


router.get('/add', function(req, res){
    event_dal.getAll(function(err, result) {
        if(err) {
            res.send(err);  }
        else {
            res.render('event/event_add', {result: result[0][0],address_result: result[1],
                comp_result: result[2], cust_result: result[3]}
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

module.exports = router;