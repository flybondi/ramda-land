import castArray from './cast-array';

test('should return same input if already an array', () => {
  expect(castArray([1])).toEqual([1]);
  expect(castArray(Array.of(1))).toEqual([1]);
});

test('should wrap in an array if value is a Number', () => {
  expect(castArray(1)).toEqual([1]);
});

test('should wrap in an array if value is a String', () => {
  expect(castArray('Avalanche')).toEqual(['Avalanche']);
});

test('should wrap in an array if value is a Boolean', () => {
  expect(castArray(false)).toEqual([false]);
});

test('should wrap in an array if value is `null`', () => {
  expect(castArray(null)).toEqual([null]);
});

test('should wrap in an array if value is `undefined`', () => {
  expect(castArray(undefined)).toEqual([undefined]);
});
