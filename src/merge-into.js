'use strict';
const { map, merge, pick, lensProp, over, unless, propSatisfies, isNil } = require('ramda');
const castArray = require('./cast-array');
const curry = require('./curry');

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
 * @param {String|Array.<String>} propNames List of property names to merge
 *  into each element in the `arrayProp` (supports sending a single name).
 * @param {String} arrayPropName Name of the array property on `obj`.
 * @param {Object} obj The object to apply the transformation to.
 * @returns {Object} The object with `propNames` properties merged into elements
 *  of `arrayPropName` array.
 */
const mergeInto = curry((propNames, arrayPropName, obj) => {
  const outerProps = pick(castArray(propNames), obj);
  return unless(
    propSatisfies(isNil, arrayPropName),
    over(lensProp(arrayPropName), map(merge(outerProps))),
    obj
  );
});

module.exports = mergeInto;
