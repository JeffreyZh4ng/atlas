var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  database : process.env.DB_NAME,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORd,
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM employee', function (error, results, fields) {
  if (error)
    throw error;

  results.forEach(result => {
    console.log(result);
  });
});

connection.end();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;