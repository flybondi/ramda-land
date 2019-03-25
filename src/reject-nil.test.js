'use strict';
const { rejectNil, rejectNilOrEmpty } = require('./reject-nil');

describe('the `rejectNilOrEmpty` function', () => {
  test('should remove `null` values from an array of arbitrary items', () => {
    expect(rejectNilOrEmpty([1, null, 2, 'foo', null])).toEqual([1, 2, 'foo']);
  });

  test('should remove `undefined` values from an array of arbitrary items', () => {
    expect(rejectNilOrEmpty([1, undefined, 2, 'foo', undefined])).toEqual([1, 2, 'foo']);
  });

  test('should remove `null` values from an object', () => {
    expect(rejectNilOrEmpty({ foo: 1, bar: null, meh: 2, baz: null })).toEqual({ foo: 1, meh: 2 });
  });

  test('should remove `undefined` values from an object', () => {
    expect(rejectNilOrEmpty({ foo: 1, bar: undefined, meh: 2, baz: undefined })).toEqual({
      foo: 1,
      meh: 2
    });
  });

  test('should remove empty object values from an object', () => {
    expect(rejectNilOrEmpty({ foo: 1, bar: {}, meh: 2, baz: {} })).toEqual({
      foo: 1,
      meh: 2
    });
  });

  test('should remove empty array values from an object', () => {
    expect(rejectNilOrEmpty({ foo: 1, bar: [], meh: 2, baz: [] })).toEqual({
      foo: 1,
      meh: 2
    });
  });

  test('should return the given object as-is if it does not contain any nil or empty values', () => {
    expect(rejectNilOrEmpty({ foo: true, life: 42 })).toEqual({ foo: true, life: 42 });
  });

  test('should return the given array as-is if it does not contain any nil or empty values', () => {
    expect(rejectNilOrEmpty([42])).toEqual([42]);
  });

  test('should return `null` if the given value is `null`', () => {
    expect(rejectNilOrEmpty(null)).toBeNull();
  });

  test('should return `undefined` if the given value is `undefined`', () => {
    expect(rejectNilOrEmpty(undefined)).toBeUndefined();
  });
});

describe('the `rejectNil` function', () => {
  test('should remove `null` values from an array of arbitrary items', () => {
    expect(rejectNil([1, null, 2, 'foo', null])).toEqual([1, 2, 'foo']);
  });

  test('should remove `undefined` values from an array of arbitrary items', () => {
    expect(rejectNil([1, undefined, 2, 'foo', undefined])).toEqual([1, 2, 'foo']);
  });

  test('should remove `null` values from an object', () => {
    expect(rejectNil({ foo: 1, bar: null, meh: 2, baz: null })).toEqual({ foo: 1, meh: 2 });
  });

  test('should remove `undefined` values from an object', () => {
    expect(rejectNil({ foo: 1, bar: undefined, meh: 2, baz: undefined })).toEqual({
      foo: 1,
      meh: 2
    });
  });

  test('should return the given object as-is if it does not contain any nil values', () => {
    expect(rejectNil({ foo: true, life: 42 })).toEqual({ foo: true, life: 42 });
  });

  test('should return the given array as-is if it does not contain any nil values', () => {
    expect(rejectNil([42])).toEqual([42]);
  });

  test('should return `null` if the given value is `null`', () => {
    expect(rejectNil(null)).toBeNull();
  });

  test('should return `undefined` if the given value is `undefined`', () => {
    expect(rejectNil(undefined)).toBeUndefined();
  });
});
