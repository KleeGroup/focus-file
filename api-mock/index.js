var express = require('express');
var port = process.env.PORT || 9998;
var bodyParser = require('body-parser')
var _ = require('lodash');
var args = process.argv.slice(2);
var baseDir = './';
if (args.length > 0) {
   baseDir = args[0];
}
var staticFolder = __dirname;

var app = express();
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(function(req, res, next) {
   console.log(new Date() + ', ' + req.method + ', ' + req.url);
   if (!_.isEmpty(req.body)) {
       console.log(req.body);
   }
   next();
});
//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header('Content-Type', 'application/json');
  next();
}
app.use(allowCrossDomain);
var FileMiddleWareConfig = require('./file-middleware');
app.use(new FileMiddleWareConfig({}).init);
app.post('/upload', function (req, res) {
    res.sendStatus(200);
});
// Server
var server = app.listen(port, function() {
 var port = server.address().port;
 console.log('File Mocked API listening at http://localhost:%s', port);
});
