import { allToLower, allToUpper } from './all-to-lower-upper';

describe('the `allToLower` function', () => {
  test('should convert all provided values in an array to lower case', () => {
    expect(allToLower(['FOO', 'bAr', 'Baz'])).toEqual(['foo', 'bar', 'baz']);
  });

  test('should support passing a single value as an argument', () => {
    expect(allToLower('FOO')).toEqual(['foo']);
  });

  test('should remove any `null` values passed in the given array', () => {
    expect(allToLower([null, 'foo', null])).toEqual(['foo']);
  });

  test('should remove any `undefined` values passed in the given array', () => {
    expect(allToLower([undefined, 'foo', undefined])).toEqual(['foo']);
  });

  test('should return an empty array if the given list is empty', () => {
    expect(allToLower([])).toEqual([]);
  });

  test('should coerce non string values into strings', () => {
    expect(allToLower(['FOO', true, 2, 'baR'])).toEqual(['foo', 'true', '2', 'bar']);
  });
});

describe('the `allToUpper` function', () => {
  test('should convert all provided values in an array to upper case', () => {
    expect(allToUpper(['FOO', 'bAr', 'Baz'])).toEqual(['FOO', 'BAR', 'BAZ']);
  });

  test('should support passing a single value as an argument', () => {
    expect(allToUpper('foo')).toEqual(['FOO']);
  });

  test('should remove any `null` values passed in the given array', () => {
    expect(allToUpper([null, 'foo', null])).toEqual(['FOO']);
  });

  test('should remove any `undefined` values passed in the given array', () => {
    expect(allToUpper([undefined, 'foo', undefined])).toEqual(['FOO']);
  });

  test('should remove any empty string values passed in the given array', () => {
    expect(allToUpper(['', 'foo', ''])).toEqual(['FOO']);
  });

  test('should return an empty array if the given list is empty', () => {
    expect(allToUpper([])).toEqual([]);
  });

  test('should coerce non string values into strings', () => {
    expect(allToUpper(['FOO', true, 2, 'baR'])).toEqual(['FOO', 'TRUE', '2', 'BAR']);
  });
});
