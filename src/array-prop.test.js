import { arrayProp, compactProp } from './array-prop';

describe('the `arrayProp` function', () => {
  test('should cast the value of the property to an array if it is a boolean', () => {
    expect(arrayProp('foo', { foo: true })).toEqual([true]);
  });

  test('should cast the value of the property to an array if it is a number', () => {
    expect(arrayProp('foo', { foo: 42 })).toEqual([42]);
  });

  test('should cast the value of the property to an array if it is an object', () => {
    expect(arrayProp('foo', { foo: { bar: true } })).toEqual([{ bar: true }]);
  });

  test('should cast the value of the property to an array if it is `null`', () => {
    expect(arrayProp('foo', { foo: null })).toEqual([null]);
  });

  test('should cast the value of the property to an array if it is `undefined`', () => {
    expect(arrayProp('foo', { foo: undefined })).toEqual([undefined]);
  });

  test('should return an array with a single `undefined` element if the property does not exist', () => {
    expect(arrayProp('foo', {})).toEqual([undefined]);
  });

  test('should return the value of the property as is if it is already an array', () => {
    expect(arrayProp('foo', { foo: [1, 2, 3] })).toEqual([1, 2, 3]);
  });
});

describe('the `compactProp` function', () => {
  test('should cast the value of the property to an array if it is a boolean', () => {
    expect(compactProp('foo', { foo: true })).toEqual([true]);
  });

  test('should cast the value of the property to an array if it is a number', () => {
    expect(compactProp('foo', { foo: 42 })).toEqual([42]);
  });

  test('should cast the value of the property to an array if it is an object', () => {
    expect(compactProp('foo', { foo: { bar: true } })).toEqual([{ bar: true }]);
  });
  test('should remove all `0` values from an array', () => {
    expect(compactProp('foo', { foo: [1, 0, 2, 0, 3, 0] })).toEqual([1, 2, 3]);
  });

  test('should remove all `""` values from an array', () => {
    expect(compactProp('foo', { foo: [1, '', 2, '', 3, ''] })).toEqual([1, 2, 3]);
  });

  test('should remove all `NaN` values from an array', () => {
    expect(compactProp('foo', { foo: [1, NaN, 2, NaN, 3, NaN] })).toEqual([1, 2, 3]);
  });

  test('should remove all `{}` values from an array', () => {
    expect(compactProp('foo', { foo: [1, {}, 2, {}, 3, {}] })).toEqual([1, 2, 3]);
  });

  test('should remove all `[]` values from an array', () => {
    expect(compactProp('foo', { foo: [1, [], 2, [], 3, []] })).toEqual([1, 2, 3]);
  });

  test('should remove all `false` values from an array', () => {
    expect(compactProp('foo', { foo: [1, false, 2, false, 3, false] })).toEqual([1, 2, 3]);
  });

  test('should remove all `null` values from an array', () => {
    expect(compactProp('foo', { foo: [1, null, 2, null, 3, null] })).toEqual([1, 2, 3]);
  });

  test('should remove all `undefined` values from an array', () => {
    expect(compactProp('foo', { foo: [1, undefined, 2, undefined, 3, undefined] })).toEqual([
      1, 2, 3
    ]);
  });

  test('should work with a combination of falsey and empty values', () => {
    expect(compactProp('foo', { foo: [1, undefined, 2, null, 3, {}, 0, '', false] })).toEqual([
      1, 2, 3
    ]);
  });

  test('should return the value of the property as is if it is already an array with no falsey or empty values', () => {
    expect(compactProp('foo', { foo: [1, 2, 3] })).toEqual([1, 2, 3]);
  });

  test('should return an empty array if the property is `null`', () => {
    expect(compactProp('foo', { foo: null })).toEqual([]);
  });

  test('should return an empty array if the property is `undefined`', () => {
    expect(compactProp('foo', { foo: undefined })).toEqual([]);
  });

  test('should return a new array after extracting the property value', () => {
    const foo = [1, 2, 3];
    expect(compactProp('foo', { foo })).not.toBe(foo);
  });
});
