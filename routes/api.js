var express = require('express');
var router = express.Router();
var quoteUtility = require('../config/utility/quoteUtility')


router.get('/', function(req, res){
    res.send('Hello World Again')
}); 

module.exports = router;