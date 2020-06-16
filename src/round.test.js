'use strict';
const round = require('./round');

test('should return the number rounder to 0 decimals, rounding up when it has to', () => {
  expect(round(0, 2.8)).toBe(3);
  expect(round(0, -2.8)).toBe(-3);
});

test('should return the number rounder to 0 decimals, rounding down when it has to', () => {
  expect(round(0, 2.4)).toBe(2);
  expect(round(0, -2.4)).toBe(-2);
});

test('should return the number rounder to 1 decimals, rounding up when it has to', () => {
  expect(round(1, 2.88)).toBe(2.9);
  expect(round(1, -2.88)).toBe(-2.9);
});

test('should return the number rounder to 1 decimals, rounding down when it has to', () => {
  expect(round(1, 2.83)).toBe(2.8);
  expect(round(1, -2.83)).toBe(-2.8);
});

test('should return the number rounder to 2 decimals, rounding up when it has to', () => {
  expect(round(2, 2.836)).toBe(2.84);
  expect(round(2, -2.836)).toBe(-2.84);
});

test('should return the number rounder to 2 decimals, rounding down when it has to', () => {
  expect(round(2, 2.832)).toBe(2.83);
  expect(round(2, -2.832)).toBe(-2.83);
});

test('should return the number rounder to 3 decimals, rounding up when it has to', () => {
  expect(round(3, 2.8236)).toBe(2.824);
  expect(round(3, -2.8236)).toBe(-2.824);
});

test('should return the number rounder to 3 decimals, rounding down when it has to', () => {
  expect(round(3, 2.8234)).toBe(2.823);
  expect(round(3, -2.8234)).toBe(-2.823);
});

test('should return the number rounder to 3 decimals, rounding up when is in the middle', () => {
  expect(round(3, 2.8235)).toBe(2.824);
  expect(round(3, -2.8235)).toBe(-2.823);
});

test('should be a curried fn', () => {
  expect(round(3)(2.8234)).toBe(2.823);
  expect(round(3)(-2.8234)).toBe(-2.823);
});

test('should underflow round value to zero if the value passed is between `1e-7` and `-1e-7`', () => {
  expect(round(2, 0.00000000001)).toBe(0);

  expect(round(2, -0.00000000001)).toBe(0);
});

test('should coerce the given number before rounding it', () => {
  expect(round(1, '2.89')).toBe(2.9);
  expect(round(2, '2.929')).toBe(2.93);
});
