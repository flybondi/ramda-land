'use strict';
const isOneOf = require('./is-one-of');

test('should return `true` if the given value is contained in the provided set', () => {
  expect(isOneOf(['foo', 'bar'], 'foo')).toBe(true);
});

test('should ignore `null` values present in the provided set', () => {
  expect(isOneOf(['foo', null], 'foo')).toBe(true);
});

test('should use case insensitive comparison between elements to check whether an element is contained or not', () => {
  expect(isOneOf(['foo', 'bar'], 'Foo')).toBe(true);
  expect(isOneOf(['fOo', 'bar'], 'foo')).toBe(true);
});

test('should return `true` if at least one element of the second set is present in the first', () => {
  expect(isOneOf(['foo', 'life'], ['foo', 'bar'])).toBe(true);
});

test('should return `true` if at all elements of the second set are present in the first', () => {
  expect(isOneOf(['foo', 'life'], ['foo', 'life'])).toBe(true);
});

test('should accept a single element as the first set to check', () => {
  expect(isOneOf('foo', ['foo', 'life'])).toBe(true);
});

test('should return `false` if the given value is not contained in the provided set', () => {
  expect(isOneOf(['foo', 'bar'], 'baz')).toBe(false);
});

test('should return `false` if no values on the second set are contained in the first', () => {
  expect(isOneOf(['foo', 'bar'], ['baz', 'life'])).toBe(false);
});
