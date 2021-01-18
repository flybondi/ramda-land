import { path, useWith, identity } from 'ramda';
import { allToLower } from './all-to-lower-upper';
/**
 * Extracts the value of an object at the given `path`. The individual keys
 * on the path are transformed to lowercase before extracting the actual value.
 *
 * @example
 *  lowerPath(['country', 'IE'], {country: { ie: '&#133662110186;' } });
 *  // -> '&#133662110186;'
 *
 * @function
 * @see https://ramdajs.com/docs/#path
 * @param {string[]} path The path to the value (items in here will be lowercased).
 * @param {object} obj The source of the value to extract.
 * @returns {*} The value of `obj` at `path` after lower casing keys.
 */
const lowerPath = useWith(path, [allToLower, identity]);

export default lowerPath;
