import { compose, curryN, prop, isNil, when, always } from 'ramda';
import yn from 'yn';

/**
 * `yn` wrapper that forces all `undefined` values to be `null` to accommodate the fact that
 * latest `yn` version treats unrecognized values as `undefined` instead of `null`. In order to keep
 * retro-compatibility we force those values to be `null`.
 *
 * @example
 *   boolify('y'); // -> true
 *   boolify('abomasum'); // -> null
 *   boolify('NO'); // -> false
 *
 * @private
 * @see https://github.com/sindresorhus/yn#readme
 * @param {*} value that should be converted.
 * @returns {boolean?}
 */
const boolify = compose(when(isNil, always(null)), yn);

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
 * @param {string} propName Name of the property to extract.
 * @param {object} obj Source of the extracted property
 * @returns {boolean} The value of `obj` at `propName` as a boolean.
 */
export const booleanProp = curryN(2, compose(boolify, prop));

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
 *  @param {string} propName Name of the property to extract.
 * @param {object} obj Source of the extracted property.
 * @returns {*} The value of `obj` at `propName` as a boolean or `defaultValue`.
 */
export const booleanPropOr = curryN(3, (defaultValue, propName, obj) => {
  const value = booleanProp(propName, obj);
  return isNil(value) ? defaultValue : value;
});
