'use strict';
const { compose, curryN, prop, isNil } = require('ramda');
const boolify = require('yn');

/**
 * Shorthand function to extract a property from an object and convert it to a boolean.
 * Parsing of values to boolean follows `yn` logic.
 *
 * @example
 *  booleanProp('foo', { foo: 'y' }); // -> true
 *  booleanProp('foo', { foo: 0 }); // -> false
 *
 * @function
 * @see https://github.com/sindresorhus/yn#readme
 * @see https://ramdajs.com/docs/#prop
 * @param {String} propName Name of the property to extract.
 * @param {Object} obj Source of the extracted property
 * @returns {Boolean} The value of `obj` at `propName` as a boolean.
 */
const booleanProp = curryN(2, compose(boolify, prop));

/**
 * Shorthand function to extract a property from an object and convert it to a `Boolean`.
 * If boolean conversion would return `null` or `undefined`, it returns `defaultValue`, instead.
 *
 * @example
 *  booleanPropOr(true, 'foo', { bar: 42 }); // -> true
 *  booleanPropOr(false, 'foo', { foo: 'y' }); // -> true
 *
 * @function
 * @see https://github.com/sindresorhus/yn#readme
 * @see https://ramdajs.com/docs/#propOr
 * @param {*} defaultValue The value to return if `propName` does not exist in `obj`
 *  or is nil.
 *  @param {String} propName Name of the property to extract.
 * @param {Object} obj Source of the extracted property.
 * @returns {*} The value of `obj` at `propName` as a boolean or `defaultValue`.
 */
const booleanPropOr = curryN(3, (defaultValue, propName, obj) => {
  const value = booleanProp(propName, obj);
  return isNil(value) ? defaultValue : value;
});

module.exports = { booleanProp, booleanPropOr };
