import lowerEquals from './lower-equals';

test('should return `true` for two equal strings', () => {
  expect(lowerEquals('foo', 'foo')).toBe(true);
});

test('should return `true` for two strings that differ only it they letter casing', () => {
  expect(lowerEquals('fOO', 'Foo')).toBe(true);
});

test('should ignore starting and trailing whitespaces when comparing', () => {
  expect(lowerEquals('  fOO  ', 'Foo   ')).toBe(true);
});

test('should return `false` for two different strings', () => {
  expect(lowerEquals('bar', 'foo')).toBe(false);
});

test('should cast the provided values as strings before comparing', () => {
  expect(lowerEquals('42', 42)).toBe(true);
  expect(lowerEquals(42, '42')).toBe(true);
});

test('should return `true` for two strings that differ only it they letter casing', () => {
  expect(lowerEquals('fOO', 'Foo')).toBe(true);
});
