
var quoteUtility = require('../config/utility/quoteUtility'); 
var assert = require('chai').assert; 


describe('#basePrice()', function(){
  context('Test the functionality of basePrice method', function(){
    it('returns a number', function(){
      var actual = quoteUtility.basePrice(); 

      assert.typeOf(actual, 'number', 'is a type of number')
    }),
    it('returns a positive number', function(){
      var actual = quoteUtility.basePrice(); 

      assert.isAbove(actual, 0, 'is over zero')
    }),
    it('returns exactly 400', function(){
      var actual = quoteUtility.basePrice(); 
      var expected = 400; 

      assert.equal(actual, expected, 'are equal' )
    })
  })
})

