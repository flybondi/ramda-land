'use strict';
const joinFrom = require('./join-from');

test('should export a curried function of arity three', () => {
  expect(typeof joinFrom).toBe('function');
  expect(joinFrom).toHaveLength(3);
  expect(joinFrom('/')([x => x.foo])({ foo: 'bar' })).toBe(
    joinFrom('/', [x => x.foo], { foo: 'bar' })
  );
});

test('should join strings returned from the provided functions using the given separator', () => {
  expect(joinFrom('-', [x => x.foo, x => x.bar], { foo: 'life', bar: 42 })).toBe('life-42');
});

test('should not use the join separator if only one string retuning function is provided', () => {
  expect(joinFrom('-', [x => x.foo], { foo: 'life', bar: 42 })).toBe('life');
});

test('should filter out `null` values returned from the string returning functions', () => {
  expect(joinFrom('-', [x => x.foo, x => x.bar], { foo: null, bar: 42 })).toBe('42');
});

test('should filter out `undefined` values returned from the string returning functions', () => {
  expect(joinFrom('-', [x => x.foo, x => x.bar], { bar: 42 })).toBe('42');
});
