import { flip, prop } from 'ramda';

/**
 * Returns the value of `obj` at the given `propName`.
 *
 * @example
 *   propOf({ name: 'Alexander' }, 'name') //=> 'Alexander'
 *   propOf({ name: 'Alexander' }, 'age') //=> undefined
 * @function
 * @see https://ramdajs.com/docs/#flip
 * @see https://ramdajs.com/docs/#prop
 * @param {object} obj The object to query
 * @param {string} propName The property name
 * @returns {*} The value at `obj[propName]`.
 */

const propOf = flip(prop);

export default propOf;
