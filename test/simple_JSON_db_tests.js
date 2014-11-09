'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

require('../server');

var expect = chai.expect;

describe('simple JSON Database', function() {
  it('should be able to write json', function(done) {
    chai.request('http://localhost:8080')
    .post('/karl')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.be.json;
      //expect(res.body.msg).to.eql('New User Saved!');
      done();
    });
  });

  // it('should be able to get a single user', function(done) {
  //   chai.request('http://localhost:8080')
  //   .get('/karl')
  //   .end(function(err, res) {
  //     expect(err).to.eql(null);
  //     expect(res.body.name).to.eql('karl');
  //     done();
  //   });
  // });

});
