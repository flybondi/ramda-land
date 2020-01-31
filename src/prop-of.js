'use strict';
const { flip, prop } = require('ramda');

/**
 * Returns the value of `obj` at the given `propName`.
 *
 * @example
 *   propOf({ name: 'Alexander' }, 'name') //=> 'Alexander'
 *   propOf({ name: 'Alexander' }, 'age') //=> undefined
 * @function
 * @see https://ramdajs.com/docs/#flip
 * @see https://ramdajs.com/docs/#prop
 * @param {Object} obj The object to query
 * @param {String} propName The property name
 * @returns {*} The value at `obj.p`.
 */

const propOf = flip(prop);

module.exports = propOf;
