'use strict';
const propOf = require('./prop-of');

describe('propOf function', function() {
  const fred = { name: 'Fred', age: 23 };

  test('should returns the value from the object prop passed', function() {
    expect(propOf(fred, 'name')).toBe('Fred');
  });

  test('should returns an `undefined` when the prop passed not exists on the object', function() {
    expect(propOf(fred, 'width')).toBe(undefined);
  });

  test('should returns an `undefined` when `null` is passed as object', function() {
    expect(propOf(null, 'width')).toBe(undefined);
  });

  test('should returns an `undefined` when `undefined` is passed as object', function() {
    expect(propOf(undefined, 'width')).toBe(undefined);
  });

  test('should returns an `undefined` when `undefined` is passed as prop object', function() {
    expect(propOf(fred, undefined)).toBe(undefined);
  });

  test('should returns an `undefined` when `null` is passed as prop object', function() {
    expect(propOf(fred, null)).toBe(undefined);
  });

  test('should be a curried fn', function() {
    expect(propOf(fred)('name')).toBe('Fred');
  });
});
