import omitDeep from './omit-deep';

describe('omitDeep', () => {
  test('omits keys from an object', () => {
    const obj = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4
      }
    };
    expect(omitDeep(['b', 'e'], obj)).toEqual({ a: 1, c: { d: 3 } });
  });

  test('omits keys from an array of objects', () => {
    const arr = [
      { a: 1, b: 2, c: { d: 3, e: 4 } },
      { f: 5, g: 6, h: { i: 7, j: 8 } }
    ];
    expect(omitDeep(['b'], arr)).toEqual([
      { a: 1, c: { d: 3, e: 4 } },
      { f: 5, g: 6, h: { i: 7, j: 8 } }
    ]);
  });
});
