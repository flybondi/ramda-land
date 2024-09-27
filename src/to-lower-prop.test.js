import { toLowerProp, toLowerTrimProp } from './to-lower-prop';

describe('the `toLowerProp` function', () => {
  test('should lowercase a prop from an object', () => {
    expect(toLowerProp('name', { name: ' TEST ' })).toEqual(' test ');
  });

  test('should return empty string if the values are `undefined` or `null`', () => {
    expect(toLowerProp('name', { name: null })).toEqual('');
    expect(toLowerProp('name', { name: undefined })).toEqual('');
  });
});

describe('the `toLowerTrimProp` function', () => {
  test('should lowercase and trim a prop from an object', () => {
    expect(toLowerTrimProp('name', { name: ' TEST ' })).toEqual('test');
  });

  test('should return empty string if the values are `undefined` or `null`', () => {
    expect(toLowerTrimProp('name', { name: null })).toEqual('');
    expect(toLowerTrimProp('name', { name: undefined })).toEqual('');
  });
});
