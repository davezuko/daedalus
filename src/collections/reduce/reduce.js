function _reduce (fn, accum, xs, i) {
  var len = xs.length;

  for (; i < len; i++) {
    accum = fn(accum, xs[i], i);
  }
  return accum;
}

module.exports = function (fn, accum, xs) {
  return typeof accum === 'undefined' ?
    reduce(fn, xs[0], xs, 1) : reduce(fn, accum, xs, 0);
};