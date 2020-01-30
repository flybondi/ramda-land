'use strict';
const { compose, prop } = require('ramda');
const curryN = require('./curry-n');
const castArray = require('./cast-array');
const compact = require('./compact');

/**
 * Shorthand function to extract a property from an object and cast its value to an array. If the
 * value is already an array, it will be returned as is. Note that this function ensures that the
 * returned value is always an `Array` - so `null` and `undefined` properties
 * will return `[null]` and `[undefined]` respectively. Use `compactProp` instead if you need all
 * falsey and empty values removed.
 *
 * @example
 *  arrayProp('foo', { foo: 'bar' }); // -> ['bar']
 *  arrayProp('foo', { foo: [1, 2, 3] }); // -> [1, 2, 3]
 *  arrayProp('foo', {}); // -> [undefined]
 *
 * @function
 * @see https://ramdajs.com/docs/#of
 * @see https://ramdajs.com/docs/#prop
 * @param {String} propName Name of the property to extract.
 * @param {Object} obj Source of the extracted property
 * @returns {Array.<*>} The value of `obj` at `propName` cast as an array.
 */
const arrayProp = curryN(2, compose(castArray, prop));

/**
 * Shorthand function to extract a property from an object and cast its value to an array,
 * removing all falsey and empty values from it. The values `false`, `null`, `0`, `""`,
 * `undefined`, and `NaN` are falsey. `[]` and `{}` are considered empty. If the value is
 * already an array, this function behaves like calling `compact` with that same value.
 * Note that this function ensures that the returned value is always an `Array` - so `null`
 * and `undefined` properties will both  return `[]` (an empty array).
 *
 * @example
 *  compactProp('foo', { foo: 'bar' }); // -> ['bar']
 *  compactProp('foo', { foo: [0, 1, 2, 3, null] }); // -> [1, 2, 3]
 *  compactProp('foo', {}); // -> []
 *  compactProp('foo', { foo: null }); // -> []
 *  compactProp('foo', { foo: {} }); // -> []
 *
 * @function
 * @see https://ramdajs.com/docs/#of
 * @see https://ramdajs.com/docs/#prop
 * @param {String} propName Name of the property to extract.
 * @param {Object} obj Source of the extracted property
 * @returns {Array.<*>} The value of `obj` at `propName` cast as an array with
 *  all falsey and empty values removed.
 */
const compactProp = curryN(2, compose(compact, arrayProp));

module.exports = { arrayProp, compactProp };
