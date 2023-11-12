import { stringProp, stringPath, stringPathOr, stringPropOr } from './string-prop';

describe('the `stringProp` function', () => {
  test('should return a string from a number property', () => {
    expect(stringProp('provincesId', { provincesId: 23 })).toEqual('23');
  });

  test('should return a stringified version of an array property', () => {
    expect(stringProp('provincesId', { provincesId: [23, 22] })).toEqual('[23,22]');
  });

  test('should return a stringified version of an object property', () => {
    expect(stringProp('provincesId', { provincesId: { id: 1 } })).toEqual('{"id":1}');
  });

  test('should return a string from a string property', () => {
    expect(stringProp('provincesId', { provincesId: '23' })).toEqual('23');
  });

  test('should return `undefined` when extracted property does not exist', () => {
    expect(stringProp('provincesId', {})).toBeUndefined();
  });

  test('should return `null` when extracted property is an empty string', () => {
    expect(stringProp('provincesId', { provincesId: '' })).toBeNull();
  });

  test('should return `undefined` when extracted property is `undefined`', () => {
    expect(stringProp('provincesId', { provincesId: undefined })).toBeUndefined();
  });

  test('should return `null` when extracted property is `null`', () => {
    expect(stringProp('provincesId', { provincesId: null })).toBeNull();
  });
});

describe('the `stringPath` function', () => {
  test('should return a string from a number property', () => {
    expect(stringPath(['data', 'count'], { data: { count: 23 } })).toEqual('23');
  });

  test('should return a stringified version of an array property', () => {
    expect(stringPath(['data', 'count'], { data: { count: [23, 22] } })).toEqual('[23,22]');
  });

  test('should return a stringified version of an object property', () => {
    expect(stringPath(['data', 'count'], { data: { count: { number: 1 } } })).toEqual(
      '{"number":1}'
    );
  });

  test('should return a string from a nested string property', () => {
    expect(stringPath(['data', 'count'], { data: { count: '23' } })).toEqual('23');
  });

  test('should return `undefined` when extracted property does not exist', () => {
    expect(stringPath(['data', 'count'], { data: {} })).toBeUndefined();
  });

  test('should return `null` when extracted property is an empty string', () => {
    expect(stringPath(['data', 'count'], { data: { count: '' } })).toBeNull();
  });

  test('should return `undefined` when extracted property is `undefined`', () => {
    expect(stringPath(['data', 'count'], { data: { count: undefined } })).toBeUndefined();
  });

  test('should return `null` when extracted property is `null`', () => {
    expect(stringPath(['data', 'count'], { data: { count: null } })).toBeNull();
  });

  test('should support a single string as property path', () => {
    expect(stringPath('count', { count: '23' })).toEqual('23');
  });
});

describe('the `stringPropOr` function', () => {
  test('should return a string from a number property', () => {
    expect(stringPropOr('number-string', 'provincesId', { provincesId: 23 })).toEqual('23');
  });

  test('should return a stringified version of an array property', () => {
    expect(stringPropOr('array', 'provincesId', { provincesId: [23, 22] })).toEqual('[23,22]');
  });

  test('should return a stringified version of an object property', () => {
    expect(stringPropOr('object', 'provincesId', { provincesId: { id: 1 } })).toEqual('{"id":1}');
  });

  test('should return a string from a string property', () => {
    expect(stringPropOr('string', 'provincesId', { provincesId: '23' })).toEqual('23');
  });

  test('should return the given default value when extracted property does not exist', () => {
    expect(stringPropOr('default-string', 'provincesId', {})).toEqual('default-string');
  });

  test('should return the given default value when extracted property is `null`', () => {
    expect(stringPropOr('default-for-null', 'provincesId', { provincesId: null })).toEqual(
      'default-for-null'
    );
  });

  test('should return the given default value when extracted property is `undefined`', () => {
    expect(
      stringPropOr('default-for-undefined', 'provincesId', { provincesId: undefined })
    ).toEqual('default-for-undefined');
  });

  test('should return the given default value when extracted property is an empty string', () => {
    expect(stringPropOr('default-for-empty', 'provincesId', { provincesId: '' })).toEqual(
      'default-for-empty'
    );
  });
});

describe('the `stringPathOr` function', () => {
  test('should return a string from a number property', () => {
    expect(stringPathOr('string-number', ['data', 'count'], { data: { count: 23 } })).toEqual('23');
  });

  test('should return a stringified version of an array property', () => {
    expect(stringPathOr('string-array', ['data', 'count'], { data: { count: [23, 22] } })).toEqual(
      '[23,22]'
    );
  });

  test('should return a stringified version of an object property', () => {
    expect(
      stringPathOr('string-object', ['data', 'count'], { data: { count: { number: 1 } } })
    ).toEqual('{"number":1}');
  });

  test('should return a string from a nested string property', () => {
    expect(stringPathOr('default-string', ['data', 'count'], { data: { count: '23' } })).toEqual(
      '23'
    );
  });

  test('should return the given default value when extracted property does not exist', () => {
    expect(stringPathOr('default-string', ['data', 'count'], {})).toEqual('default-string');
  });

  test('should return the given default value when extracted property is `null`', () => {
    expect(stringPathOr('default-for-null', ['data', 'count'], { data: { count: null } })).toEqual(
      'default-for-null'
    );
  });

  test('should return the given default value when extracted property is `undefined`', () => {
    expect(
      stringPathOr('default-for-undefined', ['data', 'count'], { data: { count: undefined } })
    ).toEqual('default-for-undefined');
  });

  test('should return the given default value when extracted property is an empty string', () => {
    expect(stringPathOr('default-for-empty', ['data', 'count'], { data: { count: '' } })).toEqual(
      'default-for-empty'
    );
  });

  test('should support a single string as property path', () => {
    expect(stringPathOr('default-string', 'count', { count: '23' })).toEqual('23');
  });
});
