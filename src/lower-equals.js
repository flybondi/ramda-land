import { eqBy } from 'ramda';
import lowerTrim from './lower-trim';

/**
 * Compares two elements and returns `true` if they are the same after
 * transforming their stringified value to lower case and trimming spaces;
 * `false` otherwise.
 *
 * @function
 * @see https://ramdajs.com/docs/#eqBy
 * @param {*} first The first value to compare.
 * @param {*} second The second value to compare.
 * @returns {boolean} `true` if `first` and `second` are the same value
 *  after lower casing and trimming.
 */
const lowerEquals = eqBy(lowerTrim);

export default lowerEquals;
