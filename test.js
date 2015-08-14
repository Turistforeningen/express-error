/* eslint no-console: 0, func-names: 0 */
'use strict';

const server  = require('./examples/server');
const error   = require('./');
const assert  = require('assert');
const request = require('supertest');

let app;
let err;
let req;
let res;

beforeEach(function() {
  console.error = function() {};

  app = request(server);

  err = new Error('My Error');
  req = {};
  res = {
    status: function() {},
    json: function() {},
  };
});

describe('express-errors', function() {
  it('sets default status code', function(done) {
    res.status = function(status) {
      assert.equal(status, 500);
      done();
    };

    error(err, req, res);
  });

  it('sets custom status code', function(done) {
    err.status = 123;
    res.status = function(status) {
      assert.equal(status, 123);
      done();
    };

    error(err, req, res);
  });

  it('stays silent when error is < 500', function(done) {
    console.error = function(msg) {
      assert.ifError(msg);
    };

    err.status = 443;
    err.json = done;

    error(err, req, res);
  });

  it('prints error to console.error', function(done) {
    console.error = function(msg) {
      assert(/My Error/.test(msg));
    };

    err.status = 543;
    err.json   = done;

    error(err, req, res);
  });

  it('prints wrapped error to console.error', function(done) {
    console.error = function(msg) {
      assert(/Wrapped Error/.test(msg));
    };

    err.status = 543;
    err.error  = new Error('Wrapped Error');
    err.json   = done;

    error(err, req, res);
  });


  it('returns error as json object', function(done) {
    res.json = function(json) {
      assert.deepEqual(json, {status: 500, message: 'My Error'});
      done();
    };

    error(err, req, res);
  });

  it('returns error as json object through json function', function(done) {
    res.json = function(json) {
      assert.deepEqual(json, {status: 123, message: 'My Other Message'});
      done();
    };

    err.json = function() {
      return {status: 123, message: 'My Other Message'};
    };

    error(err, req, res);
  });

  describe('middleware', function() {
    it('handles thrown error', function(done) {
      app.get('/error')
        .expect(500)
        .expect({status: 500, message: 'something broke!'})
        .end(done);
    });

    it('handles nexted error', function(done) {
      app.get('/next')
        .expect(500)
        .expect({status: 500, message: 'oh no!'})
        .end(done);
    });
  });
});
