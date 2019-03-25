'use strict';
const { isNilOrEmpty } = require('./is-nil-empty');

describe('the `isNilOrEmpty` function', () => {
  test('should return `true` for a `null` value', () => {
    expect(isNilOrEmpty(null)).toBe(true);
  });

  test('should return `true` for an `undefined` value', () => {
    expect(isNilOrEmpty(undefined)).toBe(true);
  });

  test('should return `true` for an object with no keys', () => {
    expect(isNilOrEmpty({})).toBe(true);
  });

  test('should return `true` for an empty string', () => {
    expect(isNilOrEmpty('')).toBe(true);
  });

  test('should return `true` for an empty `Array`', () => {
    expect(isNilOrEmpty([])).toBe(true);
  });

  test('should return `false` for an `Object` value with at least one key', () => {
    expect(isNilOrEmpty({ foo: 'bar' })).toBe(false);
  });

  test('should return `false` for a `Number` value', () => {
    expect(isNilOrEmpty(42)).toBe(false);
    expect(isNilOrEmpty(Number(42))).toBe(false);
  });

  test('should return `false` for a `String` value', () => {
    expect(isNilOrEmpty('42')).toBe(false);
    expect(isNilOrEmpty(String('42'))).toBe(false);
  });

  test('should return `false` for an `Array` value with at least one element', () => {
    expect(isNilOrEmpty([4, 2])).toBe(false);
    expect(isNilOrEmpty(Array.of(4, 2))).toBe(false);
  });

  test('should return `false` for any `Boolean` value', () => {
    expect(isNilOrEmpty(true)).toBe(false);
    expect(isNilOrEmpty(false)).toBe(false);
  });
});
