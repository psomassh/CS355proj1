var mysql = require('mysql');
var db = require('./db_connection.js');

//DATABASE CONFIGURATION
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback){
    var query = 'SELECT * FROM customer_view;';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.insert = function(params, callback){
    var query = 'INSERT INTO customer (fname, lname, address_id) VALUES (?,?,?)';
    var queryData = [params.fname, params.lname, params.address_id];

    connection.query(query, queryData, function(err, result){
        callback(err,result);
    });
};


exports.update = function(params, callback) {
    var query = 'UPDATE customer SET fname = ?, lname = ?, address_id = ? WHERE cust_id = ?';
    var queryData = [params.fname, params.lname, params.address_id, params.cust_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


exports.getinfo = function(cust_id, callback) {
    var query = 'CALL customer_getinfo(?)';
    var queryData = [cust_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


exports.delete = function(cust_id, callback) {
    // stored procedure to call
    var query = 'CALL customer_delete(?)';
    var queryData = [cust_id];

    // call the stored procedure
    connection.query(query, queryData,function(err, result) {
        callback(err, cust_id);
    });
};




