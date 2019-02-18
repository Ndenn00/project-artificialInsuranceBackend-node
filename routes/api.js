var express = require('express');
var router = express();
var quoteUtility = require('../config/utility/quoteUtility')
var bodyParser = require('body-parser');
Test = require('../models/test')
Quote = require('../models/quoteData')
router.use(bodyParser.json());


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

router.post('/quotes', function(req,res){
    var quote = req.body;

    Quote.addQuote(quote, function(err, quote){
        if(err){
            throw err;
        }
        console.log('success')
        res.json(quote); 
    })
})

router.get('/quotes', function(req, res){
    Quote.getQuote(function(err, quote){
        if(err){
            throw err; 
        }
        res.json(quote); 
    });
});

module.exports = router;