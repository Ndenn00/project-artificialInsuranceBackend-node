var mongoose = require ('mongoose'); 

//data schema

var dataSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    firstName:{
        type: String,
        required: true
    }, 
    lastName:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    maritalStatus:{
        type: String,
        required: true
    },
    social:{
        type: String,
        required: true
    },
    occupation:{
        type: String,
        required: true
    },
    licenceNumber:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    yearsHeld:{
        type: Number,
        required: true
    },
    fid:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zip:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    previousAddress:{
        type: String,
    },
    carMake:{
        type: String,
        required: true
    },
    carModel:{
        type: String,
        required: true
    },
    carYear:{
        type: String,
        required: true
    },
    carMiles:{
        type: Number,
        required: true
    },
    primaryUse:{
        type: Boolean,
        required: true
    },
    ownOrLease:{
        type: String,
        required: true
    },
    lengthOfOwnership:{
        type: String,
        required: true
    },
    cover:{
        type: Array,
        required: false
    },
    previousAccidents:{
        type: String,
        required: true
    },
    accidentWithinFiveYears:{
        type: Boolean,
        required: true
    },
    totalPrice:{
        type: Number,
        required: true 
    },
    dateQuoted:{
        type: Date,
        required: true
    },
    referenceId:{
        type: String,
        required: true
    }
}); 

var Data = module.exports = mongoose.model('Genre', dataSchema); 

// Get data
module.exports.getQuote = function(callback, limit){
    Data.find(callback).limit(limit); 

}

