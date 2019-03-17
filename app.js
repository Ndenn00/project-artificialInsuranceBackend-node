var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 
require('dotenv').config();

const uri = 'mongodb://localhost/quoteDB';
const options = {useNewUrlParser: true}; 

Data = require('./models/quoteData')
mongoose.connect(uri, options);
var db = mongoose.connection; 

var apiRouter = require('./routes/api');
app.use(bodyParser.json());
app.use('/api', apiRouter);

app.listen(3000);
console.log('Running') 