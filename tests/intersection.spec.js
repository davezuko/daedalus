const test             = require('ava')
    , { intersection } = require('../dist/redash')

test('returns a unique set of values common to both lists', (t) => {
  t.deepEqual(
    intersection([1, 1, 2, 2, 3, 3, 4, 5, 6, 7], [0, 1, 2, 3]),
    [1, 2, 3])
})
