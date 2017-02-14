const test       = require('ava')
    , { propEq } = require('../dist/halcyon')

test('properly reports its arity (is ternary)', (t) => {
  t.is(propEq.length, 3)
})

test('is curried', (t) => {
  t.is(typeof propEq('foo'), 'function')
})

test('returns true if the property on the object equals the target value', (t) => {
  t.true(propEq('foo', 'bar', { foo: 'bar' }))
})

test('uses deep equality', (t) => {
  t.true(propEq('foo', { baz: 'biz' }, { foo: { baz: 'biz' }}))
})
