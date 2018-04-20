var mysql = require('mysql');
var db = require('./db_connection.js');

//DATABASE CONFIGURATION
var connection = mysql.createConnection(db.config);

exports.viewAll = function(callback){
    var query = 'SELECT * FROM event_view;';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.getAll = function(callback){
    var query = 'CALL event_viewAll()';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.insert = function(params, callback){
    var query = 'INSERT INTO event (date_time, menu, address_id, cust_id, comp_id) VALUES (?,?,?,?,?)';
    var queryData = [params.date_time,params.menu, params.address_id, params.cust_id,params.comp_id];

    connection.query(query, queryData, function(err, result){
        callback(err,result);
    });
};