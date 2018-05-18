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

exports.update = function(params, callback) {
    var query = 'UPDATE event SET date_time = ?, menu = ?, address_id = ?, cust_id = ?, comp_id = ? WHERE event_id = ?';
    var queryData = [params.date_time, params.menu, params.address_id, params.cust_id, params.comp_id, params.event_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


exports.getinfo = function(event_id, callback) {
    var query = 'CALL event_getinfo(?)';
    var queryData = [event_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


exports.delete = function(event_id, callback) {
    // stored procedure to call
    var query = 'CALL event_delete(?)';
    var queryData = [event_id];

    // call the stored procedure
    connection.query(query, queryData,function(err, result) {
        callback(err, event_id);
    });
};



