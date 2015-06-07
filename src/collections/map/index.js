var curryN = require('../../functions/curry-n');

module.exports = curryN(2, function map (fn, xs) {
  var i  = 0, len = xs.length,
      ys = new Array(len);

  for (; i < len; i++) {
    ys[i] = fn(xs[i], i);
  }
  return ys;
});
