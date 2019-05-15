// @flow strict
'use strict';
const _curry3 = require('./utils/_curry3');
const lowerPath = require('./lower-path');

/**
 * Returns true if the specified object property at given path satisfies the given predicate; false otherwise.
 * The individual keys  on the path are transformed to lowercase before checking the actual value.
 *
 * @example
 *  lowerPathSatisfies(isNil, ['country', 'IE'], {country: { ie: '&#133662110186;' } });
 *  // -> false
 *
 * @function
 * @see https://ramdajs.com/docs/#pathSatisfies
 * @param {Function} pred The predicate to check the value.
 * @param {Array.<String>} path The path to the value (items in here will be lowercased).
 * @param {Object} obj The source of the value to extract.
 * @returns {Boolean} True if the object property at given path satisfies the given predicate.
 */
function lowerPathSatisfies(pred, propPath, obj) {
  return propPath.length > 0 && pred(lowerPath(propPath, obj));
}

module.exports = _curry3(lowerPathSatisfies);
