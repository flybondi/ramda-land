'use strict';
const mapKeys = require('./map-keys');

test('should be a curried function', () => {
  expect(typeof mapKeys(x => x)).toBe('function');
});

test('should modify keys based on a mapping function', () => {
  expect(mapKeys(x => x + 'Life', { meaningOf: 42 })).toEqual({
    meaningOfLife: 42
  });
});

test('should return an empty object if the given object is `null`', () => {
  expect(mapKeys(x => x, null)).toEqual({});
});

test('should return an empty object if the given object is `undefined`', () => {
  expect(mapKeys(x => x, undefined)).toEqual({});
});
