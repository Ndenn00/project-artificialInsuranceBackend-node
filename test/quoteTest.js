var quote = require('../config/utility/quote');
var expect = require('chai').expect;

describe('#quote()', function () {
    it('returns a number', function () {
      expect(quote()).to.be.a('number')
    })
})



// describe('#quote()', function () {
//   context('finds properties', function () {
//     it('finds the age property', function () {
     
//     })
//   })
//)