pair-me-up
==========

Gives a range, each paired with one another

[![NPM](https://nodei.co/npm/pair-me-up.png?downloads=true&stars=true)](https://nodei.co/npm/pair-me-up/)


## Usage

```js
var pair = require('pair-me-up');
var pairs = pair(1, 30);

console.log(pairs);
// [[1, 5], [2, 17], [3, 2], [4, 10], ...]
```

You can also shuffle the resulting pairs:

```js
var pair = require('pair-me-up');
var pairs = pair(1, 5, true);

console.log(pairs);
// [[3, 2], [5, 1], [2, 5], [4, 2], ...]
```

[![view on requirebin](http://requirebin.com/badge.png)](http://requirebin.com/?gist=954fa6dab4e7c6822fa6)
