/* eslint-disable ramda/prefer-ramda-boolean */
import applySpec from './apply-spec';

test('should works with empty object spec', () => {
  expect(applySpec({})(1)).toEqual({});
});

test('should works with empty array spec', () => {
  expect(applySpec([])(1)).toEqual([]);
});

test('should work with unary functions', () => {
  expect(applySpec({ v: x => x + 1, u: x => x - 1 })(1)).toEqual({ v: 2, u: 0 });
});

test('should work with binary functions', () => {
  expect(applySpec({ sum: (x, y) => x + y })(1, 2)).toEqual({ sum: 3 });
});

test('should work with nested specs', () => {
  expect(applySpec({ unnested: () => 0, nested: { sum: (x, y) => x + y } })(1, 2)).toEqual({
    unnested: 0,
    nested: { sum: 3 }
  });
});

test('should work with a spec defining a map key', () => {
  expect(applySpec({ map: x => x.a })({ a: 1 })).toEqual({ map: 1 });
});

test('should retain the highest arity', () => {
  const f = applySpec({ f1: (_x, _y) => true, f2: (_v, _w, _x, _y, _z) => true });
  expect(f).toHaveLength(5);
});

test('should return a curried function', () => {
  expect(applySpec({ sum: (x, y) => x + y })(1)(2)).toEqual({ sum: 3 });
});

test('should map over array specs', () => {
  expect(applySpec({ v: [x => x + 40, x => x ** 2] })(2)).toEqual({ v: [42, 4] });
});

test('should retain literal values on the spec', () => {
  expect(applySpec({ v: [42, 'foo'], u: 'bar' })(2)).toEqual({
    v: [42, 'foo'],
    u: 'bar'
  });
});

test('should retain `null` values on the spec', () => {
  expect(applySpec({ v: null, u: 'bar' })(2)).toEqual({ v: null, u: 'bar' });
  expect(applySpec([null, 'bar'])(2)).toEqual([null, 'bar']);
});

test('should support mixing literal values and spec functions', () => {
  expect(applySpec({ v: [x => x + 40, 'foo'], u: 'bar', w: x => x ** 2 })(2)).toEqual({
    v: [42, 'foo'],
    u: 'bar',
    w: 4
  });
});
