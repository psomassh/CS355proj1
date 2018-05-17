var mysql = require('mysql');
var db = require('./db_connection.js');

//DATABASE CONFIGURATION
var connection = mysql.createConnection(db.config);

exports.viewAll = function(callback){
    var query = 'SELECT * FROM company_view;';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.getAll = function(callback){
    var query = 'CALL company1_getall()';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};

exports.insert = function(params, callback){
    var query = 'INSERT INTO company1 (name, owner_fname, owner_lname, address_id) VALUES (?,?,?,?)';
    var queryData = [params.name, params.owner_fname, params.owner_lname,params.address_id];

    connection.query(query, queryData, function(err, result){
        callback(err,result);
    });
};


exports.update = function(params, callback) {
    var query = 'UPDATE company1 SET name = ?, owner_fname = ?, owner_lname = ?, address_id = ? WHERE comp_id = ?';
    var queryData = [params.name, params.owner_fname, params.owner_lname, params.address_id, params.comp_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
        });
};

exports.getinfo = function(comp_id, callback) {
    var query = 'CALL company1_getinfo(?)';
    var queryData = [comp_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.delete = function(comp_id, callback) {
    // stored procedure to call
    var query = 'CALL company1_delete(?)';
    var queryData = [comp_id];

    // call the stored procedure
    connection.query(query, queryData,function(err, result) {
        callback(err, comp_id);
    });
};