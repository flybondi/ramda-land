'use strict';
const { thenThrowErrorWith } = require('./throw-error');

test('should be a higher order function that returns a function', () => {
  expect(typeof thenThrowErrorWith() === 'function').toBe(true);
});

test('should throw an error with given `message` when invoked', () => {
  expect(thenThrowErrorWith('boom', {})).toThrowError('boom');
});

test('should throw an error with additional properties when invoked', () => {
  const throwWithStatus = thenThrowErrorWith('boom', { status: 500 });
  expect(throwWithStatus).toThrowError(expect.objectContaining({ status: 500 }));
});
