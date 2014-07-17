'use strict';

var range = require('range');

module.exports = function (start, end) {
  var pairRange = range(start, end + 1);
  var getRandom = randomRange(start, end);
  var result = [];
  var paired = {};

  pairRange.forEach(function (start) {
    var random = start;

    while (random === start) {
      random = getRandom();

      if (paired[random]) {
        random = start;
      }
    }

    paired[random] = true;

    result.push([start, random]);
  });

  return result;
};

function randomRange(min, max) {
  max += 1;
  return function () {
    return Math.floor(Math.random() * (max - min)) + min;
  };
}

