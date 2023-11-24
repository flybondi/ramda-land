import { toUpperProp, toUpperTrimProp } from './to-upper-prop';

describe('the `toUpperProp` function', () => {
  test('should uppercase a prop from an object', () => {
    expect(toUpperProp('name', { name: ' test ' })).toEqual(' TEST ');
  });

  test('should return empty string if the values are `undefined` or `null`', () => {
    expect(toUpperProp('name', { name: null })).toEqual('');
    expect(toUpperProp('name', { name: undefined })).toEqual('');
  });
});

describe('the `toUpperTrimProp` function', () => {
  test('should uppercase and trim a prop from an object', () => {
    expect(toUpperTrimProp('name', { name: ' test ' })).toEqual('TEST');
  });

  test('should return empty string if the values are `undefined` or `null`', () => {
    expect(toUpperTrimProp('name', { name: null })).toEqual('');
    expect(toUpperTrimProp('name', { name: undefined })).toEqual('');
  });
});
