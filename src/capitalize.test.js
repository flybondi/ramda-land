import { capitalize, capitalizeProp, capitalizeTrimProp } from './capitalize';

describe('the `capitalize` function', () => {
  test('should upper case the first letter', () => {
    expect(capitalize('noctis Lucis Caelum')[0]).toBe('N');
  });

  test('should lower case all letters but the first one', () => {
    expect(capitalize('noctis Lucis Caelum').slice(1)).toBe('octis lucis caelum');
  });

  test('should return `null` if input is `null`', () => {
    expect(capitalize(null)).toBe(null);
  });

  test('should return `undefined` if input is `undefined`', () => {
    expect(capitalize(undefined)).toBe(undefined);
  });

  test('should return an empty string if input is ``', () => {
    expect(capitalize('')).toBe('');
  });
});

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
