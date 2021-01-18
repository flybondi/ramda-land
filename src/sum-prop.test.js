import sumProp from './sum-prop';

test('should sum all numerical values present at the given property in the array', () => {
  expect(sumProp(2, 'amount', [{ amount: 10 }, { amount: 20 }, { amount: 12 }])).toBe(42);
});

test('should round total sum result to a `precision` number of decimal places', () => {
  expect(sumProp(1, 'amount', [{ amount: 10.444 }, { amount: 20.555 }, { amount: 12.623 }])).toBe(
    43.6
  );
});

test('should coerce all numerical values to numbers before summing', () => {
  expect(sumProp(2, 'amount', [{ amount: '10' }, { amount: '20' }, { amount: '12' }])).toBe(42);
});

test('should return `0` if the given property does not exist in elements in the array', () => {
  expect(sumProp(2, 'foo', [{ amount: 10 }, { amount: 20 }, { amount: 12 }])).toBe(0);
});

test('should ignore elements in the array that do not contain the given property', () => {
  expect(sumProp(2, 'amount', [{ amount: 30 }, { foo: 20 }, {}, { amount: 12 }])).toBe(42);
});

test('should ignore `null` elements in the array', () => {
  expect(sumProp(2, 'amount', [{ amount: 30 }, null, { amount: 12 }, null])).toBe(42);
});

test('should ignore `undefined` elements in the array', () => {
  expect(sumProp(2, 'amount', [{ amount: 30 }, undefined, { amount: 12 }, undefined])).toBe(42);
});

test('should overflow result to `Infinity` if sum goes above `MAX_SAFE_INTEGER`', () => {
  expect(sumProp(1, 'amount', [{ amount: Number.MAX_SAFE_INTEGER }, { amount: 1 }])).toBe(Infinity);
});

test('should underflow total value to zero if sum is betweem `1e-7` and `-1e-7`', () => {
  expect(sumProp(2, 'foo', [{ foo: 0.00000000001 }, { foo: 0.00000000002 }])).toBe(0);

  expect(sumProp(2, 'foo', [{ foo: -0.00000000001 }, { foo: -0.00000000002 }])).toBe(0);
});

test('should sum all negative numeric values present at the given property in the array', () => {
  expect(sumProp(2, 'amount', [{ amount: -10 }, { amount: -20 }, { amount: -12 }])).toBe(-42);
});

test('should sum all numeric values ( negatives and positives ) present at the given property in the array', () => {
  expect(sumProp(2, 'amount', [{ amount: -10 }, { amount: 20 }, { amount: -12 }])).toBe(-2);
});
