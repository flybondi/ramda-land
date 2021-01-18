import { isNil, either, isEmpty, complement } from 'ramda';

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
 * @return {boolean} `true` if `value` is either `null`, `undefined` or empty
 *  (such as `""` for strings, `{}` for objects and `[]` for arrays); `false`, otherwise.
 */
export const isNilOrEmpty = either(isEmpty, isNil);

/**
 * Checks whether the given `value` is neither `null`, `undefined` nor empty (definition of
 * "empty" is type dependant).
 *
 * @example
 *  isNotNilOrEmpty({}); // -> false
 *  isNotNilOrEmpty(null); // -> false
 *  isNotNilOrEmpty([]); // -> false
 *  isNotNilOrEmpty([42]); // -> true
 *
 * @function
 * @see https://ramdajs.com/docs/#isNil
 * @see https://ramdajs.com/docs/#isEmpty
 * @param {*} value The value to check
 * @return {boolean} `true` if `value` is neither `null`, `undefined` nor empty
 *  (such as `""` for strings, `{}` for objects and `[]` for arrays); `false`, otherwise.
 */
export const isNotNilOrEmpty = complement(isNilOrEmpty);

/**
 * Checks whether the given `value` is neither `null`, nor `undefined`.
 *
 * @example
 *  isNotNil({}); // -> true
 *  isNotNil(null); // -> false
 *  isNotNil([42]); // -> true
 *  isNotNil(undefined); // -> false
 *
 * @function
 * @see https://ramdajs.com/docs/#isNil
 * @param {*} value The value to check
 * @return {boolean} `true` if `value` is neither `null` nor `undefined`; `false`, otherwise.
 */
export const isNotNil = complement(isNil);

/**
 * Checks whether the given `value` is not empty or not (definition of
 * "empty" is type dependant).
 *
 * @example
 *  isNotEmpty({}); // -> false
 *  isNotEmpty(null); // -> true
 *  isNotEmpty(undefined); // -> true
 *  isNotEmpty([]); // -> false
 *  isNotEmpty([42]); // -> true
 *
 * @function
 * @see https://ramdajs.com/docs/#isEmpty
 * @param {*} value The value to check
 * @return {boolean} `true` if `value` is not empty (such as `""` for strings,
 *  `{}` for objects and `[]` for arrays); `false`, otherwise.
 */
export const isNotEmpty = complement(isEmpty);
