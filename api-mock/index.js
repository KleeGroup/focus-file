var express = require('express'),
    multer  = require('multer'),
    done = false;

var app = express();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Cache-Control");
  res.header('Content-Type', 'application/json');
  next();
}
app.use(allowCrossDomain);
var fileMiddleWareConfig = require('./file-middleware');
app.use(new fileMiddleWareConfig().init());

app.get('/', function(req, res){
  res.send('Functional file server');
});
app.post('/upload', function (req, res) {
    res.sendStatus(200);
});
app.post('/upload', function(req, res, next){
    console.log(req.body) // form fields
    console.log(req.files) // form files
    res.status(204).end()
})
app.listen(9998,function() {
 var port = 9998;
 console.log('File Mocked API listening at http://localhost:%s', port);
} );
