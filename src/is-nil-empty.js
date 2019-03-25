'use strict';
const { isNil, either, isEmpty, complement } = require('ramda');

/**
 * Checks whether the given `value` is `null`, `undefined` or empty (definition of
 * "empty" is type dependant).
 *
 * @example
 *  isNilOrEmpty({}); // -> true
 *  isNilOrEmpty(null); // -> true
 *  isNilOrEmpty([]); // -> true
 *  isNilOrEmpty([42]); // -> false
 *
 * @function
 * @see https://ramdajs.com/docs/#isNil
 * @see https://ramdajs.com/docs/#isEmpty
 * @param {*} value The value to check
 * @return {Boolean} `true` if `value` is either `null`, `undefined` or empty
 *  (such as `""` for strings, `{}` for objects and `[]` for arrays); `false`, otherwise.
 */
const isNilOrEmpty = either(isEmpty, isNil);

module.exports = { isNilOrEmpty, isNotNilOrEmpty: complement(isNilOrEmpty) };
