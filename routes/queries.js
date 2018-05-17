var express = require('express');
var router = express.Router();
var queries_dal = require('../dal/queries_dal');


router.get('/correlated', function(req, res,next){
    queries_dal.correlated(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('queries/query_correlated', {result: result});
        }
    });
});

router.get('/join', function(req, res,next){
    queries_dal.join(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('queries/query_join', {result: result});
        }
    });
});

router.get('/in', function(req, res,next){
    queries_dal.in(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('queries/query_in', {result: result});
        }
    });
});

router.get('/exists', function(req, res,next){
    queries_dal.exists(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('queries/query_exists', {result: result});
        }
    });
});

router.get('/compare', function(req, res,next){
    queries_dal.compare(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('queries/query_compare', {result: result});
        }
    });
});

router.get('/group_by', function(req, res,next){
    queries_dal.group_by(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('queries/query_group_by', {result: result});
        }
    });
});

router.get('/join_group_having', function(req, res,next){
    queries_dal.join_group_having(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('queries/query_join_group_having', {result: result});
        }
    });
});

router.get('/order_by', function(req, res,next){
    queries_dal.order_by(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('queries/query_order_by', {result: result});
        }
    });
});

router.get('/union', function(req, res,next){
    queries_dal.union(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('queries/query_union', {result: result});
        }
    });
});

router.get('/distinct', function(req, res,next){
    queries_dal.distinct(function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(result);
            res.render('queries/query_distinct', {result: result});
        }
    });
});

module.exports = router;