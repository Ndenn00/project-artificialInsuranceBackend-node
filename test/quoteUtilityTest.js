
var quoteUtility = require('../config/utility/quoteUtility'); 
var assert = require('chai').assert; 
var moment = require('moment');


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

describe('#differenceInYears', function(){
  context('when is called', function(){
    it('returns a number', function(){
      var actual = quoteUtility.differenceInYears(); 

      assert.typeOf(actual, 'number', 'is a type of number')
    })
  }),
  context('when passed a number',function(){
    it('returns one when passed a year ago', function(){
      var yesterday = moment().subtract(1, 'year').calendar();

      var actual = quoteUtility.differenceInYears(yesterday); 
      var expected = 1; 

      assert.equal(expected, actual, 'are equal')
    }),
    it('returns two when passed a two years ago', function(){
      var twoYears = moment().subtract(2, 'year').calendar();

      var actual = quoteUtility.differenceInYears(twoYears); 
      var expected = 2; 

      assert.equal(expected, actual, 'are equal')
    }),
    it('returns thirty two when passed a 09/10/1986 years ago', function(){
     

      var actual = quoteUtility.differenceInYears('1986-10-09'); 
      var expected = 32; 

      assert.equal(expected, actual, 'are equal')
    })
  })
})