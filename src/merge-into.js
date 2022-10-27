import {
  map,
  mergeRight,
  pick,
  lensProp,
  over,
  unless,
  propSatisfies,
  isNil,
  ifElse,
  is
} from 'ramda';
import castArray from './cast-array';
import curry from './curry';

/**
 * Given an object containing an array move selected properties outside the
 * array to each element on it.
 *
 * @example
 *  const o = { foo: 'bar', items: [{ id: 1 }, { id: 2 }] };
 *  mergeInto('foo', 'items');
 *  // -> { foo: 'bar', items: [{ id: 1, foo: 'bar' }, { id: 2, foo: 'bar' }] }
 *
 * @function
 * @param {string|{String[]}} propNames List of property names to merge
 *  into each element in the `arrayProp` (supports sending a single name).
 * @param {string} arrayPropName Name of the array property on `obj`.
 * @param {object} obj The object to apply the transformation to.
 * @returns {object} The object with `propNames` properties merged into elements
 *  of `arrayPropName` array.
 */
const mergeInto = curry((propNames, arrayPropName, obj) => {
  const outerProps = pick(castArray(propNames), obj);
  const mergeOuterProps = mergeRight(outerProps);
  return unless(
    propSatisfies(isNil, arrayPropName),
    over(lensProp(arrayPropName), ifElse(is(Array), map(mergeOuterProps), mergeOuterProps)),
    obj
  );
});

export default mergeInto;
