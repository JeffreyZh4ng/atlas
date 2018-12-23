var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//   next();
// });
//
// router.get('/test', function(req, res, next) {
//   res.render('index', { title: 'TEST' });
// });

router.use(function frontControllerMiddlewareExecuted(req, res, next){
  console.log('(1) this frontControllerMiddlewareExecuted is executed');
  next();
});

router.all('*', function(req, res, next){
  console.log('(2) route middleware for all method and path pattern "*", executed first and can do stuff before going next');
  next();
});

router.all('/hello', function(req, res, next){
  console.log('(3) route middleware for all method and path pattern "/hello", executed second and can do stuff before going next');
  next();
});

router.use(function frontControllerMiddlewareNotExecuted(req, res, next){
  console.log('(4) this frontControllerMiddlewareNotExecuted is not executed');
  next();
});

router.get('/hello', function(req, res){
  console.log('(5) route middleware for method GET and path patter "/hello", executed last and I do my stuff sending response');
  res.render('index', { title: 'TEST' });
});

module.exports = router;