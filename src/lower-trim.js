import { compose, trim, toLower, unless, isNil } from 'ramda';

/**
 * Trims and transforms text to lower case. `null` and `undefined` values
 * are returned as is.
 *
 * @function
 * @param {string} value The string to trim and convert to lowercase.
 * @returns {string} The `value` after trimming and lowercasing.
 */
const lowerTrim = unless(isNil, compose(toLower, trim, String));

export default lowerTrim;
