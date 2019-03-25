'use strict';
const spreadProp = require('./spread-prop');

test('should be a curried function', () => {
  expect(spreadProp('prop', {})).toEqual({});
  expect(spreadProp('prop')({})).toEqual({});
});

test('should return object with spreaded prop', function() {
  expect(spreadProp('b', { a: 1, b: { c: 3, d: 4 } })).toEqual({
    a: 1,
    c: 3,
    d: 4
  });
});

test('should return object with identical structure as provided object if prop does not exist', () => {
  expect(spreadProp('z', { a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
});

test('should return object without prop if prop points to a non-object value', () => {
  expect(spreadProp('b', { a: 1, b: 2 })).toEqual({ a: 1 });
});
