import {
  always,
  compose,
  either,
  identity,
  isEmpty,
  isNil,
  path,
  prop,
  unless,
  useWith,
  when
} from 'ramda';
import castArray from './cast-array';
import curryN from './curry-n';

/**
 * @function
 * @private
 */
const numberUnlessNilOrEmpty = compose(unless(isNil, Number), when(isEmpty, always(NaN)));

/**
 * @function
 * @private
 */
const isNilOrNan = either(isNil, isNaN);

/**
 * Shorthand function to extract a property from an object and convert it to a number.
 * Note that this behaves somewhat different to regular number parsing using `Number` constructor:
 * if the property is `null` or `undefined` it will be returned as is; if the property is
 * an empty string (`''`), `NaN` will be returned.
 *
 * @function
 * @see https://ramdajs.com/docs/#prop
 * @param {string} propName Name of the property to extract.
 * @param {object} obj Source of the extracted property.
 * @returns {number} The value of `obj` at `propName` as a number or `NaN`.
 */
export const numberProp = curryN(2, compose(numberUnlessNilOrEmpty, prop));

/**
 * Shorthand function to extract a nested property from an object and convert it to a number.
 * Note that this behaves somewhat different to regular number parsing using `Number` constructor:
 * if the property is `null` or `undefined` it will be returned as is; if the property is
 * an empty string (`''`), `NaN` will be returned.
 *
 * @example
 *  numberPath(['life', 'meaning'], { life: { meaning: '42' }}); // 42
 *
 * @function
 * @see https://ramdajs.com/docs/#path
 * @param {string|{String[]}} propPath Path to the property to extract. Also accepts a
 *  property name as a single string.
 * @param {object} obj Source of the extracted property.
 * @returns {number} The value of `obj` at `propPath` as a number or `NaN`.
 */
export const numberPath = curryN(
  2,
  compose(numberUnlessNilOrEmpty, useWith(path, [castArray, identity]))
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
 *  @param {string} propName Name of the property to extract.
 * @param {object} obj Source of the extracted property.
 * @returns {*} The value of `obj` at `propName` as a number or `defaultValue`.
 */
export const numberPropOr = curryN(3, function numberPropOr(defaultValue, propName, obj) {
  const value = numberProp(propName, obj);
  return isNilOrNan(value) ? defaultValue : value;
});

/**
 * Extract a nested property from an object and convert it to a number. If property
 * is absent, `null`, `undefined` or cannot be coerced into a `Number`, the default
 * value will be returned instead. Note that number coercing behaves somewhat different
 * than using the `Number` constructor: an empty string (`''`) or `null` would return the
 * `defaultValue` instead of `0`.
 *
 * @example
 *  numberPathOr(42, ['life', 'meaning'], { foo: 'bar' }); // 42
 *
 * @function
 * @see https://ramdajs.com/docs/#pathOr
 * @param {*} defaultValue The value to return if `propPath` does not exist in `obj`
 *  or its value is nil or `NaN`.
 *  @param {string|{String[]}} propPath Path to the property to extract. Also accepts a
 *  property name as a single string.
 * @param {object} obj Source of the extracted property.
 * @returns {*} The value of `obj` at `propName` as a number or `defaultValue`.
 */
export const numberPathOr = curryN(3, function numberPathOr(defaultValue, propPath, obj) {
  const value = numberPath(propPath, obj);
  return isNilOrNan(value) ? defaultValue : value;
});
