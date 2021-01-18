import capitalizeWords from './capitalize-words';

describe('the `capitalizeWords` function', () => {
  test('should Capitalize The Phrase `capiTalizE THE phrase`', () => {
    expect(capitalizeWords('capiTalizE THE phrase')).toEqual('Capitalize The Phrase');
  });

  test('should upper case all first letters but the first word', () => {
    expect(capitalizeWords('noctis Lucis Caelum').slice(1)).toBe('octis Lucis Caelum');
  });

  test('should return `null` if input is `null`', () => {
    expect(capitalizeWords(null)).toBe(null);
  });

  test('should return `undefined` if input is `undefined`', () => {
    expect(capitalizeWords(undefined)).toBe(undefined);
  });

  test('should return an empty string if input is ``', () => {
    expect(capitalizeWords('')).toBe('');
  });
});
