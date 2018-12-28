var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  insecureAuth: false,
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  console.log('Connected as id ' + connection.threadId);
});

function registerUser() {
  var email = document.getElementById("email_field").value;
  var password = document.getElementById("password_field").value;
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;

  var passwordHash = sha256(password);
  var createDate = new Date();

  var insertQuery = 'INSERT INTO user_login_info VALES (${email}, ${passwordHash}, ${firstName}, ${lastName}, ' +
      '${createDate})';

  connection.query(insertQuery, function (error, results, fields) {
    if (error)
      throw error;
  });

  connection.end();
}

function userLogin(email, password) {
  var loginQuery = 'SELECT password_hash FROM user_login_info WHERE email=${email}';

  connection.query(loginQuery, function (error, results, fields) {
    if (error) {
      throw error;
    }

    if (results) {
      console.log("An account with this email does not exist!")

    } else {
      var storedHash = results[0];

      if (sha256(password) === storedHash) {
        console.log("Password was correct")
        // TODO: if the password hash matched the one retrieved from the database, log the user in
      } else {
        console.log("Password was wrong")
      }
    }
  });

  connection.end();
}

/* GET users listing. */
 router.get('/', function (req, res, next) {
   res.render('home-page', {title: "Atlas"});
 });

module.exports = router;