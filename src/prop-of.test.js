'use strict';
const propOf = require('./prop-of');

describe('propOf function', () => {
  const fred = { name: 'Fred', age: 23 };

  test('should return the value of object at the given the property', () => {
    expect(propOf(fred, 'name')).toBe('Fred');
  });

  test('should return `undefined` when the prop passed not exists on the object', () => {
    expect(propOf(fred, 'width')).toBeUndefined();
  });

  test('should return `undefined` when `null` is passed as object', () => {
    expect(propOf(null, 'width')).toBeUndefined();
  });

  test('should return `undefined` when `undefined` is passed as object', () => {
    expect(propOf(undefined, 'width')).toBeUndefined();
  });

  test('should return `undefined` when `undefined` is passed as prop object', () => {
    expect(propOf(fred, undefined)).toBeUndefined();
  });

  test('should return `undefined` when `null` is passed as prop object', () => {
    expect(propOf(fred, null)).toBeUndefined();
  });

  test('should be a curried fn', () => {
    expect(propOf(fred)('name')).toBe('Fred');
  });
});
