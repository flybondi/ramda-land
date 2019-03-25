'use strict';
const { curryN, converge, merge, dissoc, propOr } = require('ramda');

/**
 * Spreads object under property onto provided object.
 *
 * @example
 *  spreadProp('b', { a: 1, b: { c: 3, d: 4 } }); // => { a: 1, c: 3, d: 4 };
 *
 * @function
 * @see https://char0n.github.io/ramda-adjunct/2.10.0/RA.html#.spreadProp
 * @param {String|Number} prop The property to spread
 * @param {Object} obj The provided object
 * @returns {Object} The result of the spread
 */
const spreadProp = curryN(2, converge(merge, [dissoc, propOr({})]));

module.exports = spreadProp;
