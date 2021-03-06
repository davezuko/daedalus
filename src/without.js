import _contains from './internal/_contains'
import _filterList from './internal/_filterList'

/**
 * @name without
 * @category Collection
 * @since v0.7.0
 * @description
 * Excludes all elements of the first list from the second list.
 *
 * @example
 * without([1, 2], [1, 2, 3, 4, 2, 1, 7]) // => [3, 4, 7]
 */
export default function without (as, bs) {
  return _filterList(function (b) {
    return !_contains(b, as)
  }, bs)
}
