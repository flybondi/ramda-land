/* eslint-disable ramda/prefer-ramda-boolean */
import coalesce from './coalesce';

test('should export a curried function of arity 1', () => {
  expect(typeof coalesce).toBe('function');
  expect(coalesce).toHaveLength(1);
  expect(typeof coalesce()).toBe('function');
});

test('should return a function with the arity of the input function accepting the largest number of arguments', () => {
  expect(coalesce([a => a, (a, b) => a, (a, b, c) => a, (a, b) => b])).toHaveLength(3);
});

test('should return the first truthy value after evaluating all input functions', () => {
  expect(coalesce([({ foo }) => foo, ({ bar }) => bar, ({ baz }) => baz])({ baz: 42 })).toBe(42);
  expect(coalesce([() => false, () => null, () => '', () => 0, () => 42])()).toBe(42);
});

test('should return the last result if no truthy value was obtained as a result of evaluating all input functions', () => {
  expect(coalesce([({ foo }) => foo, ({ bar }) => bar])({ baz: 42 })).toBeUndefined();
  expect(coalesce([() => false, () => null, () => '', () => 0])()).toBe(0);
});
