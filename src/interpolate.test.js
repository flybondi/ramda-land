'use strict';
const interpolate = require('./interpolate');

test('should replace variables present in the `context` from the `template`', () => {
  expect(
    interpolate('I am selling these {description} {material} jackets!', {
      description: 'fine',
      material: 'leather'
    })
  ).toBe('I am selling these fine leather jackets!');
});

test('should replace all instances of variables present in the `template`', () => {
  expect(
    interpolate('I am selling these {description} {description} jackets!', {
      description: 'fine'
    })
  ).toBe('I am selling these fine fine jackets!');
});

test('should ignore all `null` or `undefined` values on the `context`', () => {
  expect(
    interpolate('I am selling these {description} {material} jackets!', {
      description: null,
      material: undefined
    })
  ).toBe('I am selling these {description} {material} jackets!');
});

test('should ignore all `context` values that are not present in the `template`', () => {
  expect(
    interpolate('I am selling these {description} {material} jackets!', {
      description: 'fine',
      material: 'leather',
      foo: 'bar',
      baz: 42
    })
  ).toBe('I am selling these fine leather jackets!');
});

test('should not replace values in the `template` that are not present in the `context`', () => {
  expect(
    interpolate('I am selling these {description} {material} jackets!', {
      description: 'fine'
    })
  ).toBe('I am selling these fine {material} jackets!');
});
