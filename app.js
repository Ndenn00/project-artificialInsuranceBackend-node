var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 

Data = require('./models/data')

mongoose.connect('mongodb://localhost/testDB', { useNewUrlParser: true }); 
var db = mongoose.connection; 

var apiRouter = require('./routes/api');
app.use(bodyParser.json());

app.use('/api', apiRouter);



app.listen(3000);
console.log('Running on port 3000') 