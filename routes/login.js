var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("/login")
});

router.get('/login', function(req, res, next) {
  console.log("/login/login")
});

router.get('/login/login', function(req, res, next) {
  console.log("/login/login/login")
});

router.get('/login/login/login', function(req, res) {
  console.log("/login/login/login/login")
});

module.exports = router;