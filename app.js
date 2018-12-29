require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Enable json parsing
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Setting client-readings to client folder
app.use(express.static(path.join(__dirname, 'public')));

// Establish connection to the mysql server
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  insecureAuth: false,
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    connection.end();
  }

  console.log('Connected as id ' + connection.threadId);
});

//add all routing
const routes = require('./routes/index');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
