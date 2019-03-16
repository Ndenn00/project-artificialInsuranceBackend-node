var mongoose = require('mongoose');

//data schema

var quoteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    maritalStatus: {
        type: String,
        required: true
    },
    ssid: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    licenceNumber: {
        type: String,
        required: true
    },
    yearsHeld: {
        type: Number,
        required: true
    },
    fid: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    previousAddress: {
        type: String,
    },
    carMake: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true
    },
    carYear: {
        type: String,
        required: true
    },
    carMiles: {
        type: Number,
        required: true
    },
    primaryUse: {
        type: Boolean,
        required: true
    },
    ownOrLease: {
        type: String,
        required: true
    },
    lengthOfOwnership: {
        type: String,
        required: true
    },
    cover: {
        type: Array,
        required: false
    },
    previousAccidents: {
        type: String,
        required: true
    },
    accidentWithinFiveYears: {
        type: Boolean,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    dateQuoted: {
        type: String,
        required: true
    },
    referenceId: {
        type: String,
        required: true
    }
});

var Quote = module.exports = mongoose.model('Quote', quoteSchema, 'quotes');

// Get All
module.exports.getQuote = function (callback, limit) {
    Quote.find(callback).limit(limit);
}

//Get One
module.exports.getQuoteByRef = function (ref, callback) {
    Quote.findOne({'referenceId': ref}, callback);
}

//Post
module.exports.addQuote = function (quote, callback) {
    Quote.create(quote, callback);
}