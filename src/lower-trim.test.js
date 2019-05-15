'use strict';
const lowerTrim = require('./lower-trim');

test('should convert given string to lower case', () => {
  expect(lowerTrim('FOO')).toBe('foo');
});

test('should trim white spaces from both sides of the given string', () => {
  expect(lowerTrim('   foo   ')).toBe('foo');
});

test('should return `null` for `null` values', () => {
  expect(lowerTrim(null)).toBe(null);
});

test('should return `undefined` for `undefined` values', () => {
  expect(lowerTrim(undefined)).toBe(undefined);
});

test('should return an empty string if the given string is blank', () => {
  expect(lowerTrim('   ')).toBe('');
});

test('coerce non string values into strings', () => {
  expect(lowerTrim(42)).toBe('42');
  expect(lowerTrim(false)).toBe('false');
});
