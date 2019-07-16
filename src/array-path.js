'use strict';
const { compose, path } = require('ramda');
const curryN = require('./curry-n');
const castArray = require('./cast-array');
const compact = require('./compact');

/**
 * Shorthand function to extract a property at a path from an object and cast its value to an array. If the
 * value is already an array, it will be returned as is. Note that this function ensures that the
 * returned value is always an `Array` - so `null` and `undefined` property values at `path`
 * will return `[null]` and `[undefined]` respectively. Use `compactPath` instead if you need all
 * falsey and empty values removed.
 *
 * @example
 *  arrayPath(['foo', 'bar'], { foo: { bar: 'baz' } }); // -> ['baz']
 *  arrayPath(['foo'], { foo: [1, 2, 3] }); // -> [1, 2, 3]
 *  arrayPath(['foo', 'bar'], { foo: {} }); // -> [undefined]
 *
 * @function
 * @see https://ramdajs.com/docs/#of
 * @see https://ramdajs.com/docs/#path
 * @param {Array.<String>} path Path to the value on `obj`
 * @param {Object} obj Source of the extracted property
 * @returns {Array.<*>} The value of `obj` at `path` cast as an array.
 */
const arrayPath = curryN(
  2,
  compose(
    castArray,
    path
  )
);

/**
 * Shorthand function to extract a property from an object at `path` and cast its value to an array,
 * removing all falsey and empty values from it. The values `false`, `null`, `0`, `""`,
 * `undefined`, and `NaN` are falsey. `[]` and `{}` are considered empty. If the value is
 * already an array, this function behaves like calling `compact` with that same value.
 * Note that this function ensures that the returned value is always an `Array` - so `null`
 * and `undefined` properties will both  return `[]` (an empty array).
 *
 * @example
 *  compactPath(['foo'. 'bar'], { foo: { bar: 'baz' } }); // -> ['baz']
 *  compactPath(['foo'], { foo: [0, 1, 2, 3, null] }); // -> [1, 2, 3]
 *  compactPath(['foo', 'bar'], {}); // -> []
 *  compactPath(['foo'], { foo: null }); // -> []
 *  compactPath(['foo', 'bar'], { foo: {} }); // -> []
 *
 * @function
 * @see https://ramdajs.com/docs/#of
 * @see https://ramdajs.com/docs/#path
 * @param {Array.<String>} path Path to the value on `obj`
 * @param {Object} obj Source of the extracted property
 * @returns {Array.<*>} The value of `obj` at `path` cast as an array with
 *  all falsey and empty values removed.
 */
const compactPath = curryN(
  2,
  compose(
    compact,
    arrayPath
  )
);

module.exports = { arrayPath, compactPath };
