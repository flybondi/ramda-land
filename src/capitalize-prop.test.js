import { capitalizeProp, capitalizeTrimProp } from './capitalize-prop';

describe('the `capitalizeProp` function', () => {
  test('should capitalize a prop from an object', () => {
    expect(capitalizeProp('name', { name: ' TEST ' })).toEqual(' test ');
    expect(capitalizeProp('name', { name: 'TEST' })).toEqual('Test');
  });

  test('should return empty string if the values are `undefined` or `null`', () => {
    expect(capitalizeProp('name', { name: null })).toEqual('');
    expect(capitalizeProp('name', { name: undefined })).toEqual('');
  });
});

describe('the `capitalizeTrimProp` function', () => {
  test('should capitalize and trim a prop from an object', () => {
    expect(capitalizeTrimProp('name', { name: ' TEST ' })).toEqual('Test');
  });

  test('should return empty string if the values are `undefined` or `null`', () => {
    expect(capitalizeTrimProp('name', { name: null })).toEqual('');
    expect(capitalizeTrimProp('name', { name: undefined })).toEqual('');
  });
});
