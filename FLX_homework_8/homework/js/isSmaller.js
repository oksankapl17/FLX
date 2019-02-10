const isBigger = require('./isBigger.js');

function isSmaller(a, b) {
  return !isBigger(a, b);
}

isSmaller(5, -1);
