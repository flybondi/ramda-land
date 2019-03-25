'use strict';
const { compose, curryN, prop, propOr } = require('ramda');

/**
 * Shorthand function to extract a property from an object and convert it to a number.
 *
 * @function
 * @see https://ramdajs.com/docs/#prop
 * @param {String} propName Name of the property to extract.
 * @param {Object} obj Source of the extracted property
 * @returns {Number} The value of `obj` at `propName` as a number or `NaN`.
 */
const numberProp = curryN(
  2,
  compose(
    Number,
    prop
  )
);

/**
 * Extract a property from an object and convert it to a number. If property
 * is absent or nil, the default value will be returned instead.
 *
 * @function
 * @see https://ramdajs.com/docs/#propOr
 * @param {*} defaultValue The value to return if `propName` does not exist in `obj`
 *  or is nil.
 *  @param {String} propName Name of the property to extract.
 * @param {Object} obj Source of the extracted property.
 * @returns {*} The value of `obj` at `propName` as a number, `NaN` or `defaultValue`.
 */
const numberPropOr = curryN(
  3,
  compose(
    Number,
    propOr
  )
);

module.exports = { numberProp, numberPropOr };
