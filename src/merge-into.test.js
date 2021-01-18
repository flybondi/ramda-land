import mergeInto from './merge-into';

test('should be a curried function of arity three', () => {
  expect(mergeInto('foo')('bar')({ foo: 42, bar: [] })).toEqual(
    mergeInto('foo', 'bar', { foo: 42, bar: [] })
  );
  expect(mergeInto).toHaveLength(3);
});

test('should merge properties into each element of an array', () => {
  expect(mergeInto('foo', 'items', { foo: 'bar', items: [{ id: 1 }, { id: 2 }] })).toEqual({
    foo: 'bar',
    items: [
      { id: 1, foo: 'bar' },
      { id: 2, foo: 'bar' }
    ]
  });
});

test('should support merging multiple properties into an array', () => {
  expect(
    mergeInto(['foo', 'life'], 'items', { foo: 'bar', life: 42, items: [{ id: 1 }, { id: 2 }] })
  ).toEqual({
    foo: 'bar',
    life: 42,
    items: [
      { id: 1, foo: 'bar', life: 42 },
      { id: 2, foo: 'bar', life: 42 }
    ]
  });
});

test('should return given object as is if array property is `undefined`', () => {
  expect(mergeInto('foo', 'items', { foo: 'bar', items: undefined })).toEqual({
    foo: 'bar',
    items: undefined
  });
});

test('should return given object as is if array property is absent', () => {
  expect(mergeInto('foo', 'items', { foo: 'bar' })).toEqual({ foo: 'bar' });
});

test('should return given object as is if array property is `null`', () => {
  expect(mergeInto('foo', 'items', { foo: 'bar', items: null })).toEqual({
    foo: 'bar',
    items: null
  });
});

test('should return given object as is if property outside the array does not exist', () => {
  expect(mergeInto('life', 'items', { foo: 'bar', items: [{ id: 1 }, { id: 2 }] })).toEqual({
    foo: 'bar',
    items: [{ id: 1 }, { id: 2 }]
  });
});

test('should ignore missing properties outside the array when merging', () => {
  expect(
    mergeInto(['foo', 'life'], 'items', { foo: 'bar', items: [{ id: 1 }, { id: 2 }] })
  ).toEqual({
    foo: 'bar',
    items: [
      { id: 1, foo: 'bar' },
      { id: 2, foo: 'bar' }
    ]
  });
});

test('should behave like a simple merge when property to merge does not point to an array', () => {
  expect(mergeInto(['foo', 'life'], 'items', { foo: 'bar', items: { id: 1 } })).toEqual({
    foo: 'bar',
    items: { id: 1, foo: 'bar' }
  });
});
