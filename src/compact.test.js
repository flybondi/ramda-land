'use strict';
const compact = require('./compact');

test('should return a new array after filtering', () => {
  const input = [1, 2, 3];
  expect(compact(input)).not.toBe(input);
});

test('should remove all `0` values from an array', () => {
  expect(compact([1, 0, 2, 0, 3, 0])).toEqual([1, 2, 3]);
});

test('should remove all `""` values from an array', () => {
  expect(compact([1, '', 2, '', 3, ''])).toEqual([1, 2, 3]);
});

test('should remove all `NaN` values from an array', () => {
  expect(compact([1, NaN, 2, NaN, 3, NaN])).toEqual([1, 2, 3]);
});

test('should remove all `{}` values from an array', () => {
  expect(compact([1, {}, 2, {}, 3, {}])).toEqual([1, 2, 3]);
});

test('should remove all `[]` values from an array', () => {
  expect(compact([1, [], 2, [], 3, []])).toEqual([1, 2, 3]);
});

test('should remove all `false` values from an array', () => {
  expect(compact([1, false, 2, false, 3, false])).toEqual([1, 2, 3]);
});

test('should remove all `null` values from an array', () => {
  expect(compact([1, null, 2, null, 3, null])).toEqual([1, 2, 3]);
});

test('should remove all `undefined` values from an array', () => {
  expect(compact([1, undefined, 2, undefined, 3, undefined])).toEqual([1, 2, 3]);
});

test('should work with a combination of falsey and empty values', () => {
  expect(compact([1, undefined, 2, null, 3, {}, 0, '', false])).toEqual([1, 2, 3]);
});

test('should filter values in an object', () => {
  expect(compact({ foo: 1, bar: undefined, baz: null, meh: {} })).toEqual({ foo: 1 });
});

test('should retain non empty objects', () => {
  expect(compact([1, undefined, 2, null, 3, { foo: 'bar' }])).toEqual([1, 2, 3, { foo: 'bar' }]);
});

test('should retain non empty arrays', () => {
  expect(compact([1, undefined, 2, null, 3, ['bar']])).toEqual([1, 2, 3, ['bar']]);
});
