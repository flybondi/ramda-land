import capitalize from './capitalize';

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
