/**
 * @name dissoc
 * @category Object
 * @since v0.10.0
 * @description
 * Removes a given key from an object. You can think of `dissoc` as the
 * process of _dissociating_ a key from an object. A shallow copy of the
 * original object is always returned, regardless of whether or not the
 * key existed.
 *
 * @example
 * const user = { first: 'Bob', last: 'Loblaw' }
 * dissoc('first', user) // => { last: 'Loblaw' }
 */
export default function dissoc (k, kv) {
  var y = {}
    , p

  for (p in kv) {
    if (p !== k) {
      y[p] = kv[p]
    }
  }
  return y
}
