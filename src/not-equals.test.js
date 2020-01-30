'use strict';
const notEquals = require('./not-equals');

describe('should return true when comparing objects that are not equals', () => {
  test('comparing two different objects', () => {
    expect(notEquals({ bar: o => o.foo }, { foo: 'bar' })).toBe(true);
  });
  test('comparing two different numbers', () => {
    expect(notEquals(1, 2)).toBe(true);
  });
  test('comparing two different strings', () => {
    expect(notEquals('one', 'two')).toBe(true);
  });
  test('comparing two different booleans', () => {
    expect(notEquals(true, false)).toBe(true);
  });
  test('comparing `null` with `undefined`', () => {
    expect(notEquals(null, undefined)).toBe(true);
  });
  test('comparing `null` with empty object', () => {
    expect(notEquals(null, {})).toBe(true);
  });
  test('comparing empty array with empty object', () => {
    expect(notEquals([], {})).toBe(true);
  });
});

describe('should return false when comparing objects that are equals', () => {
  test('comparing equals objects', () => {
    expect(notEquals({ foo: 'bar' }, { foo: 'bar' })).toBe(false);
  });
  test('comparing equals numbers', () => {
    expect(notEquals(2, 2)).toBe(false);
  });
  test('comparing equals strings', () => {
    expect(notEquals('two', 'two')).toBe(false);
  });
  test('comparing equals booleans', () => {
    expect(notEquals(false, false)).toBe(false);
  });
  test('comparing `null` with `null`', () => {
    expect(notEquals(null, null)).toBe(false);
  });
  test('comparing `undefined` with `undefined`', () => {
    expect(notEquals(undefined, undefined)).toBe(false);
  });
  test('comparing an empty object with another empty object', () => {
    expect(notEquals({}, {})).toBe(false);
  });
  test('comparing an empty array with another empty object', () => {
    expect(notEquals([], [])).toBe(false);
  });
});

describe('should return true when comparing different objects but has to curried', () => {
  test('comparing equals objects', () => {
    expect(notEquals({ foo: 'bar' })({ foo: 'bar' })).toBe(false);
  });
});
