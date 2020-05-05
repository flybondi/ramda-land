'use strict';
const { booleanProp, booleanPropOr } = require('./boolean-prop');

describe('the `booleanProp` function', () => {
  test('should return true on string y', () => {
    expect(booleanProp('pokedex', { pokedex: 'y' })).toEqual(true);
  });

  test('should return false on string No', () => {
    expect(booleanProp('pokedex', { pokedex: 'No' })).toEqual(false);
  });

  test('should return null', () => {
    expect(booleanProp('pokedex', {})).toEqual(undefined);
  });
});

describe('the `booleanPropOr` function', () => {
  test('should return the given default value if property does not exist', () => {
    expect(booleanPropOr(false, 'pokedex', { onyx: 'y' })).toBe(false);
  });

  test('should return the given default value if property is `null`', () => {
    expect(booleanPropOr(true, 'pokedex', { pokedex: null })).toBe(true);
  });

  test('should return the given default value if property is `undefined`', () => {
    expect(booleanPropOr(true, 'pokedex', { pokedex: undefined })).toBe(true);
  });
});
