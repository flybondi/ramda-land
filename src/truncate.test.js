'use strict';
const truncate = require('./truncate');

test('should export a curried function of arity two', () => {
  expect(typeof truncate).toBe('function');
  expect(truncate).toHaveLength(2);
  expect(truncate(10, 'foobar')).toBe(truncate(10)('foobar'));
});

test('should truncate text adding an ellipsis at the end if it exceeds the given maximum length', () => {
  expect(truncate(13, 'well, excuuuuuse me, princess!')).toBe('well, excu...');
});

test('should return the text as is if it does not exceed the given maximum length', () => {
  expect(truncate(50, 'well, excuuuuuse me, princess!')).toBe('well, excuuuuuse me, princess!');
});

test('should coerce the given input to a string if it is not already one', () => {
  expect(truncate(6, 1000000)).toBe('100...');
});

test('should return `null` if the given text is `null`', () => {
  expect(truncate(10, null)).toBeNull();
});

test('should return `undefined` if the given text is `undefined`', () => {
  expect(truncate(10, undefined)).toBeUndefined();
});
