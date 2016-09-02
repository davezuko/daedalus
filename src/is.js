import _curry2 from './internal/_curry2'

/**
 * is : String | Function -> Boolean
 */
export default _curry2(function is (type, a) {
  if (a == null) return false

  return typeof type === 'string'
    ? typeof a === type
    : a instanceof type || a.constructor === type
})
