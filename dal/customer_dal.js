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