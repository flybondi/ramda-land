'use strict';
const mergeSpec = require('./merge-spec');

test('should retain properties on the original object', () => {
  expect(mergeSpec({ bar: o => o.foo }, { foo: 'bar' })).toMatchObject({ foo: 'bar' });
});

test('should return properties generated from applying the given spec', () => {
  expect(mergeSpec({ bar: o => 'foo' + o.foo }, { foo: 'bar' })).toMatchObject({ bar: 'foobar' });
});

test('should return a curried function', () => {
  expect(mergeSpec({ life: o => o.x + o.y })({ x: 40, y: 2 })).toMatchObject({ life: 42 });
});

test('should merge properties from the original object and the generated spec', () => {
  expect(mergeSpec({ bar: o => 'foo' + o.foo }, { foo: 'bar' })).toEqual({
    bar: 'foobar',
    foo: 'bar'
  });
});

test('should keep properties from the generated spec if there are name conflicts on keys', () => {
  expect(mergeSpec({ bar: o => 'foo' + o.bar }, { bar: 'bar' })).toEqual({
    bar: 'foobar'
  });
});
