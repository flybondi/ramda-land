'use strict';
const { complement, equals } = require('ramda');

/**
 * @function
 * Returns false if its arguments are equivalent, true otherwise. Handles cyclical data structures.
 * @example
 *   notEquals(1, 2) //=> true
 *   notEquals({ a: 1 }, { a: 1 }) //=> false
 *
 *   const a = {}; a.v = a;
 *   const b = {}; b.v = b;
 *   notEquals(a, b); //=> false
 *
 * @param {any} A
 * @param {any} B
 * @returns {Boolean}
 */
const notEquals = complement(equals);

module.exports = notEquals;
