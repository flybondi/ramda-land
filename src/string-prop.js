import {
  always,
  compose,
  identity,
  isEmpty,
  isNil,
  path,
  prop,
  unless,
  useWith,
  when,
  is
} from 'ramda';
import castArray from './cast-array';
import curryN from './curry-n';
import { isNilOrEmpty } from './is-nil-empty';

/**
 * @function
 * @private
 */
const stringUnlessNilOrEmpty = compose(
  unless(isNil, String),
  when(isEmpty, always(null)),
  when(is(Object), JSON.stringify)
);

/**
 * Shorthand function to extract a property from an object and convert it to a string.
 * If the property is `null` or `undefined` it will be returned as is; if the property is
 * an empty string (`''`), `null` will be returned.
 *
 * @function
 * @see https://ramdajs.com/docs/#prop
 * @param {string} propName Name of the property to extract.
 * @param {object} obj Source of the extracted property.
 * @returns {string} The value of `obj` at `propName` as a string or null string.
 */
export const stringProp = curryN(2, compose(stringUnlessNilOrEmpty, prop));

/**
 * Shorthand function to extract a nested property from an object and convert it to a string.
 * If the property is `null` or `undefined` it will be returned as is; if the property is
 * an empty string (`''`), `null` will be returned.
 *
 * @example
 *  stringPath(['life', 'count'], { life: { count: 1 }}); // '1'
 *
 * @function
 * @see https://ramdajs.com/docs/#path
 * @param {string|{String[]}} propPath Path to the property to extract. Also accepts a
 *  property name as a single string.
 * @param {object} obj Source of the extracted property.
 * @returns {string} The value of `obj` at `propPath` as a string or `null`.
 */
export const stringPath = curryN(
  2,
  compose(stringUnlessNilOrEmpty, useWith(path, [castArray, identity]))
);

/**
 * Extract a property from an object and convert it to a string. If property
 * is absent, `null`, `undefined` or empty, the default value will be returned instead.
 *
 * @function
 * @see https://ramdajs.com/docs/#propOr
 * @param {*} defaultValue The value to return if `propName` does not exist in `obj`
 *  or is nil.
 *  @param {string} propName Name of the property to extract.
 * @param {object} obj Source of the extracted property.
 * @returns {*} The value of `obj` at `propName` as a string or `defaultValue`.
 */
export const stringPropOr = curryN(3, function stringPropOr(defaultValue, propName, obj) {
  const value = stringProp(propName, obj);
  return isNilOrEmpty(value) ? defaultValue : value;
});

/**
 * Extract a nested property from an object and convert it to a string. If property
 * is absent, `null`, `undefined` or empty, the default value will be returned instead.
 *
 * @example
 *  stringPathOr('default', ['life', 'reason'], { foo: 'bar' }); // 'default'
 *
 * @function
 * @see https://ramdajs.com/docs/#pathOr
 * @param {*} defaultValue The value to return if `propPath` does not exist in `obj`
 *  or its value is nil or empty.
 *  @param {string|{String[]}} propPath Path to the property to extract. Also accepts a
 *  property name as a single string.
 * @param {object} obj Source of the extracted property.
 * @returns {*} The value of `obj` at `propName` as a string or `defaultValue`.
 */
export const stringPathOr = curryN(3, function stringPathOr(defaultValue, propPath, obj) {
  const value = stringPath(propPath, obj);
  return isNilOrEmpty(value) ? defaultValue : value;
});
