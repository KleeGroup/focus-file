const express = require('express');

const app = express();

//CORS middleware
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Cache-Control');
    res.header('Content-Type', 'application/json');
    next();
};
app.use(allowCrossDomain);

const FileMiddleWareConfig = require('./file-middleware');
app.use(new FileMiddleWareConfig().init());

app.get('/', (req, res) => {
    res.send('Functional file server');
});

app.post('/upload', (req, res) => {
    console.log(req);
    // console.log(req.body); // form fields
    // console.log(req.files); // form files
    res.status(204).end();
});

app.listen(9998, () => {
    const port = 9998;
    console.log('File Mocked API listening at http://localhost:%s', port);
} );
