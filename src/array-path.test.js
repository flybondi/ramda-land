import { arrayPath, compactPath } from './array-path';

describe('the `arrayPath` function', () => {
  test('should cast the value of the property to an array if it is a boolean', () => {
    expect(arrayPath(['foo', 'bar'], { foo: { bar: true } })).toEqual([true]);
  });

  test('should cast the value of the property to an array if it is a number', () => {
    expect(arrayPath(['foo', 'bar'], { foo: { bar: 42 } })).toEqual([42]);
  });

  test('should cast the value of the property to an array if it is an object', () => {
    expect(arrayPath(['foo', 'bar'], { foo: { bar: { baz: true } } })).toEqual([{ baz: true }]);
  });

  test('should cast the value of the property to an array if it is `null`', () => {
    expect(arrayPath(['foo'], { foo: null })).toEqual([null]);
  });

  test('should cast the value of the property to an array if it is `undefined`', () => {
    expect(arrayPath(['foo'], { foo: undefined })).toEqual([undefined]);
  });

  test('should return an array with a single `undefined` element if the property does not exist', () => {
    expect(arrayPath(['foo'], {})).toEqual([undefined]);
  });

  test('should return the value of the property as is if it is already an array', () => {
    expect(arrayPath(['foo', 'bar'], { foo: { bar: [1, 2, 3] } })).toEqual([1, 2, 3]);
  });
});

describe('the `compactPath` function', () => {
  test('should cast the value of the property to an array if it is a boolean', () => {
    expect(compactPath(['foo', 'bar'], { foo: { bar: true } })).toEqual([true]);
  });

  test('should cast the value of the property to an array if it is a number', () => {
    expect(compactPath(['foo', 'bar'], { foo: { bar: 42 } })).toEqual([42]);
  });

  test('should cast the value of the property to an array if it is an object', () => {
    expect(compactPath(['foo', 'bar'], { foo: { bar: { baz: true } } })).toEqual([{ baz: true }]);
  });
  test('should remove all `0` values from an array', () => {
    expect(compactPath(['foo'], { foo: [1, 0, 2, 0, 3, 0] })).toEqual([1, 2, 3]);
  });

  test('should remove all `""` values from an array', () => {
    expect(compactPath(['foo'], { foo: [1, '', 2, '', 3, ''] })).toEqual([1, 2, 3]);
  });

  test('should remove all `NaN` values from an array', () => {
    expect(compactPath(['foo'], { foo: [1, NaN, 2, NaN, 3, NaN] })).toEqual([1, 2, 3]);
  });

  test('should remove all `{}` values from an array', () => {
    expect(compactPath(['foo'], { foo: [1, {}, 2, {}, 3, {}] })).toEqual([1, 2, 3]);
  });

  test('should remove all `[]` values from an array', () => {
    expect(compactPath(['foo'], { foo: [1, [], 2, [], 3, []] })).toEqual([1, 2, 3]);
  });

  test('should remove all `false` values from an array', () => {
    expect(compactPath(['foo'], { foo: [1, false, 2, false, 3, false] })).toEqual([1, 2, 3]);
  });

  test('should remove all `null` values from an array', () => {
    expect(compactPath(['foo'], { foo: [1, null, 2, null, 3, null] })).toEqual([1, 2, 3]);
  });

  test('should remove all `undefined` values from an array', () => {
    expect(compactPath(['foo'], { foo: [1, undefined, 2, undefined, 3, undefined] })).toEqual([
      1,
      2,
      3
    ]);
  });

  test('should work with a combination of falsey and empty values', () => {
    expect(compactPath(['foo'], { foo: [1, undefined, 2, null, 3, {}, 0, '', false] })).toEqual([
      1,
      2,
      3
    ]);
  });

  test('should return the value of the property as is if it is already an array with no falsey or empty values', () => {
    expect(compactPath(['foo', 'bar'], { foo: { bar: [1, 2, 3] } })).toEqual([1, 2, 3]);
  });

  test('should return an empty array if the property is `null`', () => {
    expect(compactPath(['foo'], { foo: null })).toEqual([]);
  });

  test('should return an empty array if the property is `undefined`', () => {
    expect(compactPath(['foo'], { foo: undefined })).toEqual([]);
  });

  test('should return a new array after extracting the property value', () => {
    const foo = [1, 2, 3];
    expect(compactPath(['foo'], { foo })).not.toBe(foo);
  });
});
