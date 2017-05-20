const test          = require('ava')
    , { partition } = require('../dist/redash')

test('properly reports its arity (is curried)', (t) => {
  t.is(partition.length, 2)
})

test('is curried', (t) => {
  t.is(typeof partition(() => {}), 'function')
})

test('correctly partitions lists to the left and right', (t) => {
  const isEven = x => x % 2 === 0

  t.deepEqual(
    partition(isEven, [1, 2, 3, 4, 5]),
    [[2, 4], [1, 3, 5]]
  )
})

test('returns two empty lists if the input list is empty', (t) => {
  t.deepEqual(partition(() => {}, []), [[], []])
})
