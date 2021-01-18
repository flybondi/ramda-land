import escapeStringRegexp from './escape-regex';

test('should escape special characters', () => {
  expect(escapeStringRegexp('\\ ^ $ * + ? . ( ) | { } [ ]')).toEqual(
    '\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]'
  );
});

test('should escape `-` characters', () => {
  expect(escapeStringRegexp('foo - bar')).toEqual('foo \\- bar');
});
