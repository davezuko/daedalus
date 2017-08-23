import _defn from './internal/_defn'
import _hasOwn from './internal/_hasOwn'

/**
 * @name where
 * @signature String k, (Any -> Boolean) Spec => {k:Spec} -> Boolean
 * @category Logic
 * @since v0.15.0
 * @description
 * @example
 * const pred = where({ name: equals('Michael') })
 * pred({ name: 'Michael' }) // => true
 * pred({ name: 'Dwight' })  // => false
 *
 * const people = [{ age: 12 }, { age: 14 }, { age: 18 }, { age: 22 }]
 * filter(where({ age: gte(18) }), people) // => [{ age: 18 }, { age: 22 }]
 */
export default _defn(function where (spec, obj) {
  var prop

  for (prop in spec) {
    if (
      _hasOwn.call(spec, prop) &&
      !spec[prop](obj[prop])
    ) return false
  }
  return true
})
