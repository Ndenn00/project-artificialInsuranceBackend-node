var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 
require('dotenv').config();

//TestDB vs QuoteDB
// Data = require('./models/data')
// mongoose.connect('mongodb://localhost/testDB', { useNewUrlParser: true }); 
Data = require('./models/quoteData')
mongoose.connect('mongodb://localhost/quoteDB', { useNewUrlParser: true });
var db = mongoose.connection; 


var apiRouter = require('./routes/api');
app.use(bodyParser.json());
app.use('/api', apiRouter);

app.listen(3000);
console.log('Running on port 3000') 