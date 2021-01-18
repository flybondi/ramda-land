import { complement, equals } from 'ramda';

/**
 * Returns false if its arguments are equivalent, true otherwise. Handles cyclical data structures.
 *
 * @example
 *   notEquals(1, 2) //=> true
 *   notEquals({ a: 1 }, { a: 1 }) //=> false
 * @function
 * @see https://ramdajs.com/docs/#complement
 * @see https://ramdajs.com/docs/#equals
 * @param {any} A The first object to compare
 * @param {any} B The second object to compare
 * @returns {boolean} The result of the compare
 */
const notEquals = complement(equals);

export default notEquals;
