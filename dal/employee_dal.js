var mysql = require('mysql');
var db = require('./db_connection.js');


//DATABASE CONFIGURATION
var connection = mysql.createConnection(db.config);

exports.viewAll = function(callback){
    var query = 'SELECT * FROM employee_view;';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};


exports.getAll = function( callback) {

    var query = 'CALL employee_getall()';
   // var queryData = [emp_id];

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};


exports.insert = function(params, callback){
    var query = 'INSERT INTO employee (ssn, fname, lname, wage, address_id, comp_id) VALUES (?,?,?,?,?,?)';
    var queryData = [params.ssn, params.fname, params.lname, params.wage, params.address_id, params.comp_id];

    connection.query(query, queryData, function(err, result){
        callback(err,result);
    });
};


exports.update = function(params, callback) {
    var query = 'UPDATE employee SET ssn = ?, fname = ?, lname = ?, address_id = ?, comp_id = ? WHERE emp_id = ?';
    var queryData = [params.ssn, params.name, params.lname, params.address_id, params.comp_id, params.emp_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


exports.getinfo = function(emp_id, callback) {
    var query = 'CALL employee_getinfo(?)';
    var queryData = [emp_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


exports.delete = function(emp_id, callback) {
    // stored procedure to call
    var query = 'CALL employee_delete(?)';
    var queryData = [emp_id];

    // call the stored procedure
    connection.query(query, queryData,function(err, result) {
        callback(err, emp_id);
    });
};