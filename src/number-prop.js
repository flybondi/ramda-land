'use strict';
const { compose, curryN, prop, either, unless, when, isNil, isEmpty, always } = require('ramda');

const numberUnlessNilOrEmpty = compose(
  unless(isNil, Number),
  when(isEmpty, always(NaN))
);

const isNilOrNan = either(isNil, isNaN);

/**
 * Shorthand function to extract a property from an object and convert it to a number.
 * Note that this behaves somewhat different to regular number parsing using `Number` constructor:
 * if the property is `null` or `undefined` it will be returned as is; if the property is
 * an empty string (`''`), `NaN` will be returned.
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
    numberUnlessNilOrEmpty,
    prop
  )
);

/**
 * Extract a property from an object and convert it to a number. If property
 * is absent, `null`, `undefined` or cannot be coerced into a `Number`, the default
 * value will be returned instead. Note that number coercing behaves somewhat different
 * than using the `Number` constructor: an empty string (`''`) or `null` would return the
 * `defaultValue` instead of `0`.
 *
 *
 * @function
 * @see https://ramdajs.com/docs/#propOr
 * @param {*} defaultValue The value to return if `propName` does not exist in `obj`
 *  or is nil.
 *  @param {String} propName Name of the property to extract.
 * @param {Object} obj Source of the extracted property.
 * @returns {*} The value of `obj` at `propName` as a number or `defaultValue`.
 */
const numberPropOr = curryN(3, function numberPropOr(defaultValue, propName, obj) {
  const value = numberProp(propName, obj);
  return isNilOrNan(value) ? defaultValue : value;
});

module.exports = { numberProp, numberPropOr };
