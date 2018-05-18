var mysql = require('mysql');
var db = require('./db_connection.js');


var connection = mysql.createConnection(db.config);
exports.correlated = function(callback){
    var query = 'CALL correlated()';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.join = function(callback){
    var query = 'CALL _join()';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.in = function(callback){
    var query = 'CALL _in()';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.exists = function(callback){
    var query = 'CALL _exists()';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.compare = function(callback){
    var query = 'CALL compare()';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.group_by = function(callback){
    var query = 'CALL group_by()';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.join_group_having = function(callback){
    var query = 'CALL join_group_having()';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.order_by = function(callback){
    var query = 'CALL _order_by()';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.union = function(callback){
    var query = 'CALL _union()';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.distinct= function(callback){
    var query = 'CALL _distinct()';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};