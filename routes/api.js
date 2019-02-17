var express = require('express');
var router = express.Router();
var quoteUtility = require('../config/utility/quoteUtility')
var bodyParser = require('body-parser');
Test = require('../models/test')
var errorJson = require('../models/json/error')


router.get('/', function(req, res){
    res.send('Hello World Again')
}); 

router.get('/tests', function(req, res){
    Test.getTests(function(err, tests){
        if(err){
            throw err; 
        }
        res.json(tests); 
    });
}); 

router.get('/tests/:_id', function(req, res){
    Test.getTestById(req.params._id, function(err, test){
        if(err){
            throw err; 
        }
        res.json(test); 
    });
});

module.exports = router;