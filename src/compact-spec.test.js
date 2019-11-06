'use strict';
const compactSpec = require('./compact-spec');

test('should export a curried function of arity 2', () => {
  expect(typeof compactSpec).toBe('function');
  expect(compactSpec).toHaveLength(2);
  expect(compactSpec({ foo: x => x.foo + 2 }, { foo: 40 })).toEqual(
    compactSpec({ foo: x => x.foo + 2 })({ foo: 40 })
  );
});

test('should return `undefined` if the resulting object contains all empty values', () => {
  expect(compactSpec({ foo: x => ({}), bar: x => [] }, {})).toBeUndefined();
});

test('should return `undefined` if the resulting object contains all `null` values', () => {
  expect(compactSpec({ foo: x => null, bar: x => null }, {})).toBeUndefined();
});

test('should return `undefined` if the resulting object contains all `undefined` values', () => {
  expect(compactSpec({ foo: x => undefined, bar: x => null }, {})).toBeUndefined();
});

test('should return `undefined` if the resulting object contains a mix of `null`, `undefined` or empty values', () => {
  expect(compactSpec({ foo: x => null, bar: x => undefined, baz: x => [] }, {})).toBeUndefined();
});
