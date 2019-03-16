var mongoose = require ('mongoose'); 

//data schema

var testSchema = mongoose.Schema({
    test1: {
        type: String,
        required: true
    }, 
    test2:{
        type: String,
        required: true
    }, 
    test3:{
        type: String,
        required: true
    }
}); 

var Test = module.exports = mongoose.model('Test', testSchema); 

// Get data
module.exports.getTests = function(callback, limit){
    Test.find(callback).limit(limit); 

}

module.exports.getTestById = function(id, callback){
    Test.findById(id, callback);

}

