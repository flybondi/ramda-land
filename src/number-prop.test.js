'use strict';
const { numberProp, numberPropOr } = require('./number-prop');

describe('the `numberProp` function', () => {
  test('should return a number from numerical string property', () => {
    expect(numberProp('provincesCount', { provincesCount: '23' })).toEqual(23);
  });

  test('should return a number from a number property', () => {
    expect(numberProp('provincesCount', { provincesCount: 23 })).toEqual(23);
  });

  test('should return `NaN` when extracted property does not exist', () => {
    expect(numberProp('provincesCount', {})).toEqual(NaN);
  });

  test('should return `NaN` when extracted property is not a numerical string', () => {
    expect(numberProp('provincesCount', { provincesCount: 'foo' })).toEqual(NaN);
  });
});

describe('the `numberPropOr` function', () => {
  test('should return a number from a numerical string property', () => {
    expect(numberPropOr(42, 'provincesCount', { provincesCount: '23' })).toEqual(23);
  });

  test('should return a number from a number property', () => {
    expect(numberPropOr(42, 'provincesCount', { provincesCount: 23 })).toEqual(23);
  });

  test('should return the given default value when extracted property does not exist', () => {
    expect(numberPropOr(42, 'provincesCount', {})).toEqual(42);
  });

  test('should return the given default value when extracted property is `null`', () => {
    expect(numberPropOr(42, 'provincesCount', { provincesCount: null })).toEqual(42);
  });

  test('should return the given default value when extracted property is `undefined`', () => {
    expect(numberPropOr(42, 'provincesCount', { provincesCount: undefined })).toEqual(42);
  });
});
