import _defn from './internal/_defn'
import _slice from './internal/_slice'

/**
 * @name tail
 * @signature [a] -> [a]
 * @namespace Collection
 * @since v0.1.0
 * @description
 * Returns a subset of a list containing all elements except the first. If
 * the list is empty or has only one element, an empty list is returned.
 *
 * @example
 * tail([1, 2, 3, 4, 5]) // => [2, 3, 4, 5]
 * tail([1])             // => []
 * tail([])              // => []
 */
export default _defn('tail', function (xs) {
  return _slice.call(xs, 1)
})
