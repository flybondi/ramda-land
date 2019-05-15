'use strict';
const lowerPath = require('./lower-path');

test('should extract a value from an object given its path', () => {
  expect(lowerPath(['foo', 'bar'], { foo: { bar: 42 } })).toBe(42);
});

test('should transform all keys in the path to lower case before extracting the value', () => {
  expect(lowerPath(['FOO', 'bAr'], { foo: { bar: 42 } })).toBe(42);
});

test('should treat all values in the path array as strings', () => {
  expect(lowerPath(['FOO', 42], { foo: { '42': 'bar' } })).toBe('bar');
});
