'use strict';

var range = require('range');

module.exports = function (start, end, shufflePairs) {
  var pairRange = range(start, end + 1);
  var getRandom = randomRange(start, end);
  var pairedMap = {};
  var shuffledMap = {};
  var result = [];
  var shuffled = [];

  pairRange.forEach(function (start) {
    var random = start;

    while (random === start) {
      random = getRandom();

      if (pairedMap[random]) {
        random = start;
      }
    }

    pairedMap[random] = true;
    result.push([start, random]);
  });

  if (shufflePairs) {
    var shuffleRandom = randomRange(start - 1, end - 1);

    result.forEach(function (pair) {
      var random = shuffleRandom();

      while (shuffledMap[random]) {
        random = shuffleRandom(); 
      }

      shuffled[random] = pair;
      shuffledMap[random] = true;
    });
    
    return shuffled;     
  }
  else {
    return result;
  }
};

function randomRange(min, max) {
  max += 1;
  return function () {
    return Math.floor(Math.random() * (max - min)) + min;
  };
}

