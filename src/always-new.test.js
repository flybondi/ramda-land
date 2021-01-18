import alwaysNew from './always-new';

test('should return a new instance of the given value every time it is called', () => {
  const alwaysNewArray = alwaysNew([]);
  expect(alwaysNewArray()).not.toBe(alwaysNewArray());
});
