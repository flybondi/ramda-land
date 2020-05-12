'use strict';
const curry = require('./curry');
const { __ } = require('ramda');

test('curries a single value', function () {
  const f = curry(function (a, b, c, d) {
    return (a + b * c) / d;
  }); // f(12, 3, 6, 2) == 15
  const g = f(12);
  expect(g(3, 6, 2)).toBe(15);
});

test('curries multiple values', function () {
  const f = curry(function (a, b, c, d) {
    return (a + b * c) / d;
  }); // f(12, 3, 6, 2) == 15
  const g = f(12, 3);
  expect(g(6, 2)).toBe(15);
  const h = f(12, 3, 6);
  expect(h(2)).toBe(15);
});

test('allows further currying of a curried function', function () {
  const f = curry(function (a, b, c, d) {
    return (a + b * c) / d;
  }); // f(12, 3, 6, 2) == 15
  const g = f(12);
  expect(g(3, 6, 2)).toBe(15);
  const h = g(3);
  expect(h(6, 2)).toBe(15);
  expect(g(3, 6)(2)).toBe(15);
});

test('properly reports the length of the curried function', function () {
  const f = curry(function (a, b, c, d) {
    return (a + b * c) / d;
  });
  expect(f).toHaveLength(4);
  const g = f(12);
  expect(g).toHaveLength(3);
  const h = g(3);
  expect(h).toHaveLength(2);
  expect(g(3, 6)).toHaveLength(1);
});

test('preserves context', function () {
  const ctx = { x: 10 };
  const f = function (a, b) {
    return a + b * this.x;
  };
  const g = curry(f);

  expect(g.call(ctx, 2, 4)).toBe(42);
  expect(g.call(ctx, 2).call(ctx, 4)).toBe(42);
});

test('supports R.__ placeholder', function () {
  const f = function (a, b, c) {
    return [a, b, c];
  };
  const g = curry(f);

  expect(g(1)(2)(3)).toEqual([1, 2, 3]);
  expect(g(1)(2, 3)).toEqual([1, 2, 3]);
  expect(g(1, 2)(3)).toEqual([1, 2, 3]);
  expect(g(1, 2, 3)).toEqual([1, 2, 3]);

  expect(g(__, 2, 3)(1)).toEqual([1, 2, 3]);
  expect(g(1, __, 3)(2)).toEqual([1, 2, 3]);
  expect(g(1, 2, __)(3)).toEqual([1, 2, 3]);

  expect(g(1, __, __)(2)(3)).toEqual([1, 2, 3]);
  expect(g(__, 2, __)(1)(3)).toEqual([1, 2, 3]);
  expect(g(__, __, 3)(1)(2)).toEqual([1, 2, 3]);

  expect(g(1, __, __)(2, 3)).toEqual([1, 2, 3]);
  expect(g(__, 2, __)(1, 3)).toEqual([1, 2, 3]);
  expect(g(__, __, 3)(1, 2)).toEqual([1, 2, 3]);

  expect(g(1, __, __)(__, 3)(2)).toEqual([1, 2, 3]);
  expect(g(__, 2, __)(__, 3)(1)).toEqual([1, 2, 3]);
  expect(g(__, __, 3)(__, 2)(1)).toEqual([1, 2, 3]);

  expect(g(__, __, __)(__, __)(__)(1, 2, 3)).toEqual([1, 2, 3]);
  expect(g(__, __, __)(1, __, __)(__, __)(2, __)(__)(3)).toEqual([1, 2, 3]);
});

test('supports @@functional/placeholder', function () {
  const f = function (a, b, c) {
    return [a, b, c];
  };
  const g = curry(f);
  const _ = { '@@functional/placeholder': true, x: Math.random() };

  expect(g(1)(2)(3)).toEqual([1, 2, 3]);
  expect(g(1)(2, 3)).toEqual([1, 2, 3]);
  expect(g(1, 2)(3)).toEqual([1, 2, 3]);
  expect(g(1, 2, 3)).toEqual([1, 2, 3]);

  expect(g(_, 2, 3)(1)).toEqual([1, 2, 3]);
  expect(g(1, _, 3)(2)).toEqual([1, 2, 3]);
  expect(g(1, 2, _)(3)).toEqual([1, 2, 3]);

  expect(g(1, _, _)(2)(3)).toEqual([1, 2, 3]);
  expect(g(_, 2, _)(1)(3)).toEqual([1, 2, 3]);
  expect(g(_, _, 3)(1)(2)).toEqual([1, 2, 3]);

  expect(g(1, _, _)(2, 3)).toEqual([1, 2, 3]);
  expect(g(_, 2, _)(1, 3)).toEqual([1, 2, 3]);
  expect(g(_, _, 3)(1, 2)).toEqual([1, 2, 3]);

  expect(g(1, _, _)(_, 3)(2)).toEqual([1, 2, 3]);
  expect(g(_, 2, _)(_, 3)(1)).toEqual([1, 2, 3]);
  expect(g(_, _, 3)(_, 2)(1)).toEqual([1, 2, 3]);

  expect(g(_, _, _)(_, _)(_)(1, 2, 3)).toEqual([1, 2, 3]);
  expect(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3)).toEqual([1, 2, 3]);
});

test('forwards extra arguments', function () {
  const f = function (a, b, c) {
    return Array.prototype.slice.call(arguments);
  };
  const g = curry(f);

  expect(g(1, 2, 3)).toEqual([1, 2, 3]);
  expect(g(1, 2, 3, 4)).toEqual([1, 2, 3, 4]);
  expect(g(1, 2)(3, 4)).toEqual([1, 2, 3, 4]);
  expect(g(1)(2, 3, 4)).toEqual([1, 2, 3, 4]);
  expect(g(1)(2)(3, 4)).toEqual([1, 2, 3, 4]);
});

it('retains original function name', function () {
  function f(a, b, c) {
    return [a, b, c];
  }
  var g = curry(f);

  // Verify that function name is correct and
  // not just equal
  expect(f.name).toBe('f');

  expect(g(1)(2).name).toBe(f.name);
  expect(g(1, 2).name).toBe(f.name);

  expect(g(__, 2, 3).name).toBe(f.name);
  expect(g(1, __, 3).name).toBe(f.name);
  expect(g(1, 2, __).name).toBe(f.name);

  expect(g(1, __, __)(2).name).toBe(f.name);
  expect(g(__, 2, __)(1).name).toBe(f.name);
  expect(g(__, __, 3)(1).name).toBe(f.name);

  expect(g(1, __, __)(__, 3).name).toBe(f.name);
  expect(g(__, 2, __)(__, 3).name).toBe(f.name);
  expect(g(__, __, 3)(__, 2).name).toBe(f.name);

  expect(g(__, __, __)(__, __)(__)(1, 2).name).toBe(f.name);
  expect(g(__, __, __)(1, __, __)(__, __)(2, __)(__).name).toBe(f.name);
});
