import _concat from './internal/_concat'

/**
 * @name prepend
 * @category Collection
 * @since v0.14.0
 * @description
 * Inserts a value at the head of a list. If the argument in list position
 * is a string, string concatenation is used instead.
 *
 * @example
 * prepend(1, [2, 3, 4]) // => [1, 2, 3, 4]
 * prepend('foo', 'bar') // => 'foobar'
 */
export default function prepend (a, as) {
  if (typeof as === 'string') {
    return a + as
  }
  return _concat.call([a], as)
}
