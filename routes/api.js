var express = require('express');
var router = express();
var bodyParser = require('body-parser');

const path = require('path');
app.use(express.static(path.join(__dirname, 'client/build')))

Quote = require('../models/quoteData')
router.use(bodyParser.json());


router.get('/', function (req, res) {
    res.send('Hello World Again')
});


router.post('/quotes', function (req, res) {
    var givenQuote = req.body;
    Quote.addQuote(givenQuote, function (err, quote) {
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
        if(!quote){
            res.status(404)        
            .send('Not found');
        } else {
            res.json(quote);
        }
    });
});

router.get('/quotes/:ref', (req, res) => {
    Quote.getQuoteByRef(req.params.ref, (err, quote) => {
        if (err) {
            throw err;
        }
        if(!quote){
            res.status(404)        
            .send('Not found');
        } else {
            res.json(quote);
        }
        
    });
});

module.exports = router;