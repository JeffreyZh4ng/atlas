var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("/home")
});

router.get('/home', function(req, res, next) {
  console.log("/home/home")
});

router.get('/home/home', function(req, res, next) {
  console.log("/home/home/home")
});

router.get('/home/home/home', function(req, res) {
  console.log("/home/home/home/home")
});

module.exports = router;