'use strict';

var test = require('tape');
var range = require('range');
var gen = require('../index');

test('number of pairs', function (t) {
  var result = gen(1, 30);

  t.equal(result.length, 30, 'Should have appropriate number of pairs');
  t.end();
});

test('correct starting pair', function (t) {
  var start = 1;
  var end = 30;
  var result = gen(start, end); 
  var firstPairs = range(start, end + 1);
  var resultFirsts = result.map(function (r) {
    return r[0];
  });

  t.same(resultFirsts, firstPairs, 'first item in pair is sequential and in range');
  t.end();
});

test('second item in pair not equal to first', function (t) {
  var start = 1;
  var end = 30;
  var result = gen(start, end); 
  var firstPairs = range(start, end + 1);
  var resultSecond = result.map(function (r) {
    return r[1];
  });

  t.notSame(resultSecond, firstPairs, 'second item in pair is not equal to first');
  t.end();
});

test('different range', function (t) {
  var start = 5;
  var end = 10;
  var result = gen(start, end); 
  var firstPairs = range(start, end + 1);
  var resultSecond = result.map(function (r) {
    return r[1];
  });

  t.notSame(resultSecond, firstPairs, 'second item in pair is not equal to first');
  t.end();
});

// TODO: Check for uniqueness
