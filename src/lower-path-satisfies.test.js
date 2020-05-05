'use strict';
const lowerPathSatisfies = require('./lower-path-satisfies');

describe('pathSatisfies', function () {
  const isPositive = n => n > 0;

  test('should returns true if the specified object path satisfies the given predicate', () => {
    expect(lowerPathSatisfies(isPositive, ['x', 1, 'y'], { x: [{ y: -1 }, { y: 1 }] })).toBe(true);
  });

  test('should returns true if the specified object path satisfies the given predicate after lowercasing the path', () => {
    expect(lowerPathSatisfies(isPositive, ['X', 1, 'Y'], { x: [{ y: -1 }, { y: 1 }] })).toBe(true);
  });

  test('should returns false if the specified path does not exist', () => {
    expect(lowerPathSatisfies(isPositive, ['x', 'y'], { x: { z: 42 } })).toBe(false);
  });

  test('should returns false if the path is empty', () => {
    expect(lowerPathSatisfies(isPositive, [], { x: { z: 42 } })).toBe(false);
  });

  test('should returns false otherwise', () => {
    expect(lowerPathSatisfies(isPositive, ['x', 'y'], { x: { y: 0 } })).toBe(false);
  });
});
