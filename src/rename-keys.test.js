'use strict';
const renameKeys = require('./rename-keys');

test('should rename keys on an object based on a key value map', () => {
  expect(renameKeys({ foo: 'life' }, { foo: 42 })).toEqual({ life: 42 });
});

test('should keep additional keys on the given object not explicitly specified in the key mapping', () => {
  expect(renameKeys({ foo: 'life' }, { foo: 42, bar: true })).toEqual({ life: 42, bar: true });
});

test('should return object as-is if no keys match the key mapping', () => {
  expect(renameKeys({ foo: 'life' }, { baz: false, bar: true })).toEqual({ baz: false, bar: true });
});
