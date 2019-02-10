var quote = require('../config/helper/quote'); 
var expect = require('chai').expect;

describe('#quote()', function(){
  context('it should return a number', function(){
    it('returns a number', function(){
      expect(quote()).to.be.a('number')
    })
  })
})