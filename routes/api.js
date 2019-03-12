var express = require('express');
var router = express();
var quoteUtility = require('../config/utility/quoteUtility');
var priceUtility = require('../config/utility/priceUtility');
var idGenerator = require('../config/utility/basicRandomIdGenerator');
var bodyParser = require('body-parser');

Test = require('../models/test')
Quote = require('../models/quoteData')
router.use(bodyParser.json());


router.get('/', function (req, res) {
    res.send('Hello World Again')
});


router.post('/quotes', function (req, res) {
    var quote = req.body;
    Quote.addQuote(quote, function (err, quote) {
        if (err) {
            throw err;
        }
        console.log('success')
        res.json(quote);
    })
})

router.get('/quotes', (req, res) => {
    Quote.getQuote((err, quote) => {
        if (err) {
            throw err;
        }
        res.json(quote);
    });
});

router.get('/quotes/:ref', (req, res) => {
    Quote.getQuoteByRef(req.params.ref, (err, quote) => {
        if (err) {
            throw err;
        }
        res.json(quote);
    });
});

module.exports = router;