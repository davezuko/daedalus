import _slice from './internal/_slice'
import _map from './internal/_map'

/**
 * @name juxt
 * @category Function
 * @description
 * Applies a list of functions to a given set of arguments, returning a list
 * of the results of those applications.
 *
 * @example
 * juxt([inc, dec, multiply(3)])(2)    // => [3, 1, 6]
 * juxt([add, divide, multiply])(2, 4) // => [6, 2, 8]
 */
export default function juxt (fns) {
  return function () {
    var args = _slice.call(arguments)
    return _map(function (fn) {
      return fn.apply(null, args)
    }, fns)
  }
}
