import truncate from './truncate';

test('should export a curried function of arity two', () => {
  expect(typeof truncate).toBe('function');
  expect(truncate).toHaveLength(2);
  expect(truncate(10, 'foobar')).toBe(truncate(10)('foobar'));
});

test('should truncate text adding an ellipsis at the end if it exceeds the given maximum length', () => {
  expect(truncate(13, 'well, excuuuuuse me, princess!')).toBe('well, excu...');
});

test('should truncate text adding an ellipsis at the end if it exceeds the given maximum length', () => {
  expect(truncate(13, 'well, excuuuuuse me, princess!')).toBe('well, excu...');
});

test('should not append an ellipsis if the maximum length is less than the ellipsis itself', () => {
  expect(truncate(1, 'well, excuuuuuse me, princess!')).toBe('w');
  expect(truncate(2, 'well, excuuuuuse me, princess!')).toBe('we');
  expect(truncate(3, 'well, excuuuuuse me, princess!')).toBe('wel');
});

test('should start appending an ellipsis if the given maximum length is exactly one over the ellipsis length', () => {
  expect(truncate(4, 'well, excuuuuuse me, princess!')).toBe('w...');
});

test('should return the text as is if it does not exceed the given maximum length', () => {
  expect(truncate(50, 'well, excuuuuuse me, princess!')).toBe('well, excuuuuuse me, princess!');
  expect(truncate(13, 'flybondi.com')).toBe('flybondi.com');
});

test('should coerce the given input to a string if it is not already one', () => {
  expect(truncate(6, 1000000)).toBe('100...');
});

test('should return `null` if the given text is `null`', () => {
  expect(truncate(10, null)).toBeNull();
});

test('should return `undefined` if the given text is `undefined`', () => {
  expect(truncate(10, undefined)).toBeUndefined();
});

test('should return an empty string if the given maximum length is zero', () => {
  expect(truncate(0, 'foobar')).toBe('');
});

test('should return an empty string if the given maximum length is less than zero', () => {
  expect(truncate(-1, 'foobar')).toBe('');
});

test('should return an empty string if the input is also an empty string', () => {
  expect(truncate(10, '')).toBe('');
});
