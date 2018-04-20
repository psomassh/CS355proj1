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


/*exports.getAll = function( callback){
    var query = 'CALL employee_getall()';

    connection.query(query, function(err,result){
        callback(err,result);
    });
};
*/

exports.getAll = function( callback) {

    var query = 'CALL employee_getall()';
   // var queryData = [emp_id];

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

/*exports.getinfo = function(emp_id, callback) {

    var query = 'CALL employee_getinfo(?)';
    var queryData = [emp_id];

    connection.query(query, queryData, queryData, function(err, result) {
        callback(err, result);
    });
};
*/

exports.insert = function(params, callback){
    var query = 'INSERT INTO employee (ssn, fname, lname, wage, address_id, comp_id) VALUES (?,?,?,?,?,?)';
    var queryData = [params.ssn, params.fname, params.lname, params.wage, params.address_id, params.comp_id];

    connection.query(query, queryData, function(err, result){
        callback(err,result);
    });
};