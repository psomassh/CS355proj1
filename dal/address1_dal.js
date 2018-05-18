var mysql = require('mysql');
var db = require('./db_connection.js');

//DATABASE CONFIGURATION
var connection = mysql.createConnection(db.config);

exports.viewAll = function(callback){
    var query = 'SELECT * FROM address_view;';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.getAll = function(callback){
    var query = 'CALL address1_getall()';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.insert = function(params, callback){
    var query = 'INSERT INTO address1 (street, city, state, zip_code) VALUES (?,?,?,?)';
    var queryData = [params.street, params.city, params.state,params.zip_code];

    connection.query(query, queryData, function(err, result){
        callback(err,result);
    });
};


exports.getinfo = function(address_id, callback) {
    var query = 'CALL address1_getinfo(?)';
    var queryData = [address_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });

};


exports.update = function(params, callback) {
    var query = 'UPDATE address1 SET street = ?, city = ?, state = ?, zip_code = ? WHERE address_id = ?';
    var queryData = [params.street, params.city, params.state, params.zip_code,params.address_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


exports.delete = function(address_id, callback) {
    // stored procedure to call
    var query = 'CALL address1_delete(?)';
    var queryData = [address_id];

    // call the stored procedure
    connection.query(query, queryData,function(err, result) {
        callback(err, address_id);
    });
};